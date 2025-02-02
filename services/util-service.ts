import axios from "axios";

export async function getVersionService() {
     return await axios.get('https://api.codingthailand.com/api/version');    
}

export async function getVersionService2() {
    return await axios.get('https://api.codingthailand.com/api/version2', {
        responseType: 'text'
    });    
}