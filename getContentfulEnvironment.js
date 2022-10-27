const contentfulManagement = require('contentful-management');

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: '<removed>',
  });

  return contentfulClient.getSpace('y2g51lame0ix').then(space => space.getEnvironment('master'));
};
