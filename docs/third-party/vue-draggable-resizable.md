
# vue-draggable-resizable 


### version
3.0.0 • 


### downloads
26,148 


### repository
github.com/mauricius/vue-draggable-resizable 


### homepage
github.com/mauricius/vue-draggable-resizable 


## default readme



[![logo](https://camo.githubusercontent.com/68bd2b612f8c78d5747a17727427e45cd0ac78c2812e44373a6c356b0f687e31/68747470733a2f2f7261776769742e636f6d2f6d61757269636975732f7675652d647261676761626c652d726573697a61626c652f76312f646f63732f7265736f75726365732f6c6f676f2e706e67)](https://camo.githubusercontent.com/68bd2b612f8c78d5747a17727427e45cd0ac78c2812e44373a6c356b0f687e31/68747470733a2f2f7261776769742e636f6d2f6d61757269636975732f7675652d647261676761626c652d726573697a61626c652f76312f646f63732f7265736f75726365732f6c6f676f2e706e67)

# VueDraggableResizable 3


> Vue Component for draggable and resizable elements.

If you are looking for the version 1 of the component, it is available on the
[v1 branch](https://github.com/mauricius/vue-draggable-resizable/tree/v1).

## Table of Contents

  * Features
  * Live Playground
  * Install and basic usage
    * Props
    * Events
    * Styling
  * Contributing
  * License

### Features

  * No dependencies
  * Use draggable, resizable or both
  * Define handles for resizing
  * Restrict size and movement to parent element
  * Snap element to custom grid
  * Restrict drag to vertical or horizontal axis
  * Maintain aspect ratio
  * Touch enabled
  * Use your own classes
  * Provide your own markup for handles

### Live Playground

For examples of the component go to the [live
playground](https://mauricius.github.io/vue-draggable-resizable/)

Alternatively you can run the playground on your own computer:

  * Clone this repository
  * `npm install`
  * `npm run story:dev`
  * Visit <http://localhost:6006/>

* * *

## Install and basic usage


​    
​    $ npm install --save vue-draggable-resizable

Register the component globally


​    
​    // main.js
​    import { createApp } from 'vue'
​    import VueDraggableResizable from 'vue-draggable-resizable'
​    import App from './App.vue'
​    
​    createApp(App)
​      .component("vue-draggable-resizable", VueDraggableResizable)
​      .mount('#app')

You may now use the component in your markup


​    
​    // App.vue
​    <template>
​      <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
​        <vue-draggable-resizable :w="100" :h="100" :parent="true">
​          <p>Hello! I'm a flexible component. You can drag me around and you can resize me.</p>
​        </vue-draggable-resizable>
​      </div>
​    </template>

The component itself does not include any CSS. You'll need to include it
separately in your `App.vue`:


​    
​    <style>
​    @import "vue-draggable-resizable/style.css";
​    </style>

### Props

#### className

Type: `String`  
Required: `false`  
Default: `vdr`

Used to set the custom `class` of a draggable-resizable component.


​    
​    <vue-draggable-resizable class-name="my-class">

#### classNameDraggable

Type: `String`  
Required: `false`  
Default: `draggable`

Used to set the custom `class` of a draggable-resizable component when
`draggable` is enable.


​    
​    <vue-draggable-resizable class-name-draggable="my-draggable-class">

#### classNameResizable

Type: `String`  
Required: `false`  
Default: `resizable`

Used to set the custom `class` of a draggable-resizable component when
`resizable` is enable.


​    
​    <vue-draggable-resizable class-name-resizable="my-resizable-class">

#### classNameDragging

Type: `String`  
Required: `false`  
Default: `dragging`

Used to set the custom `class` of a draggable-resizable component when is
dragging.


​    
​    <vue-draggable-resizable class-name-dragging="my-dragging-class">

#### classNameResizing

Type: `String`  
Required: `false`  
Default: `resizing`

Used to set the custom `class` of a draggable-resizable component when is
resizing.


​    
​    <vue-draggable-resizable class-name-resizing="my-resizing-class">

#### classNameActive

Type: `String`  
Required: `false`  
Default: `active`

Used to set the custom `class` of a draggable-resizable component when is
active.


​    
​    <vue-draggable-resizable class-name-active="my-active-class">

#### classNameHandle

Type: `String`  
Required: `false`  
Default: `handle`

Used to set the custom common `class` of each handle element. This way you can
style each handle individually using the selector `<your class>-<handle
code>`, where `handle code` identifies one of the handles provided by the
`handle` prop.

So for example, this component:


​    
​    <vue-draggable-resizable class-name-handle="my-handle-class"></vue-draggable-resizable>

renders the following:


​    
​    <div ...>
​      <div class="my-handle-class my-handle-class-tl"></div>
​      <div class="my-handle-class my-handle-class-tm"></div>
​      <div class="my-handle-class my-handle-class-tr"></div>
​      [...]
​    </div>

#### scale

Type: `Number|Array`  
Required: `false`  
Default: `1`

The `scale` prop controls the scale property when the CSS 3 [scale
transformation](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-
function/scale) is applied to one of the parent elements. If not provided the
default value is 1.


​    
​    <vue-draggable-resizable :scale="0.5">
​    
​    <vue-draggable-resizable :scale="[0.5, 0.4]">

#### disableUserSelect

Type: `Boolean`  
Required: `false`  
Default: `true`

By default, the component adds the style declaration `'user-select:none'` to
itself to prevent text selection during drag. You can disable this behaviour
by setting this prop to `false`.


​    
​    <vue-draggable-resizable :disable-user-select="false">

#### enableNativeDrag

Type: `Boolean`  
Required: `false`  
Default: `false`

By default, the browser's native drag and drop funcionality (usually used for
images and some other elements) is disabled, as it may conflict with the one
provided by the component. If you need, for whatever reason, to have this
functionality back you can set this prop to `true`.


​    
​    <vue-draggable-resizable :enable-native-drag="true">

#### active

Type: `Boolean`  
Required: `false`  
Default: `false`

Determines if the component should be active or not. The prop reacts to
changes and also can be used with the
`sync`[modifier](https://vuejs.org/v2/guide/components.html#sync-Modifier) to
keep the state in sync with the parent. You can use along with the
`preventDeactivation` prop in order to fully control the active behavior from
outside the component.


​    
​    <vue-draggable-resizable :active="true">

#### preventDeactivation

Type: `Boolean`  
Required: `false`  
Default: `false`

Determines if the component should be deactivated when the user clicks/taps
outside it.


​    
​    <vue-draggable-resizable :prevent-deactivation="true">

#### draggable

Type: `Boolean`  
Required: `false`  
Default: `true`

Defines it the component should be draggable or not.


​    
​    <vue-draggable-resizable :draggable="false">

#### resizable

Type: `Boolean`  
Required: `false`  
Default: `true`

Defines it the component should be resizable or not.


​    
​    <vue-draggable-resizable :resizable="false">

#### w

Type: `Number|String`  
Required: `false`  
Default: `200`

Define the initial width of the element. It also supports `auto`, but when you
start resizing the value will fallback to a number.


​    
​    <vue-draggable-resizable :w="200">

#### h

Type: `Number|String`  
Required: `false`  
Default: `200`

Define the initial height of the element. It also supports `auto`, but when
you start resizing the value will fallback to a number.


​    
​    <vue-draggable-resizable :h="200">

#### minWidth

Type: `Number`  
Required: `false`  
Default: `50`

Define the minimal width of the element.


​    
​    <vue-draggable-resizable :min-width="50">

#### minHeight

Type: `Number`  
Required: `false`  
Default: `50`

Define the minimal height of the element.


​    
​    <vue-draggable-resizable :min-height="50">

#### maxWidth

Type: `Number`  
Required: `false`  
Default: `null`

Define the maximum width of the element.


​    
​    <vue-draggable-resizable :max-width="400">

#### maxHeight

Type: `Number`  
Required: `false`  
Default: `null`

Define the maximum height of the element.


​    
​    <vue-draggable-resizable :max-height="50">

#### x

Type: `Number`  
Required: `false`  
Default: `0`

Define the initial x position of the element.


​    
​    <vue-draggable-resizable :x="0">

#### y

Type: `Number`  
Required: `false`  
Default: `0`

Define the initial y position of the element.


​    
​    <vue-draggable-resizable :y="0">

#### z

Type: `Number|String`  
Required: `false`  
Default: `auto`

Define the z-index of the element.


​    
​    <vue-draggable-resizable :z="999">

#### handles

Type: `Array`  
Required: `false`  
Default: `['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']`

Define the array of handles to restrict the element resizing:

  * `tl` \- Top left
  * `tm` \- Top middle
  * `tr` \- Top right
  * `mr` \- Middle right
  * `br` \- Bottom right
  * `bm` \- Bottom middle
  * `bl` \- Bottom left
  * `ml` \- Middle left

    
    
    <vue-draggable-resizable :handles="['tm','bm','ml','mr']">

#### axis

Type: `String`  
Required: `false`  
Default: `both`

Define the axis on which the element is draggable. Available values are `x`,
`y` or `both`.


​    
​    <vue-draggable-resizable axis="x">

#### grid

Type: `Array`  
Required: `false`  
Default: `[1,1]`

Define the grid on which the element is snapped.


​    
​    <vue-draggable-resizable :grid="[1,1]">

#### parent

Type: `Boolean`  
Required: `false`  
Default: `false`

Restricts the movement and the dimensions of the component to the parent.


​    
​    <vue-draggable-resizable :parent="true">

#### dragHandle

Type: `String`  
Required: `false`

Defines the selector that should be used to drag the component.


​    
​    <vue-draggable-resizable drag-handle=".drag">

#### dragCancel

Type: `String`  
Required: `false`

Defines a selector that should be used to prevent drag initialization.


​    
​    <vue-draggable-resizable drag-cancel=".drag">

#### lockAspectRatio

Type: `Boolean`  
Required: `false`  
Default: `false`

The `lockAspectRatio` property is used to lock aspect ratio. This property
doesn't play well with `grid`, so make sure to use only one at a time.


​    
​    <vue-draggable-resizable :lock-aspect-ratio="true">

#### onDragStart

Type: `Function`  
Required: `false`  
Default: `null`

Called when dragging starts (element is clicked or touched). If `false` is
returned by any handler, the action will cancel. You can use this function to
prevent bubbling of events.


​    
​    <vue-draggable-resizable :onDragStart="onDragStartCallback">


​    
​    function onDragStartCallback(ev){
​       ...
​       // return false; — for cancel
​    }

#### onDrag

Type: `Function`  
Required: `false`  
Default: `null`

Called before the element is dragged. The function receives the next values of
`x` and `y`. If `false` is returned by any handler, the action will cancel.


​    
​    <vue-draggable-resizable :onDrag="onDragCallback">


​    
​    function onDragStartCallback(x, y){
​       ...
​       // return false; — for cancel
​    }

#### onResizeStart

Type: `Function`  
Required: `false`  
Default: `null`

Called when resizing starts (handle is clicked or touched). If `false` is
returned by any handler, the action will cancel.


​    
​    <vue-draggable-resizable :onResizeStart="onResizeStartCallback">


​    
​    function onResizeStartCallback(handle, ev){
​       ...
​       // return false; — for cancel
​    }

#### onResize

Type: `Function`  
Required: `false`  
Default: `null`

Called before the element is resized. The function receives the handle and the
next values of `x`, `y`, `width` and `height`. If `false` is returned by any
handler, the action will cancel.


​    
​    <vue-draggable-resizable :onResize="onResizeCallback">


​    
​    function onResizeStartCallback(handle, x, y, width, height){
​       ...
​       // return false; — for cancel
​    }

* * *

### Events

#### activated

Parameters: `-`

Called whenever the component gets clicked, in order to show handles.


​    
​    <vue-draggable-resizable @activated="onActivated">

#### deactivated

Parameters: `-`

Called whenever the user clicks anywhere outside the component, in order to
deactivate it.


​    
​    <vue-draggable-resizable @deactivated="onDeactivated">

#### resizing

Parameters:

  * `left` the X position of the element
  * `top` the Y position of the element
  * `width` the width of the element
  * `height` the height of the element

Called whenever the component gets resized.


​    
​    <vue-draggable-resizable @resizing="onResizing">

#### resizestop

Parameters:

  * `left` the X position of the element
  * `top` the Y position of the element
  * `width` the width of the element
  * `height` the height of the element

Called whenever the component stops getting resized.


​    
​    <vue-draggable-resizable @resizestop="onResizstop">

#### dragging

Parameters:

  * `left` the X position of the element
  * `top` the Y position of the element

Called whenever the component gets dragged.


​    
​    <vue-draggable-resizable @dragging="onDragging">

#### dragstop

Parameters:

  * `left` the X position of the element
  * `top` the Y position of the element

Called whenever the component stops getting dragged.


​    
​    <vue-draggable-resizable @dragstop="onDragstop">

* * *

### Styling

You can style the component using appropriate class names passed as props to
the component. Moreover you can replace the default styles for the handles,
provided in the source file `vue-draggable-resizable.css`, but you should take
care to define position and size for them. The default classes for handles are
`handle` and `handle-tl`, `handle-br` and so on.

The component also provides [named
slots](https://vuejs.org/guide/components/slots.html#named-slots) for each
handle, so you can use your markup inside each one.



## Contributing

Any contribution to the code or any part of the documentation and any idea
and/or suggestion are very welcome.


​    
​    # serve with hot reload at localhost:8080
​    npm run dev
​    
​    # distribution build
​    npm run build
​    
    # build the histoire docs
    npm run story:build
    
    # run tests
    npm run test
    
    # run histoire at localhost:6006
    npm run story:dev





​            