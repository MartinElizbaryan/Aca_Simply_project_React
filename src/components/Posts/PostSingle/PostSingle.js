import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import postImg from '../../../assets/deskBackground.jpeg'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { CustomLink } from '../../Shared/CustomLink/CustomLink';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { GreenButton } from '../../Shared/Buttons/GreenButton/GreenButton'
export default function PostSingle() {
    const data = [
        {
            authorName: "Ruben",
            authorSurname: "Karapetyan",
            image: postImg,
            date: "22.08.2022",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like."
        },
    ]
    const avatarInitials = data[0].authorName.slice(0, 1) + data[0].authorSurname.slice(0, 1);
    return (
        <Container size="md">
            <Box sx={{
                marginTop: 10,
                marginBottom: 10
            }}>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {avatarInitials}
                            </Avatar>
                        }
                        title={`${data[0].authorName} ${data[0].authorSurname}`}
                        subheader={data[0].date}
                    />
                    <CardMedia
                        component="img"
                        sx={{
                            maxHeight: 500,
                            minHeight: 250
                        }}
                        image={data[0].image}
                        alt={data[0].image}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {data[0].description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <GreenButton sx={{
                            width: 'auto'
                        }}>
                            <CustomLink url="/chat" title="Start chat" component="button" variant="outlined" color="#fff" />
                        </GreenButton>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    )
}