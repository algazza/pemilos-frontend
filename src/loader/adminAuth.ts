import { redirect } from "react-router-dom";

const AdminAuthLoader = async () => {
    // console.log("adminLoader")
    // try {
    //     console.log(`${apiUrl}/auth/me`)
    //     console.log(localStorage.getItem("Authorization"))
    //     const res = axios.get(`${apiUrl}/auth/me`, {
    //         headers: {
    //             "ngrok-skip-browser-warning": "true",
    //             "Authorization": `${localStorage.getItem("Authorization")}`
    //         },
    //     })
    //     const data = (await res).data
    //     console.log(data.data.role)
    //     if (data.data.role === "admin") {
    //         return data.data
    //     } else if(data.data.role === "voter") {
    //         window.location.href = "/"
    //     } else {
    //         window.location.href = "/login"
    //     }
    // } catch(err) {
    //     throw redirect("/login")
    // }
    const authorization = localStorage.getItem("Authorization")
    if(authorization === "voter") {
        window.location.href = "/"
    } else if (authorization === "admin") {
        return
    } else {
        window.location.href = "/login"
    }
}

export default AdminAuthLoader