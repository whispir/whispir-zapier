

export class MessageResponseDetailed {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageresponses",
            "baseName": "messageresponses",
            "type": "Set<ResponseStatusDetailed>"
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
        return MessageResponseDetailed.attributeTypeMap;
    }
}
