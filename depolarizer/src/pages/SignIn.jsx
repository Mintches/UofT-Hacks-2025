import { Button, TextField } from "@mui/material"
import { useState } from 'react'

function SignIn({signInDone}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="h-12 tab-picker"/>
            <div className="pl-16 mt-10 pr-16">
                <TextField
                    style={{color: "#ffffff"}}
                    className="w-full"
                    label="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className="h-3"/>
                <TextField
                    style={{color: "#ffffff"}}
                    className="w-full"
                    type="password"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="pt-3 ml-auto">
                    <Button
                        variant="outline"
                        onClick={() => signInDone(null)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="info"
                        disabled={(username == "") || (password == "")}
                        onClick={() => signInDone(username)}
                    >
                        Sign In
                    </Button>
                </div>
            </div>
        </>
    )
}

export default SignIn