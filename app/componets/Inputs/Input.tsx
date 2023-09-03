import React, { InputHTMLAttributes } from 'react'
import { baseVariants, cn } from '@/app/componets/Buttons/baseButtonVariants'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function Input (
  {children,
    ...props}:InputProps) {

  return (

    <input 
        className={cn(
          baseVariants({ size: "md", rounded: "full" }),
        "bg-primarygray text-black w-50",
        
        )}
        {...props}
    />
  
  )
}

