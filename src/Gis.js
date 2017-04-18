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

    /**
     * Validates a (latitude, longitude) pair as being a valid float, and within the expected range of each respective value.
     */
    ValidLatLng: (latitude, longitude) => {
        if(!Utils.isFloat(latitude) || !Utils.isFloat(longitude)) {
            return false
        }

        return (latitude >= -90 && latitude <= 90) && (longitude >= -180 && longitude <= 180);
    },

}

/*
 * Export only Gis, do not release any local objects or functions (extracted or otherwise) used.
 */
module.exports = Gis;