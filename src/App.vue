<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <!-- $router: vue 어플리케이션 내에서 실행되는 라우터에 접근
                      .push 어떤 주소를 넣겠다 -->
        <!-- <v-list-tile @click="$router.push({ path: '/' })"> -->
        <!-- 링크(a)형태로 만듦, exect: 해당 속성이 클릭되었을때만-->
        <v-list-tile router :to="{ name: 'home' }" exact>
          <v-list-tile-action>
            <i class="fas fa-home"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="{ name: 'about-name' }" exact>
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          router
          :to="{
            name: 'users',
            /*
            ** 값 전달하기 **
            params: {
              // 값을 숨길 수 있음
              // 주소창에 직접 값을 써도 되고 지정해줘도 됨
              userId: 4321,
              name: 'heewoo',
            },
            query: {
              // 값이 주소창에 나옴
              group: 'member',
              category: 'trial',
            },
            */
          }"
          exact
        >
          <v-list-tile-action>
            <i class="fas fa-home"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
  methods: {
    test() {
      alert("클릭");
    },
  },
};
</script>
