import { createUseStyles } from 'react-jss'
import { colors } from '../../constants/styles';


const useStyles = createUseStyles({
    container: {
        paddingTop: "120px !important",
        color: "#7f848c",
    },
    button: {
        backgroundColor: `${colors.green} !important`,
    }
}
);
export default useStyles  