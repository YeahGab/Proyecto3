import axios from 'axios'
const baseURL = "http://localhost:3000"

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL, 
      withCredentials: true
    })
  }
  signup = form => {
    return this.service
      .post('/api/signup', form)
      .then(({ data }) => data)
      .catch(err => err)
  }
  login = form => {
    return this.service
      .post('/api/login', form)
      .then(response => {
        console.log(response, "Successful login!")
        return response
      })
      .catch(err => {
        return (!user) ? { err: "You are not registered" } : { err: "Incorrect email or password"}
      // return { err: "Incorrect email or password"}
    })
  }
}

export default AuthService