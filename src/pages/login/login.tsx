import { useRef } from "react"
import axios from "axios"

const Login = () => {
    const usernameRef = useRef<HTMLInputElement | null>(null) // username: string / null
    const tokenRef = useRef<HTMLInputElement | null>(null) // token: number / null

    const handleSubmit = async () => {
        if (!usernameRef.current?.value && !tokenRef.current?.value) return // no value = break

        try {
            const response = await axios.post("", { // <--- url 
                username: usernameRef.current?.value,
                token: tokenRef.current?.value
            })

            console.log(response.data) // <-- for further processing
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="bg-[linear-gradient(336deg,_#46626A_-36.08%,_#242633_83.86%)] w-screen h-screen p-[30px] font-[Inter] text-white flex items-center justify-center">
            <div className="w-full max-w-[600px] h-[387px] border-1 rounded-2xl flex items-center flex-col text-center px-10 py-8 bg-[#ffffff0a] backdrop-blur-2xl">
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="w-full h-full flex flex-col gap-5">
                        <div>
                            <p className="font-bold font text-2xl">Login</p>
                            <p className="font-extralight text-[16px]">Mau vote? login dulu bos</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col items-start gap-1">
                                <label htmlFor="username">Username</label>
                                <input ref={usernameRef} type="text" name="username" id="username" className="w-full h-9 border-1 rounded-sm bg-[#0000000a] px-2"/>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <label htmlFor="username">Token</label>
                                <input ref={tokenRef} type="password" name="password" id="password" className="w-full h-9 border-1 rounded-sm bg-[#0000000a] px-2"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="w-full h-9 bg-white rounded-sm text-black font-semibold">Login</button>
                    </div>         
                </div>
            </div>
        </div>
    )
}

export default Login