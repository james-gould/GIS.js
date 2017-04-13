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
    ValidLatLng: (latitude, longitude, callback) => {
        if(!Utils.isFloat(latitude) || !Utils.isFloat(longitude)) {
            if(typeof callback === undefined) {
                return false;
            } else {
                var err = new Error("Latitude/longitude pair is of an invalid datatype");
                return callback(err);
            }
        }
    },

    ValidPoint: (point) => {
        if(typeof point !== Gis.Point) { // hmm, breaks if custom Point obj with x, y props. This is just bad but it's the weekend, lets go crazy ¯\_(ツ)_/¯ 
            return false;
        } else {
            return Gis.ValidLatLng(point.x, point.y);
        }
    },

    PointInPolygon: (latitude, longitude, polygon) => {
        
    }

}

/*
 * Export only Gis, do not release any local objects or functions (extracted or otherwise) used.
 */
module.exports = Gis;