import { Box, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { WhiteInput } from "../Shared/Inputs/Input"
import MenuItem from "@mui/material/MenuItem"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import useStyles from "./style"
import { colors } from "../../constants/styles"
import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function FindPost() {
  const [name, setName] = useState("")
  const [type, setType] = useState("LOST")
  const navigate = useNavigate()

  const findPost = () => {
    navigate(`/posts?type=${type.toLowerCase()}&name=${name}`)
  }

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
              <Grid item xs={12} sm={6} md={6}>
                <WhiteInput
                  label="Name"
                  variant="filled"
                  size="small"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <WhiteInput
                  select
                  label="Type"
                  variant="filled"
                  size="small"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={"LOST"}>LOST</MenuItem>
                  <MenuItem value={"FIND"}>FIND</MenuItem>
                </WhiteInput>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                sx={{
                  flex: 1,
                }}
              >
                <GreenButton variant="contained" size="large" onClick={findPost}>
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
