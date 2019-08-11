# devtools-detect

### Detect if browser devTools is open

> Also works if DevTools is undocked. Useful for when you want something to happen when DevTools is open.

## Usage

```javascript
devtools.detect(function(status){
	console.log('Is DevTools open?', status);
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
