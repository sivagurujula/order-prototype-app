import {connect} from 'react-redux'
import {fetchAddresses} from '../actions/GetAddressesAction'
import AddressForm from '../components/AddressForm'
// import { withRouter } from "react-router";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAddresses : () =>{
            dispatch(fetchAddresses())
        }
    }
}


const AddressFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressForm)


export default AddressFormContainer