<template>
  <v-layout
    row
    wrap
    pt-5
    text-xs-center
    style="max-width: 500px; margin: 0 auto"
  >
    <v-flex xs12>
      <h1>Users</h1>
      <!-- 
    ** 값 전달하기 **  
    <p>이 유저의 현재 ID 는 {{ userId }} 입니다.</p>
    {{ $route.params.name }}
    <br />
    <h1>그룹: {{ $route.query.group }}</h1>
    <h1>카테고리: {{ $route.query.category }}</h1>
     query로 미리 지정해놓지 않아도 주소창에 작성해서 사용 가능 
    <h1>이름: {{ $route.query.name }}</h1>
    <h1>주소: {{ $route.query.address }}</h1> -->

      <!-- 하위 경로: 이 users.vue 안에서만 동작하는 새로운 경로 (새로 만들어야 함)
         전체 주소를 관장하는 하나의 주소가 있고, Users안에서-->
      <p>유저를 검색해 주세요.</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field v-model="userId" label="유저 번호를 입력하세요.">
      </v-text-field>
      <!-- 경로로 실행 -->
      <!-- <v-btn @click="$router.push({ path: `users/${userId}` })">검색</v-btn> -->
      <!-- name으로 실행 params를 추가해야함-->
      <v-btn
        @click="$router.push({ name: 'users-detail', params: { id: userId } })"
        >검색</v-btn
      >
    </v-flex>
    <v-flex xs12>
      <!-- 이 안에서만 동작하는 태그 -->
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  /* computed: {
     // 주소 뒤에 붙은 userId값을 가져옴
    userId() {
      return this.$route.params.userId;
    },
  },
  created() {
    // router => 실제 라우터(router.js)에 선언한 값들(속성, 옵션...)
    // route => query, 위의 params, 현재 라우터의 주소path 등... >>> 현재와 관련
    console.log("router", this.$router);
    console.log("route", this.$route);
  }, */
  data() {
    return {
      userId: null,
    };
  },
};
</script>
