// Components
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { CustomLink } from '../Shared/CustomLink/CustomLink';
import Typography from '@mui/material/Typography';
// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../assets/logo-white.svg'
//Styleings
import useStyles from './style';
import { colors } from '../../constants/styles'

export default function Footer() {
    const classes = useStyles()

    return (
        <footer>
            <Container maxWidth={false} className={classes.container}>
                <Grid container spacing={3} justifyContent="center" mb={1}>
                    <Grid item>
                        <CustomLink url="/" color={colors.green} title={<FacebookIcon fontSize="large" color="inherit" />} />
                    </Grid>
                    <Grid item>
                        <CustomLink url="/" color={colors.green} title={<LinkedInIcon fontSize="large" color="inherit" />} />
                    </Grid>
                    <Grid item>
                        <CustomLink url="/" color={colors.green} title={<InstagramIcon fontSize="large" color="inherit" />} />
                    </Grid>
                    <Grid item>
                        <CustomLink url="/" color={colors.green} title={<TwitterIcon fontSize="large" color="inherit" />} />
                    </Grid>
                </Grid>
                <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                    <Typography variant="p" color={colors.white}>&copy;  Designed and Developed by</Typography>
                    <img src={logo} alt="logo" width={150} />
                </Stack>
            </Container>
        </footer >
    )
}
