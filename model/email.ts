

export class Email {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Attachments"
        },
    ];

    static getAttributeTypeMap() {
        return Email.attributeTypeMap;
    }
}
