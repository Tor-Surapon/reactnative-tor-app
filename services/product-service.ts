import axios from "axios";

export async function getProductService() {
    return await axios.get('https://api.codingthailand.com/api/course');    
}

export async function getProductDetailService(id: number) {

    return await axios.get('https://api.codingthailand.com/api/course/' + id.toString());    
}