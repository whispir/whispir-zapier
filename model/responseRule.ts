

export class ResponseRule {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "responseTemplatePatterns",
            "baseName": "responseTemplatePatterns",
            "type": "TemplatePattern"
        },
    ];

    static getAttributeTypeMap() {
        return ResponseRule.attributeTypeMap;
    }
}
