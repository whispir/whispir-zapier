

export class MessageResponseSummary {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageresponses",
            "baseName": "messageresponses",
            "type": "Set<ResponseStatusSummary>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        },
    ];

    static getAttributeTypeMap() {
        return MessageResponseSummary.attributeTypeMap;
    }
}
