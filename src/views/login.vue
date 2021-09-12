<template>
    <v-container fill-height style="max-width:400px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert
                dense
                outlined
                prominent
                text
                type="success"
                v-show="alert"
                @click="alert=false"
                
                >장난치냐</v-alert>
                <v-card>
                    <v-toolbar flat>
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                        <v-text-field v-model="userName" label="UserName"></v-text-field>
                        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
                        <v-btn color="blue lighten-3" block depressed @click="login({userName, password})">로그인</v-btn>
                        <!-- <v-btn color="blue lighten-3" block depressed @click="fn_alert('1')">로그인</v-btn> -->
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    
</template>
<script>
import {mapActions, mapState} from "vuex"

export default {
    data(){
        return{
            userName : null,
            password : null
        }
    },
    computed: {
        ...mapState(['alert'])
    }, 
    methods : {
        ...mapActions(['login']),

        // fn_alert(){
        //     console.log(1)
        //     mapActions(['fn_alert']);
        // }
        // login(){
            // var selectedUser = null;
            // this.userList.forEach(user => {
            //     console.log(user.id);
            //     if(user.id == this.userName){
            //         selectedUser == user;
            //     }
            // });

            // if(selectedUser == null){
            //     this.alert = true;
            // }
        // }
    }
}
</script>