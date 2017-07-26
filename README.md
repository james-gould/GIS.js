# About

A collection of useful functions to be used in parallel with your favourite GIS products. 

*Please note that `gis.js` is under active development and subject to frequent change. I'm working to include as much useful stuff each day, so please `npm update` every time before working with `gis.js`. Thanks 💖* 

# Getting Started

`gis.js` is simple to use by design and can easily be integrated with existing Node.js applications in a few minutes.
In code documentation makes working with the library a breeze, and the docs found here can offer further assistance if needs be.

Any problems? [Add an issue!](https://github.com/james-gould/GIS.js/issues)

To install, simply do the following:

1. `npm install gis.js`
2. In your code, simply add `var Gis = require('gis.js');`

And you're set!

You can then access the API like:

```
var latitude = 51.5245932;
var longitude = -0.1356357;

if(Gis.ValidLatLng(latitude, longitude) {
 // Do stuff!
 }
 ```
 
 Further examples and full documentation on each API function can be found on the [Wiki!](https://github.com/james-gould/GIS.js/wiki)

# Contributions

