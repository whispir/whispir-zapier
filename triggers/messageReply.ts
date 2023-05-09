import { ZObject, Bundle } from "zapier-platform-core";
import {
  generateInputFields,
  transformInputData,
  InputBundle,
} from "../api/apis";
import { addHeaders } from "../authentication";
import { v4 as uuidv4 } from "uuid";

const messageReplyCallbackCreateInput = [
  {
    key: "name",
    required: true,
    label: "Name",
    helpText: "The name of the callback (make sure to provide a unique value)",
  },
  {
    key: "removeHTML",
    required: false,
    label: "Do you want to remove HTML?",
    helpText: "Specifies whether HTML should be stripped from responses.",
    choices: {
      yes: "enabled",
      no: "disabled",
    },
  },
  {
    key: "retriesEnabled",
    required: false,
    label: "Do you want to enable callback retries?",
    helpText:
      "Specifies whether Whispir should perform retries in the event there is a failure accessing the callback service.",
    choices: {
      yes: true,
      no: false,
    },
  },
  {
    key: "email",
    required: true,
    label: "Email",
    helpText:
      "Whispir notifies this email address when a callback has failed (only when retries are disabled)",
  },
] as const;

// Step 1: Write the subscribeHook Function
const subscribeMessageReplyHook = (
  z: ZObject,
  bundle: InputBundle<typeof messageReplyCallbackCreateInput>
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
      reply: "enabled",
      undelivered: "disabled",
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
const unsubscribeMessageReplyHook = (z: ZObject, bundle: Bundle) => {
  const hookId = bundle.subscribeData?.id;

  const headers = {
    "Content-Type": "application/vnd.whispir.api-callback-v1+json",
    Accept: "application/vnd.whispir.api-callback-v1+json",
  };

  return z
    .request({
      url: `${bundle.authData.host}/callbacks/${hookId}`,
      method: "DELETE",
      headers: addHeaders(headers, bundle),
    })
    .then((response) => z.JSON.parse(response.data));
};

// Step 3: Write the perform Function
const parseMessageReplyPayload = async (z: ZObject, bundle: Bundle) => {
  const {
    cleanedRequest: {
      messageId,
      from: { name, mobile, email, voice },
      responseMessage: { content },
    },
  } = bundle;

  const payload = {
    id: uuidv4(),
    messageId,
    recipientName: name,
    recpientMobileNumber: mobile,
    recipientEmail: email,
    recipientVoice: voice,
    recpientResponseContent: content,
  };

  return [payload];
};

const getFallbackMessageReplySample = (z: ZObject, bundle: Bundle) => {
  return [
    {
      id: "8f11e67b-ea85-4b67-bcf7-6f8dd25515ae",
      messageid: "9D7AD06AB686DFBD",
      recipientName: "John Doe",
      recpientMobileNumber: "04893939333",
      recipientEmail: "john@doe.com",
      recipientVoice: "04893939333",
      recpientResponseContent: "mocked-response",
    },
  ];
};

export const MessageReplyTriggerHook = {
  key: "messageRepliedCallbacks",

  noun: "Callback",
  display: {
    label: "Message Reply Received",
    description: "Triggers when a message reply is received.",
  },

  operation: {
    // `inputFields` can define the fields a user could provide,
    // we'll pass them in as `bundle.inputData` in your perform methods.
    inputFields: generateInputFields(messageReplyCallbackCreateInput),

    type: "hook",

    performSubscribe: subscribeMessageReplyHook,
    performUnsubscribe: unsubscribeMessageReplyHook,
    perform: parseMessageReplyPayload,
    performList: getFallbackMessageReplySample,

    sample: {
      id: "some-id",
      messageId: "9D7AD06AB686DFBD",
      recipientName: "John Doe",
      recpientMobileNumber: "04893939333",
      recipientEmail: "john@doe.com",
      recipientVoice: "04893939333",
      recpientResponseContent: "anything",
    },

    outputFields: [
      { key: "recipientName", label: "Recipient Name" },
      { key: "recpientMobileNumber", label: "Recipient Mobile Number" },
      { key: "recipientEmail", label: "Recipient Email" },
      { key: "recipientVoice", label: "Recipient Voice" },
      { key: "recpientResponseContent", label: "Message Reply Content" },
    ],
  },
};
