import { useState, useEffect } from 'react';
import logo from '../logo.svg';
import {
    Button,
    Typography
} from '@mui/material';

function TopBar({children}) {
    const signIn = () => {
        alert("Sign In (Placeholder)");
    }
    
    return (
        <div className="h-full w-full">
            <div className="absolute flex w-full flex-row">
                <Typography
                    className="flex-grow-0 flex"
                    style={{fontSize: "calc(20px + 4vmin)"}}
                >
                    Depolarizer
                </Typography>
                <Button
                    className="ml-auto right-0"
                    variant="contained"
                    onClick={signIn}
                >
                    Sign In
                </Button>
            </div>
            <children/>
        </div>
    );
  }
  
  export default TopBar;