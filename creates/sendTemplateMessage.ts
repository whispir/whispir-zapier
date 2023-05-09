import { ZObject } from "zapier-platform-core";
import {
  generateInputFields,
  transformInputData,
  InputBundle,
} from "../api/apis";
import { addHeaders } from "../authentication";

const sendTemplatedMessageInput = [
  {
    key: "workspaceId",
    required: true,
    label: "Workspace ID",
    helpText: "The identifier for the workspace.",
    dynamic: "workspaces.id.projectName",
  },
  {
    key: "to",
    required: true,
    label: "Recipients",
    helpText:
      "Allows a combination of phone numbers, email address, Whispir Contact MRIs, User MRI, Distribution List MRI, separated by ,",
  },
  {
    key: "messageTemplateId",
    required: true,
    label: "Message Template ID",
    helpText: "The identifier for the Message Template",
    dynamic: "templates.id.messageTemplateName",
  },
  {
    key: "callbackId",
    required: false,
    label: "Callback Name",
    helpText:
      "The identifier for the Callback to be invoked on Message delivery events",
    dynamic: "callbacks.name",
  }
] as const;

export const sendTemplatedMessage = {
  key: "sendTemplatedMessage",
  noun: "messagetemplate",
  display: {
    label: "Send Message With Template",
    description: "Specify the messageTemplateId in the messages request",
  },
  operation: {
    inputFields: generateInputFields(sendTemplatedMessageInput),
    perform: async (
      z: ZObject,
      bundle: InputBundle<typeof sendTemplatedMessageInput>
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
