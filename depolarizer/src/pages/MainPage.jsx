import { useState, useEffect } from 'react';
import logo from '../logo.svg';
import {
    Button,
    Typography
} from '@mui/material';

function MainPage() {
    return (
        <div className="flex flex-col main-page w-full h-full items-center justify-center pt-24">
            <div className="flex flex-row">
                <Typography color="info" style={{fontSize: "60px"}}>
                    United
                </Typography>
                <div className="w-5"/>
                <Typography color="white" className="ml-3 mr-3" style={{fontSize: "60px"}}>
                {"•   We   •"}
                </Typography>
                <div className="w-5"/>
                <Typography color="error" style={{fontSize: "60px"}}>
                    Stand
                </Typography>
            </div>
            <div className="flex flex-row">
                <Typography color="error" style={{fontSize: "60px"}}>
                    Divided
                </Typography>
                <div className="w-5"/>
                <Typography color="white" className="ml-3 mr-3" style={{fontSize: "60px"}}>
                {" •   We   •"}
                </Typography>
                <div className="w-5"/>
                <Typography color="info" style={{fontSize: "60px"}}>
                    Fall
                </Typography>
            </div>
        </div>
    );
  }
  
  export default MainPage;