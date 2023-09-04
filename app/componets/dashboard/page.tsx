
import { MainHeader } from '@/app/layouts/MainHeader'
import React from 'react'

export  function dashboard  ( {children}: {
  children: React.ReactNode
}) {
  return (
    <div className=' bg-primaryWhite'>
    <MainHeader />   
     <h1>MainLayout</h1>
    <main>{children}</main></div>
  )
}

export default dashboard
