# content-load-animation
A content placeholder component with loading animation built on Vue.js. Width and height of the animation area are configurable, and it will automatically adjust the layout design.  
  
<img src="https://j.gifs.com/oQn3ML.gif" alt="example1" width="450px"/> <img src="https://j.gifs.com/kZjYyJ.gif" alt="example2" width="200px"/>

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
  <load-animation :width=300 :height=150 :title=true :image=true :circle-image=false></load-animation>
</div>
```
Note according to https://vuejs.org/v2/guide/components.html#Component-Naming-Conventions, you have to use kebab-case for HTML tag name. (In the above example, LoadAnimation => load-animation)

#### Use in Browser

This component is built as UMD compliant, so it can also be loaded directly in browser, either by \<scirpt\> tag, or AMD loader such as RequireJS.
  
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

### Config Attributes
|   Attribute   |               Description                |  Type  |
| :-----------: | ---------------------------------------- | :----: |
| width         | Width (in pixel) of the animation area.   |  int   |
| height        | Height (in pixel) of the animation area.  |  int   |
| title         | Has animated title lines on top.<br>Title lines are slightly darker than content lines. |  bool  |
| image         | Has animated profile image on top-left.   |  bool  |
| circle-image  | Use circle profile image instead of a square. <br>Only effective when "image" attribute is true. |  bool  |




### License
[MIT License](https://github.com/yuanhang3260/content-load-placeholder/blob/master/LICENSE)
