

export class DeliveryStatus {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return DeliveryStatus.attributeTypeMap;
    }
}
