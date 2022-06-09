import { Button, Box, Typography, TextField } from "@mui/material";
import darkerBackground from "../../../Assets/darkerBackground.jpg";
import styles from "../../Header/utilits.js";
import AppColors from "../../../Constants/ConstantColors/AppColors.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function InfoFindPost() {
  return (
    <Box>
      {/* <Box
        style={{
          backgroundImage: `url(${darkerBackground})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}>
        <Box
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
          }}>
          <Box>
            <Typography style={styles.centerText} marginBottom={1}>
              The Easiest Way To Find What You Lost
            </Typography>
            <Typography
              textAlign={"center"}
              color={AppColors.lightGrey}
              marginBottom={5}>
              Post about the item.. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Cupiditate est, consequuntur perferendis.
            </Typography>
          </Box>
          <Box
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              width: "80%",
            }}>
            <TextField label="Name" variant="filled" InputProps={{ disableUnderline: true }} style={styles.root} />
            <TextField label="Type" variant="filled" InputProps={{ disableUnderline: true }} style={styles.root} />
            <Box style={{ display: "flex" }}>
              <Button 
                component={Link}
                to="/posts"
                style={{
                  color: AppColors.white,
                  background: AppColors.blue,
                  width: 255,
                  height: 55,
                  borderRadius: 12,
                  textTransform: "none"
                }}>
                  <FontAwesomeIcon icon={faSearch} style = {{marginRight: 10}} />
                Search Post
              </Button>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
}


