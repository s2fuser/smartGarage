namespace SmartERP.Masters {
    export interface ColorTypesRow {
        Id?: number;
        Name?: string;
    }

    export namespace ColorTypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.ColorTypes';
        export const lookupKey = 'Masters.ColorTypes';

        export function getLookup(): Q.Lookup<ColorTypesRow> {
            return Q.getLookup<ColorTypesRow>('Masters.ColorTypes');
        }
        export const deletePermission = 'Masters:Color Types:Delete';
        export const insertPermission = 'Masters:Color Types:Create';
        export const readPermission = 'Masters:Color Types:View';
        export const updatePermission = 'Masters:Color Types:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
