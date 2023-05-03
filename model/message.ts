

export class Message {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "Email"
        },
        {
            "name": "voice",
            "baseName": "voice",
            "type": "Voice"
        },
        {
            "name": "web",
            "baseName": "web",
            "type": "Web"
        },
        {
            "name": "social",
            "baseName": "social",
            "type": "Social"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Features"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "Resource"
        },
        {
            "name": "messageTemplateId",
            "baseName": "messageTemplateId",
            "type": "string"
        },
        {
            "name": "messageTemplateName",
            "baseName": "messageTemplateName",
            "type": "string"
        },
        {
            "name": "callbackId",
            "baseName": "callbackId",
            "type": "string"
        },
        {
            "name": "callbackParameters",
            "baseName": "callbackParameters",
            "type": "object"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        },
        {
            "name": "messageType",
            "baseName": "messageType",
            "type": "string"
        },
        {
            "name": "scheduleType",
            "baseName": "scheduleType",
            "type": "string"
        },
        {
            "name": "scheduleDate",
            "baseName": "scheduleDate",
            "type": "string"
        },
        {
            "name": "repetitionCount",
            "baseName": "repetitionCount",
            "type": "number"
        },
        {
            "name": "repeatDays",
            "baseName": "repeatDays",
            "type": "number"
        },
        {
            "name": "repeatHrs",
            "baseName": "repeatHrs",
            "type": "number"
        },
        {
            "name": "repeatMin",
            "baseName": "repeatMin",
            "type": "number"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "string"
        },
        {
            "name": "responseCount",
            "baseName": "responseCount",
            "type": "string"
        },
        {
            "name": "createdTime",
            "baseName": "createdTime",
            "type": "number"
        },
        {
            "name": "whatsappValidMessage",
            "baseName": "whatsappValidMessage",
            "type": "boolean"
        },
        {
            "name": "validBody",
            "baseName": "validBody",
            "type": "boolean"
        },
        {
            "name": "validSubject",
            "baseName": "validSubject",
            "type": "boolean"
        },
        {
            "name": "dlr",
            "baseName": "dlr",
            "type": "DeliveryReceipt"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<Link>"
        },
    ];

    static getAttributeTypeMap() {
        return Message.attributeTypeMap;
    }
}
