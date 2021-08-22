import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AdminNavbar from './AdminNavbar';

const Admin = () => {
    return (
        <div className="wrapper">
            <Sidebar/>
            <div className="admin_navbar_content">
               <AdminNavbar/>
            </div>
        </div>
    );
};

export default Admin;