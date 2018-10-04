const io = require("socket.io")();

const success = { status: "200" };
const unauthorized = { status: "401" };

io.sockets.on("connection", (socket)=> {	

	socket.on("join-room", (roomData) => {
		socket.join(roomData.room_id)
		socket.room = roomData.room_id;
		socket.emit('room-joined', roomData);
	});

	socket.on("chat-event", (eventData) => {
		if(socket.room) {
			io.sockets.in(socket.room).emit("chat-event", eventData);
		}
	});
});

module.exports = io;