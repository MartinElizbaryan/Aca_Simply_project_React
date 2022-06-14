import FindPost from '../FindPost/FindPost'
import PostsList from '../Posts/PostsList'
import postImg from '../../assets/deskBackground.jpeg'
import Box from '@mui/material/Box'
import Counter from '../Counter/Counter'
import TeamSlider from '../TeamSlider/TeamSlider'
export default function Home() {
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
        }
    ]
    return (
        <>
            <FindPost />
            <Box mt={5} mb={5}>
                <PostsList title="Popular Posts" data={data} />
            </Box>
            <Box mt={5} mb={5}>
                <Counter />
            </Box>
            <Box mt={5}>
                <TeamSlider />
            </Box>
        </>
    )
}
