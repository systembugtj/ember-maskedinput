/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-maskedinput',
  
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/jquery.maskedinput/dist/jquery.maskedinput.js');
  }
  
};
