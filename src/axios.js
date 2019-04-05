import axios from 'axios';

const API_ROOT = route => `https://agents.peramax.app/api/${route}`;

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;

const tokenPlugin = obj => {
    if(token){
	obj.headers = Object.assign({'Authorization': `Bearer ${token}`});
    }
};

const Auth = {
    login: (email, password) =>
	axios.post(API_ROOT('login'), {email, password}),
    register: payload =>
	axios.post(API_ROOT('register'), payload);
};
