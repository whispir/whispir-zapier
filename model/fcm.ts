

export class Fcm {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "androidChannelId",
            "baseName": "androidChannelId",
            "type": "string"
        },
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
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return Fcm.attributeTypeMap;
    }
}
