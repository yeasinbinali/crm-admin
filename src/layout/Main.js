import React from 'react';
import { Outlet } from 'react-router';
import ResponsiveDrawer from '../pages/shared/ResponsiveDrawer/ResponsiveDrawer';

const Main = () => {
    return (
        <div>
            <ResponsiveDrawer></ResponsiveDrawer>
        </div>
    );
};

export default Main;