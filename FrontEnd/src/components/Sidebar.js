import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCog, FaEnvelope, FaCalendarAlt, FaStar, FaTachometerAlt } from 'react-icons/fa';
import { borderRight } from '@mui/system';

const Sidebar = () => {
    const linkStyle = {
        base: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: '14px',
            margin: '10px 0',
            transition: 'color 0.2s ease',
            //boxShadow: '0 0 0px 0 rgba(0, 0, 0, 0)',
        },
        inactive: {
            color: '#4b5563', // Gray color for inactive links
        },
        active: {
            padding:'10px 0px',
            color: '#a855f7', // Blue color for active links
            fontWeight: 'bold',
            backgroundColor: '#ffffff',
            borderTopLeftRadius: '15px',
            borderBottomLeftRadius: '15px',
        },
    };
    return (
        <div className="d-flex flex-column bg-light vh-100  " style={{ width: '110px', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
            <nav className="flex-column gap-3 " style={{ paddingLeft: '30px' }}>
            <NavLink
                    to="/dashboard"
                    className={
                        `d-flex mt-3 flex-column align-items-center text-decoration-none pl-3` }
                    style={({ isActive }) =>
                        isActive
                            ? { ...linkStyle.base, ...linkStyle.active }
                            : { ...linkStyle.base, ...linkStyle.inactive }
                    }
                >
                    <FaTachometerAlt size={24} />
                    <span style={{ marginTop: '5px' }}>Dashboard</span>
                </NavLink>
                <NavLink
                    to="/inbox"
                    className={
                        `d-flex mt-3 flex-column align-items-center text-decoration-none` }
                    style={({ isActive }) =>
                        isActive
                            ? { ...linkStyle.base, ...linkStyle.active }
                            : { ...linkStyle.base, ...linkStyle.inactive }
                    }
                >
                    <FaEnvelope size={24} />
                    <span style={{ marginTop: '5px' }}>Inbox</span>
                </NavLink>
                <NavLink
                    to="/schedule"
                    className={
                        `d-flex mt-3 flex-column align-items-center text-decoration-none` }
                    style={({ isActive }) =>
                        isActive
                            ? { ...linkStyle.base, ...linkStyle.active }
                            : { ...linkStyle.base, ...linkStyle.inactive }
                    }
                >
                    <FaCalendarAlt size={24} />
                    <span style={{ marginTop: '5px' }}>Schedule</span>
                </NavLink>
                <NavLink
                    to="/reviews"
                    className={
                        `d-flex mt-3 flex-column align-items-center text-decoration-none` }
                    style={({ isActive }) =>
                        isActive
                            ? { ...linkStyle.base, ...linkStyle.active }
                            : { ...linkStyle.base, ...linkStyle.inactive }
                    }
                >
                    <FaStar size={24} />
                    <span style={{ marginTop: '5px' }}>Reviews</span>
                </NavLink>
                <NavLink
                    to="/settings"
                    className={
                        `d-flex mt-3 flex-column align-items-center text-decoration-none` }
                    style={({ isActive }) =>
                        isActive
                            ? { ...linkStyle.base, ...linkStyle.active }
                            : { ...linkStyle.base, ...linkStyle.inactive }
                    }
                >
                    <FaCog size={24} />
                    <span style={{ marginTop: '5px' }}>Settings</span>
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;
