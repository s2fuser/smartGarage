namespace SmartERP.Masters {
    export interface VehicleMakesRow {
        Id?: number;
        Name?: string;
    }

    export namespace VehicleMakesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.VehicleMakes';
        export const lookupKey = 'Masters.VehicleMakes';

        export function getLookup(): Q.Lookup<VehicleMakesRow> {
            return Q.getLookup<VehicleMakesRow>('Masters.VehicleMakes');
        }
        export const deletePermission = 'Masters:Vehicle Makes:Delete';
        export const insertPermission = 'Masters:Vehicle Makes:Create';
        export const readPermission = 'Masters:Vehicle Makes:View';
        export const updatePermission = 'Masters:Vehicle Makes:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
