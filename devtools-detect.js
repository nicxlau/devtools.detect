(function(exportName){
	var exports = exports || {};
	function detect(func){
		if (typeof func === "function"){
			var status = false;

			function checkHandler(){
				checkStatus = false;
				if (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized){
					setStatus(true);
					return;
				}

				var element = new Image();
				element.__defineGetter__('id', function(){
					checkStatus = true;
					//setStatus(true);
				});
				console.log(element);
				//console.clear();

				if(navigator.userAgent.toLowerCase().indexOf('firefox') == -1){//for exclude scripts on firefox
					var r = function(){};
					r.toString = function(){
						checkStatus = true;
						//setStatus(true);
					};
					console.log("%c", r, "");
				}

				var widthThreshold = window.outerWidth - window.innerWidth > 160;
				var heightThreshold = window.outerHeight - window.innerHeight > 160;

				if (!(heightThreshold && widthThreshold) && (widthThreshold || heightThreshold)){
					checkStatus = true;
					//setStatus(true);
				}

				if(!checkStatus){
					var before = new Date().getTime();
					eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0;',2,1,'debugger'.split('|'),0,{}));
					var after = new Date().getTime();
					if (after - before > 100){
						checkStatus = true;
						//setStatus(true);
					}
				}

				console.clear();

				setStatus(checkStatus);
			}

			function setStatus(value){
				if (status !== value){
					status = value;
					func(value);
				}
			}
			checkHandler();
			setInterval(checkHandler, 1000);
			window.addEventListener("resize", checkHandler);
		}
	}
	exports.detect = detect;
	if (typeof define === "function"){
		if (define.amd || define.cmd){
			define(function() {
				return exports;
			});
		}
	} else if (typeof module !== "undefined" && module.exports){
		module.exports = exports;
	} else {
		window[exportName] = exports;
	}
})("devtools");
