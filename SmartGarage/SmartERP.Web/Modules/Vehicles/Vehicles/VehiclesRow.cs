using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SmartERP.Administration.Entities;
using SmartERP.Customers.Entities;
using SmartERP.Masters.Entities;
using SmartERP.Products.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Vehicles.Entities
{
    [ConnectionKey("Default"), Module("Vehicles"), TableName("[dbo].[Vehicles]")]
    [DisplayName("Vehicles"), InstanceName("Vehicles")]

    [ReadPermission(PermissionKeys.Vehicles.View)]
    [InsertPermission(PermissionKeys.Vehicles.Create)]
    [UpdatePermission(PermissionKeys.Vehicles.Update)]
    [DeletePermission(PermissionKeys.Vehicles.Delete)]

    [LookupScript("Vehicles.Vehicles", Permission = PermissionKeys.Vehicles.View)]
    public sealed class VehiclesRow : Row<VehiclesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Customer"), NotNull,PrimaryKey, ForeignKey("[dbo].[Customers]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName"),LookupInclude]
        [LookupEditor(typeof(CustomersRow),InplaceAdd =true)]
        public Int64? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
        }

        [DisplayName("Vehicle Registration"), Size(250), NotNull, QuickSearch, NameProperty]
        public String VehicleRegistration
        {
            get => fields.VehicleRegistration[this];
            set => fields.VehicleRegistration[this] = value;
        }

 [DisplayName("Chassis No"),NotNull]
        public String ChassisNo
        {
            get => fields.ChassisNo[this];
            set => fields.ChassisNo[this] = value;
        }

        [DisplayName("Year")]
        public Int32? Year
        {
            get => fields.Year[this];
            set => fields.Year[this] = value;
        }
        [DisplayName("Mileage"),NotNull]
        public Int32? Mileage
        {
            get => fields.Mileage[this];
            set => fields.Mileage[this] = value;
        }
            
        [DisplayName("Seats")]
        public Int32? Seats
        {
            get => fields.Seats[this];
            set => fields.Seats[this] = value;
        }

        [DisplayName("Make"),PrimaryKey, ForeignKey("[dbo].[VehicleMakes]", "Id"), LeftJoin("jMake"), TextualField("MakeName")]
        [LookupEditor(typeof(VehicleMakesRow), InplaceAdd = true)]
        public Int64? Make
        {
            get => fields.Make[this];
            set => fields.Make[this] = value;
        }

        [DisplayName("Cc Rating"), Column("CCRating"), Size(250)]
        public String CcRating
        {
            get => fields.CcRating[this];
            set => fields.CcRating[this] = value;
        }

        [DisplayName("Model"),PrimaryKey, ForeignKey("[dbo].[VehicleModels]", "Id"), LeftJoin("jModel"), TextualField("ModelName")]
        [LookupEditor(typeof(VehicleModelsRow), InplaceAdd = true)]
        public Int64? Model
        {
            get => fields.Model[this];
            set => fields.Model[this] = value;
        }

        [DisplayName("Fuel Type"),PrimaryKey, ForeignKey("[dbo].[FuelTypes]", "Id"), LeftJoin("jFuelType"), TextualField("FuelTypeName")]
        [LookupEditor(typeof(FuelTypesRow), InplaceAdd = true)]
        public Int64? FuelType
        {
            get => fields.FuelType[this];
            set => fields.FuelType[this] = value;
        }

        [DisplayName("Color"),PrimaryKey, ForeignKey("[dbo].[ColorTypes]", "Id"), LeftJoin("jColor"), TextualField("ColorName")]
        [LookupEditor(typeof(ColorTypesRow), InplaceAdd = true)]
        public Int64? Color
        {
            get => fields.Color[this];
            set => fields.Color[this] = value;
        }

        [DisplayName("Assembly Type"),PrimaryKey, ForeignKey("[dbo].[AssemblyTypes]", "Id"), LeftJoin("jAssemblyType"), TextualField("AssemblyTypeName")]
        [LookupEditor(typeof(AssemblyTypesRow), InplaceAdd = true)]
        public Int64? AssemblyType
        {
            get => fields.AssemblyType[this];
            set => fields.AssemblyType[this] = value;
        }

        [DisplayName("Second Color"),PrimaryKey, ForeignKey("[dbo].[ColorTypes]", "Id"), LeftJoin("jSecondColor"), TextualField("SecondColorName")]
        [LookupEditor(typeof(ColorTypesRow), InplaceAdd = true)]
        public Int64? SecondColor
        {
            get => fields.SecondColor[this];
            set => fields.SecondColor[this] = value;
        }

        [DisplayName("Country Of Origin"),PrimaryKey, ForeignKey("[dbo].[Countries]", "Id"), LeftJoin("jCountryOfOrigin"), TextualField("CountryOfOriginName")]
        [LookupEditor(typeof(CountriesRow), InplaceAdd = true)]
        public Int64? CountryOfOrigin
        {
            get => fields.CountryOfOrigin[this];
            set => fields.CountryOfOrigin[this] = value;
        }

        [DisplayName("Sub Model"), Size(250)]
        public String SubModel
        {
            get => fields.SubModel[this];
            set => fields.SubModel[this] = value;
        }

        [DisplayName("Gross Vehicle Mass")]
        public Int32? GrossVehicleMass
        {
            get => fields.GrossVehicleMass[this];
            set => fields.GrossVehicleMass[this] = value;
        }

        [DisplayName("Body Style"), Size(250)]
        public String BodyStyle
        {
            get => fields.BodyStyle[this];
            set => fields.BodyStyle[this] = value;
        }

        [DisplayName("Tare Weight"), Size(250)]
        public String TareWeight
        {
            get => fields.TareWeight[this];
            set => fields.TareWeight[this] = value;
        }

        //[DisplayName("Vin"), Column("VIN"), NotNull]
        //public Int32? Vin
        //{
        //    get => fields.Vin[this];
        //    set => fields.Vin[this] = value;
        //}

        [DisplayName("Axles"), Size(250)]
        public String Axles
        {
            get => fields.Axles[this];
            set => fields.Axles[this] = value;
        }

        [DisplayName("Wheelbase"), Size(250)]
        public String Wheelbase
        {
            get => fields.Wheelbase[this];
            set => fields.Wheelbase[this] = value;
        }

        [DisplayName("Engine No"), Size(250), NotNull]
        public String EngineNo
        {
            get => fields.EngineNo[this];
            set => fields.EngineNo[this] = value;
        }

        [DisplayName("Front Axle Group Rating"), Size(250)]
        public String FrontAxleGroupRating
        {
            get => fields.FrontAxleGroupRating[this];
            set => fields.FrontAxleGroupRating[this] = value;
        }

        [DisplayName("Vehicle Type"),PrimaryKey, ForeignKey("[dbo].[VehicleTypes]", "Id"), LeftJoin("jVehicleType"), TextualField("VehicleTypeName")]
        [LookupEditor(typeof(VehicleTypesRow), InplaceAdd = true)]
        public Int64? VehicleType
        {
            get => fields.VehicleType[this];
            set => fields.VehicleType[this] = value;
        }

        [DisplayName("Rear Axle Group Rating"), Size(250)]
        public String RearAxleGroupRating
        {
            get => fields.RearAxleGroupRating[this];
            set => fields.RearAxleGroupRating[this] = value;
        }

        [DisplayName("Brand"), NotNull,PrimaryKey, ForeignKey("[dbo].[Brands]", "Id"), LeftJoin("jBrand"), TextualField("BrandName")]
        [LookupEditor(typeof(BrandsRow), InplaceAdd = true)]
        public Int64? Brand
        {
            get => fields.Brand[this];
            set => fields.Brand[this] = value;
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

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public String CustomerEmail
        {
            get => fields.CustomerEmail[this];
            set => fields.CustomerEmail[this] = value;
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

        [DisplayName("Make Name"), Expression("jMake.[Name]")]
        public String MakeName
        {
            get => fields.MakeName[this];
            set => fields.MakeName[this] = value;
        }

        [DisplayName("Model Name"), Expression("jModel.[Name]")]
        public String ModelName
        {
            get => fields.ModelName[this];
            set => fields.ModelName[this] = value;
        }

        [DisplayName("Fuel Type Name"), Expression("jFuelType.[Name]")]
        public String FuelTypeName
        {
            get => fields.FuelTypeName[this];
            set => fields.FuelTypeName[this] = value;
        }

        [DisplayName("Color Name"), Expression("jColor.[Name]")]
        public String ColorName
        {
            get => fields.ColorName[this];
            set => fields.ColorName[this] = value;
        }

        [DisplayName("Assembly Type Name"), Expression("jAssemblyType.[Name]")]
        public String AssemblyTypeName
        {
            get => fields.AssemblyTypeName[this];
            set => fields.AssemblyTypeName[this] = value;
        }

        [DisplayName("Second Color Name"), Expression("jSecondColor.[Name]")]
        public String SecondColorName
        {
            get => fields.SecondColorName[this];
            set => fields.SecondColorName[this] = value;
        }

        [DisplayName("Country Of Origin Name"), Expression("jCountryOfOrigin.[Name]")]
        public String CountryOfOriginName
        {
            get => fields.CountryOfOriginName[this];
            set => fields.CountryOfOriginName[this] = value;
        }

        [DisplayName("Country Of Origin Insert Date"), Expression("jCountryOfOrigin.[InsertDate]")]
        public DateTime? CountryOfOriginInsertDate
        {
            get => fields.CountryOfOriginInsertDate[this];
            set => fields.CountryOfOriginInsertDate[this] = value;
        }

        [DisplayName("Country Of Origin Insert User Id"), Expression("jCountryOfOrigin.[InsertUserId]")]
        public Int32? CountryOfOriginInsertUserId
        {
            get => fields.CountryOfOriginInsertUserId[this];
            set => fields.CountryOfOriginInsertUserId[this] = value;
        }

        [DisplayName("Country Of Origin Update Date"), Expression("jCountryOfOrigin.[UpdateDate]")]
        public DateTime? CountryOfOriginUpdateDate
        {
            get => fields.CountryOfOriginUpdateDate[this];
            set => fields.CountryOfOriginUpdateDate[this] = value;
        }

        [DisplayName("Country Of Origin Update User Id"), Expression("jCountryOfOrigin.[UpdateUserId]")]
        public Int32? CountryOfOriginUpdateUserId
        {
            get => fields.CountryOfOriginUpdateUserId[this];
            set => fields.CountryOfOriginUpdateUserId[this] = value;
        }

        [DisplayName("Country Of Origin Delete Date"), Expression("jCountryOfOrigin.[DeleteDate]")]
        public DateTime? CountryOfOriginDeleteDate
        {
            get => fields.CountryOfOriginDeleteDate[this];
            set => fields.CountryOfOriginDeleteDate[this] = value;
        }

        [DisplayName("Country Of Origin Delete User Id"), Expression("jCountryOfOrigin.[DeleteUserId]")]
        public Int32? CountryOfOriginDeleteUserId
        {
            get => fields.CountryOfOriginDeleteUserId[this];
            set => fields.CountryOfOriginDeleteUserId[this] = value;
        }

        [DisplayName("Country Of Origin Is Active"), Expression("jCountryOfOrigin.[IsActive]")]
        public Int32? CountryOfOriginIsActive
        {
            get => fields.CountryOfOriginIsActive[this];
            set => fields.CountryOfOriginIsActive[this] = value;
        }

        [DisplayName("Vehicle Type Name"), Expression("jVehicleType.[Name]")]
        public String VehicleTypeName
        {
            get => fields.VehicleTypeName[this];
            set => fields.VehicleTypeName[this] = value;
        }

        [DisplayName("Brand Name"), Expression("jBrand.[Name]")]
        public String BrandName
        {
            get => fields.BrandName[this];
            set => fields.BrandName[this] = value;
        }

        [DisplayName("Brand Description"), Expression("jBrand.[Description]")]
        public String BrandDescription
        {
            get => fields.BrandDescription[this];
            set => fields.BrandDescription[this] = value;
        }

        [DisplayName("Brand Insert Date"), Expression("jBrand.[InsertDate]")]
        public DateTime? BrandInsertDate
        {
            get => fields.BrandInsertDate[this];
            set => fields.BrandInsertDate[this] = value;
        }

        [DisplayName("Brand Insert User Id"), Expression("jBrand.[InsertUserId]")]
        public Int32? BrandInsertUserId
        {
            get => fields.BrandInsertUserId[this];
            set => fields.BrandInsertUserId[this] = value;
        }

        [DisplayName("Brand Update Date"), Expression("jBrand.[UpdateDate]")]
        public DateTime? BrandUpdateDate
        {
            get => fields.BrandUpdateDate[this];
            set => fields.BrandUpdateDate[this] = value;
        }

        [DisplayName("Brand Update User Id"), Expression("jBrand.[UpdateUserId]")]
        public Int32? BrandUpdateUserId
        {
            get => fields.BrandUpdateUserId[this];
            set => fields.BrandUpdateUserId[this] = value;
        }

        [DisplayName("Brand Delete Date"), Expression("jBrand.[DeleteDate]")]
        public DateTime? BrandDeleteDate
        {
            get => fields.BrandDeleteDate[this];
            set => fields.BrandDeleteDate[this] = value;
        }

        [DisplayName("Brand Delete User Id"), Expression("jBrand.[DeleteUserId]")]
        public Int32? BrandDeleteUserId
        {
            get => fields.BrandDeleteUserId[this];
            set => fields.BrandDeleteUserId[this] = value;
        }

        [DisplayName("Brand Is Active"), Expression("jBrand.[IsActive]")]
        public Int32? BrandIsActive
        {
            get => fields.BrandIsActive[this];
            set => fields.BrandIsActive[this] = value;
        }

        public VehiclesRow()
            : base()
        {
        }

        public VehiclesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field CustomerId;
            public StringField VehicleRegistration;
            public StringField ChassisNo;
            public Int32Field Year;
            public Int32Field Mileage;
            public Int32Field Seats;
            public Int64Field Make;
            public StringField CcRating;
            public Int64Field Model;
            public Int64Field FuelType;
            public Int64Field Color;
            public Int64Field AssemblyType;
            public Int64Field SecondColor;
            public Int64Field CountryOfOrigin;
            public StringField SubModel;
            public Int32Field GrossVehicleMass;
            public StringField BodyStyle;
            public StringField TareWeight;
            //public Int32Field Vin;
            public StringField Axles;
            public StringField Wheelbase;
            public StringField EngineNo;
            public StringField FrontAxleGroupRating;
            public Int64Field VehicleType;
            public StringField RearAxleGroupRating;
            public Int64Field Brand;

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
            public StringField CustomerEmail;
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

            public StringField MakeName;

            public StringField ModelName;

            public StringField FuelTypeName;

            public StringField ColorName;

            public StringField AssemblyTypeName;

            public StringField SecondColorName;

            public StringField CountryOfOriginName;
            public DateTimeField CountryOfOriginInsertDate;
            public Int32Field CountryOfOriginInsertUserId;
            public DateTimeField CountryOfOriginUpdateDate;
            public Int32Field CountryOfOriginUpdateUserId;
            public DateTimeField CountryOfOriginDeleteDate;
            public Int32Field CountryOfOriginDeleteUserId;
            public Int32Field CountryOfOriginIsActive;

            public StringField VehicleTypeName;

            public StringField BrandName;
            public StringField BrandDescription;
            public DateTimeField BrandInsertDate;
            public Int32Field BrandInsertUserId;
            public DateTimeField BrandUpdateDate;
            public Int32Field BrandUpdateUserId;
            public DateTimeField BrandDeleteDate;
            public Int32Field BrandDeleteUserId;
            public Int32Field BrandIsActive;
        }
    }
}
