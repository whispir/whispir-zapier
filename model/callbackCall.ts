

export class CallbackCall {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "messageLocation",
            "baseName": "messageLocation",
            "type": "string"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "Responder"
        },
        {
            "name": "responseMessage",
            "baseName": "responseMessage",
            "type": "Response"
        },
        {
            "name": "callback",
            "baseName": "callback",
            "type": "CallbackInvocation"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        },
    ];

    static getAttributeTypeMap() {
        return CallbackCall.attributeTypeMap;
    }
}
