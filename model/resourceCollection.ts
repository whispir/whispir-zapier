

export class ResourceCollection {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Array<Resource>"
        },
    ];

    static getAttributeTypeMap() {
        return ResourceCollection.attributeTypeMap;
    }
}
