import React from "react";
import { Typography, Box, Checkbox, FormControlLabel, Button, Link } from '@mui/material';
import { Logo } from '../../components/Shared/Logo/Logo';
import { colors } from "../../constants/styles";
import { InputField } from "../Shared/InputField/InputField";
import useStyles from './styles'


export default function SignIn() {

    const classes = useStyles();

    return (
        <Box className={classes.flexible} >
            <Box className={classes.bgColor}>
                <Logo black={true}/>
            </Box>
            <Typography className={classes.text1}>Post what you've lost and find it. </Typography>
            <Box className={classes.totalBox}>
                <Box className={classes.spacing}>
                    <Button className={classes.button}>Sign up</Button>
                    <Button className={classes.button}>Log in</Button>
                </Box>
                <Box className={classes.centeral}>
                    <InputField account={true} placeholder={"Your email"} />
                    <InputField password={true} placeholder={"Your password"} />
                </Box>
                <Box className={classes.finalBox}>
                    <FormControlLabel control={<Checkbox />} label="Remember me" style={{ color: colors.dark }} />
                    <Link href="#" underline="none">
                        {'Forgot your password?'}
                    </Link>
                </Box>
                <Box className={classes.centeral2}>
                    <Button variant="contained" color="success">
                        Log in
                    </Button>
                </Box>
            </Box>
            <Typography className={classes.policyText}>By signing up you agree to our Terms of Service and Privacy Policy</Typography>
        </Box>
    );
}

