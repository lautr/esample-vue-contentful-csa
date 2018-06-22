<template>
  <div id="app">
    <navigation></navigation>
    <div class="uk-container" id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import 'uikit'
import navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {navigation}
}
</script>

<style>
/* global things */
@import 'uikit/dist/css/uikit.min.css';

#content {
  padding: 20px 0 0 0;
}
</style>
