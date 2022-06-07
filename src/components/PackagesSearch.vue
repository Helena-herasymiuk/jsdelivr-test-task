<template>
  <v-text-field
    v-model="text"
    class="packages-search mx-auto"
    color="deep-purple"
    :disabled="loading"
    hide-details
    label="search"
    :loading="loading"
    solo
    @input="debouncedSearch">
    <template #append>
      <v-btn 
        icon
        small
        @click="search()">
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'packages-search',
  data: () => ({
    text: '',
    oldText: '',
    debouncedSearch: () => {}
  }),
  created() {
    this.debouncedSearch = this.$_.debounce(this.search, 1000)
  },
  computed: {
    ...mapGetters({
      loading: 'getLoading',
    }),
  },
  methods: {
    ...mapActions([
      'searchPackages'
    ]),
    search(value) {
      let text
      if (!value) {
        text = this.text
      } else {
        text = value
      }
      if (this.oldText !== text) {
        this.oldText = text
        console.log( text, 'search')
        this.searchPackages({text})
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.packages-search {
  max-width: 60%;
  
}
@media(max-width:576px) {
	.packages-search {
		max-width: 100%;
	}
}
</style>