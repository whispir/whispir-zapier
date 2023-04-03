

export class Attachments {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<Attachment>"
        },
    ];

    static getAttributeTypeMap() {
        return Attachments.attributeTypeMap;
    }
}
