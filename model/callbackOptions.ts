

export class CallbackOptions {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reply",
            "baseName": "reply",
            "type": "string"
        },
        {
            "name": "undeliverable",
            "baseName": "undeliverable",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return CallbackOptions.attributeTypeMap;
    }
}
