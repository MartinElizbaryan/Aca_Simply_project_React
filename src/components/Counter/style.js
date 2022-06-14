import { createUseStyles } from 'react-jss'
import { bgImage } from './constants'
import { colors } from '../../constants/styles'
const $quoteSym = '"';
const useStyles = createUseStyles({
    counterBox: {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        color: colors.white,
        position: 'relative',
        '&:after': {
            content: `'${$quoteSym}'`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: colors.blurGreen
        }
    },
    counterContainer: {
        position: 'relative',
        zIndex: '3'
    }
}
);
export default useStyles  