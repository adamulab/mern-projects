import React from "react";
import { FaEnvelope } from "react-icons/fa";
import OrdersImage from "../../images/f-web-design.jpg";
import "./Orders.scss";

function Orders() {
  const currentUser = {
    id: 1,
    username: "Adamu",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img src={OrdersImage} alt="" />
            </td>
            <td>Video Editing</td>
            <td>98</td>
            <td>Musa Suleiman</td>
            <td>
              <FaEnvelope className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={OrdersImage} alt="" />
            </td>
            <td>Video Editing</td>
            <td>98</td>
            <td>Musa Suleiman</td>
            <td>
              <FaEnvelope className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={OrdersImage} alt="" />
            </td>
            <td>Video Editing</td>
            <td>98</td>
            <td>Musa Suleiman</td>
            <td>
              <FaEnvelope className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={OrdersImage} alt="" />
            </td>
            <td>Video Editing</td>
            <td>98</td>
            <td>Musa Suleiman</td>
            <td>
              <FaEnvelope className="icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={OrdersImage} alt="" />
            </td>
            <td>Video Editing</td>
            <td>98</td>
            <td>Musa Suleiman</td>
            <td>
              <FaEnvelope className="icon" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Orders;
