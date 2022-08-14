import react from 'react';
import Userdetails from '../components/Userdetails';
import {UserHeaders}    from '../components/UserHeader';

const User=()=>{
    return(
        <div>
           <UserHeaders />
          <Userdetails />
        </div>
    )
}
export default User;