react-server-side-rendering-sample
==================================

for AdventCalendar http://qiita.com/advent-calendar/2014/reactjs

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/koba04/react-server-side-rendering-sample)

* [react-router](https://github.com/rackt/react-router)
* [react-bootstrap](http://react-bootstrap.github.io/)
* [react-video](https://github.com/pedronauck/react-video)

## setup

```
npm i
node_modules/dtsm/bin/dtsm install
node_modules/typescript/bin/tsc --project src
node_modules/browserify/bin/cmd.js intermediate/browser.js -o public/bundle.js
```

## start server

```
node app.js
```
