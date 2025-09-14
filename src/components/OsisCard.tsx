interface OsisCardProps {
    id: any
    name: string
    img: string
    osisVoteHandler: (id: any) => void
    osisValue: any
}

const OsisCard = ({ id, name, img, osisVoteHandler, osisValue }: OsisCardProps) => {
    const clicked = () => osisVoteHandler(id)

    return (
        <div onClick={() => {clicked(); console.log("clicked")}} className={`${osisValue === id ? "border-2 border-[#aaaaaa] " : ""}flex flex-col w-full h-fit bg-gradient-to-b from-[#232741] to-[#161A20] rounded-2xl pt-2 px-2 transition transform ease-in active:scale-98`}>
            <p className="text-center font-semibold text-2xl italic bg-[linear-gradient(224deg,_#82B9C8_-14.26%,_#648F9A_140.15%)] bg-clip-text text-transparent">{name}</p>
            <img src={`/assets/${img}`} alt={name} />
        </div>
    )
}

export default OsisCard