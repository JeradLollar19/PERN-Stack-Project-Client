let APIURL= '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000/';
        break;
    case 'jl-filmapp-client':
        APIURL = 'https://jl-filmapp-client.herokuapp.com/';
}

export default APIURL;