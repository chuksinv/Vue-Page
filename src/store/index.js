import Vue from "vue";
import Vuex from "vuex";
import router from "@/router/index"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo : null,
    userList : [
      {"id": "1", "name":"성범", "email":"chuksinv@gmail.com", "password":"1234"}
      , {"id": "2", "name":"축신", "email":"chuksinv@naver.com", "password":"4567"}
     ], 
    alert : false,
    isLogin : false,
    dialog : false,
    dialogObj : {"caption" : "굿", "text" : "텍스트"}
  },
  mutations: {
    //로그인이 성공했을때
    loginSuccess(state, obj){
      console.log('success')
      state.isLogin = true;
      state.userInfo = obj;
    },

    loginError(state){
      state.alert = true;
      state.dialog = true;
    },

    logout(state){
      state.isLogin = false;
      state.userInfo = null;
    }
  },
  actions: {
    //로그인 시도
    login({ commit, state }, loginObj){
      console.log(commit);
      console.log(state);
      console.log(loginObj);

        var selectedUser = null;
        state.userList.forEach(user => {
            console.log(user.id);
            console.log(loginObj.userName);
            if(user.id == loginObj.userName){
                selectedUser = user;
            } 
        });
        console.log(selectedUser);

        state.dialogObj.caption = "미친놈아";

        if(selectedUser == null){
          commit('loginError');
        }else{
          commit('loginSuccess', selectedUser);
          router.push({name:"mypage"})
        }

    },

    logout({commit}){
      commit('logout');
      router.push({name : 'Home'});
    },

    fn_alert({ commit, state }, loginObj){
      alert('미친놈아');
      console.log(commit);
      console.log(state);
      console.log(loginObj);
    }
  },
  modules: {},
});
