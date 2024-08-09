import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Protected(props) {
  const navigate = useNavigate()
  let Cmp=props.Cmp
  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate('/signin')
    }
  })
  return (
    <div>
      <Cmp />
    </div>
  )
}

export default Protected