import Navbar from './Navbar';
import {Outlet} from "react-router-dom";
import React from 'react';

export default function Layout() {
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}