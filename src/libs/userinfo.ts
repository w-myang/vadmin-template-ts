// 用户信息处理

interface User{
  name:string,
  department:string,
  gid:number
}
export function getUserInfo():User {
  return {
    name: "管理员",
    department: "123",
    gid: 123456,
  };
}
