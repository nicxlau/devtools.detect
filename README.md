# devtools.detect

### Detect if browser DevTools is open

> Also works if DevTools is undocked. Useful for when you want something to happen when DevTools is open.

### [Demo](https://jco666.github.io/devtools.detect/)

## CDN

```html
<script src="https://cdn.jsdelivr.net/gh/jco666/devtools.detect@latest/devtools-detect.min.js"></script>
```

## Usage

```javascript
devtools.detect(function(status){
	alert('Is DevTools open? ' + status);
});
```

## Support browsers

| Browser	| Supported	|
| ------------- | -------------	|
| Chrome	| ✓		|
| Firefox	| ✓		|
| Opera		| ✓		|
| Safari	| ✓		|
| Mobile Safari	| ✓&sup1;	|
| Edge		| ✓		|
| IE11		| ✓		|
| IE10		| ✓ 		|

## License

[MIT](LICENSE) © [Jacob K.](http://lsdev.cf)
