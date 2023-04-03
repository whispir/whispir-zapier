

export class Responder {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "mri",
            "baseName": "mri",
            "type": "string"
        },
        {
            "name": "mobile",
            "baseName": "mobile",
            "type": "string"
        },
        {
            "name": "voice",
            "baseName": "voice",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return Responder.attributeTypeMap;
    }
}
