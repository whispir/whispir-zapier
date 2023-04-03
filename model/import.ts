

export class Import {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceId",
            "baseName": "resourceId",
            "type": "string"
        },
        {
            "name": "importType",
            "baseName": "importType",
            "type": "string"
        },
        {
            "name": "importOptions",
            "baseName": "importOptions",
            "type": "FieldMapping"
        },
        {
            "name": "importMode",
            "baseName": "importMode",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return Import.attributeTypeMap;
    }
}
