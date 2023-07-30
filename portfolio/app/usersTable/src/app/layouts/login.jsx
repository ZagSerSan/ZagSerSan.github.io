import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import LoginForm from '../components/ui/loginForm'
import RegisterForm from '../components/ui/registerForm'
// css
import './login.css'

const Login = () => {
  const { type } = useParams('')
  // const [formType, setFormType] = useState(type === 'register' ? type : 'Login')

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {type === 'register' ? <RegisterForm /> : <LoginForm />}
        </div>
      </div>
    </div>
  )
}

export default Login
