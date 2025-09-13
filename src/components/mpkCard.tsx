interface MpkCardProps {
    id: any
    name: string
    img: string
    mpkVoteHandler: (id: any) => void
    mpkValue: any
}

const MpkCard = ({ id, name, img, mpkVoteHandler, mpkValue }: MpkCardProps) => {
    const clicked = () => mpkVoteHandler(id)
    return (
        <div onClick={() => {clicked(); console.log("clicked")}} className={`${mpkValue === id ? "border-2 border-[#aaaaaa] " : ""}flex flex-col w-full h-fit bg-gradient-to-b from-[#232741] to-[#161A20] rounded-2xl pt-2 px-2 transition transform ease-in active:scale-99`}>
            <p className="text-center font-semibold text-2xl italic bg-[linear-gradient(224deg,_#82B9C8_-14.26%,_#648F9A_140.15%)] bg-clip-text text-transparent">{name}</p>
            <img src={`/assets/${img}`} alt={name} />
        </div>
    )
}

export default MpkCard