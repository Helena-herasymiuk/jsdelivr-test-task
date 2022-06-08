<template>
  <v-app>
    <v-app-bar
      app
      class="d-flex justify-center align-center"
      color="deep-purple lighten-1"
      height="60">
      <packages-search class="packages__search"/>
    </v-app-bar>
    <v-main class="packages deep-purple lighten-5 d-flex justify-center align-center">
      <packages-table class="packages__table"/>
    </v-main>
    <v-footer
      app
      color="deep-purple lighten-1 white--text"
      height="60">
      <v-btn 
        href="https://github.com/Helena-herasymiuk/jsdelivr-test-task"
        icon
        small>
        <v-icon color="white">
          mdi-github
        </v-icon>
      </v-btn>
      <a 
        class="text-decoration-none white--text d-flex align-center"
        href="https://github.com/Helena-herasymiuk"
        target="_blank">
        @Helena Herasymiuk
      </a>
    </v-footer>
  </v-app>
</template>

<script>
import PackagesTable from '@/components/PackagesTable'
import PackagesSearch from '@/components/PackagesSearch'
export default {
  name: 'App',
  components: {
    PackagesTable,
    PackagesSearch,
  },
  data: () => ({
    //
  }),
  created() {
    // make request for default packages list
    this.$store.dispatch('searchPackages', {})
  },
}
</script>
<style lang="scss">
@import "~@/assets/scss/main";

</style>

<style lang="scss" scoped>
</style>