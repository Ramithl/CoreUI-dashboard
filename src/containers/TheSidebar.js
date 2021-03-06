import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
  const userType=useSelector(state=>state.user)

  return (
    <CSidebar 
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav color="bg-success" >

        <CCreateElement 
          items={userType==='admin'?[
            {
              _tag: 'CSidebarNavTitle',
              _children: ['All Houses']
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'House 1',
              to: '/home/house/B3E19380158221',
              icon: 'cil-input-power',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'House 2',
              to: '/home/house/B3E19380183172',
              icon: 'cil-input-power',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'House 3',
              to: '/home/house/B3E19380049001',
              icon: 'cil-input-power',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'House 4',
              to: '/home/house/B3E19380030377',
              icon: 'cil-input-power',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'House 5',
              to: '/home/house/B3E19380003220',
              icon: 'cil-input-power',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'House 6',
              to: '/home/house/B3E19380050504',
              icon: 'cil-input-power',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'House 7',
              to: '/home/house/B3E19380101824',
              icon: 'cil-input-power',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'House 8',
              to: '/home/house/B3E19380073841',
              icon: 'cil-input-power',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'House 9',
              to: '/home/house/B3E19380091442',
              icon: 'cil-input-power',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'House 10',
              to: '/home/house/B3E19380135111',
              icon: 'cil-input-power',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'Storhub-KMCC',
              to: '/home/storhub/KMCC',
              icon: 'cil-input-power',
            },
            {
              _tag: 'CSidebarNavItem',
              name: 'Storhub-Townhall',
              to: '/home/storhub/townhall',
              icon: 'cil-input-power',
            }

          ]:[
            {
              _tag: 'CSidebarNavTitle',
              _children: ['All Houses']
            },
          ]}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
