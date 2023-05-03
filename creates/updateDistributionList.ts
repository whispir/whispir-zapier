import { ZObject } from "zapier-platform-core";
import { DistributionList, ObjectSerializer } from "../model/models";
import {
  generateInputFields,
  transformInputData,
  InputBundle,
} from "../api/apis";
import { addHeaders } from "../authentication";

const distributionListUpdateInput = [
  {
    key: "workspaceId",
    required: true,
    label: "workspaceId",
    helpText: "Test",
    dynamic: "workspaces.id.projectName",
  },
  {
    key: "distributionListId",
    required: true,
    label: "distributionListId",
    helpText: "Test",
    dynamic: "distributionLists.id.name",
    search: "distributionListsSearch.id",
  },
  {
    key: "name",
    required: true,
    label: "Name",
    helpText: "Test",
  },
  {
    key: "description",
    required: false,
    label: "Description",
    helpText: "Test",
  },
  {
    key: "memberCount",
    required: false,
    label: "MemberCount",
    helpText: "Test",
  },
  {
    key: "access",
    required: true,
    label: "Access",
    helpText: "Test",
    choices: {
      Open: "Open",
      ByApproval: "ByApproval",
      ViewOnly: "ViewOnly",
      Restricted: "Restricted",
    },
  },
  {
    key: "visibility",
    required: true,
    label: "Visibility",
    helpText: "Test",
    choices: {
      Private: "Private",
      Public: "Public",
    },
  },
  {
    key: "contactIds",
    required: false,
    label: "ContactIds",
    dynamic: "contacts.id.firstName,lastName",
    helpText: "Test",
  },
  {
    key: "userIds",
    required: false,
    label: "UserIds",
    helpText: "Test",
  },
  {
    key: "distListIds",
    required: false,
    label: "DistListIds",
    helpText: "Test",
    dynamic: "distributionLists.id.name",
  },
  {
    key: "type",
    required: false,
    label: "Type",
    helpText: "Test",
    choices: {
      static: "static",
      dynamic: "dynamic",
    },
  },
  {
    key: "rules",
    required: false,
    label: "Rules",
    helpText: "Test",
  },
] as const;

export const updateDistributionList = {
  key: "distributionLists",
  noun: "distributionList",
  display: {
    label: "Update Distribution List",
    description:
      "Any or all three of these can be updated via the PUT method along with the DL properties (name, description, location etc)",
  },
  operation: {
    inputFields: generateInputFields(distributionListUpdateInput),
    perform: async (
      z: ZObject,
      bundle: InputBundle<typeof distributionListUpdateInput>
    ) => {
      const { workspaceId, distributionListId, ...distributionList } =
        transformInputData(bundle.inputData);

      const localVarPath =
        bundle.authData.host +
        "/workspaces/{workspaceId}/distributionlists".replace(
          "{" + "workspaceId" + "}",
          encodeURIComponent(String(workspaceId))
        ) +
        "/" +
        encodeURIComponent(String(distributionListId));

      let localVarQueryParameters: any = {};
      let localVarHeaderParams: any = {};

      localVarHeaderParams["Accept"] =
        "application/vnd.whispir.distributionlist-v1+json";
      localVarHeaderParams["Content-Type"] =
        "application/vnd.whispir.distributionlist-v1+json";

      let localVarUseFormData = false;

      const responsePromise = z.request({
        method: "PUT",
        headers: addHeaders(localVarHeaderParams, bundle),
        params: localVarQueryParameters,
        url: localVarPath,
        body: ObjectSerializer.serialize(distributionList, "DistributionList"),
      });
      return responsePromise.then((response) => {
        if (
          response.status &&
          response.status >= 200 &&
          response.status <= 299
        ) {
          let body = {};
          body = ObjectSerializer.deserialize(
            response.data,
            "DistributionList"
          );

          return { id: distributionListId, ...body };
        } else {
          throw new z.errors.Error(response.data);
        }
      });
    },
  },
};
