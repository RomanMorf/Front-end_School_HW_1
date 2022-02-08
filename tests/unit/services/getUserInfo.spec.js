import { getUserInfo } from "@/services/getUserInfo.ts";
const demoUserInfo = require("@/api/json/userInfo.json");

describe('getUserInfo function', () => {
  
  it('getUserInfo test', async () => {
    const result = await getUserInfo()
    expect(result).toBe(demoUserInfo)
  });
});
