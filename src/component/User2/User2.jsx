import React, { use } from 'react';

const User2 = ({userPromise}) => {
    const users = use(userPromise);
    console.log("user2 data loading", users)
    return (
        <div>
            
        </div>
    );
};

export default User2;