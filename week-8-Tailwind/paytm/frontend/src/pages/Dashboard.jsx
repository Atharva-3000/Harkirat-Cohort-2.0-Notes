import React, { useState, useEffect } from 'react';
import { AppBar } from '../components/AppBar';
import { Balance } from '../components/Balance';
import { Users } from '../components/Users';
import axios from 'axios';

export const Dashboard = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        });
        // Truncate balance value to two decimal places
        const truncatedBalance = parseFloat(response.data.balance).toFixed(2);
        setBalance(truncatedBalance);
      } catch (error) {
        console.error("Error fetching balance:", error);
        // Handle error fetching balance
      }
    };

    fetchBalance();
  }, []);

  return (
    <div>
      <AppBar />
      <div className="m-8">
        {balance !== null ? (
          <Balance value={balance} />
        ) : (
          <p>Loading balance...</p>
        )}
        <Users />
      </div>
    </div>
  );
};
