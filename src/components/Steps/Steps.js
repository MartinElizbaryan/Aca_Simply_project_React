import { Container, Grid, Typography, Box } from "@mui/material"
import useStyles from "./styles"
import { PersonAdd, Check, PostAdd } from "@mui/icons-material"

export default function TeamSlider() {
  const classes = useStyles()
  return (
    <Container size="md">
      <Typography className={classes.bigText}>How to post the Ad ?</Typography>
      <Grid container rirection="row" justifyContent="center" alignItems="center" spacing={5}>
        <Grid item xs={4} className={classes.gridStyle}>
          <Box className={classes.center}>
            <Box className={classes.circle}>
              <PersonAdd fontSize="large" style={{ color: "white" }} />
            </Box>
            <Typography className={classes.bigText2}>Step 1: Register with us</Typography>
            <Typography className={classes.lightGreyText}>
              {`Don't know how to deal with lost or found items near you? Register with your name and
          email address. If you have registered already, you can use the same account for posting
          unlimited ads.`}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.gridStyle}>
          <Box className={classes.center}>
            <Box className={classes.circle}>
              <Check fontSize="large" style={{ color: "white" }} />
            </Box>
            <Typography className={classes.bigText2}>Step 2: Verify your account</Typography>
            <Typography className={classes.lightGreyText}>
              {`Confirm your registration through the verification link which has sent to the given email address and then you can manage the account details now. Use email address for login to your account.`}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.gridStyle}>
          <Box className={classes.center}>
            <Box className={classes.circle}>
              <PostAdd fontSize="large" style={{ color: "white" }} />
            </Box>
            <Typography className={classes.bigText2}>Step 3: Start reporting</Typography>
            <Typography className={classes.lightGreyText}>
              {`You can start creating the ad for the lost or found items now to claim the item to the rightful owner. Then we will post the ad on the large community where everybody can potentially take action in searching for what you have lost.`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
