import { VERSION } from "./version";
import { authentication } from "./authentication";
import { ContactsApi } from "./api/contactsApi";
import { WorkspacesApi } from "./api/workspacesApi";

const handleHTTPError = (response, z) => {
  if (response.status >= 400) {
    throw new Error(`Unexpected status code ${response.status}`);
  }
  return response;
};

export const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: VERSION,
  platformVersion: require("zapier-platform-core").version,
  authentication: authentication,

  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [],

  afterResponse: [handleHTTPError],

  // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
  resources: {
    [ContactsApi.key]: ContactsApi,
    [WorkspacesApi.key]: WorkspacesApi, 
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
  },

  // If you want your searches to show up, you better include it here!
  searches: {
  },

  // If you want your creates to show up, you better include it here!
  creates: {
  },
};
