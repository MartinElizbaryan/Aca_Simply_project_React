import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    table: {
        minWidth: 320,
    },
    chatSection: {
        width: '100%',
        height: '100%'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '62vh',
        overflowY: 'auto',
        flex: '1 1 auto'
    }
});
export default useStyles