import axios from 'axios';

const REMOTE = 'https://andremov-life-dashboard.herokuapp.com/';
const LOCAL = 'http://localhost:3030/';

const API = axios.create( {
	baseURL : [REMOTE, LOCAL][+(process.env.NODE_ENV === 'development')],
	timeout : 15000,
	responseType : 'json',
} );

export const ping = () => API.get(
	'ping'
)
	.then( r => r.data );
