import { createUseStyles } from 'react-jss'
import { colors } from '../../../../constants/styles';


const useStyles = createUseStyles({
    scrollButton: {
      position: "fixed !important",
      zIndex: 5,
      right: 20,
      bottom: 20,
      width: 50,
      height: 50,
      borderRadius: "50% !important",
      boxShadow: "0 3px 10px rgb(0 0 0 / 20%) !important",
      border: `1px solid ${colors.blue} !important`,
      backgroundColor: "rgb(255, 255, 255) !important",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.7) !important",
      }
    },
    icon: {
      color: colors.blue,
    }
});
export default useStyles  