import React, { createContext } from "react";

export const pizzaContext = createContext(null);

export default function PizzaContextProvider(props){



    const value = {}

    return(
        <pizzaContext.Provider value = {value}>
            {props.children}
        </pizzaContext.Provider>
    )
}