using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SmartERP.Products.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Invoices.Entities
{
    [ConnectionKey("Default"), Module("Invoices"), TableName("[dbo].[InvoiceItems]")]
    [DisplayName("Invoice Items"), InstanceName("Invoice Items")]
    [ReadPermission(PermissionKeys.Invoices.View)]
    [InsertPermission(PermissionKeys.Invoices.Create)]
    [UpdatePermission(PermissionKeys.Invoices.Update)]
    [DeletePermission(PermissionKeys.Invoices.Delete)]
    public sealed class InvoiceItemsRow : Row<InvoiceItemsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Product"), NotNull, ForeignKey("[dbo].[Products]", "Id"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        [LookupEditor(typeof(ProductsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Products.Products")]
        public Int64? ProductId
        {
            get => fields.ProductId[this];
            set => fields.ProductId[this] = value;
        }

        [DisplayName("HSN"),NotNull]
        public Int64? HSN
        {
            get => fields.HSN[this];
            set => fields.HSN[this] = value;
        }

        [DisplayName("Description"), Size(500), QuickSearch, NameProperty]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Unit"), NotNull, ForeignKey("[dbo].[Units]", "Id"), LeftJoin("jUnit"), TextualField("UnitName")]
        [LookupEditor(typeof(UnitsRow), FilterField = "IsActive", FilterValue = "1", DialogType = "Products.Units")]
        public Int64? UnitId
        {
            get => fields.UnitId[this];
            set => fields.UnitId[this] = value;
        }

        [DisplayName("Quantity"), NotNull]
        public Double? Quantity
        {
            get => fields.Quantity[this];
            set => fields.Quantity[this] = value;
        }

        [DisplayName("Purchase Price"),DefaultValue(0)]
        public Double? PurchasePrice
        {
            get => fields.PurchasePrice[this];
            set => fields.PurchasePrice[this] = value;
        }

        [DisplayName("Unit Price"), NotNull]
        public Double? UnitPrice
        {
            get => fields.UnitPrice[this];
            set => fields.UnitPrice[this] = value;
        }

        [DisplayName("Discount"), NotNull]
        public Double? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }

        [DisplayName("Total"), NotNull]
        public Double? Total
        {
            get => fields.Total[this];
            set => fields.Total[this] = value;
        }

        [DisplayName("Invoice"), NotNull, ForeignKey("[dbo].[Invoices]", "Id"), LeftJoin("jInvoice"), TextualField("InvoiceDetails")]
        public Int64? InvoiceId
        {
            get => fields.InvoiceId[this];
            set => fields.InvoiceId[this] = value;
        }

        [DisplayName("Product Barcode"), Expression("jProduct.[Barcode]")]
        public String ProductBarcode
        {
            get => fields.ProductBarcode[this];
            set => fields.ProductBarcode[this] = value;
        }

        [DisplayName("Product Name"), Expression("jProduct.[ProductName]"),MinSelectLevel(SelectLevel.List)]
        public String ProductProductName
        {
            get => fields.ProductProductName[this];
            set => fields.ProductProductName[this] = value;
        }

        [DisplayName("Product Model"), Expression("jProduct.[Model]")]
        public String ProductModel
        {
            get => fields.ProductModel[this];
            set => fields.ProductModel[this] = value;
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public Double? ProductUnitPrice
        {
            get => fields.ProductUnitPrice[this];
            set => fields.ProductUnitPrice[this] = value;
        }

        [DisplayName("Gst"), NotNull]
        public Double? Gst
        {
            get => fields.Gst[this];
            set => fields.Gst[this] = value;
        }
        [DisplayName("CGST"), NotNull]
        public Double? CGST
        {
            get => fields.CGST[this];
            set => fields.CGST[this] = value;
        }
        [DisplayName("SGST"), NotNull]
        public Double? SGST
        {
            get => fields.SGST[this];
            set => fields.SGST[this] = value;
        }

        [DisplayName("TotalTax")]
        public Double? TotalTax
        {
            get => fields.TotalTax[this];
            set => fields.TotalTax[this] = value;
        }
        [DisplayName("SubTotal")]
        public Double? SubTotal
        {
            get => fields.SubTotal[this];
            set => fields.SubTotal[this] = value;
        }


        [DisplayName("Product Units In Stock"), Expression("jProduct.[UnitsInStock]")]
        public Double? ProductUnitsInStock
        {
            get => fields.ProductUnitsInStock[this];
            set => fields.ProductUnitsInStock[this] = value;
        }

        [DisplayName("Product Units On Order"), Expression("jProduct.[UnitsOnOrder]")]
        public Double? ProductUnitsOnOrder
        {
            get => fields.ProductUnitsOnOrder[this];
            set => fields.ProductUnitsOnOrder[this] = value;
        }

        [DisplayName("Product Reorder Level"), Expression("jProduct.[ReorderLevel]")]
        public Double? ProductReorderLevel
        {
            get => fields.ProductReorderLevel[this];
            set => fields.ProductReorderLevel[this] = value;
        }

        [DisplayName("Product Category Id"), Expression("jProduct.[CategoryId]")]
        public Int64? ProductCategoryId
        {
            get => fields.ProductCategoryId[this];
            set => fields.ProductCategoryId[this] = value;
        }

        [DisplayName("Product Unit Id"), Expression("jProduct.[UnitId]")]
        public Int64? ProductUnitId
        {
            get => fields.ProductUnitId[this];
            set => fields.ProductUnitId[this] = value;
        }

        [DisplayName("Product Brand Id"), Expression("jProduct.[BrandId]")]
        public Int64? ProductBrandId
        {
            get => fields.ProductBrandId[this];
            set => fields.ProductBrandId[this] = value;
        }

        [DisplayName("Product Image"), Expression("jProduct.[Image]")]
        public String ProductImage
        {
            get => fields.ProductImage[this];
            set => fields.ProductImage[this] = value;
        }

        [DisplayName("Product Product Details"), Expression("jProduct.[ProductDetails]")]
        public String ProductProductDetails
        {
            get => fields.ProductProductDetails[this];
            set => fields.ProductProductDetails[this] = value;
        }

        [DisplayName("Product Insert Date"), Expression("jProduct.[InsertDate]")]
        public DateTime? ProductInsertDate
        {
            get => fields.ProductInsertDate[this];
            set => fields.ProductInsertDate[this] = value;
        }

        [DisplayName("Product Insert User Id"), Expression("jProduct.[InsertUserId]")]
        public Int32? ProductInsertUserId
        {
            get => fields.ProductInsertUserId[this];
            set => fields.ProductInsertUserId[this] = value;
        }

        [DisplayName("Product Update Date"), Expression("jProduct.[UpdateDate]")]
        public DateTime? ProductUpdateDate
        {
            get => fields.ProductUpdateDate[this];
            set => fields.ProductUpdateDate[this] = value;
        }

        [DisplayName("Product Update User Id"), Expression("jProduct.[UpdateUserId]")]
        public Int32? ProductUpdateUserId
        {
            get => fields.ProductUpdateUserId[this];
            set => fields.ProductUpdateUserId[this] = value;
        }

        [DisplayName("Product Delete Date"), Expression("jProduct.[DeleteDate]")]
        public DateTime? ProductDeleteDate
        {
            get => fields.ProductDeleteDate[this];
            set => fields.ProductDeleteDate[this] = value;
        }

        [DisplayName("Product Delete User Id"), Expression("jProduct.[DeleteUserId]")]
        public Int32? ProductDeleteUserId
        {
            get => fields.ProductDeleteUserId[this];
            set => fields.ProductDeleteUserId[this] = value;
        }

        [DisplayName("Product Is Active"), Expression("jProduct.[IsActive]")]
        public Int32? ProductIsActive
        {
            get => fields.ProductIsActive[this];
            set => fields.ProductIsActive[this] = value;
        }

        [DisplayName("Unit Name"), Expression("jUnit.[Name]"), MinSelectLevel(SelectLevel.List)]
        public String UnitName
        {
            get => fields.UnitName[this];
            set => fields.UnitName[this] = value;
        }

        [DisplayName("Unit Description"), Expression("jUnit.[Description]")]
        public String UnitDescription
        {
            get => fields.UnitDescription[this];
            set => fields.UnitDescription[this] = value;
        }

        [DisplayName("Unit Insert Date"), Expression("jUnit.[InsertDate]")]
        public DateTime? UnitInsertDate
        {
            get => fields.UnitInsertDate[this];
            set => fields.UnitInsertDate[this] = value;
        }

        [DisplayName("Unit Insert User Id"), Expression("jUnit.[InsertUserId]")]
        public Int32? UnitInsertUserId
        {
            get => fields.UnitInsertUserId[this];
            set => fields.UnitInsertUserId[this] = value;
        }

        [DisplayName("Unit Update Date"), Expression("jUnit.[UpdateDate]")]
        public DateTime? UnitUpdateDate
        {
            get => fields.UnitUpdateDate[this];
            set => fields.UnitUpdateDate[this] = value;
        }

        [DisplayName("Unit Update User Id"), Expression("jUnit.[UpdateUserId]")]
        public Int32? UnitUpdateUserId
        {
            get => fields.UnitUpdateUserId[this];
            set => fields.UnitUpdateUserId[this] = value;
        }

        [DisplayName("Unit Delete Date"), Expression("jUnit.[DeleteDate]")]
        public DateTime? UnitDeleteDate
        {
            get => fields.UnitDeleteDate[this];
            set => fields.UnitDeleteDate[this] = value;
        }

        [DisplayName("Unit Delete User Id"), Expression("jUnit.[DeleteUserId]")]
        public Int32? UnitDeleteUserId
        {
            get => fields.UnitDeleteUserId[this];
            set => fields.UnitDeleteUserId[this] = value;
        }

        [DisplayName("Unit Is Active"), Expression("jUnit.[IsActive]")]
        public Int32? UnitIsActive
        {
            get => fields.UnitIsActive[this];
            set => fields.UnitIsActive[this] = value;
        }

        [DisplayName("Invoice Customer Id"), Expression("jInvoice.[CustomerId]")]
        public Int64? InvoiceCustomerId
        {
            get => fields.InvoiceCustomerId[this];
            set => fields.InvoiceCustomerId[this] = value;
        }

        [DisplayName("Invoice Jobcard"), Expression("jInvoice.[Jobcard]")]
        public Int64? InvoiceJobcard
        {
            get => fields.InvoiceJobcard[this];
            set => fields.InvoiceJobcard[this] = value;
        }

        [DisplayName("Invoice Vehicle"), Expression("jInvoice.[Vehicle]")]
        public Int64? InvoiceVehicle
        {
            get => fields.InvoiceVehicle[this];
            set => fields.InvoiceVehicle[this] = value;
        }

        [DisplayName("Invoice Date"), Expression("jInvoice.[Date]")]
        public DateTime? InvoiceDate
        {
            get => fields.InvoiceDate[this];
            set => fields.InvoiceDate[this] = value;
        }

        [DisplayName("Invoice Discount"), Expression("jInvoice.[Discount]")]
        public Double? InvoiceDiscount
        {
            get => fields.InvoiceDiscount[this];
            set => fields.InvoiceDiscount[this] = value;
        }

        [DisplayName("Invoice Total Discount"), Expression("jInvoice.[TotalDiscount]")]
        public Double? InvoiceTotalDiscount
        {
            get => fields.InvoiceTotalDiscount[this];
            set => fields.InvoiceTotalDiscount[this] = value;
        }

        [DisplayName("Invoice Vat"), Expression("jInvoice.[Vat]")]
        public Double? InvoiceVat
        {
            get => fields.InvoiceVat[this];
            set => fields.InvoiceVat[this] = value;
        }

        [DisplayName("Invoice Total Tax"), Expression("jInvoice.[TotalTax]")]
        public Double? InvoiceTotalTax
        {
            get => fields.InvoiceTotalTax[this];
            set => fields.InvoiceTotalTax[this] = value;
        }

        [DisplayName("Invoice Shipping Cost"), Expression("jInvoice.[ShippingCost]")]
        public Double? InvoiceShippingCost
        {
            get => fields.InvoiceShippingCost[this];
            set => fields.InvoiceShippingCost[this] = value;
        }

        [DisplayName("Invoice Grand Total"), Expression("jInvoice.[GrandTotal]")]
        public Double? InvoiceGrandTotal
        {
            get => fields.InvoiceGrandTotal[this];
            set => fields.InvoiceGrandTotal[this] = value;
        }

        [DisplayName("Invoice Net Total"), Expression("jInvoice.[NetTotal]")]
        public Double? InvoiceNetTotal
        {
            get => fields.InvoiceNetTotal[this];
            set => fields.InvoiceNetTotal[this] = value;
        }

        [DisplayName("Invoice Paid Amount"), Expression("jInvoice.[PaidAmount]")]
        public Double? InvoicePaidAmount
        {
            get => fields.InvoicePaidAmount[this];
            set => fields.InvoicePaidAmount[this] = value;
        }

        [DisplayName("Invoice Due"), Expression("jInvoice.[Due]")]
        public Double? InvoiceDue
        {
            get => fields.InvoiceDue[this];
            set => fields.InvoiceDue[this] = value;
        }

        [DisplayName("Invoice Change"), Expression("jInvoice.[Change]")]
        public Double? InvoiceChange
        {
            get => fields.InvoiceChange[this];
            set => fields.InvoiceChange[this] = value;
        }

        [DisplayName("Invoice Details"), Expression("jInvoice.[Details]")]
        public String InvoiceDetails
        {
            get => fields.InvoiceDetails[this];
            set => fields.InvoiceDetails[this] = value;
        }

        [DisplayName("Invoice Payment Account"), Expression("jInvoice.[PaymentAccount]")]
        public Int64? InvoicePaymentAccount
        {
            get => fields.InvoicePaymentAccount[this];
            set => fields.InvoicePaymentAccount[this] = value;
        }

        [DisplayName("Invoice V No"), Expression("jInvoice.[VNo]")]
        public Int64? InvoiceVNo
        {
            get => fields.InvoiceVNo[this];
            set => fields.InvoiceVNo[this] = value;
        }

        [DisplayName("Invoice Schedule Datetime"), Expression("jInvoice.[ScheduleDatetime]")]
        public DateTime? InvoiceScheduleDatetime
        {
            get => fields.InvoiceScheduleDatetime[this];
            set => fields.InvoiceScheduleDatetime[this] = value;
        }

        [DisplayName("Invoice Delivery Datetime"), Expression("jInvoice.[DeliveryDatetime]")]
        public DateTime? InvoiceDeliveryDatetime
        {
            get => fields.InvoiceDeliveryDatetime[this];
            set => fields.InvoiceDeliveryDatetime[this] = value;
        }

        public InvoiceItemsRow()
            : base()
        {
        }

        public InvoiceItemsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field ProductId;
            public Int64Field HSN;
            public StringField Description;
            public Int64Field UnitId;
            public DoubleField Quantity;
            public DoubleField PurchasePrice;
            public DoubleField UnitPrice;
            public DoubleField Gst;
            public DoubleField CGST;
            public DoubleField SGST;
            public DoubleField Discount;
            public DoubleField TotalTax;
            public DoubleField SubTotal;
            public DoubleField Total;
            public Int64Field InvoiceId;

            public StringField ProductBarcode;
            public StringField ProductProductName;
            public StringField ProductModel;
            public DoubleField ProductUnitPrice;
            public DoubleField ProductUnitsInStock;
            public DoubleField ProductUnitsOnOrder;
            public DoubleField ProductReorderLevel;
            public Int64Field ProductCategoryId;
            public Int64Field ProductUnitId;
            public Int64Field ProductBrandId;
            public StringField ProductImage;
            public StringField ProductProductDetails;
            public DateTimeField ProductInsertDate;
            public Int32Field ProductInsertUserId;
            public DateTimeField ProductUpdateDate;
            public Int32Field ProductUpdateUserId;
            public DateTimeField ProductDeleteDate;
            public Int32Field ProductDeleteUserId;
            public Int32Field ProductIsActive;

            public StringField UnitName;
            public StringField UnitDescription;
            public DateTimeField UnitInsertDate;
            public Int32Field UnitInsertUserId;
            public DateTimeField UnitUpdateDate;
            public Int32Field UnitUpdateUserId;
            public DateTimeField UnitDeleteDate;
            public Int32Field UnitDeleteUserId;
            public Int32Field UnitIsActive;

            public Int64Field InvoiceCustomerId;
            public Int64Field InvoiceJobcard;
            public Int64Field InvoiceVehicle;
            public DateTimeField InvoiceDate;
            public DoubleField InvoiceDiscount;
            public DoubleField InvoiceTotalDiscount;
            public DoubleField InvoiceVat;
            public DoubleField InvoiceTotalTax;
            public DoubleField InvoiceShippingCost;
            public DoubleField InvoiceGrandTotal;
            public DoubleField InvoiceNetTotal;
            public DoubleField InvoicePaidAmount;
            public DoubleField InvoiceDue;
            public DoubleField InvoiceChange;
            public StringField InvoiceDetails;
            public Int64Field InvoicePaymentAccount;
            public Int64Field InvoiceVNo;
            public DateTimeField InvoiceScheduleDatetime;
            public DateTimeField InvoiceDeliveryDatetime;
        }
    }
}
