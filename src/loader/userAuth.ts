import { redirect } from "react-router-dom";

const userAuthLoader = async () => {
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
    //         window.location.href = "/admin"
    //     } else if(data.data.role === "voter") {
    //         return data.data
    //     } else {
    //         window.location.href = "/login"
    //     }
    // } catch(err) {
    //     throw redirect("/login")
    // }
    const authorization = localStorage.getItem("Authorization")
    console.log(authorization)
    if(authorization === "voter") {
        return 
    } else if (authorization === "admin") {
        window.location.href = "/admin"
    } else if (authorization === null) {
        console.log("a")
        window.location.href = "/login"
    }
}

export default userAuthLoader