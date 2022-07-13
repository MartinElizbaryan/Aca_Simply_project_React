import io from "socket.io-client"

console.log("oricessssss ", process.env.REACT_APP_SERVER_BASE_URL_WITHOUT_VERSION)

export const socket = io.connect(process.env.REACT_APP_SERVER_BASE_URL_WITHOUT_VERSION)

export default socket
