# toggle-on-click-jquery

- Opens by
  - Click
- Closes by
  - Second click
  - Mousedown outside
  - Esc

![](https://i.imgur.com/gxxFfAn.gif)

## Demo

https://webdeveloper.pro/demo/toggle-on-click-jquery/demo.html

## Install

```shell
npm install toggle-on-click-jquery --save
```

## Setup

```javascript
import toggleOnClick from 'toggle-on-click-jquery';
```

## Usage

```html
<p><button id="js-button">Click here</button></p>
	
<div class="menu" id="js-menu">
    Menu or something else...
</div>
```

```javascript
$(document).ready(function () {
    toggleOnClick(
        $('#js-button'), // Button
        $('#js-menu'), // Target
        {
            // How to open (optional)
            open($element) {
                $element.slideDown(200);
            },

            // How to close (optional)
            close($element) {
                $element.slideUp(200);
            }
        }
    );
})
```

Close menu by trigger:

```javascript
$('#js-menu').trigger('toggleOnClickClose');
```

## License

MIT

