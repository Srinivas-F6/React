import React ,{ useState,useContext,createContext } from "react";
import ComponentB from "./componentB";
export const UserContext = createContext();
function ComponentA(){
    
    const[user,setUser] = useState("Srinivas");
    return( 
        <div className="box">
            <h1>ComponentA</h1>
            <UserContext.Provider value={user}>
                <h2>Hello : {user}</h2>
                <ComponentB/>
            </UserContext.Provider>
        </div>
    )
}
export default ComponentA;
