const contentful = require('contentful')
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'wlwogpa9jm2r',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '2a7502199aac8e64e7c12c7eed0ec3a6ba630f3c66eb383bb0805ce968239bea',
  resolveLinks: true
})

export default client
