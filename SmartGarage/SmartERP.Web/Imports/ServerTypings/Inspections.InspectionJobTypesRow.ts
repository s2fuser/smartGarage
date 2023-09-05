namespace SmartERP.Inspections {
    export interface InspectionJobTypesRow {
        Id?: number;
        InspectionId?: number;
        JobType?: number;
        InspectionJobCategory?: number;
        InspectionJobType?: number;
        JobTypeJobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
    }

    export namespace InspectionJobTypesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Inspections.InspectionJobTypes';
        export const deletePermission = 'Inspections:Inspection:Delete';
        export const insertPermission = 'Inspections:Inspection:Create';
        export const readPermission = 'Inspections:Inspection:View';
        export const updatePermission = 'Inspections:Inspection:Update';

        export declare const enum Fields {
            Id = "Id",
            InspectionId = "InspectionId",
            JobType = "JobType",
            InspectionJobCategory = "InspectionJobCategory",
            InspectionJobType = "InspectionJobType",
            JobTypeJobCategory = "JobTypeJobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming"
        }
    }
}
