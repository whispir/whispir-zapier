import { ZObject } from "zapier-platform-core";
import { ObjectSerializer } from "../model/models";
import {
  generateInputFields,
  transformInputData,
  InputBundle,
} from "../api/apis";
import { addHeaders } from "../authentication";

const contactUpdateInput = [
  {
    key: "workspaceId",
    required: true,
    label: "workspaceId",
    helpText: "Test",
    dynamic: "workspaces.id.projectName",
  },
  {
    key: "contactId",
    required: true,
    label: "contactId",
    helpText: "Test",
    dynamic: "contacts.id.firstName",
  },
  {
    key: "firstName",
    required: true,
    label: "FirstName",
    helpText: "Test",
  },
  {
    key: "lastName",
    required: true,
    label: "LastName",
    helpText: "Test",
  },
  {
    key: "workMobilePhone1",
    required: true,
    label: "WorkMobilePhone1",
    helpText: "Test",
  },
  {
    key: "workEmailAddress1",
    required: true,
    label: "WorkEmailAddress1",
    helpText: "Test",
  },
  {
    key: "workCountry",
    required: true,
    label: "WorkCountry",
    helpText: "Test",
  },
  {
    key: "timezone",
    required: true,
    label: "Timezone",
    helpText: "Test",
  },
  {
    key: "title",
    required: false,
    label: "Title",
    helpText: "Test",
  },
  {
    key: "workMobilePhone2",
    required: false,
    label: "WorkMobilePhone2",
    helpText: "Test",
  },
  {
    key: "workEmailAddress2",
    required: false,
    label: "WorkEmailAddress2",
    helpText: "Test",
  },
  {
    key: "workPhoneAreaCode1",
    required: false,
    label: "WorkPhoneAreaCode1",
    helpText: "Test",
  },
  {
    key: "workPhone1",
    required: false,
    label: "WorkPhone1",
    helpText: "Test",
  },
  {
    key: "workPhoneAreaCode2",
    required: false,
    label: "WorkPhoneAreaCode2",
    helpText: "Test",
  },
  {
    key: "workPhone2",
    required: false,
    label: "WorkPhone2",
    helpText: "Test",
  },
  {
    key: "workFaxAreaCode1",
    required: false,
    label: "WorkFaxAreaCode1",
    helpText: "Test",
  },
  {
    key: "workFax1",
    required: false,
    label: "WorkFax1",
    helpText: "Test",
  },
  {
    key: "workSatellitePhone",
    required: false,
    label: "WorkSatellitePhone",
    helpText: "Test",
  },
  {
    key: "workOtherPhone",
    required: false,
    label: "WorkOtherPhone",
    helpText: "Test",
  },
  {
    key: "workAddress1",
    required: false,
    label: "WorkAddress1",
    helpText: "Test",
  },
  {
    key: "workAddress2",
    required: false,
    label: "WorkAddress2",
    helpText: "Test",
  },
  {
    key: "workSuburb",
    required: false,
    label: "WorkSuburb",
    helpText: "Test",
  },
  {
    key: "workState",
    required: false,
    label: "WorkState",
    helpText: "Test",
  },
  {
    key: "workPostCode",
    required: false,
    label: "WorkPostCode",
    helpText: "Test",
  },
  {
    key: "workPostalAddress1",
    required: false,
    label: "WorkPostalAddress1",
    helpText: "Test",
  },
  {
    key: "workPostalAddress2",
    required: false,
    label: "WorkPostalAddress2",
    helpText: "Test",
  },
  {
    key: "workPostalSuburb",
    required: false,
    label: "WorkPostalSuburb",
    helpText: "Test",
  },
  {
    key: "workPostalState",
    required: false,
    label: "WorkPostalState",
    helpText: "Test",
  },
  {
    key: "workPostalPostCode",
    required: false,
    label: "WorkPostalPostCode",
    helpText: "Test",
  },
  {
    key: "personalEmailAddress1",
    required: false,
    label: "PersonalEmailAddress1",
    helpText: "Test",
  },
  {
    key: "personalEmailAddress2",
    required: false,
    label: "PersonalEmailAddress2",
    helpText: "Test",
  },
  {
    key: "personalAddress1",
    required: false,
    label: "PersonalAddress1",
    helpText: "Test",
  },
  {
    key: "personalAddress2",
    required: false,
    label: "PersonalAddress2",
    helpText: "Test",
  },
  {
    key: "personalSuburb",
    required: false,
    label: "PersonalSuburb",
    helpText: "Test",
  },
  {
    key: "personalState",
    required: false,
    label: "PersonalState",
    helpText: "Test",
  },
  {
    key: "personalPostCode",
    required: false,
    label: "PersonalPostCode",
    helpText: "Test",
  },
  {
    key: "personalCountry",
    required: false,
    label: "PersonalCountry",
    helpText: "Test",
  },
  {
    key: "personalPhoneAreaCode1",
    required: false,
    label: "PersonalPhoneAreaCode1",
    helpText: "Test",
  },
  {
    key: "personalPhone1",
    required: false,
    label: "PersonalPhone1",
    helpText: "Test",
  },
  {
    key: "personalPhoneAreaCode2",
    required: false,
    label: "PersonalPhoneAreaCode2",
    helpText: "Test",
  },
  {
    key: "personalPhone2",
    required: false,
    label: "PersonalPhone2",
    helpText: "Test",
  },
  {
    key: "personalFaxAreaCode1",
    required: false,
    label: "PersonalFaxAreaCode1",
    helpText: "Test",
  },
  {
    key: "personalFax1",
    required: false,
    label: "PersonalFax1",
    helpText: "Test",
  },
  {
    key: "otherPhoneAreaCode1",
    required: false,
    label: "OtherPhoneAreaCode1",
    helpText: "Test",
  },
  {
    key: "otherPhone1",
    required: false,
    label: "OtherPhone1",
    helpText: "Test",
  },
  {
    key: "otherMobile",
    required: false,
    label: "OtherMobile",
    helpText: "Test",
  },
  {
    key: "otherFirstName",
    required: false,
    label: "OtherFirstName",
    helpText: "Test",
  },
  {
    key: "otherLastName",
    required: false,
    label: "OtherLastName",
    helpText: "Test",
  },
  {
    key: "otherTitle",
    required: false,
    label: "OtherTitle",
    helpText: "Test",
  },
  {
    key: "status",
    required: false,
    label: "Status",
    helpText: "Test",
    choices: {
      A: "A",
      D: "D",
    },
  },
  {
    key: "companyName",
    required: false,
    label: "CompanyName",
    helpText: "Test",
  },
  {
    key: "jobTitle",
    required: false,
    label: "JobTitle",
    helpText: "Test",
  },
  {
    key: "division",
    required: false,
    label: "Division",
    helpText: "Test",
  },
  {
    key: "businessUnit",
    required: false,
    label: "BusinessUnit",
    helpText: "Test",
  },
  {
    key: "department",
    required: false,
    label: "Department",
    helpText: "Test",
  },
  {
    key: "teamName1",
    required: false,
    label: "TeamName1",
    helpText: "Test",
  },
  {
    key: "teamName2",
    required: false,
    label: "TeamName2",
    helpText: "Test",
  },
  {
    key: "role1",
    required: false,
    label: "Role1",
    helpText: "Test",
  },
  {
    key: "role2",
    required: false,
    label: "Role2",
    helpText: "Test",
  },
  {
    key: "locations",
    required: false,
    label: "Locations",
    children: [
      {
        key: "latitude",
        required: false,
        label: "Latitude",
        helpText: "Test",
      },
      {
        key: "longitude",
        required: false,
        label: "Longitude",
        helpText: "Test",
      },
      {
        key: "type",
        required: false,
        label: "Type",
        helpText: "Test",
      },
    ],
  },
  {
    key: "messagingoptions",
    required: false,
    label: "Messagingoptions",
    children: [
      {
        key: "channel",
        required: false,
        label: "Channel",
        helpText: "Test",
        choices: {
          sms: "sms",
          email: "email",
          voice: "voice",
        },
      },
      {
        key: "enabled",
        required: false,
        label: "Enabled",
        helpText: "Test",
      },
      {
        key: "primary",
        required: false,
        label: "Primary",
        helpText: "Test",
        choices: {
          WorkMobilePhone1: "WorkMobilePhone1",
          WorkMobilePhone2: "WorkMobilePhone2",
          WorkEmailAddress1: "WorkEmailAddress1",
          WorkEmailAddress2: "WorkEmailAddress2",
          PersonalMobilePhone1: "PersonalMobilePhone1",
          PersonalEmailAddress1: "PersonalEmailAddress1",
        },
      },
      {
        key: "secondary",
        required: false,
        label: "Secondary",
        helpText: "Test",
        choices: {
          WorkMobilePhone1: "WorkMobilePhone1",
          WorkMobilePhone2: "WorkMobilePhone2",
          WorkEmailAddress1: "WorkEmailAddress1",
          WorkEmailAddress2: "WorkEmailAddress2",
          PersonalMobilePhone1: "PersonalMobilePhone1",
          PersonalEmailAddress1: "PersonalEmailAddress1",
        },
      },
      {
        key: "tertiary",
        required: false,
        label: "Tertiary",
        helpText: "Test",
        choices: {
          WorkMobilePhone1: "WorkMobilePhone1",
          WorkMobilePhone2: "WorkMobilePhone2",
          WorkEmailAddress1: "WorkEmailAddress1",
          WorkEmailAddress2: "WorkEmailAddress2",
          PersonalMobilePhone1: "PersonalMobilePhone1",
          PersonalEmailAddress1: "PersonalEmailAddress1",
        },
      },
    ],
  },
] as const;

