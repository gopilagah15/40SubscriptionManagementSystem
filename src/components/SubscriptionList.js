// components/SubscriptionList.js
import React from "react";
import SubscriptionItem from "./SubscriptionItem";

const SubscriptionList = ({ subscriptions }) => {
    return (
        <div>
            <h2>Your Subscriptions</h2>
            {subscriptions.map(sub => (
                <SubscriptionItem key={sub.id} subscription={sub} />
            ))}
        </div>
    );
};

export default SubscriptionList;
