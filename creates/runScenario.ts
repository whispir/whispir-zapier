import { ZObject } from "zapier-platform-core";
import { ObjectSerializer } from "../model/models";
import {
  generateInputFields,
  transformInputData,
  InputBundle,
} from "../api/apis";
import { addHeaders } from "../authentication";

const scenarioRunCreateInput = [
  {
    key: "workspaceId",
    required: true,
    label: "workspaceId",
    helpText: "Test",
    dynamic: "workspaces.id.projectName,status",
  },
  {
    key: "scenarioId",
    required: true,
    label: "scenarioId",
    helpText: "Test",
  },
] as const;

export const runScenario = {
  key: "scenarios",
  noun: "scenario",
  display: {
    label: "Run Scenario",
    description:
      "Running a scenario triggers the communication to the intended recipients",
  },
  operation: {
    inputFields: generateInputFields(scenarioRunCreateInput),
    perform: async (
      z: ZObject,
      bundle: InputBundle<typeof scenarioRunCreateInput>
    ) => {
      const { workspaceId, scenarioId } = transformInputData(bundle.inputData);

      const localVarPath =
        bundle.authData.host +
        "/workspaces/{workspaceId}/scenarios".replace(
          "{" + "workspaceId" + "}",
          encodeURIComponent(String(workspaceId))
        ) +
        "/" +
        encodeURIComponent(String(scenarioId));
      let localVarQueryParameters: any = {};
      let localVarHeaderParams: any = {};

      let localVarFormParams: any = {};
      localVarHeaderParams["Content-Type"] =
        "application/vnd.whispir.scenario-v1+json";
      localVarHeaderParams["Accept"] =
        "application/vnd.whispir.scenario-v1+json";

      let localVarUseFormData = false;

      const responsePromise = z.request({
        method: "POST",
        headers: addHeaders(localVarHeaderParams, bundle),
        params: localVarQueryParameters,
        url: localVarPath,
        body: ObjectSerializer.serialize(
          { workspaceId, scenarioId },
          "Scenario"
        ),
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

          return { id: scenarioId };
        } else {
          throw new z.errors.Error(response.data);
        }
      });
    },
  },
};
