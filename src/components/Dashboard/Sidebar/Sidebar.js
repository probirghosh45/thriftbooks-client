import React from "react";
import { Link,useParams} from "react-router-dom";
import { FiEdit,FiFilePlus,FiBookOpen } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";



const Sidebar = () => {

  const {adminPanel} =useParams();

  return (
      <nav id="sidebar__style">
        <div className="sidebar__header">
            <h2>Thriftbooks</h2>
        </div>
        <ul className="list-unstyled list">
          <li>
            <Link to="/panel/manageBooks" ><FiBookOpen/> Manage Books</Link>
          </li>
          <li>
            <Link to="/panel/addBooks" ><FiFilePlus/> Add Books</Link>
          </li>
          <li>
            <Link to="/panel/editBooks"><FiEdit/> Edit Books</Link>
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
