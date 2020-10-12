const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

// Read environment variables from "testenv". Override environment vars if they are already set. https://www.npmjs.com/package/dotenv
const TESTENV = path.resolve(__dirname, '..', '.okta.env');
if (fs.existsSync(TESTENV)) {
  const envConfig = dotenv.parse(fs.readFileSync(TESTENV));
  Object.keys(envConfig).forEach((k) => {
    process.env[k] = envConfig[k];
  });
}

var ISSUER = process.env.ISSUER || 'https://{yourOktaDomain}.com/oauth2/default';
var SPA_CLIENT_ID = process.env.CLIENT_ID || '{spaClientId}';
var OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK ? true : false;

module.exports = {
  resourceServer: {
    port: 8000,
    oidc: {
      clientId: SPA_CLIENT_ID,
      issuer: ISSUER,
      testing: {
        disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
      }
    },
    assertClaims: {
      aud: 'api://default',
      cid: SPA_CLIENT_ID
    }
  }
};
