# content-load-animation
A web content loading animation plugin using Vue.js.

### Installation

### Usage
JavaScript:
```javascript
import Vue from 'vue'
import LoadAnimation from 'content-load-animation'

new Vue({
  el: '#element-to-load',
  components: {
    LoadAnimation    
  }
})
```

HTML:
```html
<div id="element-to-load">
  <load-animation :width=300 :height=300 :title=true :image=true></load-animation>
</div>
```
Note according to https://vuejs.org/v2/guide/components.html#Component-Naming-Conventions, you have to use kebab-case for HTML tag name. (In the above example, LoadAnimation => load-animation)

------

This component is built as UMD compliant, meaning it can also be used directly in browser, either by loading from \<scirpt\> tag, or AMD loader such as RequireJS.
  
If loaded from <script>, it will be a global variable:
```javascript
window.LoadAnimation
```
If loaded by AMD:
```javascript
require(["vue", "LoadAnimation"], function(Vue, LoadAnimation) {
  new Vue({
    el: '#element-to-load',
    components: {
      LoadAnimation    
    }
  });
});
```

### License
[MIT License](https://github.com/yuanhang3260/content-load-placeholder/blob/master/LICENSE)
