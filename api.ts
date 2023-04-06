import { VERSION } from "./version";
import { authentication } from "./authentication";
import { ContactsApi, updateContact } from "./api/contactsApi";
import { WorkspacesApi } from "./api/workspacesApi";
import { MessagesApi, sendTemplatedMessage } from "./api/messagesApi";
import { DistributionListsApi, updateDistributionList } from "./api/distributionListsApi";
import { TemplatesApi } from "./api/templatesApi";
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
    [MessagesApi.key]: MessagesApi,
    [DistributionListsApi.key]: DistributionListsApi,
    [TemplatesApi.key]: TemplatesApi
  },

  creates: {
    contactUpdate: updateContact,
    sendTemplatedMessage: sendTemplatedMessage,
    [updateDistributionList.key]: updateDistributionList
  },
};
