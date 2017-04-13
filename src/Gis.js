/* 
 * 
 *  Gis.js is released under the MIT license, which should be retained when including, utilising or developing Gis.js in any environment.
 * 
 *  Original Creator: James Gould © 2017
 * 
 */


/**
 * Utility functions for working with GIS data. Do not export, use internally.
 */
var Utils = { 

    /**
     * Checks if the input is of a primitive value with no fractional parts.
     */
    isFloat: (value) => {
        return value === +n && n !== (n|0);
    }

}


/**
 * Contains utility functions for working with GIS data.
 * 
 */
var Gis = { 

    ValidLatLng: (latitude, longitude, callback) => {
        if(!Utils.isFloat(latitude) || !Utils.isFloat(longitude)) {
            var err = new Error("Latitude/longitude pair is of an invalid datatype");
            return callback(err)
        }
    },

}

// /**
//  * Export only Gis, do not release any local objects or functions (extracted or otherwise) used.
//  */
module.exports = Gis;