import React from 'react';
import useStyles from '../style'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';
import { colors } from '../../../constants/styles'

import From from '../From/From'
import To from '../To/To'
const ChatWindow = () => {
    const classes = useStyles();

    return (
        <Box mt={10}>
            <Grid container component={Paper} className={classes.chatSection}>
                <Grid item xs={12} md={3} className={classes.borderRight500}>
                    <List>
                        <ListItem button key="RemySharp">
                            <ListItemIcon>
                                <Avatar sx={{ bgcolor: colors.blue }} aria-label="recipe">
                                    AK
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText primary="Artur Karapetyan">Artur Karapetyan</ListItemText>
                            <ListItemText secondary="online" align="right"></ListItemText>
                        </ListItem>
                        <ListItem button key="Alice">
                            <ListItemIcon>
                                <Avatar sx={{ bgcolor: colors.green }} aria-label="recipe">
                                    VX
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText primary="Vaxinak Xachatryan">Vaxinak Xachatryan</ListItemText>
                            <ListItemText secondary="online" align="right"></ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={9}>
                    <List className={classes.messageArea}>
                        <From message="Bari or axper jan" time="09:30" />
                        <To message="Barev @nger" time="09:31" />
                        <From message="Axpers es shun@ vor gteles , imna" time="09:32" />
                        <To message="Ba vonc karas apacuces vor qonna?" time="09:33" />
                        <From message="Iran harcra inq@ kasi" time="09:34" />
                        <To message="Dzeres arnum ape?" time="09:35" />
                        <From message="Che axpers, lurj harcra kasi" time="09:36" />
                        <To message="Hesa harcnem" time="09:37" />
                        <To message="Hors arev xosuma es shun@!!!" time="09:43" />
                        <To message="Aaara heraxoss dzerics uzuma verci" time="09:44" />
                        <To message="Art jan ari indz tar stuc, esi gija. Nenca xarnve irar voncvor kyanqum xosacox shun chi tese" time="09:50" />
                        <From message="Eka Jekos , asa urdeya hascen gam" time="09:51" />
                        <To message="En kvartalci Marishenc koxi shenqna" time="09:52" />
                        <From message="Kvartalci Marish@ ova?" time="09:53" />
                        <To message="Aaaa de en eq@ eli, Pudel@. Ternel mihat gesh chax knika" time="09:54" />
                        <From message="Ha lav joga. Ichi Marishin tes minchev gam" time="09:55" />
                        <To message="Ok ap." time="09:56" />
                    </List>
                    <Divider />
                    <Paper
                        component="form"
                        sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            fullWidth
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                            <DirectionsIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
}

export default ChatWindow;