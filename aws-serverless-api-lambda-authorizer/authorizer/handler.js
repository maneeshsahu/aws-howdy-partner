`use strict`;

const AuthPolicy = require("aws-auth-policy");
const OktaJwtVerifier = require("@okta/jwt-verifier");

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: process.env.OKTA_ISSUER,
  clientId: process.env.OKTA_CLIENT_ID,
});

// Claims of type String Array
const listClaims = ["scp", "groups"];

module.exports.auth = (event, context) => {
  const accessTokenString = event.authorizationToken.split(" ")[1];
  // parse the ARN from the incoming event
  var apiOptions = {};
  var tmp = event.methodArn.split(":");
  var apiGatewayArnTmp = tmp[5].split("/");
  var awsAccountId = tmp[4];
  apiOptions.region = tmp[3];
  apiOptions.restApiId = apiGatewayArnTmp[0];
  apiOptions.stage = apiGatewayArnTmp[1];

  console.log("Verifying Access Token", accessTokenString);
  oktaJwtVerifier
    .verifyAccessToken(accessTokenString, process.env.OKTA_AUDIENCE)
    .then((jwt) => {
      console.log("Verified JWT", jwt.claims);
      const policy = new AuthPolicy(jwt.claims.sub, awsAccountId, apiOptions);

      // Only Admins can update messages

      // Everyone can read messages
      policy.allowMethod(AuthPolicy.HttpVerb.GET, "/api/messages");

      // Set the JWT Claims in the context (after flattening the arrays)
      let builtPolicy = policy.build();
      builtPolicy.context = {};
      for (claim in jwt.claims) {
        if (listClaims.includes(claim)) {
          builtPolicy.context[claim] = jwt.claims[claim].join(", ");
        } else {
          builtPolicy.context[claim] = jwt.claims[claim];
        }
      }
      console.log("Policy Returned", JSON.stringify(builtPolicy));
      return context.succeed(builtPolicy);
    })
    .catch((err) => {
      console.log("error", err);
      //console.warn(err);
      return context.fail("Unauthorized");
    });
};