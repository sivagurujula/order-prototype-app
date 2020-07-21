import React,{Component} from 'react'

export default class AppointmentList extends Component{
    constructor(props){
        super(props);
        console.log('AppointmentList:: Props')
        console.log(props)
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
                            ' '+ startHours +' - '+endHours;
        return convertedStr;
    }
    getList = (list) => {
        list.sort(function(a, b){
            let startDateA = new Date(a.startDateTime);
            let startDateB = new Date(b.startDateTime);
            return startDateA - startDateB;
        });
        
        const appointments = (list === undefined) ? []:list.map( (data,index) => {
            console.log('data from response: ',data);
            return (<li key={index}>{this.formatDateTimeSlot(data)}</li>)
        })
        return appointments;
    }
    componentDidMount(){
        this.props.fetchAppointments();
    }
    render(){
        const {appointments} = this.props;

        return (
            <React.Fragment>
                <ul>
                {this.getList(appointments)}
                </ul>
            </React.Fragment>
        )
    }
}