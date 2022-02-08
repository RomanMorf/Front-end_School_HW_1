import { getters } from "@/store/user/getters";

describe("User getters", () => {
  const state = {
  userFeed: {/* some  userFeed*/},
  userInfo: {/* some  userInfo*/},
  };

  it("getUserFeed", () => {
    const result = getters.FEED(state);

    expect(result).toEqual(state.userFeed);
  });
  it("getUserInfo", () => {
    const result = getters.INFO(state);

    expect(result).toEqual(state.userInfo);
  });
});
