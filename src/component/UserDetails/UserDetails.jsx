import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            <h3>{details.name}</h3>
        </div>
    );
};

export default UserDetails;