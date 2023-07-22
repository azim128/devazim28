import axios from "axios"

const blogApi = axios.create({
    baseURL: `${process.env.REACT_APP_APIURL}`
})

export const getblog = async () => {
    const response = await blogApi.get("api/portfolio/")
    return response.data
}

export default blogApi;