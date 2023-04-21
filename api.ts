import { VERSION } from "./version";
import { authentication } from "./authentication";
import { ContactsApi } from "./api/contactsApi";
import { WorkspacesApi } from "./api/workspacesApi";
import { DistributionListsApi } from "./api/distributionListsApi";
import { TemplatesApi } from "./api/templatesApi";
import { CallbacksApi } from "./api/callbacksApi";
import { MessageReplyTriggerHook } from "./triggers/messageReply";
import { MessageUndeliveredTriggerHook } from "./triggers/messageUndelivered";
import { sendEmailMessage } from "./creates/sendEmailMessage";
import { sendSMSMessage } from "./creates/sendSMSMessage";
import { sendTemplatedMessage } from "./creates/sendTemplateMessage";
import { updateContact } from "./creates/updateContact";
import { updateDistributionList } from "./creates/updateDistributionList";
import { runScenario } from "./creates/runScenario";

const handleHTTPError = (response, z) => {
  if (response.status >= 400) {
    throw new Error(`Unexpected status code ${response.status}`);
  }
  return response;
};

export const App = {
  version: VERSION,
  platformVersion: require("zapier-platform-core").version,
  authentication: authentication,

  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [],

  afterResponse: [handleHTTPError],

  // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
  resources: {
    [TemplatesApi.key]: TemplatesApi,
    [CallbacksApi.key]: CallbacksApi,
    [WorkspacesApi.key]: WorkspacesApi,
    [ContactsApi.key]: ContactsApi,
    [DistributionListsApi.key]: DistributionListsApi,
  },

  creates: {
    [updateContact.key]: updateContact,
    [updateDistributionList.key]: updateDistributionList,
    [runScenario.key]: runScenario,
    [sendTemplatedMessage.key]: sendTemplatedMessage,
    [sendEmailMessage.key]: sendEmailMessage,
    [sendSMSMessage.key]: sendSMSMessage,
  },

  triggers: {
    [MessageReplyTriggerHook.key]: MessageReplyTriggerHook,
    [MessageUndeliveredTriggerHook.key]: MessageUndeliveredTriggerHook,
  },
};
