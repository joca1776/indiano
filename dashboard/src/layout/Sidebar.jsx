import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getNav } from '../navigation/index';
import { BiLogOutCircle } from "react-icons/bi";

const Sidebar = ({showSidebar, setShowSidebar}) => {
    const { pathname } = useLocation();
    const [allNav, setAllNav] = useState([]);

    useEffect(() => {
        const navs = getNav('admin');
        setAllNav(navs);
    }, []);

    return (

        <div>
    {/* Overlay */}
    <div
        onClick={() => setShowSidebar(false)}
        style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            backgroundColor: showSidebar ? '#8cbce780' : 'transparent',
            top: 0,
            left: 0,
            zIndex: 10,
            visibility: showSidebar ? 'visible' : 'hidden',
            transition: 'visibility 0.2s ease-in-out'
        }}
    ></div>

    {/* Sidebar */}
    <div
        style={{
            width: '260px',
            position: 'fixed',
            backgroundColor: '#e6e7fb',
            zIndex: 50,
            top: 0,
            height: '100vh',
            boxShadow: '0 0 15px 0 rgba(34,41,47,0.05)',
            transition: 'left 0.3s ease-in-out',
            left: showSidebar ? '0' : '-260px',
        }}
    >
        {/* Logo */}
        <div
            style={{
                height: '70px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Link to="/" style={{ width: '180px', height: '50px' }}>
                <img
                    src="http://localhost:3000/images/logo.png"
                    alt="Logo"
                    style={{ width: '100%', height: '100%' }}
                />
            </Link>
        </div>

        {/* Navigation */}
        <div style={{ padding: '16px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {allNav.map((n, i) => (
                    <li key={i} style={{ marginBottom: '4px' }}>
                        <Link
                            to={n.path}
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '9px 12px',
                                borderRadius: '4px',
                                width: '100%',
                                fontWeight: 'bold',
                                color: pathname === n.path ? 'white' : '#030811',
                                backgroundColor: pathname === n.path ? '#2563eb' : 'transparent',
                                boxShadow: pathname === n.path ? '0px 4px 6px rgba(99, 102, 241, 0.5)' : 'none',
                                transition: 'all 0.3s ease-in-out'
                            }}
                        >
                            <span>{n.icon}</span>
                            <span>{n.title}</span>
                        </Link>
                    </li>
                ))}

                {/* Logout Button */}
                <li>
                    <button
                        style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '9px 12px',
                            borderRadius: '4px',
                            width: '100%',
                            fontWeight: 'bold',
                            color: '#030811',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease-in-out'
                        }}
                    >
                        <span><BiLogOutCircle /></span>
                        <span>Logout</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
    );
};

export default Sidebar;
