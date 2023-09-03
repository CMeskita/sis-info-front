import React from 'react'

export function Cards ({children}: {children: React.ReactNode}) {
  return (
    <div className=' bg-slate-800 shadow-lg shadow-primayWhite drop-shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4 ' id='card'>
        {children}</div>    
  )
}
