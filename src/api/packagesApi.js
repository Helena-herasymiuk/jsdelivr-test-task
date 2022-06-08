// import Vue from 'vue'
import axios from 'axios'
import algoliasearch from 'algoliasearch'
export default class PackagesApi {
  url = 'https://data.jsdelivr.com/v1/package/npm/'
  /**
   * code from documentation https://github.com/jsdelivr/www.jsdelivr.com/blob/master/src/public/js/utils/search.js
   * analog  - axios variant
   * this variant selected because of more info in response than in 'https://registry.npmjs.org/-/v1/search'
   */
  algolia = algoliasearch('OFCNCOG2CU', 'f54e21fa3a2a0160595bb058179bfb1e', { protocol: 'https:' });
  index = this.algolia.initIndex('npm-search');

  async searchPackages({ text, size, page }) {
    return await this.index.search(text, {
      hitsPerPage: size,
      page,
    })
  }
  /**
   * get additional info vy package name & version 
   * return files & files count 
   */
  async getPackageInfo(payload) {
    const uri = `${this.url}${payload.name}@${payload.version}/stats`
    
    return axios.get(uri,
      { headers: { 'Content-Type': 'application/json' }, }
    )
      .then(response => response.data)
  }


  /**
   * 
   * axios variant
   * 
    registry = 'https://registry.npmjs.org/-/v1/search'

    async searchPackages({ text, size, from, quality, popularity, maintenance }) {
      const uri = this.registry + ''
      debugger
      return axios.get(uri,
        {
          params: { text, size, from, quality, popularity, maintenance },
          headers: {
            'Content-Type': 'application/json'
          },
        }
      )
        .then(response => response.data)
    }
  */

}