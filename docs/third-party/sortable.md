# sortable

这是一个List列表拖拽组件，‌用于实现列表项的拖拽排序功能，‌适用于需要用户对列表内容进行灵活操作的应用。

# sortable

### version

2.0.0 •

### downloads

796

### repository

github.com/dominictarr/sortable

### homepage

github.com/dominictarr/sortable

## default readme

# drag-sortable

Create a list that is can be sorted by dragging ui elements.

```js
var Sortable = require('./')

var array = ['Apple', 'Banana', 'Cherry', 'Durian', 'ElderBerry']

var emitter = Sortable(array, function template (s) {
  //return html Element.
  var e = document.createElement('h1')
  e.innerText = s
  return e
}, document.createElement('ol'))

//listen to changes (newArray, splices)
emitter.on('change', console.log.bind(console))
```

   

Change events is the new state of the array, and the splices that changed the
array.

template is just a function that takes any thing and returns an
HTMLElement



## known issues:

Dragging goes funny when zoomed on Chrome Android. Be sure to use viewport:   

```
<meta name="viewport"
  content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```

To disable zoom.





          



