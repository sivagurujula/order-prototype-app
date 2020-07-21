import * as actions from './constants/ActionConstants'
import appoitmentsStub from '../data/appointmentsList.json';
import reserveAppoitmentsStub from '../data/reserveAppointment.json';

export function getAppointmentsRequest(){
    return {
        type: actions.GET_APPOINTMENTS_REQUEST,
        isLoading: true
    }
}

export function getAppointmentsSucess(appointmentsList){
    return {
        type: actions.GET_APPOINTMENTS_SUCESS,
        isLoading: false,
        appointments: appointmentsList
    }
}
export function getAppointmentsFailure(message){
    return {
        type: actions.GET_APPOINTMENTS_FAILURE,
        isLoading: false,
        error: message
    }
}
export function reserveAppointmentRequest(appiontment){
    return {
        type: actions.RESERVE_APPOINTMENT_REQUEST,
        isLoading: true,
        reserveAppointmentRequest : appiontment
    }
}

export function reserveAppointmentSucess(appiontment){
    return {
        type: actions.RESERVE_APPOINTMENT_SUCESS,
        isLoading: false,
        reservedAppointmentResponse: appiontment
    }
}
export function reserveAppointmentFailure(message){
    return {
        type: actions.RESERVE_APPOINTMENT_FAILURE,
        isLoading: false,
        error: message
    }
}
export function reserveAppointment(appiontment){
    console.log('reserveAppointment Input: ',appiontment)
    return function(dispatch){
        console.log(' reserveAppointment dispatch Request')
        dispatch(reserveAppointmentSucess(reserveAppoitmentsStub))
        console.log(' reserveAppointment dispatch Sucess')
    }
    // const payLoad = {
    //     "externalId": "432113",
    //     "category": "intervention",
    //     "description": "Fix an internet connexion problem for a customer",
    //     "validFor": {
    //         "startDateTime": "2020-07-15T14:00:00.071Z",
    //         "endDateTime": "2020-07-15T16:00:00.071Z"
    //     },
    //     "attachment": [
    //         {
    //             "id": "4444",
    //             "href": "https://host:port/documentManagement/customerContract/4444",
    //             "isRef": true,
    //             "@referredType": "CustomerContract",
    //             "@baseType": "Attachment"
    //         }
    //     ],
    //     "calendarEvent": {
    //         "id": "33",
    //         "href": " https://host:port/timeManagement/calendarEvent/33",
    //         "name": "Outlook calendar event"
    //     },
    //     "relatedParty": [
    //         {
    //             "id": "32",
    //             "href": "https://host:port/partyManagement/individual/32",
    //             "name": "Kate Smith",
    //             "role": "customer",
    //             "@referredType": "Individual"
    //         },
    //         {
    //             "id": "56",
    //             "href": "https://host:port/partyManagement/individual/56",
    //             "name": "John Doe",
    //             "role": "technician",
    //             "@referredType": "Individual"
    //         }
    //     ],
    //     "RelatedPlace": {
    //         "id": "888",
    //         "href": "https://host:port/addressManagement/geographicAddress/888",
    //         "name": "Main Home",
    //         "role": "interventionAddress",
    //         "@referredType": "GeographicAddress"
    //     },
    //     "relatedEntity": [
    //         {
    //             "id": "789",
    //             "href": "https://host:port/troubleTicket/troubleTicket/789",
    //             "name": "Full Fiber installation",
    //             "role": "Problem description",
    //             "@referredType": "InstallationTicket"
                
    //         },
    //         {
    //             "id": "465",
    //             "href": "https://host:port/workForceManagement/workOrder/465",
    //             "role": "work order description",
    //             "name": "Work order generated for technician intervention",
    //             "@referredType": "WorkOrder"
    //         }
    //     ],
    //     "note": [
    //         {
    //             "date": "2020-07-04T11:00:18.071Z",
    //             "author": "Ludovic Robert",
    //             "text": "Problem explained to the technician"
    //         },
    //         {
    //             "date": "2020-07-04T14:40:43.071Z",
    //             "author": "Ludovic Robert",
    //             "text": "Work order generated"
    //         }
    //     ]
    // }
    // return function(dispatch,appiontment){
    //     dispatch(reserveAppointmentRequest(appiontment))
    //     fetch('https://067cf8a3-4274-4333-92c2-dcb4adb3fe28.mock.pstmn.io/appointment',{
    //         method : 'POST',
    //         headers: {
    //             'Accept': 'application/json'
    //         },
    //         body : JSON.stringify(payLoad)
    //     })
    //     .then(async(resp) => {
    //         const response = resp.json()
    //         return response
    //     })
    //     .then(response => {
    //         console.log(response)
    //         dispatch(reserveAppointmentSucess(response))
    //     })
    //     .catch(error => {
    //         console.log("error" ,error);
    //         dispatch(reserveAppointmentFailure(error.message))
    //     })
    // }
}

export function fetchAppointments(){
    console.log(' fetchAppointments')
    return function(dispatch){
        console.log(' dispatch Request')
        dispatch(getAppointmentsSucess(appoitmentsStub.availableTimeSlot.map(appointment => appointment.validFor)))
        console.log(' dispatch Sucess')
    }
    // const payLoad = {
    //     "requestedTimeSlot": [
    //         {
    //             "validFor": {
    //                 "startDateTime": "2020-07-13T00:00:00.000Z",
    //                 "endDateTime": "2020-07-21T00:00:00.000Z"
    //             }
    //         }
    //     ],
    //     "RelatedPlace": {
    //         "id": "888",
    //         "href": "https://host:port/addressManagement/geographicAddress/888",
    //         "name": "Main Home",
    //         "role": "interventionAddress",
    //         "@referredType": "GeographicAddress"
    //     },
    //     "relatedEntity": [
    //         {
    //             "id": "789",
    //             "href": "https://host:port/troubleTicket/troubleTicket/789",
    //             "name": "Full Fiber installation",
    //             "role": "Problem description",
    //             "@referredType": "InstallationTicket"
    //         }
    //     ]
    // };
    
    // return function(dispatch){
    //     dispatch(getAppointmentsRequest())
    //     fetch('https://067cf8a3-4274-4333-92c2-dcb4adb3fe28.mock.pstmn.io/searchTimeSlot',{
    //         method : 'POST',
    //         headers: {
    //             'Accept': 'application/json'
    //         },
    //         body : JSON.stringify(payLoad)
    //     })
    //     .then(async(resp) => {
    //         const response = resp.json()
    //         console.log('Response: ', resp)
    //         return response
    //     })
    //     .then(response => {
    //         console.log(response)
    //         const appointments = response.availableTimeSlot.map(appointment => appointment.validFor);
    //         //console.log(appointments);
    //         dispatch(getAppointmentsSucess(appointments))
    //     })
    //     .catch(error => {
    //         console.log("error" ,error);
    //         dispatch(getAppointmentsFailure(error.message))
    //     })
    // }
}