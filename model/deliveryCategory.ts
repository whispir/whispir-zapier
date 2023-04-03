

export class DeliveryCategory {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "recipientCount",
            "baseName": "recipientCount",
            "type": "number"
        },
        {
            "name": "percentageTotal",
            "baseName": "percentageTotal",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return DeliveryCategory.attributeTypeMap;
    }
}
