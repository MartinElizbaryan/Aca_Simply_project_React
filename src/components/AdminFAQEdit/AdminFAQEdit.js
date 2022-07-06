import { Container, TextField, Typography } from "@mui/material"
import useStyles from "./styles"
import { useFetch } from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import api from "../../api/api"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"

export default function AdminFAQEdit() {
  const classes = useStyles()
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, error, loading, reFetch: reFetchFAQs } = useFetch(`/admin/faq/${id}`)
  const [faq, setFAQ] = useState([])
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  // console.log("answer", answer)
  // console.log("question", question)

  useEffect(() => {
    console.log(data)
    setFAQ(data.faq)
    setQuestion(data.faq?.question)
    setAnswer(data.faq?.answer)
  }, [data])

  const updateFAQ = async () => {
    try {
      await api.put(`/admin/faq/${id}`, {
        question,
        answer,
      })
      navigate("/profile/faq")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Grid container spacing={0} mt={10}>
        <SidebarCabinet />
        <Grid item xs={12} md={9}>
          <Container className={classes.container} maxWidth={false}>
            <Typography variant="h4" className={classes.header}>
              FAQs
            </Typography>

            <Grid item xs={12} md={9} mt={6}>
              <Box mt={5} mb={5}>
                <Grid container spacing={2} p={2}>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.input}
                      fullWidth
                      label="Question"
                      variant="outlined"
                      size="normal"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      className={classes.input}
                      fullWidth
                      label="Answer"
                      variant="outlined"
                      size="normal"
                      multiline
                      minRows={5}
                      maxRows={10}
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} p={2}>
                  <Grid item xs={8} sm={6} md={4}>
                    <GreenButton className={classes.button} onClick={updateFAQ}>
                      Save Changes
                    </GreenButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}
