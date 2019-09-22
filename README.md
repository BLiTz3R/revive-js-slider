# JS slider for the final project of REvive's seminar

### Installation

1. Move the slider's files into your project's folder.

2. Set up your HTML markup.

```html
<div id="your-id" class="slider"></div>
```

3. Add style.css in your ``<head>``.
  
```html
<link rel="stylesheet" href="style.css">
```

4. Add slider.js before your closing ``<body>`` tag.
  
```javascript
<script src="slider.js"></script>
```

5. Initialize the slider in your script file or an inline script tag.

```javascript
slider('your-id', config);
```

6. (optional) Edit the config array in slider.js to suit your preference, or create your own, respecting its structure, as seen below.

When complete, your HTML should look something like:

```html
<html>

<head>
  <link rel="stylesheet" href="style.css">
  <title>Best JS slider ever</title>
</head>

<body>
  <div id="your-id" class="slider"></div>

  <script src="slider.js"></script>
  <script>
    slider('your-id', config);
  </script>
</body>
</html>
```

A HTML file like this is already included for your convenience.

### Configuration settings

If you want, you can edit the config array as follows:

```javascript
[ 
  {                           // first slide
    img_url: 'https://....',  // full image url
    duration: 5,              // slide duration in seconds
    title: {
      text: 'message',        // title text
      color: '#fff',          // title color
      bgcolor: '#000',        // title background color
      halign: 'left',         // horizontal align: left, right, center
      valign: 'top',          // vertical align: top, bottom, center
      fontsize: '12px'        // title font size
    },
    entry: {
      fx: 'toLeft',           // slide entry effect: toLeft, toRight, toTop, toBottom, fadeIn
      duration: 3,            // slide entry duration in seconds
    }
  }, {                        // second slide
    ...
  }, {                        // third slide etc.
    ...
  }
]
```
