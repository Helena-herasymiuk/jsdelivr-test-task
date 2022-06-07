<template>
  <v-data-table
    calculate-widths
    class="vueti-table"
    :headers="headers"
    :items="items"
    :items-per-page="options.size"
    :loading="loading"
    :page="options.page"
    :server-items-length="total"
    @update:items-per-page="updPerPage"
    @update:page="updPage">
    <template #progress>
      <v-progress-linear
        v-if="loading"
        color="deep-purple"
        indeterminate/>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'packages-table',
  data: () => ({
    headers: [
      {text: 'name', value: 'package.name', sortable: false},
      {text: 'description', value: 'package.description', sortable: false},
      {text: 'author', value: 'package.author.name', sortable: false},
      {text: 'date', value: 'package.date', sortable: false},
      {text: 'repository', value: 'package.links.repository', sortable: false},
    ],
    // page: 1
  }),
  computed: {
    ...mapGetters({
      items: 'getPackages',
      total: 'getPackagesTotal',
      options: 'getPackagesSearchInfo',
      loading: 'getLoading',
    }),
    // perPage: {
    //   get() {
    //     return this.options.from
    //   },
    //   set(val) {
    //     this.$store.commit('setPerPage', val)
    //   }
    // }
  },
  methods: {
    ...mapActions([
      'searchPackages'
    ]),
    updPage(page) {

      console.log(page, 'page')
      this.searchPackages({page})
    },
    updPerPage(perPage) {

      console.log(perPage, 'perPage')
      this.searchPackages({size: perPage})
    },
    pagination({ page,  itemsPerPage}) {
      debugger
      console.log( {from: page, size: itemsPerPage}, 'pagination')
      this.searchPackages({from: page, size: itemsPerPage})
    }
  }
}
</script>

<style>

</style>