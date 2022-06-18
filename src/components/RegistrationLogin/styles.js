import { createUseStyles } from 'react-jss'
import { colors } from '../../constants/styles';


const useStyles = createUseStyles({
    flexible: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: colors.grey,
        flex: 1,
        paddingTop: 10,
        height: "100%",
    },
    text1: {
        textAlign: "center",
        color: "#0e141e",
        marginBottom: [[10], "!important"]
    },
    bgColor: {
        marginTop: 80
    },
    totalBox: {
        backgroundColor: colors.white,
        width: "50%",
        borderRadius: 12,
        padding: "0px 16px",
        boxShadow: "0 6px 16px 0 rgb(0 0 0 / 20%)",
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: 400
        },
    },
    spacing: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        width: "50%",
        height: 50,
        display: "flex",
        alignItems: "center",
        textAlign: "center"
    },
    centeral: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    finalBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16
    },
    centeral2: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    policyText: {
        marginTop: [[20], "!important"],
        marginBottom: [[20], "!important"],
    }
}
);
export default useStyles  