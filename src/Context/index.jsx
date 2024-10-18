import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [isValidPath, setIsValidPath] = useState();

    return (
        <UserContext.Provider value={{
            isValidPath,
            setIsValidPath,
            location
        }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node,
}

export const useUserContext = () => useContext(UserContext);