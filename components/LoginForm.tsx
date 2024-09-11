import React from 'react'
import { LoginButton } from './auth/login-button'

const LoginForm = () => {
  return (
    <>
    {/* Inputs */}
    <div className="w-full flex flex-col gap-4 mt-10">
      <input type="text" name="email" className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" placeholder="Email" />
      <input type="password" name="password" className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" placeholder="Mot de passe" />
    </div>
    {/* Login Button */}
    <LoginButton>
      <button type="submit" className="text-zinc-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Se connecter</button>
    </LoginButton>
    {/* Divider */}
    <div className="w-full h-px bg-gray-300 my-10 relative">
      <p className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-xs text-white bg-zinc-900 px-3">Ou</p>
    </div>
    </>
  )
}

export default LoginForm