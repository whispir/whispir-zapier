/* tslint:disable:no-unused-locals */
import { ZObject } from "zapier-platform-core";
import { ObjectSerializer } from "../model/models";
import { generateInputFields, transformInputData, InputBundle } from "./apis";
import { addHeaders } from "../authentication";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

const templateCreateInput = [
  {
    key: "workspaceId",
    required: true,
    label: "workspaceId",
    helpText: "Test",
  },
  {
    key: "messageTemplateDescription",
    required: false,
    label: "MessageTemplateDescription",
    helpText: "Test",
  },
  {
    key: "responseTemplateId",
    required: false,
    label: "ResponseTemplateId",
    helpText: "Test",
  },
  {
    key: "subject",
    required: true,
    label: "Subject",
    helpText: "Test",
  },
  {
    key: "body",
    required: true,
    label: "Body",
    helpText: "Test",
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
        helpText: "Test",
      },
      {
        key: "footer",
        required: false,
        label: "Footer",
        helpText: "Test",
      },
      {
        key: "type",
        required: false,
        label: "Type",
        helpText: "Test",
        choices: {
          "text/plain": "text/plain",
          "text/html": "text/html",
        },
      },
      {
        key: "resources",
        required: false,
        label: "Resources",
        properties: [
          {
            key: "attachments",
            required: false,
            label: "Attachments",
            children: [
              {
                key: "attachmentName",
                required: true,
                label: "AttachmentName",
                helpText: "Test",
              },
              {
                key: "derefUri",
                required: true,
                label: "DerefUri",
                helpText: "Test",
              },
              {
                key: "attachmentDesc",
                required: false,
                label: "AttachmentDesc",
                helpText: "Test",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "voice",
    required: false,
    label: "Voice",
    properties: [
      {
        key: "header",
        required: false,
        label: "Header",
        helpText: "Test",
      },
      {
        key: "body",
        required: true,
        label: "Body",
        helpText: "Test",
      },
      {
        key: "type",
        required: false,
        label: "Type",
        helpText: "Test",
      },
      {
        key: "resources",
        required: false,
        label: "Resources",
        properties: [
          {
            key: "attachments",
            required: false,
            label: "Attachments",
            children: [
              {
                key: "attachmentName",
                required: true,
                label: "AttachmentName",
                helpText: "Test",
              },
              {
                key: "derefUri",
                required: true,
                label: "DerefUri",
                helpText: "Test",
              },
              {
                key: "attachmentDesc",
                required: false,
                label: "AttachmentDesc",
                helpText: "Test",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "web",
    required: false,
    label: "Web",
    properties: [
      {
        key: "body",
        required: false,
        label: "Body",
        helpText: "Test",
      },
      {
        key: "type",
        required: false,
        label: "Type",
        helpText: "Test",
        choices: {
          "text/plain": "text/plain",
          "text/html": "text/html",
        },
      },
    ],
  },
  {
    key: "social",
    required: false,
    label: "Social",
    properties: [
      {
        key: "social",
        required: false,
        label: "Social",
        children: [
          {
            key: "id",
            required: false,
            label: "Id",
            helpText: "Test",
            choices: {
              social: "social",
              social_long: "social_long",
            },
          },
          {
            key: "body",
            required: false,
            label: "Body",
            helpText: "Test",
          },
          {
            key: "type",
            required: false,
            label: "Type",
            helpText: "Test",
            choices: {
              "text/plain": "text/plain",
              "text/html": "text/html",
            },
          },
        ],
      },
    ],
  },
  {
    key: "type",
    required: false,
    label: "Type",
    helpText: "Test",
  },
  {
    key: "features",
    required: false,
    label: "Features",
    properties: [
      {
        key: "pushOptions",
        required: false,
        label: "PushOptions",
        properties: [
          {
            key: "notifications",
            required: false,
            label: "Notifications",
            helpText: "Test",
            choices: {
              enabled: "enabled",
              disabled: "disabled",
            },
          },
          {
            key: "escalationMins",
            required: false,
            label: "EscalationMins",
            helpText: "Test",
          },
          {
            key: "appId",
            required: true,
            label: "AppId",
            helpText: "Test",
          },
          {
            key: "priority",
            required: false,
            label: "Priority",
            helpText: "Test",
            choices: {
              NORMAL: "NORMAL",
              HIGH: "HIGH",
            },
          },
          {
            key: "fcm",
            required: false,
            label: "Fcm",
            properties: [
              {
                key: "androidChannelId",
                required: false,
                label: "AndroidChannelId",
                helpText: "Test",
              },
              {
                key: "sound",
                required: false,
                label: "Sound",
                helpText: "Test",
              },
              {
                key: "action",
                required: false,
                label: "Action",
                helpText: "Test",
              },
              {
                key: "image",
                required: false,
                label: "Image",
                helpText: "Test",
              },
            ],
          },
          {
            key: "apns",
            required: false,
            label: "Apns",
            properties: [
              {
                key: "sound",
                required: false,
                label: "Sound",
                helpText: "Test",
              },
              {
                key: "action",
                required: false,
                label: "Action",
                helpText: "Test",
              },
            ],
          },
          {
            key: "data",
            required: false,
            label: "Data",
            helpText: "Test",
          },
        ],
      },
      {
        key: "aliasOption",
        required: false,
        label: "AliasOption",
        properties: [
          {
            key: "aliasName",
            required: false,
            label: "AliasName",
            helpText: "Test",
          },
        ],
      },
    ],
  },
  {
    key: "dlr",
    required: false,
    label: "Dlr",
    properties: [],
  },
] as const;

const templateDeleteInput = [
  {
    key: "workspaceId",
    required: true,
    label: "workspaceId",
    helpText: "Test",
  },
  {
    key: "templateId",
    required: true,
    label: "templateId",
    helpText: "Test",
  },
] as const;

const templateListInput = [
  {
    key: "workspaceId",
    required: true,
    label: "workspaceId",
    helpText: "Test",
    dynamic: "workspaces.id.projectName",
  },
  {
    key: "limit",
    required: false,
    label: "limit",
    helpText: "Test",
  },
  {
    key: "offset",
    required: false,
    label: "offset",
    helpText: "Test",
  },
  {
    key: "sortOrder",
    required: false,
    label: "sortOrder",
    helpText: "Test",
    choices: {
      asc: "asc",
      desc: "desc",
    },
  },
  {
    key: "sortFields",
    required: false,
    label: "sortFields",
    helpText: "Test",
  },
] as const;

const templateRetrieveInput = [
  {
    key: "workspaceId",
    required: true,
    label: "workspaceId",
    helpText: "Test",
  },
  {
    key: "templateId",
    required: true,
    label: "templateId",
    helpText: "Test",
  },
] as const;

const templateUpdateInput = [
  {
    key: "workspaceId",
    required: true,
    label: "workspaceId",
    helpText: "Test",
  },
  {
    key: "templateId",
    required: true,
    label: "templateId",
    helpText: "Test",
  },
  {
    key: "messageTemplateDescription",
    required: false,
    label: "MessageTemplateDescription",
    helpText: "Test",
  },
  {
    key: "responseTemplateId",
    required: false,
    label: "ResponseTemplateId",
    helpText: "Test",
  },
  {
    key: "subject",
    required: true,
    label: "Subject",
    helpText: "Test",
  },
  {
    key: "body",
    required: true,
    label: "Body",
    helpText: "Test",
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
        helpText: "Test",
      },
      {
        key: "footer",
        required: false,
        label: "Footer",
        helpText: "Test",
      },
      {
        key: "type",
        required: false,
        label: "Type",
        helpText: "Test",
        choices: {
          "text/plain": "text/plain",
          "text/html": "text/html",
        },
      },
      {
        key: "resources",
        required: false,
        label: "Resources",
        properties: [
          {
            key: "attachments",
            required: false,
            label: "Attachments",
            children: [
              {
                key: "attachmentName",
                required: true,
                label: "AttachmentName",
                helpText: "Test",
              },
              {
                key: "derefUri",
                required: true,
                label: "DerefUri",
                helpText: "Test",
              },
              {
                key: "attachmentDesc",
                required: false,
                label: "AttachmentDesc",
                helpText: "Test",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "voice",
    required: false,
    label: "Voice",
    properties: [
      {
        key: "header",
        required: false,
        label: "Header",
        helpText: "Test",
      },
      {
        key: "body",
        required: true,
        label: "Body",
        helpText: "Test",
      },
      {
        key: "type",
        required: false,
        label: "Type",
        helpText: "Test",
      },
      {
        key: "resources",
        required: false,
        label: "Resources",
        properties: [
          {
            key: "attachments",
            required: false,
            label: "Attachments",
            children: [
              {
                key: "attachmentName",
                required: true,
                label: "AttachmentName",
                helpText: "Test",
              },
              {
                key: "derefUri",
                required: true,
                label: "DerefUri",
                helpText: "Test",
              },
              {
                key: "attachmentDesc",
                required: false,
                label: "AttachmentDesc",
                helpText: "Test",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "web",
    required: false,
    label: "Web",
    properties: [
      {
        key: "body",
        required: false,
        label: "Body",
        helpText: "Test",
      },
      {
        key: "type",
        required: false,
        label: "Type",
        helpText: "Test",
        choices: {
          "text/plain": "text/plain",
          "text/html": "text/html",
        },
      },
    ],
  },
  {
    key: "social",
    required: false,
    label: "Social",
    properties: [
      {
        key: "social",
        required: false,
        label: "Social",
        children: [
          {
            key: "id",
            required: false,
            label: "Id",
            helpText: "Test",
            choices: {
              social: "social",
              social_long: "social_long",
            },
          },
          {
            key: "body",
            required: false,
            label: "Body",
            helpText: "Test",
          },
          {
            key: "type",
            required: false,
            label: "Type",
            helpText: "Test",
            choices: {
              "text/plain": "text/plain",
              "text/html": "text/html",
            },
          },
        ],
      },
    ],
  },
  {
    key: "type",
    required: false,
    label: "Type",
    helpText: "Test",
  },
  {
    key: "features",
    required: false,
    label: "Features",
    properties: [
      {
        key: "pushOptions",
        required: false,
        label: "PushOptions",
        properties: [
          {
            key: "notifications",
            required: false,
            label: "Notifications",
            helpText: "Test",
            choices: {
              enabled: "enabled",
              disabled: "disabled",
            },
          },
          {
            key: "escalationMins",
            required: false,
            label: "EscalationMins",
            helpText: "Test",
          },
          {
            key: "appId",
            required: true,
            label: "AppId",
            helpText: "Test",
          },
          {
            key: "priority",
            required: false,
            label: "Priority",
            helpText: "Test",
            choices: {
              NORMAL: "NORMAL",
              HIGH: "HIGH",
            },
          },
          {
            key: "fcm",
            required: false,
            label: "Fcm",
            properties: [
              {
                key: "androidChannelId",
                required: false,
                label: "AndroidChannelId",
                helpText: "Test",
              },
              {
                key: "sound",
                required: false,
                label: "Sound",
                helpText: "Test",
              },
              {
                key: "action",
                required: false,
                label: "Action",
                helpText: "Test",
              },
              {
                key: "image",
                required: false,
                label: "Image",
                helpText: "Test",
              },
            ],
          },
          {
            key: "apns",
            required: false,
            label: "Apns",
            properties: [
              {
                key: "sound",
                required: false,
                label: "Sound",
                helpText: "Test",
              },
              {
                key: "action",
                required: false,
                label: "Action",
                helpText: "Test",
              },
            ],
          },
          {
            key: "data",
            required: false,
            label: "Data",
            helpText: "Test",
          },
        ],
      },
      {
        key: "aliasOption",
        required: false,
        label: "AliasOption",
        properties: [
          {
            key: "aliasName",
            required: false,
            label: "AliasName",
            helpText: "Test",
          },
        ],
      },
    ],
  },
  {
    key: "dlr",
    required: false,
    label: "Dlr",
    properties: [],
  },
] as const;

export const TemplatesApi = {
  key: "templates",
  noun: "Templates",
  list: {
    display: {
      label: "List Templates",
      description: "Test",
    },
    operation: {
      inputFields: generateInputFields(templateListInput),
      perform: async (
        z: ZObject,
        bundle: InputBundle<typeof templateListInput>
      ) => {
        const { workspaceId } = transformInputData(bundle.inputData);

        const localVarPath =
          bundle.authData.host +
          "/workspaces/{workspaceId}/templates".replace(
            "{" + "workspaceId" + "}",
            encodeURIComponent(String(workspaceId))
          );

        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = {};

        let localVarFormParams: any = {};
        localVarHeaderParams["Content-Type"] =
          "application/vnd.whispir.template-v1+json";
        localVarHeaderParams["Accept"] =
          "application/vnd.whispir.template-v1+json";

        let localVarUseFormData = false;

        const responsePromise = z.request({
          method: "GET",
          headers: addHeaders(localVarHeaderParams, bundle),
          params: localVarQueryParameters,
          url: localVarPath,
        });

        return responsePromise.then((response) => {
          if (
            response.status &&
            response.status >= 200 &&
            response.status <= 299
          ) {
            const { messagetemplates } = response.data;
            return messagetemplates;
          } else {
            throw new z.errors.Error(response.data);
          }
        });
      },
      sample: {
        status: "1 to 11 of 11    ",
        messagetemplates: [
          {
            messageTemplateName: "AllChannels",
            messageTemplateDescription: "Don't Edit or Delete",
            id: "4D24A95ACBFC2C4B",
            link: [
              {
                uri: "https://api.au.whispir.com/workspaces/673A8E38D34BBF0C/templates/4D24A95ACBFC2C4B",
                rel: "self",
                method: "GET",
                host: "api.au.whispir.com",
                port: -1,
              },
            ],
          },
        ],
        link: [],
      },
    },
  },
};
