import { UserStats } from "./UserStats.interface";
import { UserData } from "./UserData.interface";

export interface UserInfo {
  itemList: any[];
  stats: UserStats;
  data: UserData;
}
