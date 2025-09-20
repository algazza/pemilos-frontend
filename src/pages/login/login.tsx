import { useRef, useState } from "react"
import axios, { AxiosError, isAxiosError } from "axios"
import usersDummy from "@/lib/dummy"
import { apiUrl } from "@/lib/api"

const Login = () => {
    const usernameRef = useRef<HTMLInputElement | null>(null) // username: string / null
    const tokenRef = useRef<HTMLInputElement | null>(null) // token: number / null

    // buat warning text
    const [isCredentialWrong, setIsCredentialWrong] = useState<boolean>(false)
    const [isNotFilled, setIsNotFilled] = useState<boolean>(false)
    const [isVoted, setIsVoted] = useState<boolean>(false)

    const [username, setUsername] = useState<string>("")

    const removeWarning = () => {setIsCredentialWrong(false); setIsNotFilled(false); setIsVoted(false);}

    const handleSubmit = async () => {
        if (!usernameRef.current?.value || !tokenRef.current?.value) {setIsNotFilled(true); return} // no value = break
        try {
            console.log({
                username: usernameRef.current?.value,
                password: `${tokenRef.current?.value}:${usernameRef.current?.value}`
            })
            const response = await axios.post(`${apiUrl}/auth/login`, { // <--- url           <--- buat real backend pake ini harusnya
                username: usernameRef.current?.value,
                password: `${tokenRef.current?.value}:${usernameRef.current?.value}`
            })
            console.log(response.data["token"])
            localStorage.setItem("Authorization", response.data["token"])
            if(response.data.status === "sucess") window.location.href = "/"
        } catch(err) {
            if(isAxiosError(err)) {
                if(err.response?.status == 401) {
                    setIsVoted(true)
                }
                if(err.response?.status == 400) {
                    setIsCredentialWrong(true)
                }
            }
        }
    }

    return (
        <div className="bg-[linear-gradient(336deg,_#46626A_-36.08%,_#242633_83.86%)] w-screen h-screen p-[30px] font-[Inter] text-white flex items-center justify-center">
            <div className="w-full max-w-[600px] h-[387px] border-1 rounded-2xl flex items-center flex-col text-center px-10 py-8 bg-[#ffffff0a] backdrop-blur-2xl">
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="w-full h-full flex flex-col gap-5">
                        <div>
                            <p className="font-bold font text-2xl">Login</p>
                            <p className="font-extralight text-[16px]">silahkan login sebelum vote</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col items-start gap-1">
                                <label htmlFor="username">Username</label>
                                <input onChange={(e) => {removeWarning(); setUsername(e.target.value)}} ref={usernameRef} type="text" name="username" id="username" className="w-full h-9 border-1 rounded-sm bg-[#0000000a] px-2"/>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <label htmlFor="password">Token</label>
                                <div className="flex flex-row gap-1 justify-between items-center w-full">
                                    <div>
                                        <input onChange={removeWarning} ref={tokenRef} type="text" name="password" id="password" className="w-full h-9 border-1 rounded-sm bg-[#0000000a] px-2"/>
                                    </div>
                                    <p className="font-[Inter] font-bold text-xl">:</p>
                                    <div>
                                        <input readOnly onChange={removeWarning} value={username} type="text" name="password" id="password" className="text-[#ffffff] w-full h-9 border-1 rounded-sm bg-[#0000000a] px-2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {isCredentialWrong ? <p className="text-left font-light text-sm"><span>{"[ ! ] "}</span>Username atau token tidak valid!</p> : ""}
                        {isNotFilled ? <p className="text-left font-light text-sm"><span>{"[ ! ] "}</span>Username dan token wajib diisi!</p> : ""}
                        {isVoted ? <p className="text-left font-light text-sm"><span>{"[ ! ] "}</span>Anda sudah vote!</p> : ""}
                        <button onClick={handleSubmit} className="w-full h-9 bg-white rounded-sm text-black font-semibold">Login</button>
                    </div>         
                </div>
            </div>
        </div>
    )
}

export default Login