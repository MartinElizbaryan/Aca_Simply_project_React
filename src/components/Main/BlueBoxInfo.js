import React from "react";
import { Box, Typography } from "@mui/material";
import AppColors from "../../Constants/ConstantColors/AppColors.js";
import deskBackground from "../../Assets/deskBackground.jpeg"

export default function BlueBoxInfo() {

    return (
        <Box
            style={{
                backgroundImage: `url(${deskBackground})`,
                backgroundSize: "cover",
                height: "100vh",
                zIndex: 9999,
                backgroundAttachment: "fixed"
            }}>
            <Box style={{ height: 400, backgroundColor: AppColors.blue, display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", opacity: 0.9, }}>


                <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography style={{ color: AppColors.white, fontSize: 30, fontWeight: "700", marginBottom: 20 }}>We're happy to help you</Typography>
                    <Typography style={{ color: AppColors.white, fontSize: 20, fontWeight: "500", width: "50%", textAlign: "center" }}>If you lost something just visit our website and add a post about it. Someone who'll find your item will get in touch with from chatting and you'll get back your lost item. Look at our results here. </Typography>
                </Box>
                <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "80%", alignItems: "center" }}>
                    <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography style={{ color: AppColors.white, fontSize: 30, fontWeight: "700", marginBottom: 15 }}>1,930</Typography>
                        <Typography style={{ color: AppColors.white, fontSize: 20, fontWeight: "500" }}>Lost</Typography>
                    </Box>
                    <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography style={{ color: AppColors.white, fontSize: 30, fontWeight: "700", marginBottom: 15 }}>96</Typography>
                        <Typography style={{ color: AppColors.white, fontSize: 20, fontWeight: "500" }}>Found</Typography>
                    </Box>
                    <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography style={{ color: AppColors.white, fontSize: 30, fontWeight: "700", marginBottom: 15 }}>40</Typography>
                        <Typography style={{ color: AppColors.white, fontSize: 20, fontWeight: "500" }}>Users</Typography>
                    </Box>
                </Box>
            </Box></Box>
    )
}