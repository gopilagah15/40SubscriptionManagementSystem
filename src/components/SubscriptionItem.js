// components/SubscriptionItem.js
import React from "react";

const SubscriptionItem = ({ subscription }) => {
    const { name, cost, renewalDate } = subscription;
    return (
        <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
            <h3>{name}</h3>
            <p>Cost: ${cost}</p>
            <p>Renewal Date: {new Date(renewalDate).toLocaleDateString()}</p>
        </div>
    );
};

export default SubscriptionItem;
