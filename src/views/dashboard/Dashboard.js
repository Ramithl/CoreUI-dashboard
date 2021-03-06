
import {
  
  CTabs,
  CTabPane,
  CNavItem,
  CTabContent,
  CNavLink,
  CNav,
  CBadge,
  CContainer,
} from '@coreui/react'
import Charts from '../charts/Charts'
import Storhub from './StorhubData'
import HouseData from './HouseData'
import DataDetail from './DataDetail'
import './Dashboard.css'
import { useHistory } from 'react-router'
import { useEffect,useState } from 'react'


const Dashboard = () => {
  const [timestamp,setTimestamp]=useState('0000-00-00');
  const MINUTE_MS = 180000;
  useEffect(() => {
    const getData=()=>{
      fetch(`https://stortera.herokuapp.com/house/B3E19380158221`, {
        method: "get",
      })
      .then(response => response.json())
      .then(data => {
        setTimestamp(data[1].val)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    getData()
    const interval = setInterval(() => {
      getData();
  }, MINUTE_MS);
  return () => clearInterval(interval);
  }, []);
  const dataType=useHistory().location.pathname.split('/')[useHistory().location.pathname.split('/').length-2];
  return ( 
    <>
      <CTabs activeTab="statistical-overview">

        <CNav variant="tabs" >

          <CNavItem>
            <CNavLink data-tab="statistical-overview" className="text-success">
            System Overview
            </CNavLink>
          </CNavItem>
          {dataType==='house'? <> 
          <CNavItem>
            <CNavLink data-tab="data-chart" className="text-success">
              AI Overview
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink data-tab="parameter-analysis" className="text-success">
              Parameter Analysis
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink data-tab="data-detail" className="text-success">
              Data Detail
            </CNavLink>
          </CNavItem>
          </>:null}

          <CNavItem className="ml-auto pt-2">
            <CContainer>
              Status:<CBadge className="ml-2"color="success"> Online </CBadge>
              <h1>Timestamp : {timestamp}</h1>
            </CContainer>
          </CNavItem>
        </CNav>


        <CTabContent className="pt-4">
          <CTabPane data-tab="statistical-overview" className="py-10">
          {dataType==='storhub'?<Storhub/>:<HouseData/>}
          </CTabPane>
          {dataType==='house'? <>
          <CTabPane data-tab="data-chart">
            <Charts></Charts>
          </CTabPane>
          <CTabPane data-tab="parameter-analysis">
            789
          </CTabPane>
          <CTabPane data-tab="data-detail">
            <DataDetail/>
          </CTabPane></>:null}
        </CTabContent>

      </CTabs>
    </>
  )
}

export default Dashboard
