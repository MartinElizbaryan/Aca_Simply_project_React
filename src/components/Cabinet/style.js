import { createUseStyles } from 'react-jss'
import { colors } from '../../constants/styles'
const useStyles = createUseStyles({
    input: {
        '& label': {
            fontSize: 14
        }
    },
    button: {
        justifyContent: 'center !important'
    }
}
);
export default useStyles  