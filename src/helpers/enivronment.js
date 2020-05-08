let APIURL= '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000/';
        break;
    case 'jl-filmapp-client.herokuapp.com':
        APIURL = 'https://jl-filmapp-server.herokuapp.com/';
}

export default APIURL;