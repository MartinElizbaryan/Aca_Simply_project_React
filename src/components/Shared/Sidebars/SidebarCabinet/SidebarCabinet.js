import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArticleIcon from '@mui/icons-material/Article';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { CustomLink as Link } from '../../CustomLink/CustomLink'
export default function SidebarCabinet() {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Cabinet
                </ListSubheader>
            }
        >
            <ListItemButton>
                <ListItemIcon>
                    <ArticleIcon />
                </ListItemIcon>
                <Link url='/cabinet' title={<ListItemText primary="Posts" />} color='#212121' />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <Link url='/cabinet/profile' title={<ListItemText primary="Profile" />} color='#212121' />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AddCircleOutlineIcon />
                </ListItemIcon>
                <Link url='/cabinet/createPost' title={<ListItemText primary="Add new post" />} color='#212121' />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <FactCheckIcon />
                </ListItemIcon>
                <Link url='/cabinet/activePosts' title={<ListItemText primary="Active Posts" />} color='#212121' />
            </ListItemButton>
        </List>
    )
}