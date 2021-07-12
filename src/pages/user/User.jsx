import './user.css';
import React from 'react'
import { Avatar, Button } from '@material-ui/core';

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
         <h1 className="userTitle">Edit User</h1>
         <Button className="userAddButton"> Create</Button>
         </div>
         <div className="userContainer">
             <div className="userShow">
<div className="userShowTop">
    <Avatar src="https://i.pinimg.com/564x/38/3b/f0/383bf0ea0baa4beb7e42a74ceadd8ebd.jpg"/>
</div>
             </div>
             <div className="userUpdate">

             </div>
         </div>
        </div>
    )
}
