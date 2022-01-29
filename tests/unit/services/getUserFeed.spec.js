import { getUserFeed } from "@/services/getUserFeed.ts";
const demoCurrentUserFeed = require("@/api/json/user-feed.json");

describe('getUserFeed function', () => {
  
  it('getUserFeed test', async () => {
    const result = await getUserFeed()
    expect(result).toBe(demoCurrentUserFeed)
  });
});
