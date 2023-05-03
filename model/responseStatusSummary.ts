

export class ResponseStatusSummary {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "percentageTotal",
            "baseName": "percentageTotal",
            "type": "string"
        },
        {
            "name": "responseCount",
            "baseName": "responseCount",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return ResponseStatusSummary.attributeTypeMap;
    }
}
