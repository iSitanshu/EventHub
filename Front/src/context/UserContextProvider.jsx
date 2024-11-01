import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [updatelocation, setUpdateLocation] = React.useState('')
    const [checkfordisplaylocation, setCheckfordisplayLocation] = useState(false)

    return (
        <UserContext.Provider value={{updatelocation, setUpdateLocation, checkfordisplaylocation, setCheckfordisplayLocation}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider