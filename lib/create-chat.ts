import axios from "axios"


export const createChat = async (videoLink:string) => {

    const res = await axios.post('http://localhost:3000/api/create-chat', {videoLink})
    // console.log(res.data)
    return res.data
}  