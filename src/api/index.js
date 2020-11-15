import axios from 'axios'
const usersUrl = 'http://localhost:3000/users/'

function api(endpoint = '', method, data = {}) {
  return axios(usersUrl + endpoint, { method, data })
    .then(({ data }) => data)
    .catch(({ response }) => response.data)
}

const apiUsers = {
  populate: number => api(`populate/${number}`, 'post'),
  getUser: id => api(`${id}`, 'get'),
  getUsers: () => api('', 'get'),
  updateUser: (id, mutation) => api(`${id}`, 'put', mutation),
  deleteUser: id => api(`${id}`, 'delete'),
  deleteUsers: () => api('', 'delete')
}

export default apiUsers
