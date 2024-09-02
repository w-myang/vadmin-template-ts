// 用户信息处理

interface user{
  name:string,
  department:string,
  gid:number
}
export function getUserInfo():user {
  return {
    name: "管理员",
    department: "123",
    gid: 123456,
  };
}
