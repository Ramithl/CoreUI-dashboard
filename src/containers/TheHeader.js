import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  CButton,
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  /*CHeaderNavLink,*/

} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const TheHeader = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/Home/Dashboard">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>
      
        <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          {/*<CHeaderNavLink to="/dashboard">Home</CHeaderNavLink>*/}
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          {/*<CHeaderNavLink to="/users">Alerts</CHeaderNavLink>*/}
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          {/*<CHeaderNavLink to="/base/carousels">Settings</CHeaderNavLink>*/}
        </CHeaderNavItem>
      </CHeaderNav>
      

      <CHeaderNav className="px-3">

        <CButton color="success" onClick={() => {
          dispatch({ type: 'set', user: null })
          history.push('/')
        }}>Log Out</CButton>
      </CHeaderNav>


    </CHeader>
  )
}

export default TheHeader
