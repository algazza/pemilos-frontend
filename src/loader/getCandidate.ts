import { apiUrl } from "@/lib/api";
import axios from "axios";
import { redirect } from "react-router-dom";

const getCandidateLoader = async () => {
    try {
        console.log(`${apiUrl}/candidate`)
        const res = axios.get(`${apiUrl}/candidate`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Authorization": `${localStorage.getItem("Authorization")}`
            },
        })
        const data = (await res).data.data

        const filteredData = []
        const osisData = data.filter((candidate: {_id: string, number: number, name: string, label: string}) => {
            return candidate.label === "osis"
        })
        const mpkData = data.filter((candidate: {_id: string, number: number, name: string, label: string}) => {
            return candidate.label === "mpk"
        })
        filteredData.push({mpkData, osisData})
        return filteredData
    } catch(err) {
        console.log(err)
        throw redirect("/login")
    }
}

export default getCandidateLoader