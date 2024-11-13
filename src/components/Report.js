// components/Report.js
import React from "react";

const Report = ({ subscriptions }) => {
    const totalSpending = subscriptions.reduce((acc, sub) => acc + sub.cost, 0);

    return (
        <div>
            <h2>Total Spending</h2>
            <p>Total Monthly Spending: ${totalSpending}</p>
        </div>
    );
};

export default Report;
