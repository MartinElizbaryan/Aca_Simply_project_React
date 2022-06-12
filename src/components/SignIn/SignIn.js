import React from "react";
import { Typography, Box, Checkbox, FormControlLabel, Button, Link } from '@mui/material';
import { Logo } from '../Shared/Logo/Logo';
import AppColors from "../../Constants/AppColors";
import { InputField } from "../Shared/InputField/InputField";

export default function SignIn() {

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} bgcolor={AppColors.lightGrey} flex={1} >
            <Logo black={true} />
            <Typography textAlign="center" color={"#0e141e"} mb={3}>Post what you've lost and find it. </Typography>
            <Box bgcolor={AppColors.white} width={"60%"} height={400} borderRadius={3} padding={2}>
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Typography textAlign={"center"} color={"#0e141e"} width={"50%"} height={40}>Sign in</Typography>
                    <Typography textAlign={"center"} color={"#0e141e"} width={"50%"} height={40}>Log in</Typography>
                </Box>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <InputField account={true} placeholder={"Your email"} />
                    <InputField password={true} placeholder={"Your password"} />
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" mb={2}>
                    <FormControlLabel control={<Checkbox />} label="Remember me" style={{ color: AppColors.dark }} />
                    <Link href="#" underline="none">
                        {'Forgot your password?'}
                    </Link>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button variant="contained" color="success">
                        Log in
                    </Button>
                </Box>
            </Box>
            <Typography mt={2}>By signing up you agree to our Terms of Service and Privacy Policy</Typography>
        </Box>
    );
}

