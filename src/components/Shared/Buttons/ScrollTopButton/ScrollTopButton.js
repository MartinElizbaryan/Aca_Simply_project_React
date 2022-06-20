import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useStyles from './style';

export const  ScrollTopButton =({...props}) => {
  const classes = useStyles();

  return (
    <IconButton {...props} aria-label="scroll" size="large" className={classes.scrollButton}>
      <ArrowUpwardIcon fontSize='large' className={classes.icon} />
    </IconButton>
  )
}