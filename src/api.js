const baseUrl = 'http://localhost:3000'

const checkResponse = async (response) => {
  if (response.ok) return response.json()
  const errors = await response.json()
  return Promise.reject(errors)
}

const registration = (endpoint, user) => {
  return fetch(`${baseUrl}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(checkResponse)
}

const getUser = (token, userId) => {
  return fetch(`${baseUrl}/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(checkResponse)
}

const getPosts = () => {
  return fetch(`${baseUrl}/messages`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(checkResponse)
}

export { registration, getUser, getPosts }
