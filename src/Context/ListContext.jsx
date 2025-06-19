import React,{ createContext, useState } from "react";

export const ListContext=createContext(null);

export const ListProvider=({children})=>
{
  const [myList,setMyList]=useState(localStorage.getItem('myList')?JSON.parse(localStorage.getItem('myList')):[]);
  console.log("context rendered");
  

  return(
    <ListContext.Provider value={{myList,setMyList}}>
        {children}
    </ListContext.Provider>
  );
};