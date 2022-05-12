<template>
  <div>
    <h1>Users</h1>
    <p>이 유저의 현재 ID 는 {{ userId }} 입니다.</p>
    {{ $route.params.name }}
    <br />
    <h1>그룹: {{ $route.query.group }}</h1>
    <h1>카테고리: {{ $route.query.category }}</h1>
    <!-- query로 미리 지정해놓지 않아도 주소창에 작성해서 사용 가능 -->
    <h1>이름: {{ $route.query.name }}</h1>
    <h1>주소: {{ $route.query.address }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
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
  },
};
</script>
