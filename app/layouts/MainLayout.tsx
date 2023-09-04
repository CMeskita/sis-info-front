import { MainHeader } from '@/app/layouts/MainHeader'
import React, { ReactNode } from 'react'

interface MainLayoutProps
{
    children:ReactNode
}

export default function  MainLayout  ({children}:MainLayoutProps)  {
  return (
    <div className='h-full bg-primaryWhite'>
    <MainHeader/>
   
    <main>

    </main>
    
    </div>
  )
}
