import { useState, useEffect } from 'react';
import logo from '../logo.svg';
import {
    Button,
    Typography
} from '@mui/material';

function TopBar({ children }) {
    const signIn = () => {
        alert("Sign In (Placeholder)");
    }
    
    return (
        <div className="display-wrapper max-h-lvh w-full flex flex-col">
            <div className="h-5"/>
            <div className="pl-5 flex flex-row w-full pr-5">
                <div className="flex-row flex">
                    <Typography color="info" style={{fontSize: "calc(20px + 4vmin)"}}>De</Typography>
                    <Typography color="error" style={{fontSize: "calc(20px + 4vmin)"}}>polar</Typography>
                    <Typography color="info" style={{fontSize: "calc(20px + 4vmin)"}}>izer</Typography>
                </div>
                <div className="flex-grow"/>
                <Button
                    className="right-0 h-12"
                    variant="contained"
                    onClick={signIn}
                >
                    Sign In
                </Button>
            </div>
            <div className="flex flex-shrink flex-grow-0 overflow-scroll" style={{overflow: 'scroll', scrollbarWidth: 'none'}}>
                {children}
            </div>
        </div>
    );
  }
  
  export default TopBar;