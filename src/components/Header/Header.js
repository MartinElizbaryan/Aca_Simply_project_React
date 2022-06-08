import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import logo from "../../Assets/logo.png";
import avatar from "../../Assets/avatar.jpeg";
import styles from "./styles.js";
import AppColors from "../../Constants/ConstantColors/AppColors.js";
import { Link } from "react-router-dom";

export default function Header() {
  const [logedIn, setLogedIn] = useState(true);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Box style={styles.center2}>
      <Button
        onClick={refreshPage}
        component={Link}
        to=""
        style={{ padding: 0 }}>
        <img
          variant="rounded"
          src={logo}
          alt="Lost and Found"
          style={{ width: 90 }}
        />
      </Button>
      <Box>
        <Button component={Link} to="/home" style={{ color: AppColors.white }}>
          Home
        </Button>
        <Button component={Link} to="/lost" style={styles.whiteColor}>
          Lost
        </Button>
        <Button component={Link} to="/found" style={styles.whiteColor}>
          Found
        </Button>
        <Button component={Link} to="/support" style={styles.whiteColor}>
          Support
        </Button>
      </Box>

      {logedIn ? (
        <Box style = {{display: "flex", justifyContent: "center", flexDirection: "row"}}>
          <Button
            component={Link}
            to="/signup"
            style={{
              color: AppColors.white,
              height: 36,
              textTransform: "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              border: '1px solid'
            }}>
              <Typography style = {{fontSize: 23, marginRight: 10, lineHeight: "36px", marginBottom: 2}}>+</Typography>
              <Typography>Add Post</Typography>
              
            </Button>

          <Button
            component={Link}
            to="/signup"
            style={{
              color: AppColors.white,
              backgroundColor: AppColors.blue,
              height: 36,
              textTransform: "none",
            }}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Typography>Ani A</Typography>
              <Box
                style={{
                  marginLeft: 10,
                  display: "flex",
                  justifyContent: "center",
                }}>
                <img
                  variant="rounded"
                  src={avatar}
                  alt="Avatar"
                  style={styles.avatar}
                />
              </Box>
            </Box>
          </Button>
        </Box>
      ) : (
        <Button
          component={Link}
          to="/signup"
          style={{
            color: AppColors.white,
            backgroundColor: AppColors.blue,
            textTransform: "none",
          }}>
          Sign Up
        </Button>
      )}
    </Box>
  );
}

