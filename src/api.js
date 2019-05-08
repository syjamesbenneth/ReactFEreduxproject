import axios from 'axios';

const url = 'https://agents.peramax.app/api/';

const config = {
    baseURL: url,
    timeout: 1000
};

const httpClient = axios.create(config);

const _setToken = token => {
    httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
};

const _unsetToken = () => {
    httpClient.defaults.headers.common['Authorization'] = ''
};

const responseBody = res => res.data;

const request = {
    get: url => httpClient.get(`${url}`).then(responseBody),
    del: url => httpClient.delete(`${url}`).then(responseBody),
    post: (url, payload) => httpClient.post(`${url}`, payload).then(responseBody),
    put: (url, payload) => httpClient.put(`${url}`, payload).then(responseBody)
};

const auth = {
    login: (email, password) => request.post('/auth/login', {email, password}),
    register: (payload) => request.post('/auth/register', payload);
}

export default {
    auth,
    setToken: _setToken,
    unsetToken: _unsetToken
}
