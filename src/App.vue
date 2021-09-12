<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-list rounded>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <div 
          v-for="(item, i) in items"
          :key="i"
          >
        <v-list-item
          v-if="item.isLogin == null || item.isLogin == isLogin"
          router :to="{name: item.router}"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </div>
      </v-list-item-group>  
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="teal accent-1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-center" v-if="isLogin">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              v-bind="attrs"
              v-on="on"
              flat
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item router :to="{name:'mypage'}">
              <v-list-item-title>마이페이지</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$store.dispatch('logout')">
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn icon v-else router :to="{name: 'login'}">
        <v-icon >mdi-login</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    
    <Dialog/>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex'
  import Dialog from '@/components/dialog.vue'

  export default {
    data: () => ({ drawer: null,
    selectedItem: 1,
      items: [
        { text: 'Home', icon: 'mdi-home',  router:'Home'},
        { text: 'Login', icon: 'mdi-login', router :'login', isLogin:false },
        { text: 'My Page', icon: 'mdi-information', router :'mypage', isLogin:true },
      ], }),
    computed : {
      ...mapState(['isLogin']),
    },
    components : {
        Dialog
    }
  }
</script>