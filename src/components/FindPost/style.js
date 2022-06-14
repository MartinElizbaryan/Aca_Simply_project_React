import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
    homeContainer:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2
    },
    BgImage: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}
);
export default useStyles  