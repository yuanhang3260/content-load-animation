# content-load-animation
A web content loading animation component built with Vue.js. Width and height of the animation area are configurable, and it will automatically adjust the layout design.  
  
<img src="https://j.gifs.com/L8BvKr.gif" alt="example1" width="450px"/> <img src="https://j.gifs.com/qY8lO0.gif" alt="example2" width="200px"/>

### Installation
```nohighlight
npm install content-load-animation --save
```

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
  <load-animation :width=300 :height=150 :title=true :image=true></load-animation>
</div>
```
Note according to https://vuejs.org/v2/guide/components.html#Component-Naming-Conventions, you have to use kebab-case for HTML tag name. (In the above example, LoadAnimation => load-animation)

------

This component is built as UMD compliant, meaning it can also be used directly in browser, either by loading from \<scirpt\> tag, or AMD loader such as RequireJS.
  
If loaded from \<script\>, it will be a global variable:
```javascript
window.LoadAnimation
```
If loaded by AMD:
```javascript
require(["vue", "LoadAnimation"], function(Vue, LoadAnimation) {
  // register component.
});
```

### License
[MIT License](https://github.com/yuanhang3260/content-load-placeholder/blob/master/LICENSE)
