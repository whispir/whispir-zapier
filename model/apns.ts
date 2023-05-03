

export class Apns {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sound",
            "baseName": "sound",
            "type": "string"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return Apns.attributeTypeMap;
    }
}
