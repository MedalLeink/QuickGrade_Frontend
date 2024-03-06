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

export const getDepartmentCourses = async(filters:any) => {
  try{
    const response = await axios.get(`/course/get_department_courses`, {
      params: filters
    })
    return response
  }catch(error:any){
    return error.response
  }
}

export const studentEnroll = async(body:any) => {
  try{
    const response = await axios.post(`/student/enroll_course`, body, {
      headers: {
        "Content-Type": "application/json"
        }
    })

    return response
  }catch(error:any){
    return error.response
  }
}

export const getEnrolledCourses = async(body:any) => {
  try{
    const response = await axios.get(`/student/my_courses`, {
      params: body
    })
    return response
  }catch(error:any){
    return error.response
  }
}