

export class ApiError {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorSummary",
            "baseName": "errorSummary",
            "type": "string"
        },
        {
            "name": "errorText",
            "baseName": "errorText",
            "type": "string"
        },
        {
            "name": "errorDetail",
            "baseName": "errorDetail",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return ApiError.attributeTypeMap;
    }
}
