const user = {
  state: {
    userId: ""
  },
  mutations: {
    set_user_id(state, v) {
      state.userId = v;
    }
  },
  actions: {},
  getters: {
    userId: state => state.userId
  }
};
export default user;
