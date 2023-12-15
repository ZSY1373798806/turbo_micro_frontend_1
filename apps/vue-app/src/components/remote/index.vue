<template>
  <div id="chat-app" ref="root">123</div>
</template>

<script>
import React from 'react';
import ReactDOM from 'react-dom/client';
import getRemoteScript from '@repe/remote-utils'
export default {
  name: 'ReactChatUi',
    data() {
        return {
            loading: false
        };
    },
    props: {
      mfName: {
        type: String,
        required: true
      },
      module: {
        type: String,
        required: true
      }
    },
    async mounted() {
      const REMOTE_URL = process.env.VUE_APP_REMOTE_PATH;
      const result = await getRemoteScript(`${REMOTE_URL}/remoteEntry.js`,this.mfName, this.module);
      console.log('---------', result)
      const root = ReactDOM.createRoot(this.$refs.root);
      root.render(React.createElement(result, this.$props));
    },
}
</script>

<style>

</style>
