import * as actions from './constants/ActionConstants'
import addressesStub from '../data/addressList.json';

export function getAddressesRequest(){
    return {
        type: actions.GET_ADDRESSES_REQUEST,
        isLoading: true
    }
}

export function getAddressesSucess(AddressesList){
    return {
        type: actions.GET_ADDRESSES_SUCESS,
        isLoading: false,
        addresses: AddressesList
    }
}
export function getAddressesFailure(message){
    return {
        type: actions.GET_ADDRESSES_FAILURE,
        isLoading: false,
        error: message
    }
}

export function fetchAddresses(){
    console.log(' fetchAddresses')
    return function(dispatch){
        console.log(' dispatch Request')
        dispatch(getAddressesSucess(addressesStub.addresses.map(address => address)))
        console.log(' dispatch Sucess')
    }
    // const payLoad = {
    //     "requestedTimeSlot": [
    //         {
    //             "validFor": {
    //                 "startDateTime": "2020-07-27T00:00:00.000Z",
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
    //     dispatch(getAddressesRequest())
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
    //         const Addresses = response.availableTimeSlot.map(appointment => appointment.validFor);
    //         //console.log(Addresses);
    //         dispatch(getAddressesSucess(Addresses))
    //     })
    //     .catch(error => {
    //         console.log("error" ,error);
    //         dispatch(getAddressesFailure(error.message))
    //     })
    // }
}