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
     * @param {obj} value - An object to be tested.
     * @return {bool} - True if 'value' evaluates to be a valid float, false otherwise.
     */
    isFloat: (value) => {
        return value === +n && n !== (n|0);
    }
}


/**
 * Contains utility functions for working with GIS data.
 */
var Gis = { 

    /**
     * Point object
     * @param {float} latitude - The latitude value of a coordinate, to 12 decimal places.
     * @param {float} longitude - The longitude value of a coordinate, to 12 decimal places.
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
     * @param {float} latitude - The latitude value of a coordinate, to 12 decimal places.
     * @param {float} longitude - The longitude value of a coordinate, to 12 decimal places.
     */
    ValidLatLng: (latitude, longitude) => {
        if(!Utils.isFloat(latitude) || !Utils.isFloat(longitude)) {
            return false
        }
        return (latitude >= -90 && latitude <= 90) && (longitude >= -180 && longitude <= 180);
    },

    /**
     * Validates if a Point object is valid.
     * @param {object} point - A point on a map containing an X and Y coordinate.
     */
    ValidPoint: (point) => {
        return !(point instanceof Gis.Point) ? Gis.ValidLatLng(point.x, point.y) : false;
    },

    /**
     * Determines if a given (latitude, longitude) pair is within a given polygon. Currently only works will an array of Point objects.
     * @param {float} latitude - The latitude value of a coordinate, to 12 decimal places.
     * @param {float} longitude - The longitude value of a coordinate, to 12 decimal places.
     * @param {array} polygon - An array of Point objects, representing a polygon.
     */
    // PointInPolygon: (latitude, longitude, polygon) => {
    //     if(polygon instanceof Array === false || !Gis.ValidLatLng(latitude, longitude)) {
    //         return false;
    //     }


    // }

}

/*
 * Export only Gis, do not release any local objects or functions (extracted or otherwise).
 */
module.exports = Gis;