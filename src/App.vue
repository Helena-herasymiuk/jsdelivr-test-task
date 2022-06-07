<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple lighten-1">
      <!-- <div
        class="d-flex align-center justify-center "> -->
      <packages-search/>
      <!-- </div> -->
    </v-app-bar>

    <v-main>
      <!-- 
      :item-key="item_key" 
     -->
      <packages-table/>
    </v-main>
  </v-app>
</template>

<script>
import PackagesTable from '@/components/PackagesTable'
import PackagesSearch from '@/components/PackagesSearch'
export default {
  name: 'App',
  components: {
    PackagesTable,
    PackagesSearch
  },
  data: () => ({
    //
  }),
}
</script>
<style lang="scss">

@import "~@/assets/scss/main";
</style>