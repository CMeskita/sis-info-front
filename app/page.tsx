"use client";
import { MainHeader } from '@/app/layouts/MainHeader'
import { MainLogin } from '@/app/login/MainLogin';



export default function Home(
 { children,
}: {
  children: React.ReactNode
}
) {

  return (
    <html lang="pt-br">
      <body><MainLogin /></body>
    </html>
  )
}
