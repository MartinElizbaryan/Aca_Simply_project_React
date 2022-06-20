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

export default function Posts({ post }) {
    const avatarInitials = post.user.name[0] + post.user.surname[0]
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {avatarInitials}
                    </Avatar>
                }
                title={`${post.user.name} ${post.user.surname}`}
                subheader={post.user.date}
            />
            <CardMedia
                component="img"
                height="194"
                image={post.user.name}
                alt={post.user.name}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.user.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <CustomLink url="/post/1" title={<GreenButton sx={{
                    width: 'auto'
                }}>
                    See details
                </GreenButton>} />
            </CardActions>
        </Card >
    )
}