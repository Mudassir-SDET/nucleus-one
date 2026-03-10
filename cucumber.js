module.exports = {
  default: {
    paths: ['features/**/*.feature'],       // path to your feature files
    require: ['step-definitions/**/*.js'], // path to your step definitions
    publishQuiet: true
  }
};