using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SmartERP.Masters.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Invoices.Entities
{
    [ConnectionKey("Default"), Module("Invoices"), TableName("[dbo].[InvoiceJobItems]")]
    [DisplayName("Invoice Job Items"), InstanceName("Invoice Job Items")]
    [ReadPermission(PermissionKeys.Invoices.View)]
    [InsertPermission(PermissionKeys.Invoices.Create)]
    [UpdatePermission(PermissionKeys.Invoices.Update)]
    [DeletePermission(PermissionKeys.Invoices.Delete)]
    public sealed class InvoiceJobItemsRow : Row<InvoiceJobItemsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Job Type"), NotNull, ForeignKey("[dbo].[JobTypes]", "Id"), LeftJoin("jJobType"), TextualField("JobTypeName")]
        [LookupEditor(typeof(JobTypesRow),InplaceAdd = true)]
        public Int64? JobType
        {
            get => fields.JobType[this];
            set => fields.JobType[this] = value;
        }

        [DisplayName("Description"), Size(500), QuickSearch, NameProperty]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Unit Price"), NotNull]
        public Double? UnitPrice
        {
            get => fields.UnitPrice[this];
            set => fields.UnitPrice[this] = value;
        }
        [DisplayName("Gst"), NotNull]
        public Double? Gst
        { 
            get => fields.Gst[this];
            set => fields.Gst[this] = value;
        }

        [DisplayName("Total Tax"), NotNull]
        public Double? TotalTax
        {
            get => fields.TotalTax[this];
            set => fields.TotalTax[this] = value;
        }

        [DisplayName("Discount"), NotNull]
        public Double? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }
        [DisplayName("SubTotal"), NotNull]
        public Double? SubTotal
        {
            get => fields.SubTotal[this];
            set => fields.SubTotal[this] = value;
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

        [DisplayName("Job Type Job Category"), Expression("jJobType.[JobCategory]")]
        public Int64? JobTypeJobCategory
        {
            get => fields.JobTypeJobCategory[this];
            set => fields.JobTypeJobCategory[this] = value;
        }

        [DisplayName("Job Type Name"), Expression("jJobType.[Name]"),MinSelectLevel(SelectLevel.List)]
        public String JobTypeName
        {
            get => fields.JobTypeName[this];
            set => fields.JobTypeName[this] = value;
        }

        [DisplayName("Job Type Rate"), Expression("jJobType.[Rate]")]
        public Double? JobTypeRate
        {
            get => fields.JobTypeRate[this];
            set => fields.JobTypeRate[this] = value;
        }

        [DisplayName("Job Type Standard Timing"), Expression("jJobType.[StandardTiming]")]
        public TimeSpan? JobTypeStandardTiming
        {
            get => fields.JobTypeStandardTiming[this];
            set => fields.JobTypeStandardTiming[this] = value;
        }

        [DisplayName("Job Type Is Inspection List"), Expression("jJobType.[IsInspectionList]")]
        public Boolean? JobTypeIsInspectionList
        {
            get => fields.JobTypeIsInspectionList[this];
            set => fields.JobTypeIsInspectionList[this] = value;
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

        public InvoiceJobItemsRow()
            : base()
        {
        }

        public InvoiceJobItemsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field JobType;
            public StringField Description;
            public DoubleField UnitPrice;
            public DoubleField Gst;
            public DoubleField TotalTax;
            public DoubleField Discount;
            public DoubleField SubTotal;
            public DoubleField Total;
            public Int64Field InvoiceId;

            public Int64Field JobTypeJobCategory;
            public StringField JobTypeName;
            public DoubleField JobTypeRate;
            public TimeSpanField JobTypeStandardTiming;
            public BooleanField JobTypeIsInspectionList;

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
