namespace SmartERP.Masters {
    export interface JobTypesRow {
        Id?: number;
        JobCategory?: number;
        Name?: string;
        Rate?: number;
        Gst?: number;
        StandardTiming?: string;
        IsInspectionList?: boolean;
        JobCategoryName?: string;
    }

    export namespace JobTypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.JobTypes';
        export const lookupKey = 'Masters.JobTypes';

        export function getLookup(): Q.Lookup<JobTypesRow> {
            return Q.getLookup<JobTypesRow>('Masters.JobTypes');
        }
        export const deletePermission = 'Masters:Job Types:Delete';
        export const insertPermission = 'Masters:Job Types:Create';
        export const readPermission = 'Masters:Job Types:View';
        export const updatePermission = 'Masters:Job Types:Update';

        export declare const enum Fields {
            Id = "Id",
            JobCategory = "JobCategory",
            Name = "Name",
            Rate = "Rate",
            Gst = "Gst",
            StandardTiming = "StandardTiming",
            IsInspectionList = "IsInspectionList",
            JobCategoryName = "JobCategoryName"
        }
    }
}
