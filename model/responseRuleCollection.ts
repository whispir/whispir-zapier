

export class ResponseRuleCollection {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "responseRules",
            "baseName": "responseRules",
            "type": "Array<ResponseRule>"
        },
    ];

    static getAttributeTypeMap() {
        return ResponseRuleCollection.attributeTypeMap;
    }
}
