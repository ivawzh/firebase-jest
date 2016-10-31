# firebase-test

Demonstrate Firebase failure in Jest.

However, Mocha tests are passing!

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
 PASS  src/__tests__/store.jest.js (7.176s)
  store
    .set
      ✓ adds data to the path (4276ms)
    .remove
      ✓ deletes all data (767ms)


 RUNS  src/__tests__/index.jest.js

firebase-jest/node_modules/firebase/database-node.js:28
function B(a,b,c,d){if((!d||p(c))&&!t(c))throw Error(zb(a,b,d)+"must be a valid function.");}function Ab(a,b,c){if(p(c)&&(!ga(c)||null===c))throw Error(zb(a,b,!0)+"must be a valid context object.");};function Bb(a){var b=[];yb(a,function(a,d){da(d)?Ia(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var Cb=n.Promise||ib;ib.prototype["catch"]=ib.prototype.Ag;function Db(){var a=this;this.reject=this.resolve=null;this.sa=new Cb(function(b,c){a.resolve=b;a.reject=c})}function Eb(a,b){return function(c,d){c?a.reject(c):a.resolve(d);t(b)&&(Fb(a.sa),1===b.length?b(c):b(c,d))}}function Fb(a){a.then(void 0,aa)};function Gb(a,b){if(!a)throw Hb(b);}function Hb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function Ib(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCod Error: Firebase Database (3.5.2) INTERNAL ASSERT FAILED: removeWrite called with nonexistent writeId.
```

If I remove `beforeEach db.remove()`, then I get error for `db.push(...)`:
```shell
firebase-jest/node_modules/firebase/database-node.js:94
function mf(a){a.Ab||1!==a.L||(a.f("sending ping on primary."),of(a,{t:"c",d:{t:"p",d:{}}}))}function of(a,b){if(1!==a.L)throw"Connection is not connected";a.Uc.send(b)}cf.prototype.close=function(){2!==this.L&&(this.f("Closing realtime connection."),this.L=2,kf(this),this.ja&&(this.ja(),this.ja=null))};function kf(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.jd&&(clearTimeout(a.jd),a.jd=null)};function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(E(a),E(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
```

### Mocha tests

```shell
➜  firebase-jest git:(master) yarn mocha
yarn mocha v0.16.1
$ ./node_modules/.bin/mocha src/**/__tests__/**/*.mocha.js --compilers js:babel-register --full-trace


  .doSomething
    ✓ pushes hello world (889ms)

  store
    .set
      ✓ adds data to the path (389ms)
    .remove
      ✓ deletes all data (767ms)


  3 passing (7s)
```