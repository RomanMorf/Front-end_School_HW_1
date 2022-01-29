import { http } from "@/api/rapidapi";
const demoCurrentUserFeed = require("@/api/json/user-feed.json");

export const getUserFeed = async (userName: string) => {
  try {
    return demoCurrentUserFeed;

    // api is not working right now
    await http.get(`user/feed/${userName}`).then((res: any) => {
      return res.data
    });
  } catch (error) {
    return Promise.resolve().then(() => {
      return demoCurrentUserFeed;
    });
  }
};
