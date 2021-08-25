import React,{useState} from 'react';
import { useParams } from 'react-router';
import AddBooks from '../ManageBooks/AddBooks';
import EditBooks from '../ManageBooks/EditBooks';
import ManageBooks from '../ManageBooks/ManageBooks';
import Sidebar from '../Sidebar/Sidebar';
import AdminNavbar from './AdminNavbar';

const Admin = () => {

    const {adminPanel} =useParams();
    const [editBook,setEditBook]=useState({})

    return (
        <div className="wrapper">
            <Sidebar/>
            <div className="admin_navbar_content">
               <AdminNavbar/>
               {adminPanel==="addBook" ? <AddBooks/>
               : adminPanel==="editBook" ? <EditBooks editBook={editBook} setEditBook={setEditBook} />
               : <ManageBooks setEditBook={setEditBook}/>
               }
            </div>
        </div>
    );
};

export default Admin;