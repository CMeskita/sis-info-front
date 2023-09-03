"use client";
import { Button} from '@/app/componets/Buttons/Button'
import React from 'react'
import { useState } from 'react'
import{useForm}from 'react-hook-form'
import{z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Cards } from '@/app/componets/Cards/Cards'
import { baseVariants, cn } from '@/app/componets/Buttons/baseButtonVariants'
import Link from 'next/link';

//vvalidando campos
const createLoginSchema=z.object({
email:z.string()
.nonempty('Email não informado')
.email('Formato do email inválido'),
password:z.string()
.nonempty('Senha não informada')
.min(6,'Senha precisa de no minímo 6 caracteres'),
})
//tipando o objeto de validação
type createLoginFormData=z.infer<typeof createLoginSchema>

export function MainLogin()
{
    //criando constantes de validação
  const [output, SetOutput]=useState('')
  const {register,handleSubmit,formState:{errors}}=useForm<createLoginFormData>({
        resolver:zodResolver(createLoginSchema)})
  
//criando função para receber os daods
 //console.log(output);
  function acessLogin(data:createLoginFormData ){ 
 if(data.password=='123456')
 {
 SetOutput(JSON.stringify(data,null, 2))
 }
  
}
  return (
     
  <main  className="h-screen bg-primaryGray text-white  flex items-center justify-center flex-col gap-4">
      <Cards>
       <p className=' uppercase text-2xl text-center text-primaryWhite'>Acesso</p>
        <form onSubmit={handleSubmit(acessLogin)} className="flex flex-col gap-4 justify-center">        
          <div className='flex flex-col gap-2'>
                <label htmlFor=''>E-Mail</label>
                <input type="email" 
                className={cn(baseVariants({ size: "md", rounded: "full" }),"bg-primarygray text-black w-50")}
                {...register('email')}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <label htmlFor="">Senha</label>
                <input type="password" 
                className={cn(baseVariants({ size: "md", rounded: "full" }),"bg-primarygray text-black w-50")}
                {...register('password')} />
                {errors.password && <span>{errors.password.message}</span>}
                <label htmlFor=""></label>
              
                <Button >{'Enter'}</Button>
          </div>
          <p className='text-center'>Esqueci Senha</p>
        
          <Button type='submit' >{'Cadastrar'}</Button>
        
        </form>
      </Cards>
      <pre className=' text-black'>{output}</pre>
    
    </main>
    
  )
  }