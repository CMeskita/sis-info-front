import React from 'react'

export const MainTransition = ({children,}: {
    children: React.ReactNode
  }) => {
  return (
    <div>
<p>TRANSITION</p>
    <main>{children}</main>
    </div>
  )

  
}



