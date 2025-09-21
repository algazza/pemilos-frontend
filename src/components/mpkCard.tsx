interface MpkCardProps {
    id: any
    name: string
    number: number
    mpkVoteHandler: (id: any) => void
    mpkValue: any
}

const MpkCard = ({ id, name, number, mpkVoteHandler, mpkValue }: MpkCardProps) => {
    const clicked = () => mpkVoteHandler(id)

    function getImage() {
        if (number === 1) return "Alden-1-aF0LkwjD.png"
        if (number === 2) return "Seva-2-CaMTsY6Q.png"
        if (number === 3) return "Attaya-3-B4QiY6bf.png"
    }
    
    return (
        <div onClick={() => {clicked(); console.log("clicked")}} className={`${mpkValue === id ? "border-2 border-[#aaaaaa] " : ""}flex flex-col w-full h-fit bg-gradient-to-b from-[#412323] to-[#201816] rounded-2xl pt-2 px-2 transition transform ease-in active:scale-99`}>
            <p className="text-center font-semibold text-2xl italic bg-[linear-gradient(224deg,_#E58C8C_-14.26%,_#A47272_140.15%)] bg-clip-text text-transparent">{name}</p>
            <img src={`/assets/${getImage()}`} alt={name} />
        </div>
    )
}

export default MpkCard