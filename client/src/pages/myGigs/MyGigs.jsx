import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import GigImage from "../../images/f-video-editing.jpg";
import "./MyGigs.scss";

function MyGigs() {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to={"/add"} className="link button">
            Add New Gig
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img src={GigImage} alt="" />
            </td>
            <td>Video Editing</td>
            <td>98</td>
            <td>23</td>
            <td>
              <FaTrash className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={GigImage} alt="" />
            </td>
            <td>Video Editing</td>
            <td>98</td>
            <td>23</td>
            <td>
              <FaTrash className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={GigImage} alt="" />
            </td>
            <td>Video Editing</td>
            <td>98</td>
            <td>23</td>
            <td>
              <FaTrash className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={GigImage} alt="" />
            </td>
            <td>Video Editing</td>
            <td>98</td>
            <td>23</td>
            <td>
              <FaTrash className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={GigImage} alt="" />
            </td>
            <td>Video Editing</td>
            <td>98</td>
            <td>23</td>
            <td>
              <FaTrash className="icon" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
