

export class EventCollection {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<Event>"
        },
    ];

    static getAttributeTypeMap() {
        return EventCollection.attributeTypeMap;
    }
}
