# AWS-Okta Howdy Partner

Follow the steps listed in this README to follow along the demos showcased in the AWS Okta Howdy Partner Event.

### Table of Contents
**[Okta Setup Instructions](#get-started-with-okta)**<br>
**[Run Single Page App with Okta Login](#run-spa)**<br>
**[Run Resource Server](#run-resource-server)**<br>
**[AWS CLI and Serverless](#aws-cli)**<br>

## Get Started with Okta

### Install Okta CLI

Follow the instructions for installing Okta CLI here: https://github.com/oktadeveloper/okta-cli#installation

### Sign Up for a Free Okta Developer Account

Run `okta register` to sign up for a new account. You will be prompted for the following information:
 - First Name
 - Last Name
 - E-mail Address
 - Company Name

 Once you provide all the information, the Okta CLI will create a new Okta Developer Organization.

![Okta-CLI Register](/images/okta-cli-register.png)

### Perform the One-Time Verification

Check your inbox for an email from Okta <noreply@okta.com> with the Subject 'One-time verification code'

![One-Time Verification E-mail](/images/email-one-time-verification-code.png)

Copy the verification code and paste in the Okta CLI. 

Once verified, you will get a link to set your password.

![Okta-CLI Verify](/images/okta-cli-complete.png)

### Set Password for Okta Organization

Copy and paste the password link in a browser and click on 'Reset Password'.

![Set Okta Account Password](/images/okta-set-password.png)

Your Okta Organization setup is now complete!

## Single Page App

This section will help you setup a sample Single Page App with the following capabilities:
 - Login and Registration
 - Token Scopes and Claims
 - Access Token Validation
 - Logout

This SPA sample is built with VueJS. You can always use your own SPA Framework like Angular or React. Please see <developer.okta.com> to locate samples for your specific technology stack of choice.

In this sample, Okta is the OIDC authorization and token server. The SPA is the OIDC client. 

### Setup the Vue Sample Application.

The Okta CLI allows you to very conveniently setup and configure the OIDC application.  

```
cd 1-vue-sample
okta start
```

After this completes, the `.okta.env` file is populated with the `ISSUER` and `CLIENT_ID` environment variables.

![Okta-CLI Create Vue Sample](/images/okta-cli-vue-sample.png)

### Install and Run the SPA

You will need to install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) in order to install the dependencies and run the vue samples. 

```
cd spa
npm install
npm start
```

This will run the vue application locally. 

![Start Vue App](/images/npm-start-vue-spa.png)

In your browser, navigate to <http://localhost:8080>

You should see this landing page. 

![Landing Page](/images/browser-start-page.png)

Click `Login` to continue.

![Login Page](/images/browser-login-page.png)

Enter an account credentials. You can use the email/password that you used while creating the Okta organization.

After a successful authentication, you should see a logged in page as below:

![Logged-in Page](/images/browser-logged-in-page.png)


## Resource Server


## AWS CLI

To setup the AWS services like API Gateway and Lamba, we will be using serverless and AWS CLI.

### Install Serverless

See installation instructions here for your operating system: <https://www.serverless.com/framework/docs/getting-started/>

### Install AWS CLI

Follow instructions here: <https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html>









