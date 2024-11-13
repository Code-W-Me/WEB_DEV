import React, { useEffect, useState } from "react";
import axios from "../axios"; // Make sure this file exists as we discussed

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/api/holdings")
      .then((response) => {
        setHoldings(response.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load holdings");
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Holdings</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {holdings.length > 0 ? (
        <ul>
          {holdings.map((item, index) => (
            <li key={index}>
              {item.name} — {item.quantity} shares
            </li>
          ))}
        </ul>
      ) : (
        <p>No holdings to display.</p>
      )}
    </div>
  );
};

export default Holdings;
