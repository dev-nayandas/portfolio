import React from 'react';
import { Outlet } from 'react-router-dom';
import NabVar from '../Pages/Shared/NabVar/NabVar';

const Main = () => {
    return (
        <div>
            <NabVar></NabVar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;