import FindPost from '../FindPost/FindPost'
import PostsList from '../Posts/PostsList/PostsList'
import Box from '@mui/material/Box'
import Counter from '../Counter/Counter'
import TeamSlider from '../TeamSlider/TeamSlider'
export default function Home() {
    return (
        <>
            <FindPost />
            <Box mt={5} mb={5}>
                {/* <PostsList title="Popular Posts" data={data} /> */}
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
