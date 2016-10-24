# firebase-test

Demonstrate Jest fail to load Firebase

## Failure:

```shell
node -v
v4.3.2
npm -v
3.10.9
npm install
npm test

> firebase-jest@1.0.0 test /firebase-jest
> jest --no-cache

 FAIL  ./index.spec.js
  ● Test suite failed to run

    TypeError: Cannot read property 'defineProperties' of undefined

      at node_modules/firebase/app-node.js:18:234
      at Object.<anonymous> (index.spec.js:1:171)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.72s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```