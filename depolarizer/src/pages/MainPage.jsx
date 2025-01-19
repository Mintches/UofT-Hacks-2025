import { useState, useEffect } from 'react';
import logo from '../logo.svg';
import {
    Button,
    Typography
} from '@mui/material';

function MainPage() {
    const signIn = () => {
        alert("Sign In (Placeholder");
    }
    
    return (
        <div className="main-page w-full">
            <div className="flex flex-row w-full">
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
        </div>
    );
  }
  
  export default MainPage;