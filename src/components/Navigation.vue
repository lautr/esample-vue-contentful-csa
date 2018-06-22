<template>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;">
      <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li>
              <router-link tag="a" :to="{ name: 'homepage'}">
                Homepage
              </router-link>
            </li>
            <li>
                <router-link tag="a" :to="{ name: 'page', params: { pageId: 'jThjgoj0qIUE0ks4cGGy4' }}">
                Impressum
              </router-link>
            </li>
          </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navigation'
}
</script>

<style>
</style>
