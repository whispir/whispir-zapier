

export class MessageStatusCollection {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageStatuses",
            "baseName": "messageStatuses",
            "type": "Array<MessageStatus>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return MessageStatusCollection.attributeTypeMap;
    }
}
