import { redirect } from "react-router-dom";

const authLoader = () => {
    const token = localStorage.getItem("Authorization")
    if(!token) {
        throw redirect("/login")
    } else {
        return token
    }
}

export default authLoader