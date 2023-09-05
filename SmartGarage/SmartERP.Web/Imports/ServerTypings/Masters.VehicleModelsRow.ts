namespace SmartERP.Masters {
    export interface VehicleModelsRow {
        Id?: number;
        Name?: string;
    }

    export namespace VehicleModelsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.VehicleModels';
        export const lookupKey = 'Masters.VehicleModels';

        export function getLookup(): Q.Lookup<VehicleModelsRow> {
            return Q.getLookup<VehicleModelsRow>('Masters.VehicleModels');
        }
        export const deletePermission = 'Masters:Vehicle Models:Delete';
        export const insertPermission = 'Masters:Vehicle Models:Create';
        export const readPermission = 'Masters:Vehicle Models:View';
        export const updatePermission = 'Masters:Vehicle Models:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
