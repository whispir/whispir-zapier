

export class Link {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string"
        },
        {
            "name": "rel",
            "baseName": "rel",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
    ];

    static getAttributeTypeMap() {
        return Link.attributeTypeMap;
    }
}
