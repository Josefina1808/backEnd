let username = sessionStorage.getItem("username");
if (!username) {
  username = prompt("Ingrese email");
}
$("#username").html(username);

const socket = io.connect();

function render(data) {
  data.forEach((info) => {
    $("#messages").prepend(`
      <div>
          <em class="text-primary fw-bold">${info.author}</em>
          [<em class="text-danger">${info.time}</em>]: <em class="text-success fst-italic">${info.text}</em>
      </div>
    `);
  });
}

socket.on("messages", (data) => {
  console.log(data);
  render(data);
});

$('#myChat').on('submit', e => {
  e.preventDefault();

  const message = {
    author: username,
    text: $("#text").val()
  };

  socket.emit("new-message", message);
});
