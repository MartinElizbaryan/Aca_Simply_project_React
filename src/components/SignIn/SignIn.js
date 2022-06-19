import {useState} from "react";
import { Box, Checkbox, FormControlLabel, Button, Link } from '@mui/material';
import { InputField } from "../Shared/InputField/InputField";
import { signIn } from "./utils";
import { colors } from "../../constants/styles";
import useStyles from './styles';


export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const classes = useStyles();

    return (
            <Box className={classes.totalBox}>
                <Box className={classes.centeral}>
                    <InputField account={true} placeholder={"Your email"} value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <InputField password={true} placeholder={"Your password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Box>
                <Box className={classes.finalBox}>
                    <FormControlLabel control={<Checkbox />} label="Remember me" style={{ color: colors.dark }} />
                    <Link href="#" underline="none">
                        {'Forgot your password?'}
                    </Link>
                </Box>
                <Box className={classes.centeral2}>
                    <Button variant="contained" color="success" onClick={()=>signIn({email, password})}>
                        Log in
                    </Button>
                </Box>
        </Box>
    );
}

