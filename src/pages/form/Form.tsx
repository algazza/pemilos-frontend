import Confirmation from "@/components/FormConfirmation"
import MpkCard from "@/components/mpkCard"
import OsisCard from "@/components/OsisCard"
import axios from "axios"
import { useEffect, useState } from "react"

const Form = () => {
    const [osisValue, setOsisValue] = useState<any>(null) // isinya id, buat styling sama fetch
    const [mpkValue, setMpkValue] = useState<any>(null) // isinya id, buat styling sama fetch
    const [filled, setFilled] = useState<boolean | null>(null)
    const [currentFill, setCurrentFill] = useState<"OSIS" | "MPK" | null>(null) // dynamic styling
    const [confirmation, setConfirmation] = useState<boolean>(false)
    const [isSent, setIsSent] = useState<boolean>(false)

    const osisVoteHandler = (id: any): void => {
        setOsisValue(id)
        setCurrentFill("OSIS")
    }

    const mpkVoteHandler = (id: any): void => {
        setMpkValue(id)
        setCurrentFill("MPK")
    }

    const vote = async () => {
        if(!localStorage.getItem("Authorization")) window.location.href = "/"
        if(!osisValue || !mpkValue) {setFilled(false); setConfirmation(false); return}
        try {
            setIsSent(true)
            const res = await axios.post('', {})
            console.log(res)
        } catch(err) {
            console.log(err)
        }

        localStorage.removeItem("Authorization")
        window.location.href = "/login"
    }

    useEffect(() => setFilled(null), [osisValue, mpkValue])

    return (
        <div className="relative w-screen min-h-screen font-[Inter] text-white flex justify-center overflow-x-hidden">
            <div className={`bg-[linear-gradient(336deg,_#46626A_-36.08%,_#242633_83.86%)] relative w-screen min-h-screen font-[Inter] text-white flex justify-center`}>
                <span className={`fixed inset-0 z-9 transition-opacity duration-500 ease-in-out backdrop-blur-md ${confirmation ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <Confirmation vote={vote} setConfirmation={setConfirmation} isSent={isSent} />
                </span>
                <div className="w-150 lg:w-240 py-5 px-5 flex flex-col gap-10 z-1">
                    <div>
                        <div className="text-center">
                            <p className="font-bold text-5xl bg-[white] bg-clip-text text-transparent">Vote</p>
                            <p className="font-medium text-md tracking-wider">Pilih Kandidatmu</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-3xl bg-[linear-gradient(224deg,_#E58C8C_-14.26%,_#A47272_140.15%)] bg-clip-text text-transparent">MPK</div>
                            <div className="grid grid-cols-2 gap-5 w-full">
                                <MpkCard id={"Alden F. H."} name="Alden F. H." img="Alden-1-aF0LkwjD.png" mpkVoteHandler={mpkVoteHandler} mpkValue={mpkValue} />
                                <MpkCard id={"Seva A. P."} name="Seva A. P." img="Seva-2-CaMTsY6Q.png" mpkVoteHandler={mpkVoteHandler} mpkValue={mpkValue} />
                                <MpkCard id={"Attaya S. A."} name="Attaya S. A." img="Attaya-3-B4QiY6bf.png" mpkVoteHandler={mpkVoteHandler} mpkValue={mpkValue} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-3xl bg-[linear-gradient(224deg,_#82B9C8_-14.26%,_#648F9A_140.15%)] bg-clip-text text-transparent">OSIS</div>
                            <div className="grid grid-cols-2 gap-5 w-full">
                                <OsisCard id={"Rafif F. P."} name="Rafif F. P." img="Rafif-1-cUHUsNgs.png" osisVoteHandler={osisVoteHandler} osisValue={osisValue} />
                                <OsisCard id={"Zahra R. M."} name="Zahra R. M." img="Zahra-2-DLpGzRhv.png" osisVoteHandler={osisVoteHandler} osisValue={osisValue} />
                                <OsisCard id={"Laily A. A."} name="Laily A. A." img="Laily-3-B7kQfHLV.png" osisVoteHandler={osisVoteHandler} osisValue={osisValue} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className={`${filled === false ? "" : "hidden "}text-[#dee2fa] px-2`}><span className="text-red-400">{"[ ! ]"}</span> Pilih kandidat terlebih dahulu</p>
                        <button disabled={!osisValue || !mpkValue} onClick={() => { setConfirmation(true) }}className={`w-full bg-[linear-gradient(180deg,_#AFB3D0_0%,_#808080_134%)] text-black h-12 font-bold text-xl rounded-lg transition transform ease-in active:scale-99 ${!osisValue || !mpkValue ? "opacity-25" : "opacity-100"}`}>Kirim</button>
                    </div>
                </div>
                <div className={`absolute w-50 h-full bg-[linear-gradient(270deg,_rgba(0,0,0,0.00)_30%,_#AA5D5D_700.11%)] left-0 transition transform ease-out duration-500 ${currentFill === "MPK" ? "opacity-100" : "opacity-0"}`}></div>
                <div className={`absolute w-50 h-full bg-[linear-gradient(90deg,_rgba(0,0,0,0.00)_30%,_#AA5D5D_700.11%)] right-0 transition transform ease-out duration-500 ${currentFill === "MPK" ? "opacity-100" : "opacity-0"}`}></div>
                <div className={`absolute w-50 h-full bg-[linear-gradient(270deg,_rgba(0,0,0,0.00)_30%,_rgba(93,167,170,0.74)_700.11%)] left-0 transition transform ease-out duration-500 ${currentFill === "OSIS" ? "opacity-100" : "opacity-0"}`}></div>
                <div className={`absolute w-50 h-full bg-[linear-gradient(90deg,_rgba(0,0,0,0.00)_30%,_rgba(93,167,170,0.74)_700.11%)] right-0 transition transform ease-out duration-500 ${currentFill === "OSIS" ? "opacity-100" : "opacity-0"}`}></div>
            </div>
        </div>
    )
}

export default Form