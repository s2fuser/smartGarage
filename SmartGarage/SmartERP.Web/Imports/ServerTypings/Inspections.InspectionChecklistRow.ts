namespace SmartERP.Inspections {
    export interface InspectionChecklistRow {
        Id?: number;
        JobCategory?: number;
        JobType?: number;
        JobCategoryName?: string;
        JobTypeJobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
        JobTypes?: number[];
    }

    export namespace InspectionChecklistRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Inspections.InspectionChecklist';
        export const deletePermission = 'Inspections:Inspection:Delete';
        export const insertPermission = 'Inspections:Inspection:Create';
        export const readPermission = 'Inspections:Inspection:View';
        export const updatePermission = 'Inspections:Inspection:Update';

        export declare const enum Fields {
            Id = "Id",
            JobCategory = "JobCategory",
            JobType = "JobType",
            JobCategoryName = "JobCategoryName",
            JobTypeJobCategory = "JobTypeJobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming",
            JobTypes = "JobTypes"
        }
    }
}
