import { Box, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { WhiteInput } from "../Shared/Inputs/Input"
import MenuItem from "@mui/material/MenuItem"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import useStyles from "./style"
import { colors } from "../../constants/styles"
import SearchIcon from "@mui/icons-material/Search"

export default function FindPost() {
  const classes = useStyles()
  return (
    <Box className={classes.BgImage}>
      <Container maxWidth="lg">
        <Box className={classes.homeContainer}>
          <Box textAlign="center">
            <Typography variant="h3" mb={2} color={colors.white}>
              Have you lost something?
            </Typography>
            <Typography variant="p" color={colors.white}>
              Find your lost item!
            </Typography>
            <Grid container spacing={2} mt={2} alignItems="center">
              <Grid item xs={12} sm={6} md={4}>
                <WhiteInput label="Name" variant="filled" size="small" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <WhiteInput select label="Type" variant="filled" size="small" defaultValue="">
                  <MenuItem value={10}>Type 1</MenuItem>
                  <MenuItem value={20}>Type 2</MenuItem>
                </WhiteInput>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                sx={{
                  flex: 1,
                }}
              >
                <GreenButton variant="contained" size="large">
                  <SearchIcon ml={2} />
                  Find post
                </GreenButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
