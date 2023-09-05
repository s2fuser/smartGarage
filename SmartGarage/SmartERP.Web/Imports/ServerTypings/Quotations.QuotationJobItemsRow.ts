namespace SmartERP.Quotations {
    export interface QuotationJobItemsRow {
        Id?: number;
        JobType?: number;
        Description?: string;
        UnitPrice?: number;
        Discount?: number;
        Total?: number;
        QuotationId?: number;
        JobTypeJobCategory?: number;
        JobTypeName?: string;
        JobTypeRate?: number;
        JobTypeStandardTiming?: string;
        JobTypeIsInspectionList?: boolean;
        QuotationCustomerId?: number;
        QuotationVehicle?: number;
        QuotationDate?: string;
        QuotationDiscount?: number;
        QuotationTotalDiscount?: number;
        QuotationVat?: number;
        QuotationTotalTax?: number;
        QuotationShippingCost?: number;
        QuotationGrandTotal?: number;
        QuotationNetTotal?: number;
        QuotationDetails?: string;
        QuotationExpiryDate?: string;
    }

    export namespace QuotationJobItemsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Quotations.QuotationJobItems';
        export const deletePermission = 'Sales:Quotation:Delete';
        export const insertPermission = 'Sales:Quotation:Create';
        export const readPermission = 'Sales:Quotation:View';
        export const updatePermission = 'Sales:Quotation:Update';

        export declare const enum Fields {
            Id = "Id",
            JobType = "JobType",
            Description = "Description",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            Total = "Total",
            QuotationId = "QuotationId",
            JobTypeJobCategory = "JobTypeJobCategory",
            JobTypeName = "JobTypeName",
            JobTypeRate = "JobTypeRate",
            JobTypeStandardTiming = "JobTypeStandardTiming",
            JobTypeIsInspectionList = "JobTypeIsInspectionList",
            QuotationCustomerId = "QuotationCustomerId",
            QuotationVehicle = "QuotationVehicle",
            QuotationDate = "QuotationDate",
            QuotationDiscount = "QuotationDiscount",
            QuotationTotalDiscount = "QuotationTotalDiscount",
            QuotationVat = "QuotationVat",
            QuotationTotalTax = "QuotationTotalTax",
            QuotationShippingCost = "QuotationShippingCost",
            QuotationGrandTotal = "QuotationGrandTotal",
            QuotationNetTotal = "QuotationNetTotal",
            QuotationDetails = "QuotationDetails",
            QuotationExpiryDate = "QuotationExpiryDate"
        }
    }
}
