# firebase-test

Demonstrate Firebase failure

## Failure:

```shell
node -v
v4.3.2
npm -v
3.10.9
npm install
npm test

➜  firebase-jest git:(master) ✗ yarn test
yarn test v0.16.1
$ ./node_modules/.bin/jest --no-cache
 PASS  src/__tests__/store.spec.js (7.176s)
  store
    .set
      ✓ adds data to the path (4276ms)
    .remove
      ✓ deletes all data (767ms)


 RUNS  src/__tests__/index.spec.js

firebase-jest/node_modules/firebase/database-node.js:28
function B(a,b,c,d){if((!d||p(c))&&!t(c))throw Error(zb(a,b,d)+"must be a valid function.");}function Ab(a,b,c){if(p(c)&&(!ga(c)||null===c))throw Error(zb(a,b,!0)+"must be a valid context object.");};function Bb(a){var b=[];yb(a,function(a,d){da(d)?Ia(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var Cb=n.Promise||ib;ib.prototype["catch"]=ib.prototype.Ag;function Db(){var a=this;this.reject=this.resolve=null;this.sa=new Cb(function(b,c){a.resolve=b;a.reject=c})}function Eb(a,b){return function(c,d){c?a.reject(c):a.resolve(d);t(b)&&(Fb(a.sa),1===b.length?b(c):b(c,d))}}function Fb(a){a.then(void 0,aa)};function Gb(a,b){if(!a)throw Hb(b);}function Hb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function Ib(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCod Error: Firebase Database (3.5.2) INTERNAL ASSERT FAILED: removeWrite called with nonexistent writeId.
```

If I remove `beforeEach db.remove()`, then I get error for `db.push(...)`:
```shell
firebase-jest/node_modules/firebase/database-node.js:94
function mf(a){a.Ab||1!==a.L||(a.f("sending ping on primary."),of(a,{t:"c",d:{t:"p",d:{}}}))}function of(a,b){if(1!==a.L)throw"Connection is not connected";a.Uc.send(b)}cf.prototype.close=function(){2!==this.L&&(this.f("Closing realtime connection."),this.L=2,kf(this),this.ja&&(this.ja(),this.ja=null))};function kf(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.jd&&(clearTimeout(a.jd),a.jd=null)};function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(E(a),E(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
```

Full error stack trace:

