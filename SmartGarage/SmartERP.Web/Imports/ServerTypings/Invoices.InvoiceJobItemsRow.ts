namespace SmartERP.Invoices {
    export interface InvoiceJobItemsRow {
        Id?: number;
        JobType?: number;
        Description?: string;
        UnitPrice?: number;
        Gst?: number;
        TotalTax?: number;
        Discount?: number;
        SubTotal?: number;
        Total?: number;
        InvoiceId?: number;
        JobTypeJobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
        JobTypeIsInspectionList?: boolean;
        InvoiceCustomerId?: number;
        InvoiceJobcard?: number;
        InvoiceVehicle?: number;
        InvoiceDate?: string;
        InvoiceDiscount?: number;
        InvoiceTotalDiscount?: number;
        InvoiceVat?: number;
        InvoiceTotalTax?: number;
        InvoiceShippingCost?: number;
        InvoiceGrandTotal?: number;
        InvoiceNetTotal?: number;
        InvoicePaidAmount?: number;
        InvoiceDue?: number;
        InvoiceChange?: number;
        InvoiceDetails?: string;
        InvoicePaymentAccount?: number;
        InvoiceVNo?: number;
        InvoiceScheduleDatetime?: string;
        InvoiceDeliveryDatetime?: string;
    }

    export namespace InvoiceJobItemsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Invoices.InvoiceJobItems';
        export const deletePermission = 'Invoices:Invoice:Delete';
        export const insertPermission = 'Invoices:Invoice:Create';
        export const readPermission = 'Invoices:Invoice:View';
        export const updatePermission = 'Invoices:Invoice:Update';

        export declare const enum Fields {
            Id = "Id",
            JobType = "JobType",
            Description = "Description",
            UnitPrice = "UnitPrice",
            Gst = "Gst",
            TotalTax = "TotalTax",
            Discount = "Discount",
            SubTotal = "SubTotal",
            Total = "Total",
            InvoiceId = "InvoiceId",
            JobTypeJobCategory = "JobTypeJobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming",
            JobTypeIsInspectionList = "JobTypeIsInspectionList",
            InvoiceCustomerId = "InvoiceCustomerId",
            InvoiceJobcard = "InvoiceJobcard",
            InvoiceVehicle = "InvoiceVehicle",
            InvoiceDate = "InvoiceDate",
            InvoiceDiscount = "InvoiceDiscount",
            InvoiceTotalDiscount = "InvoiceTotalDiscount",
            InvoiceVat = "InvoiceVat",
            InvoiceTotalTax = "InvoiceTotalTax",
            InvoiceShippingCost = "InvoiceShippingCost",
            InvoiceGrandTotal = "InvoiceGrandTotal",
            InvoiceNetTotal = "InvoiceNetTotal",
            InvoicePaidAmount = "InvoicePaidAmount",
            InvoiceDue = "InvoiceDue",
            InvoiceChange = "InvoiceChange",
            InvoiceDetails = "InvoiceDetails",
            InvoicePaymentAccount = "InvoicePaymentAccount",
            InvoiceVNo = "InvoiceVNo",
            InvoiceScheduleDatetime = "InvoiceScheduleDatetime",
            InvoiceDeliveryDatetime = "InvoiceDeliveryDatetime"
        }
    }
}
