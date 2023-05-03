

export class MessageStatus {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Set<DeliveryCategory>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Set<DeliveryStatus>"
        },
    ];

    static getAttributeTypeMap() {
        return MessageStatus.attributeTypeMap;
    }
}
