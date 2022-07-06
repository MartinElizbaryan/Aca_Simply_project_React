import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Container, Grid, MenuItem, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import { WhiteInput } from "../Shared/Inputs/Input"
import { colors } from "../../constants/styles"
import useStyles from "./style"

export default function FindPost() {
  const [searchQuery, setSearchQuery] = useState("")
  const [type, setType] = useState("LOST")
  const navigate = useNavigate()

  const findPost = () => {
    navigate(`/posts?type=${type}&search=${searchQuery}`)
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
                  label="Name or description"
                  variant="filled"
                  size="small"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                  <MenuItem value={"FOUND"}>FOUND</MenuItem>
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
                <GreenButton
                  size="large"
                  onClick={findPost}
                  icon={<SearchIcon ml={2} />}
                  title="Find post"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
