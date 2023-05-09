import { ZObject, Bundle } from "zapier-platform-core";
import {
  generateInputFields,
  transformInputData,
  InputBundle,
} from "../api/apis";
import { addHeaders } from "../authentication";
import { v4 as uuidv4 } from "uuid";

const messageUndeliveredCallbackCreateInput = [
  {
    key: "name",
    required: true,
    label: "Name",
    helpText: "The name of the callback (make sure to provide a unique value)",
  },
  {
    key: "removeHTML",
    required: false,
    label: "RemoveHTML",
    helpText: "Specifies whether HTML should be stripped from responses.",
    choices: {
      enabled: "enabled",
      disabled: "disabled",
    },
  },
  {
    key: "retriesEnabled",
    required: false,
    label: "Retries Enabled",
    helpText:
      "Specifies whether Whispir should perform retries in the event there is a failure accessing the callback service.",
    choices: {
      true: true,
      false: false,
    },
  },
  {
    key: "email",
    required: true,
    label: "Email",
    helpText:
      "Whispir notify this email address that a callback has failed (only when retries are disabled)",
  },
] as const;

// Step 1: Write the subscribeHook Function
const subscribeMessageUndeliveredHook = (
  z: ZObject,
  bundle: InputBundle<typeof messageUndeliveredCallbackCreateInput>
) => {
  const inputData = transformInputData(bundle.inputData);

  const data = {
    ...inputData,
    // the url that would be assigned automatically by Zapier
    url: bundle.targetUrl,
    // Hard-coding the following attributes as they are needed as part of callback resource creation by the Whispir Platform
    // but not required as part of Zapier.
    auth: {
      type: "queryparam",
      key: "not-available",
    },
    contentType: "json",
    callbacks: {
      reply: "disabled",
      undeliverable: "enabled",
    },
  };

  const headers = {
    "Content-Type": "application/vnd.whispir.api-callback-v1+json",
    Accept: "application/vnd.whispir.api-callback-v1+json",
  };

  // creating a callback resource against the Whispir Platform
  const responsePromise = z.request({
    url: bundle.authData.host + "/callbacks",
    method: "POST",
    headers: addHeaders(headers, bundle),
    body: JSON.stringify(data),
  });

  return responsePromise.then((response) => {
    if (response.status && response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw new z.errors.Error(response.data);
    }
  });
};

// Step 2: Write the unsubscribeHook Function
const unsubscribeMessageUndeliveredHook = (z: ZObject, bundle: Bundle) => {
  const hookId = bundle.subscribeData?.id;

  const headers = {
    "Content-Type": "application/vnd.whispir.api-callback-v1+json",
    Accept: "application/vnd.whispir.api-callback-v1+json",
  };

  return z.request({
    url: `${bundle.authData.host}/callbacks/${hookId}`,
    method: "DELETE",
    headers: addHeaders(headers, bundle),
  });
};

// Step 3: Write the perform Function
const parseMessageUndeliveredPayload = async (z: ZObject, bundle: Bundle) => {
  const {
    cleanedRequest: {
      messageId,
      customParameters: {
        recipient_full_name = "",
        recipient_email = "",
        recipient_sms = "",
        recpient_voice = "",
      },
    },
  } = bundle;

  const payload = {
    id: uuidv4(),
    messageId,
    recipientName: recipient_full_name,
    recpientMobileNumber: recipient_sms,
    recipientEmail: recipient_email,
    recipientVoice: recpient_voice,
  };

  return [payload];
};

const getFallbackMessageUndeliveredSample = (z: ZObject, bundle: Bundle) => {
  return [
    {
      id: "8f11e67b-ea85-4b67-bcf7-6f8dd25515ae",
      messageId: "9D7AD06AB686DFBD",
      recipientName: "mocked-name",
      recpientMobileNumber: "048939393",
      recipientEmail: "test@test.com",
      recipientVoice: "048939393",
    },
  ];
};

export const MessageUndeliveredTriggerHook = {
  key: "messageUndeliveredCallbacks",
  noun: "Callback",
  display: {
    label: "Message Undelivered",
    description: "Triggers when a message is undelivered.",
  },

  operation: {
    inputFields: generateInputFields(messageUndeliveredCallbackCreateInput),
    type: "hook",
    performSubscribe: subscribeMessageUndeliveredHook,
    performUnsubscribe: unsubscribeMessageUndeliveredHook,
    perform: parseMessageUndeliveredPayload,
    performList: getFallbackMessageUndeliveredSample,
    sample: {
      id: "some-id",
      messageId: "9D7AD06AB686DFBD",
      recipientName: "John Doe",
      recpientMobileNumber: "04893939333",
      recipientEmail: "john@doe.com",
      recipientVoice: "04893939333",
    },
    outputFields: [
      { key: "recipientName", label: "Recipient Name" },
      { key: "recpientMobileNumber", label: "Recipient Mobile Number" },
      { key: "recipientEmail", label: "Recipient Email" },
      { key: "recipientVoice", label: "Recipient Voice" },
    ],
  },
};
