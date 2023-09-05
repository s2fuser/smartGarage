using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SmartERP.HumanResource.Entities;
using SmartERP.Masters.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.JobCards.Entities
{
    [ConnectionKey("Default"), Module("JobCards"), TableName("[dbo].[JobCardDetails]")]
    [DisplayName("Job Card Details"), InstanceName("Job Card Details")]
    [ReadPermission(PermissionKeys.JobCards.View)]
    [InsertPermission(PermissionKeys.JobCards.Create)]
    [UpdatePermission(PermissionKeys.JobCards.Update)]
    [DeletePermission(PermissionKeys.JobCards.Delete)]

    public sealed class JobCardDetailsRow : Row<JobCardDetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Job Type"), NotNull, ForeignKey("[dbo].[JobTypes]", "Id"), LeftJoin("jJobType"), TextualField("JobTypeName")]
        [LookupEditor(typeof(JobTypesRow), InplaceAdd = true)]
        public Int64? JobType
        {
            get => fields.JobType[this];
            set => fields.JobType[this] = value;
        }

        [DisplayName("Job Order"), NotNull, ForeignKey("[dbo].[JobCards]", "Id"), LeftJoin("jJobOrder"), TextualField("JobOrderWorkOrderNo"),Updatable(false)]
        
        public Int64? JobOrder
        {
            get => fields.JobOrder[this];
            set => fields.JobOrder[this] = value;
        }

        [DisplayName("Mechanic"), NotNull,PrimaryKey, ForeignKey("[dbo].[Employees]", "Id"), LeftJoin("jMechanic"), TextualField("MechanicFullName")]
        [LookupEditor(typeof(EmployeesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = "1")]
        public Int64? Mechanic
        {
            get => fields.Mechanic[this];
            set => fields.Mechanic[this] = value;
        }

        [DisplayName("Mechanic"), Expression("jMechanic.[FirstName] +' '+ jMechanic.[LastName]"), MinSelectLevel(SelectLevel.List)]
        public String MechanicFullName
        {
            get { return Fields.MechanicFullName[this]; }
            set { Fields.MechanicFullName[this] = value; }
        }
        [DisplayName("Customer Notes"), Size(4000), QuickSearch, NameProperty]
        public String CustomerNotes
        {
            get => fields.CustomerNotes[this];
            set => fields.CustomerNotes[this] = value;
        }

        [DisplayName("Job Type Name"), Expression("jJobType.[Name]")]
        public String JobTypeName
        {
            get => fields.JobTypeName[this];
            set => fields.JobTypeName[this] = value;
        }

        [DisplayName("Job Order Customer"), Expression("jJobOrder.[Customer]")]
        public Int64? JobOrderCustomer
        {
            get => fields.JobOrderCustomer[this];
            set => fields.JobOrderCustomer[this] = value;
        }

        [DisplayName("Job Order Work Order No"), Expression("jJobOrder.[WorkOrderNo]")]
        public String JobOrderWorkOrderNo
        {
            get => fields.JobOrderWorkOrderNo[this];
            set => fields.JobOrderWorkOrderNo[this] = value;
        }

        [DisplayName("Job Order Address"), Expression("jJobOrder.[Address]")]
        public String JobOrderAddress
        {
            get => fields.JobOrderAddress[this];
            set => fields.JobOrderAddress[this] = value;
        }

        [DisplayName("Job Order Vehicle"), Expression("jJobOrder.[Vehicle]")]
        public Int64? JobOrderVehicle
        {
            get => fields.JobOrderVehicle[this];
            set => fields.JobOrderVehicle[this] = value;
        }

        [DisplayName("Job Order Phone"), Expression("jJobOrder.[Phone]")]
        public String JobOrderPhone
        {
            get => fields.JobOrderPhone[this];
            set => fields.JobOrderPhone[this] = value;
        }

        [DisplayName("Job Order Reference"), Expression("jJobOrder.[Reference]")]
        public String JobOrderReference
        {
            get => fields.JobOrderReference[this];
            set => fields.JobOrderReference[this] = value;
        }

        [DisplayName("Job Order Mobile"), Expression("jJobOrder.[Mobile]")]
        public String JobOrderMobile
        {
            get => fields.JobOrderMobile[this];
            set => fields.JobOrderMobile[this] = value;
        }

        [DisplayName("Job Order Schedule Datetime"), Expression("jJobOrder.[ScheduleDatetime]")]
        public DateTime? JobOrderScheduleDatetime
        {
            get => fields.JobOrderScheduleDatetime[this];
            set => fields.JobOrderScheduleDatetime[this] = value;
        }

        [DisplayName("Job Order Website"), Expression("jJobOrder.[Website]")]
        public String JobOrderWebsite
        {
            get => fields.JobOrderWebsite[this];
            set => fields.JobOrderWebsite[this] = value;
        }

        [DisplayName("Job Order Delivery Datetime"), Expression("jJobOrder.[DeliveryDatetime]")]
        public DateTime? JobOrderDeliveryDatetime
        {
            get => fields.JobOrderDeliveryDatetime[this];
            set => fields.JobOrderDeliveryDatetime[this] = value;
        }

        [DisplayName("Job Order Details"), Expression("jJobOrder.[Details]")]
        public String JobOrderDetails
        {
            get => fields.JobOrderDetails[this];
            set => fields.JobOrderDetails[this] = value;
        }

        public JobCardDetailsRow()
            : base()
        {
        }

        public JobCardDetailsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field JobType;
            public Int64Field JobOrder;
            public Int64Field Mechanic;
            public StringField MechanicFullName;
            public StringField CustomerNotes;

            public StringField JobTypeName;

            public Int64Field JobOrderCustomer;
            public StringField JobOrderWorkOrderNo;
            public StringField JobOrderAddress;
            public Int64Field JobOrderVehicle;
            public StringField JobOrderPhone;
            public StringField JobOrderReference;
            public StringField JobOrderMobile;
            public DateTimeField JobOrderScheduleDatetime;
            public StringField JobOrderWebsite;
            public DateTimeField JobOrderDeliveryDatetime;
            public StringField JobOrderDetails;
        }
    }
}
