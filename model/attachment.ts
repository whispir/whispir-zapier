

export class Attachment {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachmentName",
            "baseName": "attachmentName",
            "type": "string"
        },
        {
            "name": "derefUri",
            "baseName": "derefUri",
            "type": "string"
        },
        {
            "name": "attachmentDesc",
            "baseName": "attachmentDesc",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return Attachment.attributeTypeMap;
    }
}
