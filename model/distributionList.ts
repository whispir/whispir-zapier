

export class DistributionList {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "mri",
            "baseName": "mri",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "memberCount",
            "baseName": "memberCount",
            "type": "string"
        },
        {
            "name": "access",
            "baseName": "access",
            "type": "string"
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "string"
        },
        {
            "name": "contactIds",
            "baseName": "contactIds",
            "type": "string"
        },
        {
            "name": "userIds",
            "baseName": "userIds",
            "type": "string"
        },
        {
            "name": "distListIds",
            "baseName": "distListIds",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "distlistdetails",
            "baseName": "distlistdetails",
            "type": "Array<DistributionListContacts>"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        },
    ];

    static getAttributeTypeMap() {
        return DistributionList.attributeTypeMap;
    }
}
