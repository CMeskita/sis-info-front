import { baseVariants, cn } from '@/app/componets/Buttons/baseButtonVariants'
import React, { ButtonHTMLAttributes } from 'react'


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
  
export function Button  ({children, ...props}:ButtonProps) {

  return (
    <button       
         
          className={cn(
            baseVariants({ size: "md", rounded: "full" }),
            "bg-primaryDark text-primaryWhite shadow-md shadow-primaryWhite w-50")}
        >{children}</button>
  
  )
}
