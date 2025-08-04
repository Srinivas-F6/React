/* useContext() = React hook that allows you to share values
                  between multiple levels of components
                  without passing props through each level
*/

//  provider component

/*
  1. import {createContext} from 'react';
  2. export const myContext = createConext();
  3. <myContext.Provider value={value}>
     <child/>
     </myContext.Provider>
*/



// Consumer Components

/*
  1.import React, {useContext} from 'react';
    import {MyContext} from './ComponentA';
  2. const value = useContext(MyContext);
*/
