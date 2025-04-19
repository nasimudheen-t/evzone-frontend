import React, { createContext, useEffect, useState } from 'react'
  
export const myContextApi = createContext()


const ContextAPI = ({children}) => {
    const[bookedUser,setBookedUser] = useState()
    
      
    const [userData,setUserData] = useState()
  



    useEffect(()=>{
      
        const storedUser = sessionStorage.getItem('userdata')
        if(storedUser){
          setUserData(JSON.parse(storedUser));
        }
    },[])

    
  return (
    <>
    <myContextApi.Provider value={{bookedUser,setBookedUser,userData,setUserData}}>
        {children}
    </myContextApi.Provider>
    </>
  )
}

export default ContextAPI