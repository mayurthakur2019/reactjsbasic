import React, { useContext, useState } from "react";
import { NameContext } from '../App'


function Ccom() {
    let name =useContext(NameContext)

  return (
    <div><h1>{name}</h1>
    
    </div>
  )
}

export default Ccom