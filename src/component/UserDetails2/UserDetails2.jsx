import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const userInfo = use(userPromise)
    const {name, username} = userInfo;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>{username}</h3>
        </div>
    );
};

export default UserDetails2;