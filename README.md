# JS slider for the final project of REvive's seminar
## In progress...

### Installation

1. Create an element with an id in your html, as a container for the slider.
2. Then add this to your html:
```javascript
<script src="slider.js"></script>
<script>
  slider('elementId', config);
</script>
```
3. (optional) Edit the config array in slider.js to suit your preference, or create your own, respecting its structure, as seen below.

Note: Input your element's id without the '#'. If you created your own configuration, use its variable name instead of 'config'.

### Configuration

Edit the config array as follows:

```javascript
[ 
  { // first slide
    img_url: 'https://....',
    duration: 5, // in seconds
    title: {
      text: 'message', 
      color: '#fff',
      bgcolor: '#000',
      halign: 'left',    // options: left, right, center
      valign: 'top',     // options: top, bottom, center
      fontsize: '12px'
    },
    entry: {
      fx: 'toLeft',      // options: toLeft, toRight, toTop, toBottom, fadeIn
      duration: 3,      // in seconds
    }
  }, { // second slide
    ...
  }, { // third slide
    ...
  },

]
```