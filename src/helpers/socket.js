import io from "socket.io-client"

export const socket = io.connect(process.env.REACT_APP_SERVER_BASE_URL_WITHOUT_VERSION)

export default socket
