namespace SmartERP.Masters {
    export interface FuelTypesRow {
        Id?: number;
        Name?: string;
    }

    export namespace FuelTypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.FuelTypes';
        export const lookupKey = 'Masters.FuelTypes';

        export function getLookup(): Q.Lookup<FuelTypesRow> {
            return Q.getLookup<FuelTypesRow>('Masters.FuelTypes');
        }
        export const deletePermission = 'Masters:Fuel Types:Delete';
        export const insertPermission = 'Masters:Fuel Types:Create';
        export const readPermission = 'Masters:Fuel Types:View';
        export const updatePermission = 'Masters:Fuel Types:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
