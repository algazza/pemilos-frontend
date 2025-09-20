interface OsisCardProps {
    id: any
    name: string
    number: number
    osisVoteHandler: (id: any) => void
    osisValue: any
}

const OsisCard = ({ id, name, number, osisVoteHandler, osisValue }: OsisCardProps) => {
    const clicked = () => osisVoteHandler(id)

    function getImage() {
        if (number === 1) return "Rafif-1-cUHUsNgs.png"
        if (number === 2) return "Seva-2-CaMTsY6Q.png"
        if (number === 3) return "Zahra-2-DLpGzRhv.png"
    }

    return (
        <div onClick={() => {clicked(); console.log("clicked")}} className={`${osisValue === id ? "border-2 border-[#aaaaaa] " : ""}flex flex-col w-full h-fit bg-gradient-to-b from-[#232741] to-[#161A20] rounded-2xl pt-2 px-2 transition transform ease-in active:scale-98`}>
            <p className="text-center font-semibold text-2xl italic bg-[linear-gradient(224deg,_#82B9C8_-14.26%,_#648F9A_140.15%)] bg-clip-text text-transparent">{name}</p>
            <img src={`/assets/${getImage()}`} alt={name} />
        </div>
    )
}

export default OsisCard