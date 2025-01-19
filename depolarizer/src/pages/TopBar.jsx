import { Button, Typography } from "@mui/material"
import { useState } from "react"
import SignIn from "./SignIn"

function TopBar({ children }) {
    const [signInOpen, setSignInOpen] = useState(false);
    const [username, setUsername] = useState(null);
    
    return (
        <div className="display-wrapper max-h-lvh w-full flex flex-col">
            <div className="topbar h-5"/>
            <div className="topbar pl-5 flex flex-row w-full pr-5">
                <div className="flex-row flex">
                    <Typography color="info" style={{fontSize: "calc(20px + 4vmin)"}}>De</Typography>
                    <Typography color="error" style={{fontSize: "calc(20px + 4vmin)"}}>polar</Typography>
                    <Typography color="info" style={{fontSize: "calc(20px + 4vmin)"}}>izer</Typography>
                </div>
                <div className="flex-grow"/>
                {!signInOpen &&
                <div className="flex flex-row">
                    {(username != null) && <div className="pt-2 pr-5">
                        <Typography style={{fontSize: "20px"}} color="primary">
                            {username}
                        </Typography>
                    </div>}
                    {(username == null) && <Button
                        className="right-0 h-12"
                        variant="contained"
                        onClick={() => setSignInOpen(true)}
                    >
                        Sign In
                    </Button>}
                    {(username != null) && <Button
                        className="right-0 h-12"
                        variant="contained"
                        color="error"
                        onClick={() => setUsername(null)}
                    >
                        Sign Out
                    </Button>}
                </div>}
            </div>
            {!signInOpen && children}
            {signInOpen && <SignIn signInDone={(v) => {
                setUsername(v);
                setSignInOpen(false);
            }}/>}
        </div>
    );
  }
  
  export default TopBar;