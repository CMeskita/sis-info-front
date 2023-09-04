
import MainLayout from '@/app/layouts/MainLayout'
import React from 'react'

export  function dashboard  ( {children}: {
  children: React.ReactNode
}) {
  return (
    <div className=' bg-primaryWhite'>
    <MainLayout>{children}</MainLayout>   
     <h1>teste</h1>
    <main>{children}</main></div>
  )
}

export default dashboard
