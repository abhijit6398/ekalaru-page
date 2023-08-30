import React from 'react';
import { Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="topBarLeft">
                    
                    <div className="logoWrapper">
                        <img
                            className="logoMain"
                            src="/assets/Ekaralu.png"
                            alt={'Logo'}
                        />
                    </div>
                </div>
                <div className="topBarRight">
                    <div className="connectBtn">
                        <Typography className='menuIcon'>Why you should List with us? </Typography>
                        <Button variant='contained' color='success' className='listBtn'>List your Agriculture / Farm Land</Button>
                    </div>
                    <div className="menuButton">
                        <Typography className='menuIcon'>Login</Typography>
                    </div>
                    <div className="menuButton">
                        <Typography className='menuIcon'>Signup</Typography>
                    </div>
                    <div className="menuButton">
                        <MenuIcon fontSize='small' />
                        <Typography className='menuIcon'>Menu</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
