import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
    linkItem:
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            marginRight: 15
        }

    },
}
);
export default useStyles  