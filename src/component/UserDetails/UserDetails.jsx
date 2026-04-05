import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {
    const {userid} = useParams();
    const details = useLoaderData();
    const navigate = useNavigate();
    console.log(userid)
    return (
        <div>
            <h3>{details.name}</h3>
            <button onClick={() => navigate(-1)}>Go back</button>
            <p>{userid}</p>
        </div>
    );
};

export default UserDetails;