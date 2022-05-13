import { defineStore } from "pinia";
import { IUser, UserState } from "../types/store/user";

//* =======================================================================================
//* User store
//* =======================================================================================

export const useUserStore = defineStore("user", {
  state: () =>
    ({
      isLoggedIn: false,
      userInfo: {} as IUser
    } as UserState),
  getters: {},
  actions: {
    setUserSettings (user: IUser) {
      this.userInfo = user;
      this.isLoggedIn = true;
    },
    removeUserSettings () {
      useCookie(useRuntimeConfig().JWT_HEADER).value = null;
      this.userInfo = {} as IUser;
      this.isLoggedIn = false;
    }
  }
});
