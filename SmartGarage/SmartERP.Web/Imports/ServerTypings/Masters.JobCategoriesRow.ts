namespace SmartERP.Masters {
    export interface JobCategoriesRow {
        Id?: number;
        Name?: string;
    }

    export namespace JobCategoriesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.JobCategories';
        export const lookupKey = 'Masters.JobCategories';

        export function getLookup(): Q.Lookup<JobCategoriesRow> {
            return Q.getLookup<JobCategoriesRow>('Masters.JobCategories');
        }
        export const deletePermission = 'Masters:Job Categories:Delete';
        export const insertPermission = 'Masters:Job Categories:Create';
        export const readPermission = 'Masters:Job Categories:View';
        export const updatePermission = 'Masters:Job Categories:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
