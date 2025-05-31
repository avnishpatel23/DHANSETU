import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = () => {
    setLoading(true);
    setError(null);
    axios
      .get("http://localhost:3002/allOrders")
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch orders");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="orders">
        <p>Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orders">
        <p>{error}</p>
        <button className="btn" onClick={fetchOrders}>
          Try again
        </button>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="orders" aria-live="polite">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <a href="/" className="btn">
            Get started
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h2>Your Orders</h2>
      <table
        className="orders-table"
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">Mode</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order._id}
              className={
                order.mode.toLowerCase() === "buy"
                  ? "buy-row"
                  : order.mode.toLowerCase() === "sell"
                  ? "sell-row"
                  : ""
              }
            >
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
              <td>{order.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
