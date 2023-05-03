import { ZObject } from "zapier-platform-core";
import {
  generateInputFields,
  transformInputData,
  InputBundle,
} from "../api/apis";
import { addHeaders } from "../authentication";

const sendEmailMessageInput = [
  {
    key: "workspaceId",
    required: true,
    label: "workspaceId",
    helpText: "The identifier for the workspace.",
    dynamic: "workspaces.id.projectName",
  },
  {
    key: "to",
    required: true,
    label: "To",
    helpText:
      "Allows a combination of phone numbers, email address, Whispir Contact MRIs, User MRI, Distribution List MRI, separated by ,",
  },
  {
    key: "subject",
    required: true,
    label: "Subject",
    helpText: "The message subject",
  },
  {
    key: "email",
    required: false,
    label: "Email",
    properties: [
      {
        key: "body",
        required: true,
        label: "Body",
        helpText: "The email message body",
      },
      {
        key: "footer",
        required: false,
        label: "Footer",
        helpText:
          "Plain text or html displayed at the bottom of your email message.",
      },
      {
        key: "type",
        required: false,
        label: "Type",
        helpText: "The email Message content type.",
        choices: {
          "text/plain": "text/plain",
          "text/html": "text/html",
        },
      },
    ],
  },
  {
    key: "callbackId",
    required: false,
    label: "CallbackId",
    helpText:
      "The identifier for the Callback to be invoked on Message delivery events",
    dynamic: "callbacks.name.id",
  },
  {
    key: "callbackParameters",
    required: false,
    label: "CallbackParameters",
    helpText:
      "Set of key-value pairs that you can attach to a callback. This can be useful for returning additional information about the object in a structured format",
    dict: true,
  },
] as const;

export const sendEmailMessage = {
    key: "sendEmailMessage",
    noun: "emailMessage",
    display: {
      label: "Send Email",
      description: "Send an email message",
    },
    operation: {
      inputFields: generateInputFields(sendEmailMessageInput),
      perform: async (
        z: ZObject,
        bundle: InputBundle<typeof sendEmailMessageInput>
      ) => {
        const { workspaceId, ...message } = transformInputData(bundle.inputData);
  
        const localVarPath =
          bundle.authData.host +
          "/workspaces/{workspaceId}/messages".replace(
            "{" + "workspaceId" + "}",
            encodeURIComponent(String(workspaceId))
          );
  
        const headers = {
          "Content-Type": "application/vnd.whispir.message-v1+json",
          Accept: "application/vnd.whispir.message-v1+json",
        };
  
        const responsePromise = z.request({
          method: "POST",
          headers: addHeaders(headers, bundle),
          url: localVarPath,
          body: message,
        });
  
        return responsePromise.then((response) => {
          if (
            response.status &&
            response.status >= 200 &&
            response.status <= 299
          ) {
            // Special case to extract the resource identifier from the `Location` header.
            const checkLocation =
              response?.headers?.location?.match(/\/([^\/]+)\/?$/);
            let id =
              checkLocation && checkLocation[1] ? checkLocation[1] : undefined;
  
            return { id, ...response.data };
          } else {
            throw new z.errors.Error(response.data);
          }
        });
      },
    },
  };

