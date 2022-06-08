<template>
  <v-dialog
    v-model="dialog"
    width="500">
    <v-card
      v-if="opendPackage.search">
      <div class="deep-purple lighten-2">
        <v-card-title class="text-h5 white--text">
          {{ opendPackage.search.name }}
        </v-card-title>

        <v-card-subtitle class="white--text">
          {{ opendPackage.search.version }}
        </v-card-subtitle>
      </div>
        
      <v-divider/>

      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                owner
              </v-list-item-title>
              <v-list-item-subtitle>
                <a 
                  class="text-decoration-none black--text d-flex align-center"
                  :href="opendPackage.search.owner.link"
                  target="_blank">
                  <img 
                    class="mr-2"
                    :src="opendPackage.search.owner.avatar"
                    :width="25">
                  {{ opendPackage.search.owner.name }}
                </a>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                description
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ opendPackage.search.description }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                license
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ opendPackage.search.license }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="opendPackage.package && opendPackage.package.total">
            <v-list-item-content>
              <v-list-item-title>
                total files
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ opendPackage.package.total }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                human downloads last 30 days
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ opendPackage.search.humanDownloadsLast30Days }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                created
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ cratedDate }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                repository
              </v-list-item-title>
              <v-list-item-subtitle>
                <a 
                  class="text-decoration-none grey--text d-flex align-center"
                  :href="opendPackage.search.repository.url"
                  target="_blank">
                  {{ opendPackage.search.repository.url }}
                </a>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="deep-purple"
          text
          @click="dialog = false">
          close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'package-dialog',
  data: () => ({
  }),
  props: {
    open: {
      type: Boolean
    }
  },
  computed: {
    ...mapGetters({
      opendPackage: 'getOpendPackage',
    }),
    dialog: {
      get() {
        return this.open && this.opendPackage.search
      },
      set(value) {
        if ( !value ) {
          this.closePackage() // clear selected package info in store
        }
        this.$emit('update:open', value)
      }
    },
    /**
     * to view date 
     */
    cratedDate() {
      return this.$moment(this.opendPackage.search.created).format('DD.MM.YYYY, HH:mm')
    }
  },
  methods: {
    ...mapMutations([
      'closePackage',
    ]),
  },

}
</script>


<style lang="scss" scoped>

::v-deep {
  .v-list-item__subtitle {
    white-space: normal
  }
}
</style>