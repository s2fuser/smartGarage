namespace SmartERP.Purchases {
    export interface PurchasesRow {
        Id?: number;
        SupplierId?: number;
        InvoiceNo?: string;
        Date?: string;
        PaymentAccount?: number;
        Discount?: number;
        TotalDiscount?: number;
        ShippingCost?: number;
        GrandTotal?: number;
        NetTotal?: number;
        PaidAmount?: number;
        Due?: number;
        Change?: number;
        Details?: string;
        LineItems?: PurchaseDetailsRow[];
        HeadCodeName?: string;
        VNo?: number;
        SupplierCompanyName?: string;
        SupplierCountryId?: number;
        SupplierStateId?: number;
        SupplierCityId?: number;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierRegionId?: number;
        SupplierPostalCode?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierWebsite?: string;
        SupplierEmail?: string;
        SupplierEmailAddress?: string;
        SupplierPreviousCreditBalance?: number;
    }

    export namespace PurchasesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'InvoiceNo';
        export const localTextPrefix = 'Purchases.Purchases';
        export const lookupKey = 'Purchases.Purchases';

        export function getLookup(): Q.Lookup<PurchasesRow> {
            return Q.getLookup<PurchasesRow>('Purchases.Purchases');
        }
        export const deletePermission = 'Purchasing:Purchase:Delete';
        export const insertPermission = 'Purchasing:Purchase:Create';
        export const readPermission = 'Purchasing:Purchase:View';
        export const updatePermission = 'Purchasing:Purchase:Update';

        export declare const enum Fields {
            Id = "Id",
            SupplierId = "SupplierId",
            InvoiceNo = "InvoiceNo",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
            Discount = "Discount",
            TotalDiscount = "TotalDiscount",
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
            SupplierCompanyName = "SupplierCompanyName",
            SupplierCountryId = "SupplierCountryId",
            SupplierStateId = "SupplierStateId",
            SupplierCityId = "SupplierCityId",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierRegionId = "SupplierRegionId",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierWebsite = "SupplierWebsite",
            SupplierEmail = "SupplierEmail",
            SupplierEmailAddress = "SupplierEmailAddress",
            SupplierPreviousCreditBalance = "SupplierPreviousCreditBalance"
        }
    }
}
