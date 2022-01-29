import { http } from "@/api/rapidapi";
const demoUserInfo = require("@/api/json/userInfo.json");

export const getUserInfo = async (userName: string) => {
  try {
    return demoUserInfo;
    
    // api ix snot working right now
    await http.get(`user/info/${userName}`).then((res: any) => {
        return res.data
      });
  } catch (error) {
    return Promise.resolve().then(() => {
      return demoUserInfo;
    });
  }
};
