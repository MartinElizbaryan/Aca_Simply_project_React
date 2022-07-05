import { useEffect, useState } from "react"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import SidebarMobileCabinet from "../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import useStyles from "./style"
import Question from "../Shared/Questions/Question/Question"
import useFetch from "../../hooks/useFetch"
import { useFormik } from "formik"
import * as yup from "yup"
//Form Validation
import TextField from "@mui/material/TextField"
import api from "../../api/api"
import { MenuItem } from "@mui/material"
import UploadButtons from "../Shared/Inputs/Upload"
import AddButton from "../Shared/Buttons/AddButton/AddButton"
import Typography from "@mui/material/Typography"

export default function CreatePost() {
  const validationSchema = yup.object().shape({
    name: yup
      .string("Enter Title")
      .min(3, "Title should be of minimum 3 characters length")
      .max(50, "Title should be of maximum 50 characters length")
      .required("Title is required"),
    address: yup
      .string("Enter Address")
      .min(4, "Address should be of minimum 4 characters length")
      .max(50, "Address should be of maximum 50 characters length")
      .required("Address is required"),
    description: yup
      .string("Enter Description")
      .min(50, "Description should be of minimum 50 characters length")
      .required("Description is required"),
    category_id: yup.string("Enter Category").required("Category is required"),
    type: yup.string("Enter Type").required("Type is required"),
    questions: yup.array(
      yup.object().shape({
        title: yup.string("Enter Question title").required("required-field"),
        answers: yup.array().of(
          yup.object().shape({
            title: yup
              .string("Enter answer title")
              .min(3, "Title should be of minimum 3 characters length")
              .required("required-field"),
            status: yup.boolean("Must be checked").required("required-field"),
          })
        ),
      })
    ),
  })
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category_id: "",
      type: "",
      address: "",
      questions: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const sendToServerHendler = async (values) => {
        const sendToServerModel = {
          ...values,
          images: [],
        }
        console.log(sendToServerModel)

        const res = await api.post("/posts", sendToServerModel)
      }
      sendToServerHendler(values)
      console.log("qaq")
    },
  })
  const [categories, setCategories] = useState([])
  const postTypes = [
    { name: "Lost", id: "LOST" },
    { name: "Found", id: "FOUND" },
  ]
  const classes = useStyles()
  const addQuestionList = () => {
    formik.setFieldValue("questions", [...formik.values.questions, { title: "", answers: [] }])
    console.log("asdas")
  }
  const { data } = useFetch("/categories")
  useEffect(() => {
    setCategories(data.categories)
  }, [data])
  return (
    <form onSubmit={formik.handleSubmit}>
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
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  name="name"
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  fullWidth
                  label="Address"
                  variant="outlined"
                  size="normal"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  fullWidth
                  label="Post Type"
                  variant="outlined"
                  size="normal"
                  select
                  name="type"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                  error={formik.touched.type && Boolean(formik.errors.type)}
                  helperText={formik.touched.type && formik.errors.type}
                >
                  {postTypes ? (
                    postTypes.map((type) => {
                      return (
                        <MenuItem value={type.id} key={type.id}>
                          {type.name}
                        </MenuItem>
                      )
                    })
                  ) : (
                    <MenuItem value="none">None</MenuItem>
                  )}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  fullWidth
                  label="Categories"
                  variant="outlined"
                  size="normal"
                  select
                  name="category_id"
                  onChange={formik.handleChange}
                  value={formik.values.category_id}
                  error={formik.touched.category_id && Boolean(formik.errors.category_id)}
                  helperText={formik.touched.category_id && formik.errors.category_id}
                >
                  {categories ? (
                    categories.map((cat) => {
                      return (
                        <MenuItem value={cat.id} key={cat.id}>
                          {cat.name}
                        </MenuItem>
                      )
                    })
                  ) : (
                    <MenuItem value="none">None</MenuItem>
                  )}
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
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4} display="flex">
                <UploadButtons />
              </Grid>
              <Grid item xs={12} md={6} lg={12} display="flex" alignItems="center">
                <AddButton onClick={addQuestionList} />{" "}
                <Typography variant="span" ml={3}>
                  Add Question
                </Typography>
              </Grid>
            </Grid>
            {!!formik.values.questions &&
              formik.values.questions.map((question, index) => {
                return (
                  <Question key={index} questionIndex={index} question={question} formik={formik} />
                )
              })}
            <Grid container spacing={2} p={2}>
              <Grid item xs={8} sm={6} md={4}>
                <GreenButton className={classes.button} type="submit" title={"Save Changes"} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}
