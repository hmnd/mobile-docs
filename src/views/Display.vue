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
    setUserAgent(document.querySelector('iframe').contentWindow, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1 Safari/605.1.15')
    navigator.__defineGetter__('userAgent', function () {
      return 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1 Safari/605.1.15' // customized user agent
    });

    navigator.userAgent; // 'foo'
    document.querySelector('iframe').contentWindow.navigator.__defineGetter__('userAgent', function () {
      return 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1 Safari/605.1.15' // customized user agent
    });

    document.querySelector('iframe').contentWindow.navigator.userAgent; // 'foo'
    document.querySelector('iframe').contentWindow.location.reload();
  },
  props: ['docsLink'],
  name: 'display'
}
</script>

