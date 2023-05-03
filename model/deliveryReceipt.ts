

export class DeliveryReceipt {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "period",
            "baseName": "period",
            "type": "string"
        },
        {
            "name": "rule",
            "baseName": "rule",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "publishToWeb",
            "baseName": "publishToWeb",
            "type": "boolean"
        },
        {
            "name": "expiryDay",
            "baseName": "expiryDay",
            "type": "number"
        },
        {
            "name": "expiryHour",
            "baseName": "expiryHour",
            "type": "number"
        },
        {
            "name": "expiryMin",
            "baseName": "expiryMin",
            "type": "number"
        },
        {
            "name": "feedIds",
            "baseName": "feedIds",
            "type": "string"
        },
        {
            "name": "bool",
            "baseName": "bool",
            "type": "boolean"
        },
    ];

    static getAttributeTypeMap() {
        return DeliveryReceipt.attributeTypeMap;
    }
}