```shell
➜  firebase-jest git:(master) yarn test
yarn test v0.16.1
$ ./node_modules/.bin/jest --no-cache
  console.log node_modules/firebase/database-node.js:36
    p:0: Browser went online.

  console.log node_modules/firebase/database-node.js:36
    0: set {"path":"/test/default-user","value":null,"Jg":null}

  console.log node_modules/firebase/database-node.js:36
    p:0: Buffering put: /test/default-user

  console.log node_modules/firebase/database-node.js:36
    p:0: Making a connection attempt

  console.log node_modules/firebase/database-node.js:36
    p:0: Auth token refreshed

  console.log node_modules/firebase/database-node.js:36
    getToken() completed. Creating connection.

  console.log node_modules/firebase/database-node.js:36
    c:0:0: Connection created

  console.log node_modules/firebase/database-node.js:36
    c:0:0:0 Websocket connecting to wss://web-sucker-si-dev.firebaseio.com/.ws?v=5

  console.log node_modules/firebase/database-node.js:36
    c:0:0:0 Websocket connected.

  console.log node_modules/firebase/database-node.js:36
    c:0:0: Reset packet received.  New host: s-usc1c-nss-128.firebaseio.com

  console.log node_modules/firebase/database-node.js:36
    c:0:0: Shutting down all connections

  console.log node_modules/firebase/database-node.js:36
    c:0:0:0 WebSocket is being closed

  console.log node_modules/firebase/database-node.js:36
    c:0:0:0 Websocket connection was disconnected.

  console.log node_modules/firebase/database-node.js:36
    c:0:0:1 Websocket connecting to wss://s-usc1c-nss-128.firebaseio.com/.ws?v=5&ns=web-sucker-si-dev

  console.log node_modules/firebase/database-node.js:36
    c:0:0:1 Websocket connected.

  console.log node_modules/firebase/database-node.js:36
    c:0:0: Realtime connection established.

  console.log node_modules/firebase/database-node.js:36
    p:0: connection ready

  console.log node_modules/firebase/database-node.js:36
    p:0: reportStats {"c":{"sdk.js.3-5-2":1}}

  console.log node_modules/firebase/database-node.js:36
    p:0: {"r":1,"a":"s","b":{"c":{"sdk.js.3-5-2":1}}}

  console.log node_modules/firebase/database-node.js:36
    p:0: {"r":2,"a":"gauth","b":{"cred":"ya29.CjCKA9bX2ckOEFJgfpMkJLPDn_VQ9G9g_0lDUsX9L-eydOD7MozjJ2qt1kLdys7AyFw"}}


  console.log node_modules/firebase/database-node.js:36
    p:0: {"r":3,"a":"p","b":{"p":"/test/default-user","d":null}}

  console.log node_modules/firebase/database-node.js:36
    p:0: from server: {"r":1,"b":{"s":"ok","d":""}}

  console.log node_modules/firebase/database-node.js:36
    c:0:0: Primary connection is healthy.

  console.log node_modules/firebase/database-node.js:36
    p:0: from server: {"r":2,"b":{"s":"ok","d":{"auth":null,"expires":1477924160}}}

  console.log node_modules/firebase/database-node.js:36
    p:0: from server: {"r":3,"b":{"s":"ok","d":""}}

  console.log node_modules/firebase/database-node.js:36
    p:0: p response {"s":"ok","d":""}

  console.log node_modules/firebase/database-node.js:36
    0: set {"path":"/test/default-user","value":{"hello":"world"},"Jg":null}

  console.log node_modules/firebase/database-node.js:36
    p:0: {"r":4,"a":"p","b":{"p":"/test/default-user","d":{"hello":"world"}}}

  console.log node_modules/firebase/database-node.js:36
    p:0: from server: {"r":4,"b":{"s":"ok","d":""}}

  console.log node_modules/firebase/database-node.js:36
    p:0: p response {"s":"ok","d":""}

  console.log node_modules/firebase/database-node.js:36
    p:0: Listen called for /test/default-user default

  console.log node_modules/firebase/database-node.js:36
    p:0: Listen on /test/default-user for default

  console.log node_modules/firebase/database-node.js:36
    p:0: {"r":5,"a":"q","b":{"p":"/test/default-user","h":""}}

  console.log node_modules/firebase/database-node.js:36
    p:0: handleServerMessage d {"p":"test/default-user","d":{"hello":"world"}}

  console.log node_modules/firebase/database-node.js:36
    event: /test/default-user:value:{"hello":"world"}

  console.log node_modules/firebase/database-node.js:36
    p:0: Unlisten called for /test/default-user default

  console.log node_modules/firebase/database-node.js:36
    p:0: Unlisten on /test/default-user for default

  console.log node_modules/firebase/database-node.js:36
    p:0: {"r":6,"a":"n","b":{"p":"/test/default-user"}}

  console.log node_modules/firebase/database-node.js:36
    p:0: from server: {"r":5,"b":{"s":"ok","d":{}}}

  console.log node_modules/firebase/database-node.js:36
    0: set {"path":"/test/default-user/-KVPvWSiRIKNYfVnvsUU","value":{"hello":"world"},"Jg":null}

  console.log node_modules/firebase/database-node.js:36
    p:0: {"r":7,"a":"p","b":{"p":"/test/default-user/-KVPvWSiRIKNYfVnvsUU","d":{"hello":"world"}}}

  console.log node_modules/firebase/database-node.js:36
    p:0: from server: {"r":6,"b":{"s":"ok","d":""}}

  console.log node_modules/firebase/database-node.js:36
    p:0: from server: {"r":7,"b":{"s":"ok","d":""}}

  console.log node_modules/firebase/database-node.js:36
    p:0: p response {"s":"ok","d":""}

  console.log node_modules/firebase/database-node.js:36
    0: set {"path":"/test/default-user","value":null,"Jg":null}

  console.log node_modules/firebase/database-node.js:36
    p:0: {"r":8,"a":"p","b":{"p":"/test/default-user","d":null}}

  console.log node_modules/firebase/database-node.js:36
    p:0: from server: {"r":8,"b":{"s":"ok","d":""}}

  console.log node_modules/firebase/database-node.js:36
    p:0: p response {"s":"ok","d":""}

  console.log node_modules/firebase/database-node.js:36
    p:0: Listen called for /test/default-user default

  console.log node_modules/firebase/database-node.js:36
    p:0: Listen on /test/default-user for default

  console.log node_modules/firebase/database-node.js:36
    p:0: {"r":9,"a":"q","b":{"p":"/test/default-user","h":""}}

 PASS  src/__tests__/store.spec.js (6.372s)
  store
    .set
      ✓ add data to the path (3488ms)
    .remove
      ✓ deletes all data (777ms)

  console.log node_modules/firebase/database-node.js:36
    p:0: from server: {"r":9,"b":{"s":"ok","d":{}}}

  console.log node_modules/firebase/database-node.js:36
    p:0: listen response {"s":"ok","d":{}}

  console.log node_modules/firebase/database-node.js:36
    event: /test/default-user:value:null

  console.log node_modules/firebase/database-node.js:36
    p:0: Unlisten called for /test/default-user default

  console.log node_modules/firebase/database-node.js:36
    p:0: Unlisten on /test/default-user for default

  console.log node_modules/firebase/database-node.js:36
    p:0: {"r":10,"a":"n","b":{"p":"/test/default-user"}}

  console.log node_modules/firebase/database-node.js:36
    p:0: Browser went online.

  console.log node_modules/firebase/database-node.js:36
    0: set {"path":"/test/default-user","value":null,"Jg":null}

  console.log node_modules/firebase/database-node.js:36
    p:0: Buffering put: /test/default-user

  console.log node_modules/firebase/database-node.js:36
    p:0: Making a connection attempt

  console.log node_modules/firebase/database-node.js:36
    p:0: Making a connection attempt

  console.log node_modules/firebase/database-node.js:36
    p:0: from server: {"r":10,"b":{"s":"ok","d":""}}

  console.log node_modules/firebase/database-node.js:36
    p:0: Auth token refreshed

  console.log node_modules/firebase/database-node.js:36
    getToken() completed. Creating connection.

  console.log node_modules/firebase/database-node.js:36
    c:0:0: Connection created

  console.log node_modules/firebase/database-node.js:36
    c:0:0:0 Websocket connecting to wss://web-sucker-si-dev.firebaseio.com/.ws?v=5

  console.log node_modules/firebase/database-node.js:36
    p:0: Auth token refreshed

  console.log node_modules/firebase/database-node.js:36
    getToken() completed. Creating connection.

  console.log node_modules/firebase/database-node.js:36
    c:0:1: Connection created

  console.log node_modules/firebase/database-node.js:36
    c:0:1:0 Websocket connecting to wss://web-sucker-si-dev.firebaseio.com/.ws?v=5

  console.log node_modules/firebase/database-node.js:36
    c:0:0:0 Websocket connected.

  console.log node_modules/firebase/database-node.js:36
    c:0:0: Reset packet received.  New host: s-usc1c-nss-128.firebaseio.com

  console.log node_modules/firebase/database-node.js:36
    c:0:0: Shutting down all connections

  console.log node_modules/firebase/database-node.js:36
    c:0:0:0 WebSocket is being closed

  console.log node_modules/firebase/database-node.js:36
    c:0:0:0 Websocket connection was disconnected.

  console.log node_modules/firebase/database-node.js:36
    c:0:0:1 Websocket connecting to wss://s-usc1c-nss-128.firebaseio.com/.ws?v=5&ns=web-sucker-si-dev

  console.log node_modules/firebase/database-node.js:36
    c:0:1:0 Websocket connected.

  console.log node_modules/firebase/database-node.js:36
    c:0:1: Reset packet received.  New host: s-usc1c-nss-128.firebaseio.com

  console.log node_modules/firebase/database-node.js:36
    c:0:1: Shutting down all connections

  console.log node_modules/firebase/database-node.js:36
    c:0:1:0 WebSocket is being closed

  console.log node_modules/firebase/database-node.js:36
    c:0:1:0 Websocket connection was disconnected.

  console.log node_modules/firebase/database-node.js:36
    c:0:1:1 Websocket connecting to wss://s-usc1c-nss-128.firebaseio.com/.ws?v=5&ns=web-sucker-si-dev


 RUNS  src/__tests__/index.spec.js

node_modules/firebase/database-node.js:94
function mf(a){a.Ab||1!==a.L||(a.f("sending ping on primary."),of(a,{t:"c",d:{t:"p",d:{}}}))}function of(a,b){if(1!==a.L)throw"Connection is not connected";a.Uc.send(b)}cf.prototype.close=function(){2!==this.L&&(this.f("Closing realtime connection."),this.L=2,kf(this),this.ja&&(this.ja(),this.ja=null))};function kf(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.jd&&(clearTimeout(a.jd),a.jd=null)};function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(E(a),E(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}

    ^
Connection is not connected
error Command failed with exit code 1.
```
