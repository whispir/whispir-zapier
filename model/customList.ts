

export class CustomList {
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
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "string"
        },
        {
            "name": "sortType",
            "baseName": "sortType",
            "type": "string"
        },
        {
            "name": "linked",
            "baseName": "linked",
            "type": "string"
        },
        {
            "name": "customlabellists",
            "baseName": "customlabellists",
            "type": "Array<ListLabel>"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        },
    ];

    static getAttributeTypeMap() {
        return CustomList.attributeTypeMap;
    }
}
