import { useState } from "react"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import SidebarMobileCabinet from "../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { TextField, Typography } from "@mui/material"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import AddButton from "../Shared/Buttons/AddButton/AddButton"
import MenuItem from "@mui/material/MenuItem"
import useStyles from "./style"
import UploadButtons from "../Shared/Inputs/Upload"
import Question from "../Shared/Questions/Question/Question"

export default function CreatePost() {
  const [question, setQuestion] = useState([])
  const classes = useStyles()
  const addQuestion = () => {
    const newQuestion = [...question, <Question key={question.length + 2 - 1} />]
    setQuestion(newQuestion)
  }
  return (
    <Grid container spacing={0} mt={10}>
      <Grid
        item
        xs={12}
        md={3}
        mt={11}
        sx={{
          padding: 2,
        }}
      >
        <Paper elevation={2}>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <SidebarCabinet />
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <SidebarMobileCabinet />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={9} mt={6}>
        <Box mt={5} mb={5}>
          <Grid container spacing={2} p={2}>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                fullWidth
                label="Post Title"
                variant="outlined"
                size="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                fullWidth
                label="Type"
                variant="outlined"
                size="normal"
                select
                value="lost"
              >
                <MenuItem value="lost">Lost</MenuItem>
                <MenuItem value="found">Found</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                fullWidth
                label="Description"
                variant="outlined"
                size="normal"
                multiline
                minRows={5}
                maxRows={10}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} display="flex">
              <UploadButtons />
            </Grid>
            <Grid item xs={12} md={6} lg={12} display="flex" alignItems="center">
              <AddButton onClick={addQuestion} />{" "}
              <Typography variant="span" ml={3}>
                Add Question
              </Typography>
            </Grid>
          </Grid>
          {question}
          <Grid container spacing={2} p={2}>
            <Grid item xs={8} sm={6} md={4}>
              <GreenButton title="Save Changes" />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
