import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const About = () => import(/* webpackChunkName: "about" */ "./views/About.vue");
//webpackChunkName: 주소창에 어떵 값이 입력했을 때 그 값에 해당하는 컴포넌트만 불러오겠다

// 주소 뒤의 내용을 하나의 값으로 받음
const Users = () => import(/* webpackChunkName: "users" */ "./views/Users.vue");
const UsersDetail = () =>
  import(/* webpackChunkName: "users-detail" */ "./views/UsersDetail.vue");
const UsersEdit = () =>
  import(/* webpackChunkName: "users-edit" */ "./views/UsersEdit.vue");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/", // 주소
      name: "home",
      component: Home, // 주소와 연결되는 컴포넌트
    },
    {
      path: "/about",
      name: "about-name",
      component: About,
    },
    {
      // :id 자리에 오는 값이 id값이 됨
      // path: "/users/:userId",
      // 파라미터를 지정하지 않아도 router로 지정하면 사용 가능
      path: "/users",
      name: "users",
      /* 라우터가 불러와 지기 전에 함수가 먼저 실행된 후 라우터가 동작하게 하는 명령 */
      beforeEnter: (to, from, next) => {
        console.log("to: ", to, "from: ", from);
      },
      component: Users,
      // 하위경로

      children: [
        {
          path: ":id",
          name: "users-detail",
          component: UsersDetail,
        },
        {
          path: ":id/edit",
          name: "users-edit",
          component: UsersEdit,
        },
      ],
    },
  ],
});
