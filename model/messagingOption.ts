

export class MessagingOption {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "primary",
            "baseName": "primary",
            "type": "string"
        },
        {
            "name": "secondary",
            "baseName": "secondary",
            "type": "string"
        },
        {
            "name": "tertiary",
            "baseName": "tertiary",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return MessagingOption.attributeTypeMap;
    }
}
