import React from 'react';
import employee from "../../../Icon/employee.jpg"
import admin from "../../../Icon/admin.jpg"
import manager from "../../../Icon/manager.jpg"
import user from "../../../Icon/user.png"
import RegisterBox from '../../../Components/DahboardComponents/AuthComponents/RegisterBox';

const Register = () => {
    return (
        <div>
            <h3 className='text-center text-2xl my-8'>Continue as ...</h3>
            <div className='w-[70vw] mx-auto flex flex-wrap '>
                <RegisterBox type="user" img={employee} ><h3>User</h3></RegisterBox>
                <RegisterBox type="employee" img={admin} ><h3>Employee</h3></RegisterBox>
                <RegisterBox type="manager" img={manager} ><h3>Manager</h3></RegisterBox>
                <RegisterBox type="admin" img={user} ><h3>Admin</h3></RegisterBox>
            </div>
        </div>
    );
};

export default Register;