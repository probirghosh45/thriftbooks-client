import React from 'react';
import { useParams } from 'react-router';
import AddBooks from '../ManageBooks/AddBooks';
import EditBooks from '../ManageBooks/EditBooks';
import ManageBooks from '../ManageBooks/ManageBooks';
import Sidebar from '../Sidebar/Sidebar';
import AdminNavbar from './AdminNavbar';

const Admin = () => {

    const {adminPanel} =useParams();

    return (
        <div className="wrapper">
            <Sidebar/>
            <div className="admin_navbar_content">
               <AdminNavbar/>
               {adminPanel==="addBooks" ? <AddBooks/>
               : adminPanel==="editBooks" ? <EditBooks/>
               : <ManageBooks/>
               }
            </div>
        </div>
    );
};

export default Admin;