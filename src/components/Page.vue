<template>
  <div class="uk-card uk-card-default uk-margin-bottom uk-text-left" v-if="page.title">
      <div class="uk-card-body">
          <h1 class="uk-heading-bullet uk-card-title">{{page.title}}</h1>
          <div v-html="page.description"></div>
      </div>
  </div>
</template>

<script>
import client from '../services/contentful.js'
import markdownConverter from '../services/markdown.js'

export default {
  name: 'Page',
  metaInfo () {
    return {
      title: this.page.title,
      meta: [
        {
          'name': 'google-site-verification',
          'content': 'T4bIs7gHVNXI9iAAD5-0RbUZOWhhw_HlTit26aWMJeQ'
        }
      ]
    }
  },
  created () {
    client.getEntry(this.$route.params.pageId).then((entry) => {
      this.page = entry.fields
      this.page.description = markdownConverter.makeHtml(this.page.description)
      this.title = entry.title
    })
  },
  data () {
    return {
      page: {
        title: null
      }
    }
  }
}
</script>

<style>
</style>
