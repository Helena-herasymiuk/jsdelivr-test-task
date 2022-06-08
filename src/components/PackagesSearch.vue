<template>
  <v-text-field
    v-model="text"
    class="packages-search"
    color="deep-purple"
    :disabled="loading"
    elevation="6"
    hide-details
    label="search npm packages"
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
    this.debouncedSearch = this.$_.debounce(this.search, 1000) // for debouncing searching in input
  },
  computed: {
    ...mapGetters({
      loading: 'getLoading', // for watching loading
    }),
  },
  methods: {
    ...mapActions([
      'searchPackages'
    ]),
    /**
     * function that emit searching if text changed
     */
    search(value) {
      let text
      if (!value) {
        text = this.text
      } else {
        text = value
      }
      if (this.oldText !== text) {
        this.oldText = text
        this.searchPackages({text})
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.packages-search {
  width: 60vw;
  max-width: 60vw;
  
}
@media(max-width:576px) {
	.packages-search {
		width: calc(100vw - 40px);
		max-width: calc(100vw - 40px);
	}
}
</style>