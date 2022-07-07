export default async (userId) => {
  const { socket } = await import("./socket")

  socket.connect()

  socket.on("error", function (err) {
    console.log("error", err)
  })

  socket.on("connect", function () {
    socket.emit("connect-success", { userId })
  })
}
