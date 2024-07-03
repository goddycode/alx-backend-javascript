0x02. ES6 classes
.................


Resources
...........

Read or watch:
.............
- Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- Typed Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays
- Set Data Structure - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
- Map Data Structure - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- WeakMap - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap


Setup
......
Install NodeJS 12.11.x
.......................
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v
v12.11.1
$ npm -v
6.11.3

Install Jest, Babel, and ESLint
.................................
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

Configuration files
...................
Add the files below to your project directory

package.json
............
Click to show/hide file contents
babel.config.js
...............
Click to show/hide file contents
.eslintrc.js
............
Click to show/hide file contents
and…
Don’t forget to run $ npm install when you have the package.json
