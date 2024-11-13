// components/RenewalReminder.js
import React from "react";

const RenewalReminder = ({ subscriptions }) => {
    const today = new Date();
    const upcomingRenewals = subscriptions.filter(sub => {
        const renewalDate = new Date(sub.renewalDate);
        const diffDays = (renewalDate - today) / (1000 * 60 * 60 * 24);
        return diffDays >= 0 && diffDays <= 7;
    });

    return (
        <div>
            <h2>Upcoming Renewals</h2>
            {upcomingRenewals.length > 0 ? (
                upcomingRenewals.map(sub => (
                    <p key={sub.id}>{sub.name} is due for renewal on {new Date(sub.renewalDate).toLocaleDateString()}</p>
                ))
            ) : (
                <p>No renewals in the next 7 days.</p>
            )}
        </div>
    );
};

export default RenewalReminder;
