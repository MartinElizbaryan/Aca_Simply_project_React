import PostsList from '../Posts/PostsList/PostsList'
import Sidebar from '../Shared/Sidebars/Sidebar/Sidebar'
import SidebarMobile from '../Shared/Sidebars/SidebarMobile/SidebarMobile'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import postImg from '../../assets/deskBackground.jpeg'
export default function Found() {

    const data = [
        {
            authorName: "Ruben",
            authorSurname: "Karapetyan",
            image: postImg,
            date: "22.08.2022",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            authorName: "Vanush",
            authorSurname: "Xanamiryan",
            image: postImg,
            date: "12.10.2022",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            authorName: "Artavazd",
            authorSurname: "Gabrielyan",
            image: postImg,
            date: "30.12.2022",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            authorName: "Ruben",
            authorSurname: "Karapetyan",
            image: postImg,
            date: "22.08.2022",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            authorName: "Vanush",
            authorSurname: "Xanamiryan",
            image: postImg,
            date: "12.10.2022",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            authorName: "Artavazd",
            authorSurname: "Gabrielyan",
            image: postImg,
            date: "30.12.2022",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            authorName: "Ruben",
            authorSurname: "Karapetyan",
            image: postImg,
            date: "22.08.2022",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            authorName: "Vanush",
            authorSurname: "Xanamiryan",
            image: postImg,
            date: "12.10.2022",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like."
        },
        {
            authorName: "Artavazd",
            authorSurname: "Gabrielyan",
            image: postImg,
            date: "30.12.2022",
            description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like."
        }
    ]
    return (
        <Grid container spacing={0} mt={10}>
            <Grid item xs={12} md={3} mt={11} sx={{
                padding: 2
            }}>
                <Paper elevation={2}>
                    <Box sx={{
                        display: {
                            xs: 'none', md: 'block'
                        },
                    }}>
                        <Sidebar />
                    </Box>
                    <Box sx={{
                        display: {
                            xs: 'block', md: 'none'
                        }
                    }}>
                        <SidebarMobile />
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box mt={5} mb={5}>
                    <PostsList title="Found Items" data={data} />
                </Box>
            </Grid>
        </Grid>
    )
}