

export class Form {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "formName",
            "baseName": "formName",
            "type": "string"
        },
        {
            "name": "eventFieldList",
            "baseName": "eventFieldList",
            "type": "Array<FormField>"
        },
    ];

    static getAttributeTypeMap() {
        return Form.attributeTypeMap;
    }
}
