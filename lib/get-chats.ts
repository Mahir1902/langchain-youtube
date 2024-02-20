import axios from "axios";

export const getChats = async () => {
    
    // const _chats = await db.select().from(chats)
    const res = await axios.post(`http://localhost:3000/api/fetch-chats`);
    return res.data;
}