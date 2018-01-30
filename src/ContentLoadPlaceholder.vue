<template>
  <div class="placeholder-container" :style="getContainerCss">
    <!-- Flex from bottom to up -->
    <div class="content-line" :style="getContentLineCss" v-for="i of textLines"></div>
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
    // Has fake title?
    title: {
      type: Boolean,
      default: false,
    },
    // Has fake profile image?
    image: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return util.computeArgs(this.width, this.height, this.title, this.image);
  },
  computed: {
    getContainerCss: function() {
      return {
        width: this.toPixel(this.width),
        height: this.toPixel(this.totalHeight),
        'padding-top': this.toPixel(this.textLineHeight),
      }
    },
    getContentLineCss: function() {
      return {
        width: this.toPixel(this.textLineWidth),
        'margin-bottom': this.toPixel(this.textLineHeight),
      }
    }
  },
  methods: {
    toPixel : util.toPixel,
  },
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
