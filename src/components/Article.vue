<template>
  <div class="uk-card uk-card-default uk-margin-bottom uk-text-left" v-if="article.image">
      <div class="uk-card-media-top">
          <img :src='article.image.fields.file.url + "?h=200&fit=fill&w=800"' alt="" uk-img class="thumb" v-if="article.image.fields">
      </div>
      <div class="uk-card-body">
          <h1 class="uk-heading-bullet uk-card-title">{{article.title}}</h1>
          <div v-html="article.description"></div>
      </div>
  </div>
</template>

<script>
import client from '../services/contentful.js'
import markdownConverter from '../services/markdown.js'

export default {
  name: 'Article',
  metaInfo () {
    return {
      title: this.article.title
    }
  },
  created () {
    client.getEntry(this.$route.params.articleId).then((entry) => {
      this.article = entry.fields
      this.article.description = markdownConverter.makeHtml(this.article.description)
      this.title = entry.title
      client.getAsset(this.article.image.sys.id).then(asset => (this.article.image = asset))
    })
  },
  data () {
    return {
      article: {
        title: null
      }
    }
  }
}
</script>

<style>
.thumb {
  width: 100%
}
</style>
