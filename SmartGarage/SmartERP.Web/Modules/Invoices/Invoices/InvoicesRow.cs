using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SmartERP.Customers.Entities;
using SmartERP.JobCards.Entities;
using SmartERP.Products.Entities;
using SmartERP.Vehicles.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Invoices.Entities
{
    [ConnectionKey("Default"), Module("Invoices"), TableName("[dbo].[Invoices]")]
    [DisplayName("Invoices"), InstanceName("Invoices")]
   

    [ReadPermission(PermissionKeys.Invoices.View)]
    [InsertPermission(PermissionKeys.Invoices.Create)]
    [UpdatePermission(PermissionKeys.Invoices.Update)]
    [DeletePermission(PermissionKeys.Invoices.Delete)]

    [LookupScript("Invoices.Invoices", Permission = PermissionKeys.Invoices.View)]
    public sealed class InvoicesRow : Row<InvoicesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Customer"), NotNull, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1", DialogType = "Customers.Customers"), LookupInclude]
        public Int64? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
        }

       

        [DisplayName("Insurance Company Name"), NotNull]
        public String InsuranceCoName
        {
            get => fields.InsuranceCoName[this];
            set => fields.InsuranceCoName[this] = value;
        }
        [DisplayName("Insurance Company Address"), NotNull]
        public String InsuranceCoAdd
        {
            get => fields.InsuranceCoAdd[this];
            set => fields.InsuranceCoAdd[this] = value;
        }
        [DisplayName("Insurance Company City"), NotNull]
        public String InsuranceCoCit
        {
            get => fields.InsuranceCoCit[this];
            set => fields.InsuranceCoCit[this] = value;
        }
        [DisplayName("Gst IN"), NotNull]
        public String GstIN
        {
            get => fields.GstIN[this];
            set => fields.GstIN[this] = value;
        }
        [DisplayName("Jobcard"), ForeignKey("[dbo].[JobCards]", "Id"), LeftJoin("jJobcard"), TextualField("JobcardWorkOrderNo")]
        [LookupEditor(typeof(JobCardsRow), CascadeField = "Customer", CascadeFrom = "CustomerId")]
        public Int64? Jobcard
        {
            get => fields.Jobcard[this];
            set => fields.Jobcard[this] = value;
        }
        [DisplayName("Service Type"),NotNull]
        public String ServiceType
        {
            get => fields.ServiceType[this];
            set => fields.ServiceType[this] = value;
        }

        [DisplayName("Vehicle"), NotNull, ForeignKey("[dbo].[Vehicles]", "Id"), LeftJoin("jVehicle"), TextualField("VehicleVehicleRegistration")]
        [LookupEditor(typeof(VehiclesRow), InplaceAdd = true, CascadeField = "CustomerId", CascadeFrom = "CustomerId")]
        public Int64? Vehicle
        {
            get => fields.Vehicle[this];
            set => fields.Vehicle[this] = value;
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get => fields.Date[this];
            set => fields.Date[this] = value;
        }

        [DisplayName("Discount"), NotNull]
        public Double? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }

        [DisplayName("Total Discount"), NotNull]
        public Double? TotalDiscount
        {
            get => fields.TotalDiscount[this];
            set => fields.TotalDiscount[this] = value;
        }

        //[DisplayName("Vat"), NotNull]
        //public Double? Vat
        //{
        //    get => fields.Vat[this];
        //    set => fields.Vat[this] = value;
        //}
        //[DisplayName("Gst Price"), ForeignKey("[dbo].[Products]", "GstPrice"), LeftJoin("jProducts"), Column("GstPrice")]
        [DisplayName("Gst %"), ForeignKey("[dbo].[Products]", "GstPrice"), LeftJoin("jProduct"), TextualField("ProductGst")]
        
        public Double? Gst
        {
            get => fields.Gst[this];
            set => fields.Gst[this] = value;
        }

        [DisplayName("CGST %")]
        public Double? CGST
        {
            get => fields.CGST[this];
            set => fields.CGST[this] = value;
        }

        [DisplayName("SGST %")]
        public Double? SGST
        {
            get => fields.SGST[this];
            set => fields.SGST[this] = value;
        }

        [DisplayName("Total Tax"), NotNull]
        public Double? TotalTax
        {
            get => fields.TotalTax[this];
            set => fields.TotalTax[this] = value;
        }

        [DisplayName("Shipping Cost"), NotNull]
        public Double? ShippingCost
        {
            get => fields.ShippingCost[this];
            set => fields.ShippingCost[this] = value;
        }

        [DisplayName("Grand Total"), NotNull]
        public Double? GrandTotal
        {
            get => fields.GrandTotal[this];
            set => fields.GrandTotal[this] = value;
        }

        [DisplayName("Net Total"), NotNull]
        public Double? NetTotal
        {
            get => fields.NetTotal[this];
            set => fields.NetTotal[this] = value;
        }

        [DisplayName("Paid Amount"), NotNull]
        public Double? PaidAmount
        {
            get => fields.PaidAmount[this];
            set => fields.PaidAmount[this] = value;
        }

        [DisplayName("Due"), NotNull]
        public Double? Due
        {
            get => fields.Due[this];
            set => fields.Due[this] = value;
        }

        [DisplayName("Change"), NotNull]
        public Double? Change
        {
            get => fields.Change[this];
            set => fields.Change[this] = value;
        }
        [MasterDetailRelation(foreignKey: "InvoiceId")]
        [DisplayName("Items List"), NotMapped]
        public List<InvoiceItemsRow> LineItems
        {
            get { return Fields.LineItems[this]; }
            set { Fields.LineItems[this] = value; }
        }
        [MasterDetailRelation(foreignKey: "InvoiceId")]
        [DisplayName("Jobs List"), NotMapped]
        public List<InvoiceJobItemsRow> Jobs
        {
            get { return Fields.Jobs[this]; }
            set { Fields.Jobs[this] = value; }
        }
        [DisplayName("Details"), Size(4000), QuickSearch, NameProperty]
        public String Details
        {
            get => fields.Details[this];
            set => fields.Details[this] = value;
        }

        [DisplayName("Payment Account"), NotNull, PrimaryKey, ForeignKey("[dbo].[Accounts]", "Id"), LeftJoin("jParentHead"), TextualField("HeadCodeName")]
        [LookupInclude, LookupEditor(typeof(Lookups.AccountsCashLookup), AutoComplete = true)]
        public Int64? PaymentAccount
        {
            get => fields.PaymentAccount[this];
            set => fields.PaymentAccount[this] = value;
        }
        [Expression("(Convert(nvarchar(100),jParentHead.[HeadCode]) + ' ' + jParentHead.[HeadName])")]
        public string HeadCodeName
        {
            get { return Fields.HeadCodeName[this]; }
            set { Fields.HeadCodeName[this] = value; }
        }
        [DisplayName("V No")]
        public Int64? VNo
        {
            get => fields.VNo[this];
            set => fields.VNo[this] = value;
        }

        [DisplayName("Schedule Datetime"), NotNull]
        public DateTime? ScheduleDatetime
        {
            get => fields.ScheduleDatetime[this];
            set => fields.ScheduleDatetime[this] = value;
        }

        [DisplayName("Delivery Datetime"), NotNull]
        public DateTime? DeliveryDatetime
        {
            get => fields.DeliveryDatetime[this];
            set => fields.DeliveryDatetime[this] = value;
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
        public String CustomerName
        {
            get => fields.CustomerName[this];
            set => fields.CustomerName[this] = value;
        }

        [DisplayName("Customer Contact Name"), Expression("jCustomer.[ContactName]")]
        public String CustomerContactName
        {
            get => fields.CustomerContactName[this];
            set => fields.CustomerContactName[this] = value;
        }

        [DisplayName("Customer Contact Title"), Expression("jCustomer.[ContactTitle]")]
        public String CustomerContactTitle
        {
            get => fields.CustomerContactTitle[this];
            set => fields.CustomerContactTitle[this] = value;
        }

        [DisplayName("Customer Country Id"), Expression("jCustomer.[CountryId]")]
        public Int64? CustomerCountryId
        {
            get => fields.CustomerCountryId[this];
            set => fields.CustomerCountryId[this] = value;
        }

        [DisplayName("Customer State Id"), Expression("jCustomer.[StateId]")]
        public Int64? CustomerStateId
        {
            get => fields.CustomerStateId[this];
            set => fields.CustomerStateId[this] = value;
        }

        [DisplayName("Customer City Id"), Expression("jCustomer.[CityId]")]
        public Int64? CustomerCityId
        {
            get => fields.CustomerCityId[this];
            set => fields.CustomerCityId[this] = value;
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get => fields.CustomerAddress[this];
            set => fields.CustomerAddress[this] = value;
        }

        [DisplayName("Customer Region Id"), Expression("jCustomer.[RegionId]")]
        public Int64? CustomerRegionId
        {
            get => fields.CustomerRegionId[this];
            set => fields.CustomerRegionId[this] = value;
        }

        [DisplayName("Customer Postal Code"), Expression("jCustomer.[PostalCode]")]
        public String CustomerPostalCode
        {
            get => fields.CustomerPostalCode[this];
            set => fields.CustomerPostalCode[this] = value;
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public String CustomerPhone
        {
            get => fields.CustomerPhone[this];
            set => fields.CustomerPhone[this] = value;
        }

        [DisplayName("Customer Fax"), Expression("jCustomer.[Fax]")]
        public String CustomerFax
        {
            get => fields.CustomerFax[this];
            set => fields.CustomerFax[this] = value;
        }

        [DisplayName("Customer Website"), Expression("jCustomer.[Website]")]
        public String CustomerWebsite
        {
            get => fields.CustomerWebsite[this];
            set => fields.CustomerWebsite[this] = value;
        }


        [DisplayName("Customer Email Address"), Expression("jCustomer.[EmailAddress]")]
        public String CustomerEmailAddress
        {
            get => fields.CustomerEmailAddress[this];
            set => fields.CustomerEmailAddress[this] = value;
        }

        [DisplayName("Customer Previous Credit Balance"), Expression("jCustomer.[PreviousCreditBalance]")]
        public Double? CustomerPreviousCreditBalance
        {
            get => fields.CustomerPreviousCreditBalance[this];
            set => fields.CustomerPreviousCreditBalance[this] = value;
        }

        [DisplayName("Customer Insert Date"), Expression("jCustomer.[InsertDate]")]
        public DateTime? CustomerInsertDate
        {
            get => fields.CustomerInsertDate[this];
            set => fields.CustomerInsertDate[this] = value;
        }

        [DisplayName("Customer Insert User Id"), Expression("jCustomer.[InsertUserId]")]
        public Int32? CustomerInsertUserId
        {
            get => fields.CustomerInsertUserId[this];
            set => fields.CustomerInsertUserId[this] = value;
        }

        [DisplayName("Customer Update Date"), Expression("jCustomer.[UpdateDate]")]
        public DateTime? CustomerUpdateDate
        {
            get => fields.CustomerUpdateDate[this];
            set => fields.CustomerUpdateDate[this] = value;
        }

        [DisplayName("Customer Update User Id"), Expression("jCustomer.[UpdateUserId]")]
        public Int32? CustomerUpdateUserId
        {
            get => fields.CustomerUpdateUserId[this];
            set => fields.CustomerUpdateUserId[this] = value;
        }

        [DisplayName("Customer Delete Date"), Expression("jCustomer.[DeleteDate]")]
        public DateTime? CustomerDeleteDate
        {
            get => fields.CustomerDeleteDate[this];
            set => fields.CustomerDeleteDate[this] = value;
        }

        [DisplayName("Customer Delete User Id"), Expression("jCustomer.[DeleteUserId]")]
        public Int32? CustomerDeleteUserId
        {
            get => fields.CustomerDeleteUserId[this];
            set => fields.CustomerDeleteUserId[this] = value;
        }

        [DisplayName("Customer Is Active"), Expression("jCustomer.[IsActive]")]
        public Int32? CustomerIsActive
        {
            get => fields.CustomerIsActive[this];
            set => fields.CustomerIsActive[this] = value;
        }

        [DisplayName("Customer Customer Group Id"), Expression("jCustomer.[CustomerGroupId]")]
        public Int64? CustomerCustomerGroupId
        {
            get => fields.CustomerCustomerGroupId[this];
            set => fields.CustomerCustomerGroupId[this] = value;
        }

        [DisplayName("Jobcard Customer"), Expression("jJobcard.[Customer]")]
        public Int64? JobcardCustomer
        {
            get => fields.JobcardCustomer[this];
            set => fields.JobcardCustomer[this] = value;
        }

        [DisplayName("Jobcard Work Order No"), Expression("jJobcard.[WorkOrderNo]")]
        public String JobcardWorkOrderNo
        {
            get => fields.JobcardWorkOrderNo[this];
            set => fields.JobcardWorkOrderNo[this] = value;
        }

        [DisplayName("Jobcard Address"), Expression("jJobcard.[Address]")]
        public String JobcardAddress
        {
            get => fields.JobcardAddress[this];
            set => fields.JobcardAddress[this] = value;
        }

        [DisplayName("Jobcard Vehicle"), Expression("jJobcard.[Vehicle]")]
        public Int64? JobcardVehicle
        {
            get => fields.JobcardVehicle[this];
            set => fields.JobcardVehicle[this] = value;
        }

        [DisplayName("Jobcard Phone"), Expression("jJobcard.[Phone]")]
        public String JobcardPhone
        {
            get => fields.JobcardPhone[this];
            set => fields.JobcardPhone[this] = value;
        }

        [DisplayName("Jobcard Reference"), Expression("jJobcard.[Reference]")]
        public String JobcardReference
        {
            get => fields.JobcardReference[this];
            set => fields.JobcardReference[this] = value;
        }

        [DisplayName("Jobcard Mobile"), Expression("jJobcard.[Mobile]")]
        public String JobcardMobile
        {
            get => fields.JobcardMobile[this];
            set => fields.JobcardMobile[this] = value;
        }

        [DisplayName("Jobcard Schedule Datetime"), Expression("jJobcard.[ScheduleDatetime]")]
        public DateTime? JobcardScheduleDatetime
        {
            get => fields.JobcardScheduleDatetime[this];
            set => fields.JobcardScheduleDatetime[this] = value;
        }

        [DisplayName("Jobcard Website"), Expression("jJobcard.[Website]")]
        public String JobcardWebsite
        {
            get => fields.JobcardWebsite[this];
            set => fields.JobcardWebsite[this] = value;
        }

        [DisplayName("Jobcard Delivery Datetime"), Expression("jJobcard.[DeliveryDatetime]")]
        public DateTime? JobcardDeliveryDatetime
        {
            get => fields.JobcardDeliveryDatetime[this];
            set => fields.JobcardDeliveryDatetime[this] = value;
        }

        [DisplayName("Jobcard Details"), Expression("jJobcard.[Details]")]
        public String JobcardDetails
        {
            get => fields.JobcardDetails[this];
            set => fields.JobcardDetails[this] = value;
        }

        [DisplayName("Vehicle Customer Id"), Expression("jVehicle.[CustomerId]")]
        public Int64? VehicleCustomerId
        {
            get => fields.VehicleCustomerId[this];
            set => fields.VehicleCustomerId[this] = value;
        }

        [DisplayName("Vehicle Vehicle Registration"), Expression("jVehicle.[VehicleRegistration]")]
        public String VehicleVehicleRegistration
        {
            get => fields.VehicleVehicleRegistration[this];
            set => fields.VehicleVehicleRegistration[this] = value;
        }

        [DisplayName("Vehicle Year"), Expression("jVehicle.[Year]")]
        public Int32? VehicleYear
        {
            get => fields.VehicleYear[this];
            set => fields.VehicleYear[this] = value;
        }

        [DisplayName("Vehicle Seats"), Expression("jVehicle.[Seats]")]
        public Int32? VehicleSeats
        {
            get => fields.VehicleSeats[this];
            set => fields.VehicleSeats[this] = value;
        }

        [DisplayName("Vehicle Make"), Expression("jVehicle.[Make]")]
        public Int64? VehicleMake
        {
            get => fields.VehicleMake[this];
            set => fields.VehicleMake[this] = value;
        }

        [DisplayName("Vehicle Cc Rating"), Expression("jVehicle.[CCRating]")]
        public String VehicleCcRating
        {
            get => fields.VehicleCcRating[this];
            set => fields.VehicleCcRating[this] = value;
        }

        [DisplayName("Vehicle Model"), Expression("jVehicle.[Model]")]
        public Int64? VehicleModel
        {
            get => fields.VehicleModel[this];
            set => fields.VehicleModel[this] = value;
        }

        [DisplayName("Vehicle Fuel Type"), Expression("jVehicle.[FuelType]")]
        public Int64? VehicleFuelType
        {
            get => fields.VehicleFuelType[this];
            set => fields.VehicleFuelType[this] = value;
        }

        [DisplayName("Vehicle Color"), Expression("jVehicle.[Color]")]
        public Int64? VehicleColor
        {
            get => fields.VehicleColor[this];
            set => fields.VehicleColor[this] = value;
        }

        [DisplayName("Vehicle Assembly Type"), Expression("jVehicle.[AssemblyType]")]
        public Int64? VehicleAssemblyType
        {
            get => fields.VehicleAssemblyType[this];
            set => fields.VehicleAssemblyType[this] = value;
        }

        [DisplayName("Vehicle Second Color"), Expression("jVehicle.[SecondColor]")]
        public Int64? VehicleSecondColor
        {
            get => fields.VehicleSecondColor[this];
            set => fields.VehicleSecondColor[this] = value;
        }

        [DisplayName("Vehicle Country Of Origin"), Expression("jVehicle.[CountryOfOrigin]")]
        public Int64? VehicleCountryOfOrigin
        {
            get => fields.VehicleCountryOfOrigin[this];
            set => fields.VehicleCountryOfOrigin[this] = value;
        }

        [DisplayName("Vehicle Sub Model"), Expression("jVehicle.[SubModel]")]
        public String VehicleSubModel
        {
            get => fields.VehicleSubModel[this];
            set => fields.VehicleSubModel[this] = value;
        }

        [DisplayName("Vehicle Gross Vehicle Mass"), Expression("jVehicle.[GrossVehicleMass]")]
        public Int32? VehicleGrossVehicleMass
        {
            get => fields.VehicleGrossVehicleMass[this];
            set => fields.VehicleGrossVehicleMass[this] = value;
        }

        [DisplayName("Vehicle Body Style"), Expression("jVehicle.[BodyStyle]")]
        public String VehicleBodyStyle
        {
            get => fields.VehicleBodyStyle[this];
            set => fields.VehicleBodyStyle[this] = value;
        }

        [DisplayName("Vehicle Tare Weight"), Expression("jVehicle.[TareWeight]")]
        public String VehicleTareWeight
        {
            get => fields.VehicleTareWeight[this];
            set => fields.VehicleTareWeight[this] = value;
        }
               

        [DisplayName("Vehicle Axles"), Expression("jVehicle.[Axles]")]
        public String VehicleAxles
        {
            get => fields.VehicleAxles[this];
            set => fields.VehicleAxles[this] = value;
        }

        [DisplayName("Vehicle Wheelbase"), Expression("jVehicle.[Wheelbase]")]
        public String VehicleWheelbase
        {
            get => fields.VehicleWheelbase[this];
            set => fields.VehicleWheelbase[this] = value;
        }

        [DisplayName("Vehicle Engine No"), Expression("jVehicle.[EngineNo]")]
        public String VehicleEngineNo
        {
            get => fields.VehicleEngineNo[this];
            set => fields.VehicleEngineNo[this] = value;
        }

        [DisplayName("Vehicle Front Axle Group Rating"), Expression("jVehicle.[FrontAxleGroupRating]")]
        public String VehicleFrontAxleGroupRating
        {
            get => fields.VehicleFrontAxleGroupRating[this];
            set => fields.VehicleFrontAxleGroupRating[this] = value;
        }

        [DisplayName("Vehicle Vehicle Type"), Expression("jVehicle.[VehicleType]")]
        public Int64? VehicleVehicleType
        {
            get => fields.VehicleVehicleType[this];
            set => fields.VehicleVehicleType[this] = value;
        }

        [DisplayName("Vehicle Rear Axle Group Rating"), Expression("jVehicle.[RearAxleGroupRating]")]
        public String VehicleRearAxleGroupRating
        {
            get => fields.VehicleRearAxleGroupRating[this];
            set => fields.VehicleRearAxleGroupRating[this] = value;
        }

        [DisplayName("Vehicle Brand"), Expression("jVehicle.[Brand]")]
        public Int64? VehicleBrand
        {
            get => fields.VehicleBrand[this];
            set => fields.VehicleBrand[this] = value;
        }

        public InvoicesRow()
            : base()
        {
        }

        public InvoicesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field CustomerId;
           
            public StringField InsuranceCoName;
            public StringField InsuranceCoAdd;
            public StringField InsuranceCoCit;
            public StringField GstIN;
            public Int64Field Jobcard;
            public Int64Field Vehicle;
            public DateTimeField Date;
            public DoubleField Discount;
            public DoubleField TotalDiscount;
            //public DoubleField Vat;
            public DoubleField Gst;
            public DoubleField CGST;
            public DoubleField SGST;
            public DoubleField TotalTax;
            public DoubleField ShippingCost;
            public DoubleField GrandTotal;
            public DoubleField NetTotal;
            public DoubleField PaidAmount;
            public DoubleField Due;
            public DoubleField Change;
            public StringField Details;
            public readonly RowListField<InvoiceItemsRow> LineItems;
            public readonly RowListField<InvoiceJobItemsRow> Jobs;
            public StringField HeadCodeName;

            public Int64Field PaymentAccount;
            public Int64Field VNo;
            public DateTimeField ScheduleDatetime;
            public DateTimeField DeliveryDatetime;

            public StringField CustomerName;
            public StringField CustomerContactName;
            public StringField CustomerContactTitle;
            public Int64Field CustomerCountryId;
            public Int64Field CustomerStateId;
            public Int64Field CustomerCityId;
            public StringField CustomerAddress;
            public Int64Field CustomerRegionId;
            public StringField CustomerPostalCode;
            public StringField CustomerPhone;
            public StringField CustomerFax;
            public StringField CustomerWebsite;
            public StringField CustomerEmailAddress;
            public DoubleField CustomerPreviousCreditBalance;
            public DateTimeField CustomerInsertDate;
            public Int32Field CustomerInsertUserId;
            public DateTimeField CustomerUpdateDate;
            public Int32Field CustomerUpdateUserId;
            public DateTimeField CustomerDeleteDate;
            public Int32Field CustomerDeleteUserId;
            public Int32Field CustomerIsActive;
            public Int64Field CustomerCustomerGroupId;

            public Int64Field JobcardCustomer;
            public StringField JobcardWorkOrderNo;
            public StringField JobcardAddress;
            public StringField ServiceType;
            public Int64Field JobcardVehicle;
            public StringField JobcardPhone;
            public StringField JobcardReference;
            public StringField JobcardMobile;
            public DateTimeField JobcardScheduleDatetime;
            public StringField JobcardWebsite;
            public DateTimeField JobcardDeliveryDatetime;
            public StringField JobcardDetails;

            public Int64Field VehicleCustomerId;
            public StringField VehicleVehicleRegistration;
            public Int32Field VehicleYear;
            public Int32Field VehicleSeats;
            public Int64Field VehicleMake;
            public StringField VehicleCcRating;
            public Int64Field VehicleModel;
            public Int64Field VehicleFuelType;
            public Int64Field VehicleColor;
            public Int64Field VehicleAssemblyType;
            public Int64Field VehicleSecondColor;
            public Int64Field VehicleCountryOfOrigin;
            public StringField VehicleSubModel;
            public Int32Field VehicleGrossVehicleMass;
            public StringField VehicleBodyStyle;
            public StringField VehicleTareWeight;            
            public StringField VehicleAxles;
            public StringField VehicleWheelbase;
            public StringField VehicleEngineNo;
            public StringField VehicleFrontAxleGroupRating;
            public Int64Field VehicleVehicleType;
            public StringField VehicleRearAxleGroupRating;
            public Int64Field VehicleBrand;
        }
    }
}
