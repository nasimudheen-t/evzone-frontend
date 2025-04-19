import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";


// register

export const registerAPI = async(reqbody)=>{
    return await commonAPI ("POST",`${SERVER_URL}/user-register`,reqbody)
}


// login

export const loginAPI = async(reqbody)=>{
    return await commonAPI ("POST",`${SERVER_URL}/user-login`,reqbody)
}

// create event

export const AddEventsbyAdmin = async(reqbody)=>{
  return await commonAPI ("POST",`${SERVER_URL}/create-event`,reqbody)
}

// Get ALL Events

export const getAllEventsAPI = async()=>{
   return await commonAPI ("GET",`${SERVER_URL}/all-events`,)
}

// edit event
export const editEventsAPI = async(id,reqbody)=>{
  return await commonAPI ("PUT",`${SERVER_URL}/update-event/${id}`,reqbody)
}

// delete event
export const deleteEventsAPI = async(id)=>{
  return await commonAPI ("DELETE",`${SERVER_URL}/delete-event/${id}`,{})
}

// search event

export const searcEventsAPI = async(keyword)=>{
  return await commonAPI ("GET",`${SERVER_URL}/search?keyword=${keyword}`,{})
}

// get event by id
export const getEventByIdAPI = async(id,reqheaders)=>{
  return await commonAPI ("GET",`${SERVER_URL}/get-event/${id}`,{},reqheaders)
}

// order razorpay

export const orderPaymentAPI = async(data)=>{
  return await commonAPI ("POST",`${SERVER_URL}/order`,data)
}

// verify order

export const verifyPaymentAPI = async(data)=>{
  return await commonAPI ("POST",`${SERVER_URL}/order`,data)
}

// booked users order

export const bookedUserDAtaAPI = async(reqBody,header)=>{
  return await commonAPI ("POST",`${SERVER_URL}/add-bookeduser`,reqBody,header)
}

//get all booked users order

export const getAllBookedUserDAtaAPI = async()=>{
  return await commonAPI ("GET",`${SERVER_URL}/booked-users`,{})
}