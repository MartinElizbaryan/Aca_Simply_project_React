import PostsList from '../Posts/PostsList/PostsList'
import PostsSceleton from '../Posts/PostsSceleton/PostsSceleton'
import Sidebar from '../Shared/Sidebars/Sidebar/Sidebar'
import SidebarMobile from '../Shared/Sidebars/SidebarMobile/SidebarMobile'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
export default function Lost() {
    const {data,error,loading} = useFetch('/posts?type=LOST');
    const [posts,setPosts] = useState([])
    useEffect(() => {
        (async function () {
            setPosts(data)
        })()
    }, [data])
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
                    {loading ? <PostsSceleton /> : <PostsList title="Lost Items" data={posts} />}
                </Box>
            </Grid>
        </Grid>
    )
}