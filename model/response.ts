

export class Response {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "acknowledged",
            "baseName": "acknowledged",
            "type": "string"
        },
        {
            "name": "undeliverable",
            "baseName": "undeliverable",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return Response.attributeTypeMap;
    }
}
