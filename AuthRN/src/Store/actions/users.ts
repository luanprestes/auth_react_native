
interface UserLogin{
  email: string, 
  password: string
}

export const authUser = (payload:UserLogin) => {
  return {
    type: "USER_AUTH",
    payload
  }
}
