import {useState} from "react";
import { Typography, Box, Checkbox, FormControlLabel, Button, Link } from '@mui/material';
import { Logo } from '../Shared/Logo/Logo';
import { InputField } from "../Shared/InputField/InputField";
import { CustomLink } from "../Shared/CustomLink/CustomLink";
import { signIn } from "./utils";
import { colors } from "../../constants/styles";
import useStyles from './styles';


export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const classes = useStyles();

    return (
        <Box className={classes.flexible} >
            <Box className={classes.bgColor}>
                <Logo black={true}/>
            </Box>
            <Typography className={classes.text1}>Post what you've lost and find it. </Typography>
            <Box className={classes.totalBox}>
                <Box className={classes.spacing}>
                    <Box className={classes.button}>
                    <CustomLink url="/signup" title="Sign Up" color="black" />
                    </Box>
                    <Box className={classes.button}>
                    <CustomLink url="/signin" title="Sign In" color="black"/>
                    </Box>
                </Box>
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
                    <Button variant="contained" color="success" onClick={()=>signIn(email, password)}>
                        Log in
                    </Button>
                </Box>
            </Box>
            <Typography className={classes.policyText}>By signing up you agree to our Terms of Service and Privacy Policy</Typography>
        </Box>
    );
}

