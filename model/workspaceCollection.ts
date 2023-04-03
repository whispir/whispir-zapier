

export class WorkspaceCollection {
    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "workspaces",
            "baseName": "workspaces",
            "type": "Array<Workspace>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
    ];

    static getAttributeTypeMap() {
        return WorkspaceCollection.attributeTypeMap;
    }
}
