
import React from "react";
import { Link} from "react-router-dom";
import { FiEdit,FiFilePlus,FiBookOpen } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";



const Sidebar = () => {

  return (
      <nav id="sidebar__style">
        <div className="sidebar__header">
            <h2>Thriftbooks</h2>
        </div>
        <ul className="list-unstyled list">
          <li>
            <Link to="/panel/manageBook" ><FiBookOpen/> Manage Books</Link>
          </li>
          <li>
            <Link to="/panel/addBook" ><FiFilePlus/> Add Books</Link>
          </li>
          <li>
            <Link to="/panel/editBook"><FiEdit/> Edit Books</Link>
          </li>
        </ul>
        <ul className="list-unstyled CTAs">
            <li>
                <Link className="sidebar__home" to="/" >
                  <AiFillHome/> Home
                </Link>
            </li>
        </ul>
      </nav>
  );
};

export default Sidebar;