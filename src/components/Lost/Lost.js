import PostsList from '../Posts/PostsList/PostsList'
import PostsSceleton from '../Posts/PostsSceleton/PostsSceleton'
import Sidebar from '../Shared/Sidebars/Sidebar/Sidebar'
import SidebarMobile from '../Shared/Sidebars/SidebarMobile/SidebarMobile'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import postImg from '../../assets/deskBackground.jpeg'
import api from '../../api/api'
import { useEffect, useState } from 'react'
export default function Lost() {
    const [posts, setPosts] = useState([]);
    const [isBusy, setIsBusy] = useState(true);
    useEffect(() => {
        (async function () {
            const response = await api.get('/posts?type=FIND')
            setPosts(response.data.posts)
            setIsBusy(false)
        })()
    }, [isBusy])
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
                    {isBusy ? <PostsSceleton /> : <PostsList title="Lost Items" data={posts} />}
                </Box>
            </Grid>
        </Grid>
    )
}