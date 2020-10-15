import React, {useContext} from 'react';

const StateContext = React.createContext();

const useState = () => useContext(StateContext);

const StateProvider = ({children}) => {
    return (
        <StateContext.Provider>
            {children}
        </StateContext.Provider>
    );
};
export default StateProvider;
