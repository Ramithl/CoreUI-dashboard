import {
    CCol,
    CRow,
    CCard,
    CCardBody,
  CCardHeader,  
  CListGroup,
  CListGroupItem,
  } from '@coreui/react'
import './HouseData.css'
import { useEffect,useState } from 'react';
import { useHistory } from 'react-router';

const Data = () => {
    const MINUTE_MS =180000;
    const id=useHistory().location.pathname.split('/').lastItem
    const initialData={
            alarmStatus:'',
            faultStatus:'',
            systemStatus:'',
            aCLineVoltageL1toL2:'0 V',
            aCLineVoltageL2toL3:'0 V',
            aCLineVoltageL3toL1:'0 V',
            aCCurrentL1:'0 A',
            aCCurrentL2:'0 A',
            aCCurrentL3:'0 A',
            aCFrequency:'0 Hz',
            aCActivePowerL1:'0 W',
            aCActivePowerL2:'0 W',
            aCActivePowerL3:'0 W',
            aCReactivePowerL1:'0 W',
            aCReactivePowerL2:'0 W',
            aCReactivePowerL3:'0 W',
            aCApparentPowerL1:'0 W',
            aCApparentPowerL2:'0 W',
            aCApparentPowerL3:'0 W',
            aCPFPowerL1:'0',
            aCPFPowerL2:'0',
            aCPFPowerL3:'0',
            aCActivePowerTotal:'0 W',
            aCReactivePowerTotal:'0 W',
            aCApparentPowerTotal:'0 W',
            aCPFTotal:'0',
            gridInterconMode:'',
            reactivePowerConMode:'',
            pFSetPoint:'',
            activePowerSetPoint:'',
            reactivePowerSetPoint:'',
            activePowerControlMode:'',
            sOC:'',
            dCVoltageTotal:'0 V',
            dCCurrentTotal:'0 A',
            batteryPowerTotal:'0 W',
            fireAlarmStatus:'',
            fireProtectionSysFailureStatus:'',
            emergencyStopPressed:'',
            hVAC1ComStatus:'',
            hVAC1AlarmStatus:'',
            hVAC1FailureStatus:'',
            hVAC2ComStatus:'',
            hVAC2AlarmStatus:'',
            hVAC2FailureStatus:'',
    }
    const [data, setData] = useState(initialData);
    const resetData=()=>{
        setData({
            alarmStatus:'',
            faultStatus:'',
            systemStatus:'',
            aCLineVoltageL1toL2:'0 V',
            aCLineVoltageL2toL3:'0 V',
            aCLineVoltageL3toL1:'0 V',
            aCCurrentL1:'0 A',
            aCCurrentL2:'0 A',
            aCCurrentL3:'0 A',
            aCFrequency:'0 Hz',
            aCActivePowerL1:'0 W',
            aCActivePowerL2:'0 W',
            aCActivePowerL3:'0 W',
            aCReactivePowerL1:'0 W',
            aCReactivePowerL2:'0 W',
            aCReactivePowerL3:'0 W',
            aCApparentPowerL1:'0 W',
            aCApparentPowerL2:'0 W',
            aCApparentPowerL3:'0 W',
            aCPFPowerL1:'0',
            aCPFPowerL2:'0',
            aCPFPowerL3:'0',
            aCActivePowerTotal:'0 W',
            aCReactivePowerTotal:'0 W',
            aCApparentPowerTotal:'0 W',
            aCPFTotal:'0',
            gridInterconMode:'',
            reactivePowerConMode:'',
            pFSetPoint:'',
            activePowerSetPoint:'',
            reactivePowerSetPoint:'',
            activePowerControlMode:'',
            sOC:'',
            dCVoltageTotal:'0 V',
            dCCurrentTotal:'0 A',
            batteryPowerTotal:'0 W',
            fireAlarmStatus:'',
            fireProtectionSysFailureStatus:'',
            emergencyStopPressed:'',
            hVAC1ComStatus:'',
            hVAC1AlarmStatus:'',
            hVAC1FailureStatus:'',
            hVAC2ComStatus:'',
            hVAC2AlarmStatus:'',
            hVAC2FailureStatus:'',
        })
    }
    
    useEffect(() => {
        const getData=()=>{
            fetch(`https://stortera.herokuapp.com/storhubs/${id}`, {
                method: "get",
            })
            .then(response => response.json())
            .then(data => {
                const aCActivePowerTotalTemp=parseFloat(data[22].value) 
                setData({
                    alarmStatus:data[0].value,
                    faultStatus:data[0].value,
                    systemStatus: aCActivePowerTotalTemp>0?'Charging':aCActivePowerTotalTemp===0? 'Standby':'Discharging',
                    aCLineVoltageL1toL2:data[1].value+" V",
                    aCLineVoltageL2toL3:data[2].value+" V",
                    aCLineVoltageL3toL1:data[3].value+" V",
                    aCCurrentL1:data[4].value+" A",
                    aCCurrentL2:data[5].value+" A",
                    aCCurrentL3:data[6].value+" A",
                    aCFrequency:data[7].value+" Hz",
                    aCActivePowerL1:data[8].value+" kW",
                    aCActivePowerL2:data[9].value+" kW",
                    aCActivePowerL3:data[10].value+" kW",
                    aCReactivePowerL1:data[11].value+" kvar",
                    aCReactivePowerL2:data[12].value+" kvar",
                    aCReactivePowerL3:data[13].value+" kvar",
                    aCApparentPowerL1:data[14].value+" kVA",
                    aCApparentPowerL2:data[15].value+" kVA",
                    aCApparentPowerL3:data[16].value+" kVA",
                    aCPFPowerL1:data[17].value,
                    aCPFPowerL2:data[18].value,
                    aCPFPowerL3:data[19].value,
                    aCActivePowerTotal:aCActivePowerTotalTemp+" kW",
                    aCReactivePowerTotal:data[23].value+" kvar",
                    aCApparentPowerTotal:data[24].value+" kvar",
                    aCPFTotal:data[25].value,
                    gridInterconMode:data[26].value,
                    reactivePowerConMode:data[27].value,
                    pFSetPoint:data[28].value,
                    activePowerSetPoint:data[29].value+" kW",
                    reactivePowerSetPoint:data[30].value+" kvar",
                    activePowerControlMode:data[31].value,
                    sOC: "Null",
                    dCVoltageTotal:0+" V",
                    dCCurrentTotal:0+" A",
                    batteryPowerTotal:0+" kW",
                    fireAlarmStatus:"On",
                    fireProtectionSysFailureStatus:"On",
                    emergencyStopPressed:"Off",
                    hVAC1ComStatus:"Online",
                    hVAC1AlarmStatus:"Online",
                    hVAC1FailureStatus:"Online",
                    hVAC2ComStatus:"Online",
                    hVAC2AlarmStatus:"Online",
                    hVAC2FailureStatus:"Online"
                })

            })
            .catch(err => {
                console.log(err)
            })
        }
        resetData()
        getData()
        const interval = setInterval(() => {
            getData();
        }, MINUTE_MS);
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [id])
    return (
        <>
            <CRow className="pt-10">
                {/*<CCol xs="12" sm="6" lg="5">*/ }
                    <CCard>
                        <CCardHeader className="card text-center" style={{fontWeight:"bold"}}>PCS Information</CCardHeader>
                        <CCardBody style={{padding:5}}>
                            <CListGroup>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Alarm Status</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.alarmStatus}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Fault Status</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.faultStatus}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >System Status</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.systemStatus}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >AC Line Voltage L1 to L2</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCLineVoltageL1toL2}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >AC Line Voltage L2 to L3</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCLineVoltageL2toL3}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >AC Line Voltage L3 to L1</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCLineVoltageL3toL1}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >AC Current L1</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCCurrentL1}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >AC Current L2</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCCurrentL2}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >AC Current L3</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCCurrentL3}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >AC Frequency</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCFrequency}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L1 AC Active Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCActivePowerL1}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L2 AC Active Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCActivePowerL2}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L3 AC Active Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCActivePowerL3}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L1 AC Reactive Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCReactivePowerL1}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L2 AC Reactive Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCReactivePowerL2}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L3 AC Reactive Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCReactivePowerL3}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L1 AC Apparent Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCApparentPowerL1}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L2 AC Apparent Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCApparentPowerL2}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L3 AC Apparent Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCApparentPowerL3}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L1 AC PF</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCPFPowerL1}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L2 AC PF</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCPFPowerL2}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >L3 AC PF</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCPFPowerL3}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Total AC Active Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCActivePowerTotal}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Total AC Reactive Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCReactivePowerTotal}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Total AC Apparent Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCApparentPowerTotal}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Total AC PF</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.aCPFTotal}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Grid Interconnection Mode</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.gridInterconMode}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Reactive Power Control Mode</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.reactivePowerConMode}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >PF Set Point</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.pFSetPoint}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Active Power Set Point</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.activePowerSetPoint}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Reactive Power Set Point</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.reactivePowerSetPoint}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Active Power Control Mode</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.activePowerControlMode}</CCol>
                                    </CRow>
                                </CListGroupItem>
                            </CListGroup>
                        </CCardBody>
                    </CCard>
                    {/*</CCol>*/ }

                {/*<CCol xs="12" sm="6" lg="7">
                <CCard>
                        <CCardHeader className="card text-center" style={{fontWeight:"bold"}}>Energy Storage Information</CCardHeader>
                        <CCardBody style={{padding:5}}>
                            <CListGroup>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >SOC</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.sOC}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >DC Voltage Total</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.dCVoltageTotal}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >DC Current Total</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.dCCurrentTotal}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Total Battery Power</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.batteryPowerTotal}</CCol>
                                    </CRow>
                                </CListGroupItem>
                            </CListGroup>
                        </CCardBody>
                    </CCard>
                    <CCard>
                        <CCardHeader className="card text-center" style={{fontWeight:"bold"}}>Fire Suppression System Information</CCardHeader>
                        <CCardBody style={{padding:5}}>
                            <CListGroup>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Fire Alarm Status</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.fireAlarmStatus}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Fire Protection System Failure Status</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.fireProtectionSysFailureStatus}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >Emergency Stop Pressed</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.emergencyStopPressed}</CCol>
                                    </CRow>
                                </CListGroupItem>
                            </CListGroup>
                        </CCardBody>
                    </CCard>
                    <CCard>
                        <CCardHeader className="card text-center" style={{fontWeight:"bold"}}>HVAC Information</CCardHeader>
                        <CCardBody style={{padding:5}}>
                            <CListGroup>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >HVAC1 Communication Status</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.hVAC1ComStatus}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >HVAC1 Alarm Status</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.hVAC1AlarmStatus}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >HVAC1 Failure Status</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.hVAC1FailureStatus}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >HVAC2 Communication Status</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.hVAC2ComStatus}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >HVAC2 Alarm Status</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.hVAC2AlarmStatus}</CCol>
                                    </CRow>
                                </CListGroupItem>
                                <CListGroupItem style={{fontSize:12, padding:5}}>
                                    <CRow>
                                        <CCol xs="6" sm="6" lg="6" >HVAC2 Failure Status</CCol>
                                        <CCol xs="6" sm="6" lg="6" style={{textAlign:'center'}}>{data.hVAC2FailureStatus}</CCol>
                                    </CRow>
                                </CListGroupItem>
                            </CListGroup>
                        </CCardBody>
                    </CCard>
    </CCol>*/}   
            </CRow>
        </>
    )
}

export default Data;
