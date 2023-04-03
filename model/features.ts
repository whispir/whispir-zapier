

export class Features {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pushOptions",
            "baseName": "pushOptions",
            "type": "PushOptions"
        },
        {
            "name": "aliasOption",
            "baseName": "aliasOption",
            "type": "AliasOption"
        },
    ];

    static getAttributeTypeMap() {
        return Features.attributeTypeMap;
    }
}
