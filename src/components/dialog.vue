<template>
   <v-dialog
      v-model="dialog"
      width="500"
      @click:outside="$store.state.dialog = false"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{$store.state.dialogObj.caption}}
        </v-card-title>

        <v-card-text>
          {{$store.state.dialogObj.text}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="$store.state.dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import {mapState} from "vuex"

export default {
    computed: {
        ...mapState(['dialog'])
    }
}
</script>

<style>

</style>