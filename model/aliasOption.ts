

export class AliasOption {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "aliasName",
            "baseName": "aliasName",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return AliasOption.attributeTypeMap;
    }
}
