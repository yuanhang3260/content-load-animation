<template>
  <div class="placeholder-container" :style="getContainerCss">
    <div v-if="hasHeader" class="header" :style="getTitleCss">
      <div v-for="i of titleLines" class="title-line" :style="getTitleLineCss"></div>
    </div>
    <div class="content" :style="getContentCss">
      <div v-for="i of textLines" class="content-line" :style="getContentLineCss"></div>
    </div>
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
    hasHeader: function() {
      return this.title || this.image;
    },

    getContainerCss: function() {
      return {
        width: this.toPixel(this.width),
        height: this.toPixel(this.totalHeight),
      }
    },

    getContentCss: function() {
      return {
        height: this.toPixel(this.contentHeight),
        'padding-top': this.toPixel(this.textLineHeight),
      }
    },
    getContentLineCss: function() {
      return {
        width: this.toPixel(this.textLineWidth),
        'margin-bottom': this.toPixel(this.textLineHeight),
      }
    },

    getTitleCss: function() {
      return {
        height: this.toPixel(this.headerHeight),
        'padding-top': this.toPixel(this.titleLineHeight),
      }
    },
    getTitleLineCss: function() {
      return {
        width: this.toPixel(this.titleLineWidth),
        'margin-bottom': this.toPixel(this.titleLineHeight),
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
  flex-direction: column;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-line {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  background-color: #ddd;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-line {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  background-color: #ccc;
}

</style>
