namespace SmartERP.Masters {
    export interface AssemblyTypesRow {
        Id?: number;
        Name?: string;
    }

    export namespace AssemblyTypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.AssemblyTypes';
        export const lookupKey = 'Masters.AssemblyTypes';

        export function getLookup(): Q.Lookup<AssemblyTypesRow> {
            return Q.getLookup<AssemblyTypesRow>('Masters.AssemblyTypes');
        }
        export const deletePermission = 'Masters:Assembly Types:Delete';
        export const insertPermission = 'Masters:Assembly Types:Create';
        export const readPermission = 'Masters:Assembly Types:View';
        export const updatePermission = 'Masters:Assembly Types:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
