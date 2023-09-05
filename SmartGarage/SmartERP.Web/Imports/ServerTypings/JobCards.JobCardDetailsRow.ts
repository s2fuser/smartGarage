namespace SmartERP.JobCards {
    export interface JobCardDetailsRow {
        Id?: number;
        JobType?: number;
        JobOrder?: number;
        Mechanic?: number;
        MechanicFullName?: string;
        CustomerNotes?: string;
        JobTypeName?: string;
        JobOrderCustomer?: number;
        JobOrderWorkOrderNo?: string;
        JobOrderAddress?: string;
        JobOrderVehicle?: number;
        JobOrderPhone?: string;
        JobOrderReference?: string;
        JobOrderMobile?: string;
        JobOrderScheduleDatetime?: string;
        JobOrderWebsite?: string;
        JobOrderDeliveryDatetime?: string;
        JobOrderDetails?: string;
    }

    export namespace JobCardDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CustomerNotes';
        export const localTextPrefix = 'JobCards.JobCardDetails';
        export const deletePermission = 'Job Cards:Job Card:Delete';
        export const insertPermission = 'Job Cards:Job Card:Create';
        export const readPermission = 'Job Cards:Job Card:View';
        export const updatePermission = 'Job Cards:Job Card:Update';

        export declare const enum Fields {
            Id = "Id",
            JobType = "JobType",
            JobOrder = "JobOrder",
            Mechanic = "Mechanic",
            MechanicFullName = "MechanicFullName",
            CustomerNotes = "CustomerNotes",
            JobTypeName = "JobTypeName",
            JobOrderCustomer = "JobOrderCustomer",
            JobOrderWorkOrderNo = "JobOrderWorkOrderNo",
            JobOrderAddress = "JobOrderAddress",
            JobOrderVehicle = "JobOrderVehicle",
            JobOrderPhone = "JobOrderPhone",
            JobOrderReference = "JobOrderReference",
            JobOrderMobile = "JobOrderMobile",
            JobOrderScheduleDatetime = "JobOrderScheduleDatetime",
            JobOrderWebsite = "JobOrderWebsite",
            JobOrderDeliveryDatetime = "JobOrderDeliveryDatetime",
            JobOrderDetails = "JobOrderDetails"
        }
    }
}
