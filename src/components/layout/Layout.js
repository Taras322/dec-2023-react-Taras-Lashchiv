import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h3>Sub pages menu</h3>
            <ul>
                <li>
                    <Link to={'todos'}>user todos</Link>
                </li>
                <li>
                    <Link to={'albums'}>user albums</Link>
                </li>
                <li>
                    <Link to={'comments'}>user comments</Link>
                </li>
            </ul>
            <div>
                <h3>sub view</h3>
            <Outlet/>
            </div>
        </div>
    );
};

export default Layout;