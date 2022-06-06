// import styles from './style.js';
import { Link as RouterLink } from "react-router-dom"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import styles from "./style"
import Link from "@mui/material/Link"

export default function Footer() {
  // const classes = styles()
  const classes = styles()
  return (
    <footer>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} pl={0}>
              <h4>Main</h4>
              <List className={classes.nav}>
                <ListItem>
                  <Link to={"/"} underline="none" component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/home"} component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/asd "} component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3} pl={0}>
              <h4>Policy</h4>
              <List className={classes.nav}>
                <ListItem>
                  <Link to={"/"} underline="none" component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/home"} component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/asd "} component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3} pl={0}>
              <h4>Other</h4>
              <List className={classes.nav}>
                <ListItem>
                  <Link to={"/"} underline="none" component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/home"} component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/asd "} component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3} pl={0}>
              <h4>Contacts</h4>
              <List className={classes.nav}>
                <ListItem>
                  <Link to={"/"} underline="none" component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/home"} component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/asd "} component={RouterLink}>
                    Home
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  )
}
