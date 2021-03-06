import React from 'react'
import { useState} from 'react'
import { useHistory} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useDispatch} from 'react-redux'

const Login = () => {
  const dispatch=useDispatch()
  const history=useHistory()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=()=> {
    fetch('https://stortera.herokuapp.com/login',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                username:username,
                password:password,
            })
        })
        .then(response=>response.json())
        .then(user=>{
          dispatch({type:'set',user:user.type})
          if(user.type!=="Invalid"){
            history.push('/home/house/B3E19380158221')
          }else{
            alert("Invalid Password Or Username try again")
          }
        })
        .catch(err=>{console.log(err)})
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="4">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username" onChange={(e) => setUsername(e.target.value)} required/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} required/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="success" className="px-4" onClick={()=>{handleSubmit()}}>Login</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
