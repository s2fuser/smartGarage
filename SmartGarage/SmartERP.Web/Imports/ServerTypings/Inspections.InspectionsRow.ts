namespace SmartERP.Inspections {
    export interface InspectionsRow {
        Id?: number;
        Name?: string;
        Rate?: number;
        StandardTiming?: string;
        IsInspectionList?: boolean;
        Checklist?: InspectionChecklistRow[];
    }

    export namespace InspectionsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inspections.Inspections';
        export const lookupKey = 'Inspections.Inspections';

        export function getLookup(): Q.Lookup<InspectionsRow> {
            return Q.getLookup<InspectionsRow>('Inspections.Inspections');
        }
        export const deletePermission = 'Inspections:Inspection:Delete';
        export const insertPermission = 'Inspections:Inspection:Create';
        export const readPermission = 'Inspections:Inspection:View';
        export const updatePermission = 'Inspections:Inspection:Update';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Rate = "Rate",
            StandardTiming = "StandardTiming",
            IsInspectionList = "IsInspectionList",
            Checklist = "Checklist"
        }
    }
}
