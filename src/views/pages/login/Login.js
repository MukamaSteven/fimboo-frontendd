import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../../../components/Spinner'
import { login, reset } from '../../../features/auth/authSlice'
import './../../pages/login/login.css'

import { Link } from 'react-router-dom'
import {
  CButton,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
} from '@coreui/react'
import { CImage } from '@coreui/react'

function Login() {
  const [CFormData, setCFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = CFormData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  //isLoading,

  const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    // toast.error('check well your infor')
    // if (isError) {
    // }
    toast('🦄 Wow so easy!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

    if (isSuccess || user) {
      navigate('/dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setCFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }
  // const Login = () => {
  return (
    <>
      <div className="bg-#fffff min-vh-100 d-flex flex-row align-items-center">
        <CContainer className="container-fluid contain d-flex ">
          <CRow>
            <CCol>
              <CCardGroup>
                <CCol>
                  <CImage
                    className="float-start mb-5"
                    src="./fimboo.png"
                    width={190}
                    height={38}
                    alt="Logo"
                  />

                  <CImage src="./manage.png" />

                  <p className=" text-medium-emphasis mt-5 pt-2 text-center ">
                    {' '}
                    privacy terms and conditions
                  </p>
                </CCol>

                <CCardGroup className="card rounded-3 ">
                  <CButton color="light" variant="outline" className=" register">
                    {/* <Link to={user.id}>{user.name}</Link> */}
                    <Link to="/register" className="registerlink text-white text-end">
                      REGISTER
                    </Link>
                  </CButton>
                  <CCardBody>
                    <CForm onSubmit={onSubmit}>
                      <h1 className="fw-bold text-white mb-5">Login</h1>
                      <p className="text-white font-poppins fst-normal">Email</p>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          type="email"
                          id="email"
                          value={email}
                          placeholder="Email"
                          name="email"
                          autoComplete="email"
                          onChange={onChange}
                        />
                      </CInputGroup>
                      <p className="text-white font-poppins fst-normal">password</p>

                      <CInputGroup className="mb-4">
                        <CFormInput
                          type="password"
                          id="password"
                          placeholder="Password"
                          name="password"
                          value={password}
                          autoComplete="current-password"
                          onChange={onChange}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol>
                          <CButton
                            type="submit"
                            color="light"
                            size="sm"
                            variant="outline"
                            className="col-12 mx-auto"
                          >
                            CONTINUE
                          </CButton>
                          <p className=" mt-2 text-end fw-light text-white "> Forgot password</p>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCardGroup>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}
export default Login
