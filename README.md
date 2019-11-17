# devtools.detect

### Detect if browser DevTools is open

> Also works if DevTools is undocked. Useful for when you want something to happen when DevTools is open.

### :japanese_goblin: [Demo](https://nicolauns.github.io/devtools.detect/)

## CDN

```html
<script src="https://cdn.jsdelivr.net/gh/nicolauns/devtools.detect@1.2.0/devtools-detect.min.js"></script>
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

[MIT](LICENSE) © [Nic.](http://ndev.cf)
