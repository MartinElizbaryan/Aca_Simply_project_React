// Componnets
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { CustomLink } from '../Shared/CustomLink/CustomLink';
import Typography from '@mui/material/Typography';
// Incons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

//Styleing
import AppColors from '../../Constants/AppColors'
export default function Footer() {
    return (
        <footer>
            <Container maxWidth={'xl'} sx={{
                backgroundColor: AppColors.blue,
                padding: '10px 0'
            }}>
                <Stack direction="row" spacing={1} justifyContent="center">
                    <CustomLink url="/" color={AppColors.green} title={<FacebookIcon fontSize="large" color="inherit" />} />
                    <CustomLink url="/" color={AppColors.green} title={<LinkedInIcon fontSize="large" color="inherit" />} />
                    <CustomLink url="/" color={AppColors.green} title={<InstagramIcon fontSize="large" color="inherit" />} />
                    <CustomLink url="/" color={AppColors.green} title={<TwitterIcon fontSize="large" color="inherit" />} />
                </Stack>
                <Stack direction="row" spacing={1} justifyContent="center">
                    <Typography variant="p" color={AppColors.white}>Designed and Developed by Kargin Team</Typography>
                </Stack>
            </Container>
        </footer >
    )
}
