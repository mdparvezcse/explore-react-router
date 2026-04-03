import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const usersData = useLoaderData();
    console.log(usersData)
    return (
        <div>
            <h3>this is user</h3>
            {
                usersData.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Users;