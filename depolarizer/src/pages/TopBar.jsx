import { Button, Typography } from "@mui/material"

function TopBar({ children }) {
    const signIn = () => {
        alert("Sign In (Placeholder)");
    }
    
    return (
        <div className="h-full w-full">
            <div className="mt-30 ml-30 flex w-full flex-row">
                <Typography color="info" style={{fontSize: "calc(20px + 4vmin)"}}>De</Typography>
                <Typography color="error" style={{fontSize: "calc(20px + 4vmin)"}}>polar</Typography>
                <Typography color="info" style={{fontSize: "calc(20px + 4vmin)"}}>izer</Typography>
                <Button
                    className="ml-auto right-0 h-12"
                    variant="contained"
                    onClick={signIn}
                >
                    Sign In
                </Button>
            </div>
            {children}
        </div>
    );
  }
  
  export default TopBar;