import { http } from "@/api/rapidapi";
const demoFeed = require("@/api/json/feed.json");

export const getTrandingFeed = async () => {
  try {
    return demoFeed;

    // api ix snot working right now
    await http.get("/trending/feed").then((res: any) => {
      return res.data
    });
  } catch (error) {
    return Promise.resolve().then(() => {
      return demoFeed;
    });
  }
};
