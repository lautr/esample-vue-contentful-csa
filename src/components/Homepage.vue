<template>
  <div class="uk-container">
    <h1 class="uk-heading-bullet">{{ msg }}</h1>
    <div class="uk-grid-small uk-child-width-expand@s" uk-grid>
      <div>
          <h2 class="uk-heading-bullet">Articles</h2>
          <div class="uk-card uk-card-default uk-margin-bottom uk-text-left" v-for="article in articles" v-bind:key="article.id">
              <div class="uk-card-media-top">
                <img :src='article.image.fields.file.url + "?h=400"' alt="">
              </div>
              <div class="uk-card-body">
                <router-link tag="a" :to="{ name: 'article', params: { articleId: article.id }}">
                  <h3>{{article.title}}</h3>
                </router-link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
          </div>
      </div>
      <div>
        <h2 class="uk-heading-bullet">Offers</h2>
        <div class="offer uk-card uk-card-primary uk-margin-bottom" v-for="offer in offers" v-bind:key="offer.id" @click="updateUrlWithOffer(offer)">
            <div class="uk-card-body">
                <h3 class="uk-card-title">{{offer.title}}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import client from '../services/contentful.js'
import UIkit from 'uikit'

export default {
  name: 'Homepage',
  metaInfo () {
    return {
      title: this.msg,
      meta: [
        {
          'name': 'google-site-verification',
          'content': 'T4bIs7gHVNXI9iAAD5-0RbUZOWhhw_HlTit26aWMJeQ'
        }
      ]
    }
  },
  created () {
    if (location.hash !== '') {
      this.showOffer()
    }
    window.onhashchange = () => {
      this.showOffer()
    }

    client.getEntries({
      'content_type': 'offer'
    }).then((entries) => {
      entries.items.forEach((item, index) => {
        item.fields.id = item.sys.id
        this.offers.push(item.fields)
      })
    }).catch(err => console.log(err))

    client.getEntries({
      'content_type': 'article'
    }).then((entries) => {
      entries.items.forEach((item, index) => {
        item.fields.id = item.sys.id
        this.articles.push(item.fields)
      })
    }).catch(err => console.log(err))
  },
  data () {
    return {
      offers: [],
      articles: [],
      articleImages: [],
      msg: 'Welcome to this CSA Test Page - für manuel'
    }
  },
  methods: {
    updateUrlWithOffer (offer) {
      location.hash = '!/offer/' + offer.id
    },
    showOffer () {
      let offerId = location.hash.replace('#!/offer/', '')
      if (offerId) {
        client.getEntry(offerId).then((entry) => {
          // monkey patched to the max
          let modal = UIkit.modal.dialog(`
            <div class="uk-modal-header">
              <h3 class="uk-modal-title">${entry.fields.title}</h3>
            </div>
            <div class="uk-modal-body">${entry.fields.description}</div>
            <div class="uk-modal-footer">
              <b>Price: </b> ${entry.fields.value}
            </div>
          `)

          var modalHide = modal.hide

          modal.hide = function () {
            location.hash = ''
            modalHide()
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.offer {
  cursor: pointer
}
</style>
