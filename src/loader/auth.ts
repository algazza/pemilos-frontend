import { apiUrl } from "@/lib/api";
import axios from "axios";
import { redirect } from "react-router-dom";

const authLoader = async () => {
    // const token = localStorage.getItem("Authorization")    <----- Dummy
    // if(!token) {
    //     throw redirect("/login")
    // } else {
    //     return token
    // }
    try {
        console.log(`${apiUrl}/auth/me`)
        console.log(localStorage.getItem("Authorization"))
        const res = axios.get(`${apiUrl}/auth/me`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Authorization": `${localStorage.getItem("Authorization")}`
            },
        })
        const data = (await res).data
        console.log(data.data)
    } catch(err) {
        console.log(err)
    }
}

export default authLoader