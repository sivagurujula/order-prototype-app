import {connect} from 'react-redux'
import {fetchAppointments, reserveAppointment} from '../actions/GetAppointmentsAction'
import Appointment from '../components/Appointment'
// import { withRouter } from "react-router";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAppointments : () =>{
            dispatch(fetchAppointments())
        },
        reserveAppointment :(appiontment) =>{
            dispatch(reserveAppointment(appiontment))
        }
    }
}


const AppointmentsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Appointment)


export default AppointmentsContainer