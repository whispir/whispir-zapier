

export class FieldMapping {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "workMobilePhone1",
            "baseName": "workMobilePhone1",
            "type": "string"
        },
        {
            "name": "workCountry",
            "baseName": "workCountry",
            "type": "string"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return FieldMapping.attributeTypeMap;
    }
}
