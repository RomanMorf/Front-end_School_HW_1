import { getTrandingFeed } from "@/services/getTrandingFeed.ts";
const demoFeed = require("@/api/json/feed.json");

describe('getTrandingFeed function', () => {
  
  it('getTrandingFeed test', async () => {
    const result = await getTrandingFeed()
    expect(result).toBe(demoFeed)
  });
  
});
