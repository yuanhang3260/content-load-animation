<template>
  <div class="placeholder-container" :style="{width: toPixel(width), height: toPixel(height), 'padding-top': toPixel(lineHeight)}">
    <div class="empty-holder" :style="{height: toPixel(emptyHeight), width: toPixel(width)}"></div>
    <div class="content-line" :style="{width: toPixel(lineWidth), 'margin-bottom': toPixel(lineHeight)}" v-for="i of lines"></div>
  </div>
</template>

<script>
import  * as util from './util.js';

export default {
  name: 'content-placeholder',
  props: {
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 200,
    },
    title: {
      type: Boolean,
      default: false,
    },
    image: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return util.computeArgs(this.width, this.height);
  },
  methods: {
    toPixel : util.toPixel,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.placeholder-container {
  border: 2px solid #aaa;
  border-radius: 2px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

.empty-holder {
}

.content-line {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  background-color: #ddd;
}

</style>
