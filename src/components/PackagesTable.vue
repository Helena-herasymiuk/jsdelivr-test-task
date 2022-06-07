<template>
  <div class="packages-table d-flex justify-center pa-5">
    <v-data-table
      v-if="items.length || loading"
      calculate-widths
      class="packages-table__table rounded-lg"
      :footer-props="footerProps"
      :headers="headers"
      :items="items"
      :items-per-page="options.size"
      :loading="loading"
      :page="options.page"
      :server-items-length="total"
      @click:row="openDialog"
      @update:items-per-page="updPerPage"
      @update:page="updPage">
      <template #progress>
        <v-progress-linear
          v-if="loading"
          color="deep-purple"
          indeterminate/>
      </template>
      <template #[`item.owner`]="{ item }">
        <a 
          class="text-decoration-none black--text d-flex align-center"
          :href="item.owner.link"
          target="_blank">
          <img 
            class="mr-2"
            :src="item.owner.avatar"
            :width="25">
          {{ item.owner.name }}
        </a>
      </template>
    </v-data-table>
    <v-banner 
      v-else
      class="packages-table__empty white pa-6 rounded-lg"
      elevation="6"
      outlined>
      {{ options.text.length ? "Sorry, we couldn't find anything for your query. Try refining your search." : 'Start entering text to search' }}
    </v-banner>
    
    <package-dialog :open.sync="openedPackage"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import PackageDialog from '@/components/PackageDialog'

export default {
  name: 'packages-table',
  components: {
    PackageDialog
  },
  data: () => ({
    headers: [
      {text: 'Name', value: 'name', width: '20%', sortable: false},
      {text: 'version', value: 'version', width: '10%', sortable: false},
      {text: 'Author', value: 'owner', width: '10%', sortable: false},
      {text: 'Description', value: 'description', width: '40%', sortable: false},
    ],
    footerProps: {
      'items-per-page-options': [5, 10, 25, 50, 100]
    },
    openedPackage: false,
  }),
  created() {
    this.searchPackages({})
  },
  computed: {
    ...mapGetters({
      items: 'getPackages',
      total: 'getPackagesTotal',
      options: 'getPackagesSearchInfo',
      loading: 'getLoading',
    }),
  },
  methods: {
    ...mapActions([
      'searchPackages',
      'openPackage'
    ]),
    updPage(page) {
      this.searchPackages({page})
    },
    updPerPage(perPage) {
      this.searchPackages({size: perPage})
    },
    openDialog(row) {
      this.openedPackage = true
      this.openPackage(row)
    }
  }
}
</script>

<style lang="scss" scoped>
.packages-table {
  & &__empty {
    width: 60vw;
  }
  & &__table {
    width: 95vw;
    ::v-deep {
      tr {
        cursor: pointer;
      }
    }
  }
}

@media(max-width: 576px) {
	.packages-table .packages-table__empty {
		width: 95%;
	}
}
</style>