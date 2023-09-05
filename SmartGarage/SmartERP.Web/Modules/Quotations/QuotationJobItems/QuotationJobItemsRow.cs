using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SmartERP.Masters.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Quotations.Entities
{
    [ConnectionKey("Default"), Module("Quotations"), TableName("[dbo].[QuotationJobItems]")]
    [DisplayName("Quotation Job Items"), InstanceName("Quotation Job Items")]
    [ReadPermission(Sales.PermissionKeys.Quotations.View)]
    [InsertPermission(Sales.PermissionKeys.Quotations.Create)]
    [UpdatePermission(Sales.PermissionKeys.Quotations.Update)]
    [DeletePermission(Sales.PermissionKeys.Quotations.Delete)]
    public sealed class QuotationJobItemsRow : Row<QuotationJobItemsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Job Type"), NotNull, ForeignKey("[dbo].[JobTypes]", "Id"), LeftJoin("jJobType"), TextualField("JobTypeName")]
        [LookupEditor(typeof(JobTypesRow))]
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

        [DisplayName("Quotation"), NotNull, ForeignKey("[dbo].[Quotations]", "Id"), LeftJoin("jQuotation"), TextualField("QuotationDetails")]
        public Int64? QuotationId
        {
            get => fields.QuotationId[this];
            set => fields.QuotationId[this] = value;
        }

        [DisplayName("Job Type Job Category"), Expression("jJobType.[JobCategory]")]
        public Int64? JobTypeJobCategory
        {
            get => fields.JobTypeJobCategory[this];
            set => fields.JobTypeJobCategory[this] = value;
        }

        [DisplayName("Job Type Name"), Expression("jJobType.[Name]"), MinSelectLevel(SelectLevel.List)]
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

        [DisplayName("Quotation Customer Id"), Expression("jQuotation.[CustomerId]")]
        public Int64? QuotationCustomerId
        {
            get => fields.QuotationCustomerId[this];
            set => fields.QuotationCustomerId[this] = value;
        }

        [DisplayName("Quotation Vehicle"), Expression("jQuotation.[Vehicle]")]
        public Int64? QuotationVehicle
        {
            get => fields.QuotationVehicle[this];
            set => fields.QuotationVehicle[this] = value;
        }

        [DisplayName("Quotation Date"), Expression("jQuotation.[Date]")]
        public DateTime? QuotationDate
        {
            get => fields.QuotationDate[this];
            set => fields.QuotationDate[this] = value;
        }

        [DisplayName("Quotation Discount"), Expression("jQuotation.[Discount]")]
        public Double? QuotationDiscount
        {
            get => fields.QuotationDiscount[this];
            set => fields.QuotationDiscount[this] = value;
        }

        [DisplayName("Quotation Total Discount"), Expression("jQuotation.[TotalDiscount]")]
        public Double? QuotationTotalDiscount
        {
            get => fields.QuotationTotalDiscount[this];
            set => fields.QuotationTotalDiscount[this] = value;
        }

        [DisplayName("Quotation Vat"), Expression("jQuotation.[Vat]")]
        public Double? QuotationVat
        {
            get => fields.QuotationVat[this];
            set => fields.QuotationVat[this] = value;
        }

        [DisplayName("Quotation Total Tax"), Expression("jQuotation.[TotalTax]")]
        public Double? QuotationTotalTax
        {
            get => fields.QuotationTotalTax[this];
            set => fields.QuotationTotalTax[this] = value;
        }

        [DisplayName("Quotation Shipping Cost"), Expression("jQuotation.[ShippingCost]")]
        public Double? QuotationShippingCost
        {
            get => fields.QuotationShippingCost[this];
            set => fields.QuotationShippingCost[this] = value;
        }

        [DisplayName("Quotation Grand Total"), Expression("jQuotation.[GrandTotal]")]
        public Double? QuotationGrandTotal
        {
            get => fields.QuotationGrandTotal[this];
            set => fields.QuotationGrandTotal[this] = value;
        }

        [DisplayName("Quotation Net Total"), Expression("jQuotation.[NetTotal]")]
        public Double? QuotationNetTotal
        {
            get => fields.QuotationNetTotal[this];
            set => fields.QuotationNetTotal[this] = value;
        }

        [DisplayName("Quotation Details"), Expression("jQuotation.[Details]")]
        public String QuotationDetails
        {
            get => fields.QuotationDetails[this];
            set => fields.QuotationDetails[this] = value;
        }

        [DisplayName("Quotation Expiry Date"), Expression("jQuotation.[ExpiryDate]")]
        public DateTime? QuotationExpiryDate
        {
            get => fields.QuotationExpiryDate[this];
            set => fields.QuotationExpiryDate[this] = value;
        }

        public QuotationJobItemsRow()
            : base()
        {
        }

        public QuotationJobItemsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field JobType;
            public StringField Description;
            public DoubleField UnitPrice;
            public DoubleField Discount;
            public DoubleField Total;
            public Int64Field QuotationId;

            public Int64Field JobTypeJobCategory;
            public StringField JobTypeName;
            public DoubleField JobTypeRate;
            public TimeSpanField JobTypeStandardTiming;
            public BooleanField JobTypeIsInspectionList;

            public Int64Field QuotationCustomerId;
            public Int64Field QuotationVehicle;
            public DateTimeField QuotationDate;
            public DoubleField QuotationDiscount;
            public DoubleField QuotationTotalDiscount;
            public DoubleField QuotationVat;
            public DoubleField QuotationTotalTax;
            public DoubleField QuotationShippingCost;
            public DoubleField QuotationGrandTotal;
            public DoubleField QuotationNetTotal;
            public StringField QuotationDetails;
            public DateTimeField QuotationExpiryDate;
        }
    }
}
