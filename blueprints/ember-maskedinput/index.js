/*jshint node:true*/
module.exports = {
  description: '',

  afterInstall: function(options) {
     return this.addBowerPackageToProject('jquery.maskedinput');
  }
};
