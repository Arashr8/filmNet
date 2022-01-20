import React, { useContext, useEffect } from "react";
import { AuthContext } from "../store/auth";

const Loader = ({isFirst , setLoader}) => {
  
  const {isAuthenticated , fetchCompleted} = useContext(AuthContext)
  useEffect(()=>{
    // console.log({ isAuthenticated: isAuthenticated(), fetchCompleted, isFirst });
    // if(isAuthenticated() || !isAuthenticated() && fetchCompleted){
      // setLoader(false)
    // }
  })
  return (
    <div class="loader">Loading...</div>
  );
};

export default Loader;
