

export class PushOptions {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "notifications",
            "baseName": "notifications",
            "type": "string"
        },
        {
            "name": "escalationMins",
            "baseName": "escalationMins",
            "type": "string"
        },
        {
            "name": "appId",
            "baseName": "appId",
            "type": "string"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "string"
        },
        {
            "name": "fcm",
            "baseName": "fcm",
            "type": "Fcm"
        },
        {
            "name": "apns",
            "baseName": "apns",
            "type": "Apns"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        },
    ];

    static getAttributeTypeMap() {
        return PushOptions.attributeTypeMap;
    }
}
