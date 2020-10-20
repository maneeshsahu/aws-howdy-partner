'use strict';

module.exports.handler = async (event, context) => {
  let sub = event.requestContext.authorizer.sub;
  console.log("event", sub);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        messages: [
          {
            date:  new Date(new Date().getTime() - 1000 * 60 * 60),
            text: `Howdy Partner ${sub}!`
          },      
          {
            date:  new Date(),
            text: 'Okta + AWS = Awesome'
          }
        ]
      },
      null,
      2
    ),
  };
};