"use client";

import { useState, useEffect } from "react"
import { signIn, useSession, getProviders } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { LoginButton } from "@/components/auth/login-button"

const Login = () => {
  const { data: session, status } = useSession()

  const router = useRouter()
  const [provider, setProvider]: any = useState({});
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // It will allow us to log in with Google and next-auth
    (async () => {
      await getProviders()
      .then((providers: any) => {
        Object.values(providers).map((provider: any) => {
          if (provider.id === "google") {
            setProvider(provider);
          }
        })
      });
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (session && status === "authenticated") {
      setIsLogged(true)
      router.push("/dashboard")
      return
    }
    setIsLogged(false)
    router.push("/login")
  }, [router, session, status])



  return (
    <main className="flex w-[100dvw] h-[100dvh] flex-col items-center justify-center bg-red-200">
      {/* Banner */}
      <div className="fixed inset-0 z-10">
        <Image src="/assets/banner.jpg" alt="banner" width={2000} height={2000} className="w-full h-full object-cover" />
      </div>

      {/* Overlay */}
      <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-70 z-20 p-4">
        <div className="w-full max-w-[500px] h-full max-h-[600px] rounded-xl p-8 relative overflow-hidden">
          {/* Bg image */}
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/assets/waves.png" alt="banner" width={2000} height={2000} className="w-full h-full object-cover" />
          </div>
          {/* Content */}
          <div className="flex flex-col h-full relative">
            {/* Logo and titles */}
            <div className="flex flex-col justify-center items-center gap-4">
              <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
              <h1 className="text-xl font-bold text-white mt-2 text-center">Portail d{`'`}administration</h1>
            </div>
            {/* Inputs */}
            <div className="w-full flex flex-col gap-4 mt-10">
              <input type="text" name="email" className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" placeholder="Email" disabled={loading || isLogged} />
              <input type="password" name="password" className="bg-transparent border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" placeholder="Mot de passe" disabled={loading || isLogged} />
            </div>
            {/* Login Button */}
            <LoginButton>
              <button type="submit" className="bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:text-gray-500 disabled:focus:ring-0 disabled:cursor-not-allowed" disabled={loading || isLogged}>Se connecter</button>
            </LoginButton>
            {/* Divider */}
            <div className="w-full h-px bg-gray-300 my-10 relative">
              <p className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-xs text-white bg-zinc-900 px-3">Ou</p>
            </div>
            <div className="flex justify-center">
              {isLogged ? (
                <div className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                  Auth OK - Redirection...
                  <div className="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
                  </div>
                </div>
              ) : (
                /* Social button */
                <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-gray-300 disabled:border disabled:border-gray-500" onClick={() => signIn(provider.id)} disabled={loading}>
                  {loading ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 me-2 text-gray-500" viewBox="0 0 1024 1024"><path fill="currentColor" d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8c-34.4 23-78.3 36.6-129.9 36.6c-99.9 0-184.4-67.5-214.6-158.2c-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1c56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100c-149.9 0-279.6 86-342.7 211.4c-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93c72.5-66.8 114.4-165.2 114.4-282.1c0-27.2-2.4-53.3-6.9-78.5"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 me-2" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
                  )}
                  Continuer avec Google
                  {loading && 
                    <div className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
                    </div>
                  }
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login