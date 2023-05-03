

export class ScenarioCollection {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "scenarios",
            "baseName": "scenarios",
            "type": "Array<Scenario>"
        },
    ];

    static getAttributeTypeMap() {
        return ScenarioCollection.attributeTypeMap;
    }
}
