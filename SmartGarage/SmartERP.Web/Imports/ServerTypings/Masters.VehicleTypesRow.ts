namespace SmartERP.Masters {
    export interface VehicleTypesRow {
        Id?: number;
        Name?: string;
    }

    export namespace VehicleTypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.VehicleTypes';
        export const lookupKey = 'Masters.VehicleTypes';

        export function getLookup(): Q.Lookup<VehicleTypesRow> {
            return Q.getLookup<VehicleTypesRow>('Masters.VehicleTypes');
        }
        export const deletePermission = 'Masters:Vehicle Types:Delete';
        export const insertPermission = 'Masters:Vehicle Types:Create';
        export const readPermission = 'Masters:Vehicle Types:View';
        export const updatePermission = 'Masters:Vehicle Types:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
