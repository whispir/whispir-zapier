

export class ResponseStatusDetailed {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "from",
            "baseName": "from",
            "type": "Responder"
        },
        {
            "name": "responseCategory",
            "baseName": "responseCategory",
            "type": "string"
        },
        {
            "name": "responseMessage",
            "baseName": "responseMessage",
            "type": "Response"
        },
    ];

    static getAttributeTypeMap() {
        return ResponseStatusDetailed.attributeTypeMap;
    }
}
