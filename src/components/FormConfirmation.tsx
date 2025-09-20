import type { Dispatch } from "react"

interface ConfirmationProps {
    vote: () => void
    setConfirmation: Dispatch<React.SetStateAction<boolean>>
    isSent: boolean
    isVoteNotAllowed: boolean
    isNotAuthorized: boolean
}

const Confirmation = ({ vote, setConfirmation, isSent, isVoteNotAllowed, isNotAuthorized }: ConfirmationProps) => {
    return (
        <div onClick={() => {setConfirmation(false)}} className="fixed inset-0 bg-[#000000b0] z-10 flex justify-center items-center p-5">
            <div onClick={(e) => e.stopPropagation()} className="bg-black max-w-100 h-fit p-5 rounded-md border-1 flex flex-col gap-2 font-bold">
                <p>Pastikan jawabanmu sesuai dengan yang kamu hendaki. Yakin ingin mengirim?</p>
                <div className="flex flex-row gap-2">
                    <button onClick={() => setConfirmation(false)} className="flex-1 text-center border-1 rounded-[3px] p-1">Sebentar</button>
                    <button disabled={isSent} onClick={() => {vote(); console.log("clicked")}} className={`flex-1 text-center ${isSent ? "text-white" : "bg-white "} text-black rounded-[3px]`}>{isSent ? "loading..." : "kirim"}</button>
                </div>
                {isVoteNotAllowed ? <p className="text-right font-light text-sm">Tidak diperbolehkan untuk vote</p> : null}
                {isNotAuthorized ? <p className="text-right font-light text-sm">Token tidak valid, silahkan login ulang.</p> : null}
            </div>
        </div>
    )
}

export default Confirmation