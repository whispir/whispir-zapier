/* tslint:disable:no-unused-locals */
import { ZObject } from 'zapier-platform-core'
import { ObjectSerializer } from '../model/models';
import { generateInputFields, transformInputData, InputBundle } from './apis';
import { addHeaders } from '../authentication';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

const distributionListCreateInput = [
    {
        key: 'workspaceId',
        required: true,
        label: 'workspaceId',
        helpText: 'Test',
    },
    {
        key: 'name',
        required: true,
        label: 'Name',
        helpText: 'Test',
    },
    {
        key: 'description',
        required: false,
        label: 'Description',
        helpText: 'Test',
    },
    {
        key: 'memberCount',
        required: false,
        label: 'MemberCount',
        helpText: 'Test',
    },
    {
        key: 'access',
        required: false,
        label: 'Access',
        helpText: 'Test',
    },
    {
        key: 'visibility',
        required: false,
        label: 'Visibility',
        helpText: 'Test',
    },
    {
        key: 'contactIds',
        required: false,
        label: 'ContactIds',
        helpText: 'Test',
    },
    {
        key: 'userIds',
        required: false,
        label: 'UserIds',
        helpText: 'Test',
    },
    {
        key: 'distListIds',
        required: false,
        label: 'DistListIds',
        helpText: 'Test',
    },
    {
        key: 'type',
        required: false,
        label: 'Type',
        helpText: 'Test',
        choices: {
                'static': 'static',
                'dynamic': 'dynamic',
        }
    },
    {
        key: 'rules',
        required: false,
        label: 'Rules',
        helpText: 'Test',
    },

] as const;

const distributionListDeleteInput = [
    {
        key: 'workspaceId',
        required: true,
        label: 'workspaceId',
        helpText: 'Test',
    },
    {
        key: 'distributionlistId',
        required: true,
        label: 'distributionlistId',
        helpText: 'Test',
    },
] as const;

const distributionListListInput = [
    {
        key: 'workspaceId',
        required: true,
        label: 'workspaceId',
        helpText: 'Test',
    },
    {
        key: 'limit',
        required: false,
        label: 'limit',
        helpText: 'Test',
    },
    {
        key: 'offset',
        required: false,
        label: 'offset',
        helpText: 'Test',
    },
    {
        key: 'sortOrder',
        required: false,
        label: 'sortOrder',
        helpText: 'Test',
        choices: {
            'asc': 'asc',
            'desc': 'desc',
        },
    },
    {
        key: 'sortFields',
        required: false,
        label: 'sortFields',
        helpText: 'Test',
    },
    {
        key: 'name',
        required: false,
        label: 'name',
        helpText: 'Test',
    },
    {
        key: 'description',
        required: false,
        label: 'description',
        helpText: 'Test',
    },
] as const;

const distributionListRetrieveInput = [
    {
        key: 'workspaceId',
        required: true,
        label: 'workspaceId',
        helpText: 'Test',
    },
    {
        key: 'distributionlistId',
        required: true,
        label: 'distributionlistId',
        helpText: 'Test',
    },
] as const;

const distributionListUpdateInput = [
    {
        key: 'workspaceId',
        required: true,
        label: 'workspaceId',
        helpText: 'Test',
    },
    {
        key: 'distributionlistId',
        required: true,
        label: 'distributionlistId',
        helpText: 'Test',
    },
    {
        key: 'name',
        required: true,
        label: 'Name',
        helpText: 'Test',
    },
    {
        key: 'description',
        required: false,
        label: 'Description',
        helpText: 'Test',
    },
    {
        key: 'memberCount',
        required: false,
        label: 'MemberCount',
        helpText: 'Test',
    },
    {
        key: 'access',
        required: false,
        label: 'Access',
        helpText: 'Test',
    },
    {
        key: 'visibility',
        required: false,
        label: 'Visibility',
        helpText: 'Test',
    },
    {
        key: 'contactIds',
        required: false,
        label: 'ContactIds',
        helpText: 'Test',
    },
    {
        key: 'userIds',
        required: false,
        label: 'UserIds',
        helpText: 'Test',
    },
    {
        key: 'distListIds',
        required: false,
        label: 'DistListIds',
        helpText: 'Test',
    },
    {
        key: 'type',
        required: false,
        label: 'Type',
        helpText: 'Test',
        choices: {
                'static': 'static',
                'dynamic': 'dynamic',
        }
    },
    {
        key: 'rules',
        required: false,
        label: 'Rules',
        helpText: 'Test',
    },

] as const;


export const DistributionListsApi = {
  key: 'distributionLists',
  noun: 'DistributionLists',
  create: {
    display: {
        label: 'Create a DistributionLists',
        description: 'Test'
    },
    operation: {
        inputFields: generateInputFields(distributionListCreateInput),
        perform: async (z: ZObject, bundle: InputBundle<typeof distributionListCreateInput>) => {
            const {
                workspaceId,
                ...distributionList
            } = transformInputData(bundle.inputData);

            const localVarPath = bundle.authData.host + '/workspaces/{workspaceId}/distributionlists'
                .replace('{' + 'workspaceId' + '}', encodeURIComponent(String(workspaceId)));
            let localVarQueryParameters: any = {};
            let localVarHeaderParams: any = {};

            let localVarFormParams: any = {};
            localVarHeaderParams['Content-Type'] = 'application/vnd.whispir.distributionlist-v1+json';
            localVarHeaderParams['Accept'] = 'application/vnd.whispir.distributionlist-v1+json';

            let localVarUseFormData = false;

            const responsePromise = z.request({
                method: 'POST',
                headers: addHeaders(localVarHeaderParams, bundle),
                params: localVarQueryParameters,
                url: localVarPath,
                body: ObjectSerializer.serialize(distributionList, "DistributionList")
            });
            return responsePromise
                .then(response => {
                    if (response.status && response.status >= 200 && response.status <= 299) {
                            let body = {};
                            body = ObjectSerializer.deserialize(response.data, "DistributionList");
                            
                            // Special case to extract the resource identifier from the `Location` header.
                            const checkLocation = response?.headers?.location?.match(/\/([^\/]+)\/?$/);
                            let id = (checkLocation && checkLocation[1]) ? checkLocation[1] : undefined;
                            
                            return { id, ...body };
                    } else {
                            throw new z.errors.Error(response.data);
                    }
                });
        },
    }
  },
};
