// components/SubscriptionForm.js
import React, { useState } from "react";

const SubscriptionForm = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [renewalDate, setRenewalDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, cost: Number(cost), renewalDate });
        setName("");
        setCost("");
        setRenewalDate("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Subscription</h2>
            <input type="text" placeholder="Subscription Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Cost" value={cost} onChange={(e) => setCost(e.target.value)} required />
            <input type="date" value={renewalDate} onChange={(e) => setRenewalDate(e.target.value)} required />
            <button type="submit">Add Subscription</button>
        </form>
    );
};

export default SubscriptionForm;
