

export class CustomListCollection {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "customlabels",
            "baseName": "customlabels",
            "type": "Array<CustomList>"
        },
    ];

    static getAttributeTypeMap() {
        return CustomListCollection.attributeTypeMap;
    }
}
