

export class Callback {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "auth",
            "baseName": "auth",
            "type": "CallbackAuth"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string"
        },
        {
            "name": "removeHTML",
            "baseName": "removeHTML",
            "type": "string"
        },
        {
            "name": "retriesEnabled",
            "baseName": "retriesEnabled",
            "type": "boolean"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "callbacks",
            "baseName": "callbacks",
            "type": "CallbackOptions"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        },
    ];

    static getAttributeTypeMap() {
        return Callback.attributeTypeMap;
    }
}
