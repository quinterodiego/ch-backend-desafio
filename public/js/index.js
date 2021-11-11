const socket = io.connect();

const render = (data) => {
    const html = data.map((element, index) => {
        return (`
            <div>
                <strong>${element.email}</strong>
                <strong>[${element.timestamp}]</strong>:
                <em>${element.mensaje}</em>
            </div>
        `);
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
};

const addMessage = (event) => {
    event.preventDefault();
    const d = new Date();
    dformat = [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/') + ' ' + [d.getHours(),d.getMinutes(),d.getSeconds()].join(':');

    const mensaje = {
        email: document.getElementById('email').value,
        timestamp: dformat,
        mensaje: document.getElementById('mensaje').value
    };

    document.getElementById('email').value = "";
    document.getElementById('mensaje').value = "";
    socket.emit('new-message', mensaje);
    return false;
}

const formChats = document.getElementById('formChats');
formChats.addEventListener('submit', addMessage);

socket.on('messages', (data) => render(data));