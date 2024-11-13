// App.js
import React, { useState } from "react";
import SubscriptionForm from "./components/SubscriptionForm";
import SubscriptionList from "./components/SubscriptionList";
import RenewalReminder from "./components/RenewalReminder"; 
import Report from "./components/Report";


function App() {
    const data = [
        { id: 1, name: "Netflix", cost: 15, renewalDate: "2024-12-01" },
        { id: 2, name: "Spotify", cost: 10, renewalDate: "2024-11-20" },
        { id: 3, name: "Amazon Prime", cost: 12, renewalDate: "2024-11-30" },
    ];
    const [subscriptions, setSubscriptions] = useState(data);

    const addSubscription = (subscription) => {
        setSubscriptions([...subscriptions, { ...subscription, id: subscriptions.length + 1 }]);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Subscription Management System</h1>
            <SubscriptionForm onAdd={addSubscription} />
            <SubscriptionList subscriptions={subscriptions} />
            <RenewalReminder subscriptions={subscriptions} />
            <Report subscriptions={subscriptions} />
        </div>
    );
}

export default App;