export const updateContact = {
  key: "contacts",
  noun: "contact",
  display: {
    label: "Update Contact",
    description: "Updates a contact.",
  },
  operation: {
    inputFields: generateInputFields(contactUpdateInput),
    perform: async (
      z: ZObject,
      bundle: InputBundle<typeof contactUpdateInput>
    ) => {
      const { workspaceId, contactId, ...contact } = transformInputData(
        bundle.inputData
      );

      const localVarPath =
        bundle.authData.host +
        "/workspaces/{workspaceId}/contacts".replace(
          "{" + "workspaceId" + "}",
          encodeURIComponent(String(workspaceId))
        ) +
        "/" +
        encodeURIComponent(String(contactId));

      let localVarQueryParameters: any = {};
      let localVarHeaderParams: any = {};

      localVarHeaderParams["Accept"] =
        "application/vnd.whispir.contact-v1+json";
      localVarHeaderParams["Content-Type"] =
        "application/vnd.whispir.contact-v1+json";

      const responsePromise = z.request({
        method: "PUT",
        headers: addHeaders(localVarHeaderParams, bundle),
        params: localVarQueryParameters,
        url: localVarPath,
        body: ObjectSerializer.serialize(contact, "Contact"),
      });
      return responsePromise.then((response) => {
        if (
          response.status &&
          response.status >= 200 &&
          response.status <= 299
        ) {
          let body = {};
          body = ObjectSerializer.deserialize(response.data, "Contact");

          return { id: contactId, ...body };
        } else {
          throw new z.errors.Error(response.data);
        }
      });
    },
  },
};
