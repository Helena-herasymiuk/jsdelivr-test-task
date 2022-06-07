// import Vue from 'vue'
import axios from 'axios'

// const url = 'https://data.jsdelivr.com/'

export default class PackagesApi {
  url = 'https://data.jsdelivr.com/'
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
}