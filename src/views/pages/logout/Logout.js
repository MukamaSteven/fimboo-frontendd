/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react'
import './../../pages/logout/logout.css'
import { reset } from '../../../features/auth/authSlice'

function Logout() {
  return (
    <div>
      <button className="logoutbutton"> Logout</button>{' '}
    </div>
  )
}

export default Logout
