import axios from '../axiosSettings'


export const loginStudent = async(body: any) => {
    try{
      const response = await axios.post('/user/login', body, {
        headers: {
        "Content-Type": "application/json"
        }
      })

      return response
    }catch(error:any){
      return error.response
    }
  }