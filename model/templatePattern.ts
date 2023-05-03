

export class TemplatePattern {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "pattern",
            "baseName": "pattern",
            "type": "string"
        },
        {
            "name": "textPrompt",
            "baseName": "textPrompt",
            "type": "string"
        },
        {
            "name": "voicePrompt",
            "baseName": "voicePrompt",
            "type": "string"
        },
        {
            "name": "spokenVoicePrompt",
            "baseName": "spokenVoicePrompt",
            "type": "string"
        },
        {
            "name": "colour",
            "baseName": "colour",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return TemplatePattern.attributeTypeMap;
    }
}
