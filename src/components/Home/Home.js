import FindPost from '../FindPost/FindPost'
import PostsList from '../Posts/PostsList/PostsList'
import Box from '@mui/material/Box'
import Counter from '../Counter/Counter'
import TeamSlider from '../TeamSlider/TeamSlider'
import {useEffect, useState} from "react";
import api from "../../api/api";
import PostsSceleton from "../Posts/PostsSceleton/PostsSceleton";
import Typography from "@mui/material/Typography";
export default function Home() {
<<<<<<< HEAD
=======
    const [posts, setPosts] = useState([]);
    const [isBusy, setIsBusy] = useState(true);
    useEffect(() => {
        (async function () {
            const response = await api.get('/posts?type=FIND')
            setPosts(response.data.posts)
            setIsBusy(false)
        })()
    }, [isBusy])
>>>>>>> 39fc867f8c3378a74716183db8d767784f95f6ba
    return (
        <>
            <FindPost />
            <Box mt={5} mb={5}>
<<<<<<< HEAD
                {/* <PostsList title="Popular Posts" data={data} /> */}
=======
                {posts ?
                    isBusy ? <PostsSceleton /> : <PostsList title="Foud Items" data={posts} />
                    : <Typography variant="h5" textAlign="center">No Content found</Typography>
                }
>>>>>>> 39fc867f8c3378a74716183db8d767784f95f6ba
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
