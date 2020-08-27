import axios from "axios"

const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL: "http://localhost:4000",
        headers: {
            Authorization: `Token ${token}`
        }
    })
}

export default axiosWithAuth