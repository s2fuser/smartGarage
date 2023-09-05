namespace SmartERP.Sales {
    export interface SalesRow {
        Id?: number;
        CustomerId?: number;
        Date?: string;
        PaymentAccount?: number;
        Discount?: number;
        TotalDiscount?: number;
        Vat?: number;
        TotalTax?: number;
        ShippingCost?: number;
        GrandTotal?: number;
        NetTotal?: number;
        PaidAmount?: number;
        Due?: number;
        Change?: number;
        Details?: string;
        LineItems?: SaleDetailsRow[];
        HeadCodeName?: string;
        VNo?: number;
        CustomerName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCountryId?: number;
        CustomerStateId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerRegionId?: number;
        CustomerPostalCode?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerWebsite?: string;
        CustomerEmail?: string;
        CustomerEmailAddress?: string;
        CustomerPreviousCreditBalance?: number;
    }

    export namespace SalesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Date';
        export const localTextPrefix = 'Sales.Sales';
        export const lookupKey = 'Sales.Sales';

        export function getLookup(): Q.Lookup<SalesRow> {
            return Q.getLookup<SalesRow>('Sales.Sales');
        }
        export const deletePermission = 'Sales:Sale:Delete';
        export const insertPermission = 'Sales:Sale:Create';
        export const readPermission = 'Sales:Sale:View';
        export const updatePermission = 'Sales:Sale:Update';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
            Discount = "Discount",
            TotalDiscount = "TotalDiscount",
            Vat = "Vat",
            TotalTax = "TotalTax",
            ShippingCost = "ShippingCost",
            GrandTotal = "GrandTotal",
            NetTotal = "NetTotal",
            PaidAmount = "PaidAmount",
            Due = "Due",
            Change = "Change",
            Details = "Details",
            LineItems = "LineItems",
            HeadCodeName = "HeadCodeName",
            VNo = "VNo",
            CustomerName = "CustomerName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCountryId = "CustomerCountryId",
            CustomerStateId = "CustomerStateId",
            CustomerCityId = "CustomerCityId",
            CustomerAddress = "CustomerAddress",
            CustomerRegionId = "CustomerRegionId",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerWebsite = "CustomerWebsite",
            CustomerEmail = "CustomerEmail",
            CustomerEmailAddress = "CustomerEmailAddress",
            CustomerPreviousCreditBalance = "CustomerPreviousCreditBalance"
        }
    }
}
