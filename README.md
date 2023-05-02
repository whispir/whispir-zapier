# Whispir Zap

This project helps users combine Whispir with Zapier's 5000+ SaaS integrations to automate their workflows. By creating a Whispir node with existing APIs, users can send, receive, and trigger workflows within the Whispir platform using pre-built automation.

# Before You Get started
* Firstly, you need to receive a Zapier invite to collaborate, make changes and contribute to the project. More info about invitation: https://platform.zapier.com/quickstart/invite-team-member
* Once you either created an account with Zapier or used the SSO provider to log in. Be sure to copy the `Deploy key` from your Zapier Profile Setting page https://developer.zapier.com/partner-settings/deploy-keys

# Installation

Install the package with:
```sh
yarn install 
# or
npm install
```

# Usage
* You would then need to run `yarn login` as this will run `zapier login --sso` if you have configured an SSO provider to login to Zapier.
* You would be prompted to enter the value of the `Deploy Key` and subsequently a `.zapierrc` file would be generated. 
* Once you have developed a feature or made changes, be sure to run `zapier validate` to perform a schema validation against your recent work. For additional information: https://platform.zapier.com/cli_docs/cli#validate
* If you would like to see your changes to be uploaded into the Zapier platform, be sure to run `zapier push` which will perform a pre-hook checks before uploading the application into the platform. 
* After it gets uploaded, you should be able to create a zapier workflow with your recent changes. 

# Debugging
To find out more about logs that are generated when your integration is run as part of a Zap. You can perform the following command 
```sh
yarn logs # runs "zapier logs --type=http"
```
These are the detailed logs that capture the requests and responses coming in and out of your integration. For more formatting options, you can find more a detailed information in this link: https://platform.zapier.com/cli_docs/cli#logs



