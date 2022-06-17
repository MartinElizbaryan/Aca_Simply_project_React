import { useState } from "react";
import { Typography, Box, Checkbox, FormControlLabel, Button, Link } from '@mui/material';
import { Logo } from '../Shared/Logo/Logo';
import { InputField } from "../Shared/InputField/InputField";
import { CustomLink } from "../Shared/CustomLink/CustomLink";
//import { signIn } from "./utils";
import { colors } from "../../constants/styles";
import useStyles from './styles';


export default function SignUp() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const classes = useStyles();

    return (
            <Box className={classes.totalBox}>
                <Box className={classes.centeral}>
                    <InputField account placeholder={"Name"} value={name} onChange={(e) => setName(e.target.value)} />
                    <InputField account placeholder={"Surname"} value={surname} onChange={(e) => setSurname(e.target.value)} />
                    <InputField email placeholder={"Your email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <InputField password placeholder={"Your password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputField confirmedPassword placeholder={"Confirm password"} value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} />
                </Box>
                <Box className={classes.finalBox}>
                    <FormControlLabel control={<Checkbox />} label="Remember me" style={{ color: colors.dark }} />
                    <Link href="#" underline="none">
                        {'Forgot your password?'}
                    </Link>
                </Box>
                <Box className={classes.centeral2}>
                    <Button variant="contained" color="success" /* onClick={()=>signIn(email, password)} */>
                        Create An Acount
                    </Button>
                </Box>
            </Box>
    );
}

