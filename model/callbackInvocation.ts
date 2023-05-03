

export class CallbackInvocation {
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
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "attemptedDate",
            "baseName": "attemptedDate",
            "type": "string"
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number"
        },
        {
            "name": "statusMessage",
            "baseName": "statusMessage",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return CallbackInvocation.attributeTypeMap;
    }
}
