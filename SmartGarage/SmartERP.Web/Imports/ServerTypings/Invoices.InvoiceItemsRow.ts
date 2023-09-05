namespace SmartERP.Invoices {
    export interface InvoiceItemsRow {
        Id?: number;
        ProductId?: number;
        HSN?: number;
        Description?: string;
        UnitId?: number;
        Quantity?: number;
        PurchasePrice?: number;
        UnitPrice?: number;
        Gst?: number;
        CGST?: number;
        SGST?: number;
        Discount?: number;
        TotalTax?: number;
        SubTotal?: number;
        Total?: number;
        InvoiceId?: number;
        ProductBarcode?: string;
        ProductProductName?: string;
        ProductModel?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductCategoryId?: number;
        ProductUnitId?: number;
        ProductBrandId?: number;
        ProductImage?: string;
        ProductProductDetails?: string;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductDeleteDate?: string;
        ProductDeleteUserId?: number;
        ProductIsActive?: number;
        UnitName?: string;
        UnitDescription?: string;
        UnitInsertDate?: string;
        UnitInsertUserId?: number;
        UnitUpdateDate?: string;
        UnitUpdateUserId?: number;
        UnitDeleteDate?: string;
        UnitDeleteUserId?: number;
        UnitIsActive?: number;
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

    export namespace InvoiceItemsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Invoices.InvoiceItems';
        export const deletePermission = 'Invoices:Invoice:Delete';
        export const insertPermission = 'Invoices:Invoice:Create';
        export const readPermission = 'Invoices:Invoice:View';
        export const updatePermission = 'Invoices:Invoice:Update';

        export declare const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            HSN = "HSN",
            Description = "Description",
            UnitId = "UnitId",
            Quantity = "Quantity",
            PurchasePrice = "PurchasePrice",
            UnitPrice = "UnitPrice",
            Gst = "Gst",
            CGST = "CGST",
            SGST = "SGST",
            Discount = "Discount",
            TotalTax = "TotalTax",
            SubTotal = "SubTotal",
            Total = "Total",
            InvoiceId = "InvoiceId",
            ProductBarcode = "ProductBarcode",
            ProductProductName = "ProductProductName",
            ProductModel = "ProductModel",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductCategoryId = "ProductCategoryId",
            ProductUnitId = "ProductUnitId",
            ProductBrandId = "ProductBrandId",
            ProductImage = "ProductImage",
            ProductProductDetails = "ProductProductDetails",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductDeleteDate = "ProductDeleteDate",
            ProductDeleteUserId = "ProductDeleteUserId",
            ProductIsActive = "ProductIsActive",
            UnitName = "UnitName",
            UnitDescription = "UnitDescription",
            UnitInsertDate = "UnitInsertDate",
            UnitInsertUserId = "UnitInsertUserId",
            UnitUpdateDate = "UnitUpdateDate",
            UnitUpdateUserId = "UnitUpdateUserId",
            UnitDeleteDate = "UnitDeleteDate",
            UnitDeleteUserId = "UnitDeleteUserId",
            UnitIsActive = "UnitIsActive",
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
