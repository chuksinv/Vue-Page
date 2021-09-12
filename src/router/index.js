import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index"

Vue.use(VueRouter);

const rejectAuthUser = (to, from, next) => {
  console.log(store.state.isLogin);
  if(store.state.isLogin == true){
    // 이미 로그인됨
    alert('이미 로그인 되었습니다.');
    next('/');
  } else{
    next();
  }
}

const onlyAuthUser = (to, from, next) => {
  if(store.state.isLogin == false){
    // 이미 로그인됨
    alert('로그인이 필요합니다.');
    next('/');
  } else{
    next();
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    // 라우터 이동하기전에 검사
    beforeEnter : rejectAuthUser,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  }
  ,
  {
    path: "/mypage",
    name: "mypage",
    beforeEnter : onlyAuthUser,
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/mypage.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
