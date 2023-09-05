namespace SmartERP.Products {
    export interface ProductsRow {
        Id?: number;
        Barcode?: string;
        HSN?: number;
        ProductName?: string;
        Model?: string;
        UnitPrice?: number;
        Gst?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        CategoryId?: number;
        UnitId?: number;
        BrandId?: number;
        Image?: string;
        ProductDetails?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        UnitName?: string;
        UnitDescription?: string;
        BrandName?: string;
        PurchasePrice?: number;
        QtyOut?: number;
        QtyIn?: number;
        Stock?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        DeleteUserId?: number;
        DeleteDate?: string;
        IsActive?: number;
    }

    export namespace ProductsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Products.Products';
        export const lookupKey = 'Products.Products';

        export function getLookup(): Q.Lookup<ProductsRow> {
            return Q.getLookup<ProductsRow>('Products.Products');
        }
        export const deletePermission = 'Inventory:Product:Delete';
        export const insertPermission = 'Inventory:Product:Create';
        export const readPermission = 'Inventory:Product:View';
        export const updatePermission = 'Inventory:Product:Update';

        export declare const enum Fields {
            Id = "Id",
            Barcode = "Barcode",
            HSN = "HSN",
            ProductName = "ProductName",
            Model = "Model",
            UnitPrice = "UnitPrice",
            Gst = "Gst",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            CategoryId = "CategoryId",
            UnitId = "UnitId",
            BrandId = "BrandId",
            Image = "Image",
            ProductDetails = "ProductDetails",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            UnitName = "UnitName",
            UnitDescription = "UnitDescription",
            BrandName = "BrandName",
            PurchasePrice = "PurchasePrice",
            QtyOut = "QtyOut",
            QtyIn = "QtyIn",
            Stock = "Stock",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            DeleteUserId = "DeleteUserId",
            DeleteDate = "DeleteDate",
            IsActive = "IsActive"
        }
    }
}
