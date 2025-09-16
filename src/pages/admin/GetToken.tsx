import { Button } from "@/components/ui/button"
import axios from "axios"
import { useRef } from "react"

const GetToken = () => {
    const selectRef = useRef<HTMLSelectElement>(null)

    const submit = async (e: React.FormEvent) => {
        const value = selectRef.current?.value
        e.preventDefault()

        if(value) {
            try {
                const res = await axios.get(`https://d247a336af0e.ngrok-free.app/api/v1/admin/user?kelas=${encodeURIComponent(value)}`, {
                    headers: {"ngrok-skip-browser-warning": "true"}
                })
                if(res.data.status === "success") {
                    console.log(res.data)
                    let filteredData: any = []
                    res.data.data.forEach((user: { name: any; class: any; username: any; password: any }) => {
                        filteredData.push({
                            name: user.name,
                            class: user.class,
                            username: user.username,
                            password: user.password
                        })
                    });
                    
                    // generate csv from filteredData
                    const headers = Object.keys(filteredData[0])
                    const csv = [
                        headers.join(","), 
                        ...filteredData.map((row: { [x: string]: any }) => headers.map(h => row[h]).join(","))
                    ].join("\n")

                    // Prompt download
                    const blob = new Blob([csv], { type: "text/csv" })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement("a")
                    a.href = url
                    a.download = `${value}.csv`
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                    URL.revokeObjectURL(url)
                }
            } catch (err) {
                console.log(err)
            }
            // window.open(`https://d247a336af0e.ngrok-free.app/api/v1/admin/user?kelas=${encodeURIComponent(value)}`)
        }
    }

    return (
        <form onSubmit={(e) => {submit(e);}} className="flex h-10 gap-5">
            <select ref={selectRef} name="kelas" id="kelas" className="text-white border-2 border-white p-2 rounded-sm w-full">
                <option className="text-black" value="10 LK 1">10 LK 1</option>
                <option className="text-black" value="10 LK 2">10 LK 2</option>
                <option className="text-black" value="10 PS 1">10 PS 1</option>
                <option className="text-black" value="10 PS 2">10 PS 2</option>
                <option className="text-black" value="10 DKV 1">10 DKV 1</option>
                <option className="text-black" value="10 DKV 2">10 DKV 2</option>
                <option className="text-black" value="10 DKV 3">10 DKV 3</option>
                <option className="text-black" value="10 PPLG 1">10 PPLG 1</option>
                <option className="text-black" value="10 PPLG 2">10 PPLG 2</option>
                <option className="text-black" value="10 PPLG 3">10 PPLG 3</option>
                <option className="text-black" value="10 TJKT 1">10 TJKT 1</option>
                <option className="text-black" value="10 TJKT 2">10 TJKT 2</option>
                <option className="text-black" value="11 LK 1">11 LK 1</option>
                <option className="text-black" value="11 LK 2">11 LK 2</option>
                <option className="text-black" value="11 PS 1">11 PS 1</option>
                <option className="text-black" value="11 PS 2">11 PS 2</option>
                <option className="text-black" value="11 DKV 1">11 DKV 1</option>
                <option className="text-black" value="11 DKV 2">11 DKV 2</option>
                <option className="text-black" value="11 DKV 3">11 DKV 3</option>
                <option className="text-black" value="11 PPLG 1">11 PPLG 1</option>
                <option className="text-black" value="11 PPLG 2">11 PPLG 2</option>
                <option className="text-black" value="11 PPLG 3">11 PPLG 3</option>
                <option className="text-black" value="11 TJKT 1">11 TJKT 1</option>
                <option className="text-black" value="11 TJKT 2">11 TJKT 2</option>
                <option className="text-black" value="12 LK 1">12 LK 1</option>
                <option className="text-black" value="12 LK 2">12 LK 2</option>
                <option className="text-black" value="12 PS 1">12 PS 1</option>
                <option className="text-black" value="12 PS 2">12 PS 2</option>
                <option className="text-black" value="12 DKV 1">12 DKV 1</option>
                <option className="text-black" value="12 DKV 2">12 DKV 2</option>
                <option className="text-black" value="12 DKV 3">12 DKV 3</option>
                <option className="text-black" value="12 PPLG 1">12 PPLG 1</option>
                <option className="text-black" value="12 PPLG 2">12 PPLG 2</option>
                <option className="text-black" value="12 PPLG 3">12 PPLG 3</option>
                <option className="text-black" value="12 TJKT 1">12 TJKT 1</option>
                <option className="text-black" value="12 TJKT 2">12 TJKT 2</option>
                <option className="text-black" value="STAFF">STAFF</option>
                <option className="text-black" value="TEACHER">TEACHER</option>
                <option className="text-black" value="ADMIN">ADMIN</option>
            </select>
            <Button type="submit" className="h-full rounded-sm">Download</Button>
        </form>
    )
}

export default GetToken