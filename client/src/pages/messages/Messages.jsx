import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

function Messages() {
  const message = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ipsum modi vel consequatur ab rerum aspernatur sequi facere, dicta dolorem, quam ad error nostrum obcaecati rem minima eius. Similique, id?`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Hassan Ibrahim</td>
            <td>
              <Link to={"/messages/123"} className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 days ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Hassan Ibrahim</td>
            <td>
              <Link to={"/messages/123"} className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 days ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>Hassan Ibrahim</td>
            <td>
              <Link to={"/messages/123"} className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>Hassan Ibrahim</td>
            <td>
              <Link to={"/messages/123"} className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 days ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Messages;
