

export class CallbackAuth {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return CallbackAuth.attributeTypeMap;
    }
}
