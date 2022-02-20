const socket = io.connect();

function render(data) {
  data.map((info) => {
    $("#messages").prepend(`
      <div>
          <em class="text-primary fw-bold">${info.author.alias}</em>
          [<em class="text-danger">${info.time}</em>]: <em class="text-success fst-italic">${info.text}</em>
      </div>
    `);
  });
}

socket.on("messages", (data) => {
  render(data);
});

$("#myChat").on("submit", (e) => {
  e.preventDefault();

  let time = new Date().toLocaleString();

  const message = {
    author: {
      id: $("#id").val(),
      name: $("#name").val(),
      lastname: $("#lastname").val(),
      age: Number($("#age").val()),
      alias: $("#alias").val(),
      avatar: $("#avatar").val(),
    },
    text: $("#text").val(),
    time: time
  };
  
  socket.emit("new-message", message);
  $("#text").val("")
  return false
});
