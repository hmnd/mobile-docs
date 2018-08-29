<template>
  <v-container>
    <iframe :src="docsLink"></iframe>
  </v-container>
</template>

<style type="text/css">
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

iframe {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0px;
  width: 100%;
  height: 100%;
  border: none;
}
</style>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    function setUserAgent(window, userAgent) {
      if (window.navigator.userAgent != userAgent) {
        var userAgentProp = { get: function () { return userAgent; } };
        try {
          Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
        } catch (e) {
          window.navigator = Object.create(navigator, {
            userAgent: userAgentProp
          });
        }
      }
    }
    setUserAgent(document.querySelector('iframe').contentWindow, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36')
  },
  props: ['docsLink'],
  name: 'display'
}
</script>

