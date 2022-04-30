/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../../../features/auth/authSlice'
import Spinner from '../../../components/Spinner'
// import { Link } from 'react-router-dom'
import './../../pages/register/register.css'

import {
  CButton,
  // CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  // CInputGroupText,
  CRow,
  CCardText,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import { CImage } from '@coreui/react'
// import { cilLockLocked, cilUser } from '@coreui/icons'

function Register() {
  const [CFormData, setCFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
  })

  const { firstname, username, lastname, email, password, password2 } = CFormData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      navigate('/')
    }

    if (user) {
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

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        firstname,
        username,
        lastname,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  // const Register = () => {
  return (
    <>
      <div className="bg-#fffff min-vh-100 d-flex flex-row align-items-center">
        <CContainer className="container-fluid contain d-flex">
          {/* removed className="justify-content-center from CRow */}
          <CCardGroup>
            <CRow className="mx-5">
              {/* removed  from CCol md={9} lg={7} xl={6} */}
              <CCol>
                <CCardGroup className="card rounded-3 ">
                  {/* <CCard className="mx-4 bg-red"> */}
                  <CCardBody className="p-4">
                    <CRow>
                      <CImage
                        className="float-start mb-5  justify-content-center"
                        src="./fimboo.png"
                        width={10}
                        height={38}
                        alt="Logo"
                      />
                      <CCardText>
                        <h2 className=" text-white fs-2 fw-500 font-Poppins">
                          {' '}
                          The smart way to <br />
                          manage your <br />
                          business finance!{' '}
                        </h2>
                        <p className=" text-white text-medium-emphasis ">
                          {' '}
                          Privacy and terms and conditions
                        </p>
                      </CCardText>
                    </CRow>
                  </CCardBody>

                  {/* </CCardBody> */}
                  {/* </CCard> */}
                </CCardGroup>
              </CCol>
            </CRow>
            <CForm onSubmit={onSubmit}>
              <h4 className="fw-bold text registercontent">start free</h4>
              <p className="fs-2 fw-bold text registercontent">CREATE AN ACCOUNT</p>
              <p className=" font-poppins fst-normal text registercontent">Username</p>
              <CInputGroup className="mb-3">
                <CFormInput
                  type="text"
                  id="firstname"
                  value={firstname}
                  placeholder="first name"
                  name="firstname"
                  autoComplete="firstname"
                  onChange={onChange}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  type="text"
                  id="lastname"
                  value={lastname}
                  placeholder="last name"
                  name="lastname"
                  autoComplete="lastname"
                  onChange={onChange}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Username"
                  name="username"
                  autoComplete="username"
                  onChange={onChange}
                />
              </CInputGroup>
              <p className=" font-poppins fst-normal text registercontent">Email</p>

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
              <p className=" font-poppins fst-normal text registercontent">Password</p>

              <CInputGroup className="mb-3">
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
              <p className=" font-poppins fst-normal text registercontent">Confirm password</p>

              <CInputGroup className="mb-3">
                <CFormInput
                  type="password"
                  className="form-control"
                  id="password2"
                  name="password2"
                  value={password2}
                  placeholder="Confirm password"
                  onChange={onChange}
                />
              </CInputGroup>

              <CButton
                type="submit"
                size="sm"
                variant="outline"
                className="col-12 mx-auto continuebuttton "
              >
                CONTINUE
              </CButton>
              <p className=" text-medium-emphasis mt-4 text-center ">
                {' '}
                continue with social profiles
              </p>
            </CForm>
          </CCardGroup>
        </CContainer>
      </div>
    </>
  )
}

export default Register
