/* 
 * 
 *  Gis.js is released under the MIT license, which should be retained when including, utilising or developing Gis.js in any environment.
 * 
 *  Original Creator: James Gould © 2017
 * 
 *  ----------> UNDER ACTIVE DEVELOPMENT. FEATURES, BUG FIXES AND REFACTORING WILL OCCUR NIGH ON DAILY. <----------
 * 
 */


/**
 * Utility functions for working with GIS data. Do not export, use internally.
 */
var Utils = { 

    /**
     * Checks if the input validates to a float datatype.
     */
    isFloat: (value) => {
        return value === +n && n !== (n|0);
    },


}


/**
 * Contains utility functions for working with GIS data.
 * 
 */
var Gis = { 

    /**
     * Point object
     */
    Point: (latitude, longitude) => {
        var point = {
            x: latitude,
            y: longitude
        };

        return point;
    },

    /**
     * Validates a (latitude, longitude) pair as being a valid float, and within the expected range of each respective value.
     */
    ValidLatLng: (latitude, longitude) => {
        if(!Utils.isFloat(latitude) || !Utils.isFloat(longitude)) {
            return false
        }
        return (latitude >= -90 && latitude <= 90) && (longitude >= -180 && longitude <= 180);
    },

    /**
     * Validates if a Point object is valid.
     */
    ValidPoint: (point) => {
        if(typeof point !== Gis.Point) { // hmm, breaks if custom Point obj with x, y props. This is just bad but it's the weekend, lets go crazy ¯\_(ツ)_/¯ 
            return false;
        } else {
            return Gis.ValidLatLng(point.x, point.y);
        }
        return (latitude >= -90 && latitude <= 90) && (longitude >= -180 && longitude <= 180);
    },

    /**
     * Determines if a given (latitude, longitude) pair is within a given polygon. Currently only works will an array of Point objects.
     */
    PointInPolygon: (latitude, longitude, polygon) => {
        
    }

}

/*
 * Export only Gis, do not release any local objects or functions (extracted or otherwise) used.
 */
module.exports = Gis;