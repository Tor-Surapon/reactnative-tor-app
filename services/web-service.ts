import axios from "axios";

export async function getWebService() {
  return await axios.get('https://agent.tpipolene.co.th/oraccservice/CCService.asmx/VendorJSON',{
    responseType: 'text'
  });  
}