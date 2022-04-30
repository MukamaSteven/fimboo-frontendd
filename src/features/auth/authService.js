/* eslint-disable prettier/prettier */
import axios from 'axios'

const API_URL = 'http://localhost:4000/api/v1'

// http://localhost:4000/api/v1'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + '/owner/signup', userData)

  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data))
  // }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + '/owner/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

// email verification
const verifyEmail = async (token) => {
  const response = await axios.post(API_URL + `/owner/confirmation/${token}`)
  console.log(response)

  return response
}
const authService = {
  register,
  logout,
  login,
  verifyEmail,
}

export default authService
