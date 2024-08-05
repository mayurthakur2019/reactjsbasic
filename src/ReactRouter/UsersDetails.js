import React from 'react'
import { useParams } from 'react-router-dom'

function UsersDetails() {
 const {id} = useParams();
  return (
    <div>UsersDetails Page {id}</div>
  )
}

export default UsersDetails