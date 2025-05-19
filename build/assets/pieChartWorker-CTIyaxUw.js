(function(){"use strict";self.onmessage=function(t){const{arr:e,row:n,colors:s}=t.data,r=e.map(a=>{const o=n[a.id];return o===0?s[0]:o===1?s[1]:o===2?s[2]:o===3?s[3]:s[4]});self.postMessage(r)}})();
