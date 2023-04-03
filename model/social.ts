

export class Social {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "social",
            "baseName": "social",
            "type": "Array<Channel>"
        },
    ];

    static getAttributeTypeMap() {
        return Social.attributeTypeMap;
    }
}
