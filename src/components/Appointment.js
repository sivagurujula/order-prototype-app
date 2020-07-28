import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import {Redirect} from 'react-router-dom';

import { Badge, Image, ButtonToolbar } from 'react-bootstrap';

import appMsg from '../appointmentMsg.jpg'


class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsData: null,
            defaultSlot: 'Mon 20 Jul 8am - 1pm',
            selectedAppointment: null,
            showOtherSlots: false,
            appointmentsFromAPI: null,
        }
    }
    showOtherSlots = () => {
        this.setState({ showOtherSlots: true })
    }
    reserveSlot = (data) => {
        console.log("Slot selected: ",data)  ;
        this.setState({ showOtherSlots: true ,defaultSlot: data.slot, selectedAppointment: data });
    }
    onSubmitReserve = () =>{
       // this.props.reserveAppointment(this.state.selectedAppointment);
        //history.push('/AppointmentsContainer');
        //return  <Redirect  to="/reserve/" />
        this.props.history.push('/reserve/');
    }
    chunk = (appoitmentsArr, size, selectedAppId) => {
        let output = []
        
        const max = appoitmentsArr.length + (appoitmentsArr.length % size) + 1
        for (let j = 0; j < max; j++) {
            let appoitments = appoitmentsArr.slice((j)*size, (j+1)*size); 
            const buttonsData = appoitments.map((data, index) => {

                return (

                    <ToggleButton variant={selectedAppId === data.id ? "success" : "light"} key={data.id} value={data.id}
                        className="rounded mb-0 mr-1 block-example border border-dark"
                        onClick={() => this.reserveSlot(data)}> 
                        {data.slot}
                        
                    </ToggleButton>

                )
            });
            output.push(<ToggleButtonGroup name={'pickAppointment' + j} key={j}
                size="lg" className="mb-2" type="radio" >{buttonsData}<br /></ToggleButtonGroup>)
        }
        return output
    }
    getAppointments() {
        let selectedAppId = this.state.selectedAppointment == null ? null : this.state.selectedAppointment.id;

        if (selectedAppId == null) {
            selectedAppId = 1;
        }
        const {appointmentsFromAPI} = this.state;
        const buttonsData = this.chunk(appointmentsFromAPI === null?this.getList(this.props.appointments):appointmentsFromAPI, 5, selectedAppId);
        // const buttonsData = appoitments.map( (data) =>{
        //     return (
        //       <ToggleButton variant={selectedAppId === data.id?"success":"light"} key={data.id} value={data.id}
        //       className="rounded mb-0 mr-2 block-example border border-dark"
        //       onClick={()=> this.reserveSlot(data)}>
        //          {data.slot}</ToggleButton>
        //     )
        //   });
        
        return buttonsData;
    }
    formatDateTimeSlot = (validFor) =>{
        //const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
       // const month = ['Jan','Feb','Mar','Apr','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let startDate = new Date(validFor.startDateTime);
        //let endDate = new Date(validFor.endDateTime);
        const timeString12hr =     {timeZone:'UTC',hour12:true,hour:'numeric'};
        const weekDay = {weekday: 'short'};
        const month = {month: 'short'};
        const startHours = startDate.toLocaleTimeString({},timeString12hr);
        const endHours = new Date(validFor.endDateTime)
                            .toLocaleTimeString({},timeString12hr);
        const weekDayStr = startDate.toLocaleDateString({},weekDay);
        const monthStr = startDate.toLocaleDateString({},month);
        let convertedStr =  weekDayStr+ ' ' + startDate.getDate()+ 
                            ' '+monthStr + ' ' +
                            ' '+ startHours.toLocaleLowerCase().replace(/\s/g, '') +' - '+endHours.toLocaleLowerCase().replace(/\s/g, '');
        return convertedStr;
    }
    formatWeekSlot = (validFor) =>{
        //const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
       // const month = ['Jan','Feb','Mar','Apr','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let startDate = new Date(validFor.startDateTime);
        //let endDate = new Date(validFor.endDateTime);
        
        const weekDay = {weekday: 'short'};
        const month = {month: 'short'};
        
        const weekDayStr = startDate.toLocaleDateString({},weekDay);
        const monthStr = startDate.toLocaleDateString({},month);
        let convertedStr =  weekDayStr+ ' ' + startDate.getDate()+ 
                            ' '+monthStr ;
        return convertedStr;
    }
    formatTimeSlot = (validFor) =>{
        //const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
       // const month = ['Jan','Feb','Mar','Apr','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let startDate = new Date(validFor.startDateTime);
        //let endDate = new Date(validFor.endDateTime);
        const timeString12hr =     {timeZone:'UTC',hour12:true,hour:'numeric'};
        
        const startHours = startDate.toLocaleTimeString({},timeString12hr);
        const endHours = new Date(validFor.endDateTime)
                            .toLocaleTimeString({},timeString12hr);
       
        let convertedStr =  startHours +' - '+endHours;
        return convertedStr;
    }
    getList = (list) => {
        list.sort(function(a, b){
            let startDateA = new Date(a.startDateTime);
            let startDateB = new Date(b.startDateTime);
            return startDateA - startDateB;
        });
        console.log('getList:: loading...',this.props.isLoading)
        const appointments = (list === undefined) ? []:list.map( (data,index) => {
            
            return ({id:index+1,slot:this.formatDateTimeSlot(data),weekMonth:this.formatWeekSlot(data),timeSlot:this.formatTimeSlot(data),validFor:data})
        })
        console.log('appointmentsJSON: ',appointments)
        const defaultSlot = appointments[0];        
        
        this.setState({...this.state,appointmentsFromAPI: appointments,defaultSlot:defaultSlot.slot,selectedAppointment:defaultSlot});
        this.props.reserveAppointment(defaultSlot);
        return appointments;
    }
    componentDidMount(){
        this.props.fetchAppointments();        
    }
    componentWillReceiveProps(nextProps){
        
        if (this.props.appointments !== nextProps.appointments){
            console.log('nextProps',nextProps)
            console.log('cuurentProps',this.props)
            this.getList(nextProps.appointments);           
        }
    }
    render() {
        const { defaultSlot, showOtherSlots ,selectedAppointment} = this.state;
        const {isLoading} = this.props;
        return (
            <React.Fragment>


                <Image src={appMsg} /><br></br>
                {isLoading &&
                    <>
                        Loading...
                    </>
                }
                {!showOtherSlots && !isLoading  &&
                    <>
                        <h3> We've reserved the first available appointment</h3>
                        <Button variant="success" disabled className="rounded mb-0 mr-2 block-example border border-dark">
                            {defaultSlot}
                        </Button>
                        <Badge variant="success">Reserved</Badge>
                        <br></br><br></br>


                        {/* <Button variant="primary" onClick={() => this.showOtherSlots()}>Pick Another Slot?</Button>{' '} */}
                    </>
                }
                {showOtherSlots &&
                    <>

                        <div className="container">
                            <h3 className="center">Select an appointment</h3>
                            <div className="box">
                                <ButtonToolbar name="pickAppointment" defaultValue={selectedAppointment.id}>

                                    {this.getAppointments()}

                                </ButtonToolbar>

                            </div>
                            
                        </div>

                    </>
                }
                <Button variant="primary" onClick={() => this.showOtherSlots()}>Pick Another Slot?</Button>{' '}
                {/* <Button variant="primary" onClick={() => this.onSubmitReserve()}>Continue</Button>{' '} */}
                
            </React.Fragment>
        )
    }
}

export default Appointment