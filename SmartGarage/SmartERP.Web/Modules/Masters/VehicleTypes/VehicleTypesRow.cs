using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Masters.Entities
{
    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[VehicleTypes]")]
    [DisplayName("Vehicle Types"), InstanceName("Vehicle Types")]
   
    [ReadPermission(PermissionKeys.VehicleTypes.View)]
    [InsertPermission(PermissionKeys.VehicleTypes.Create)]
    [UpdatePermission(PermissionKeys.VehicleTypes.Update)]
    [DeletePermission(PermissionKeys.VehicleTypes.Delete)]


    [LookupScript("Masters.VehicleTypes", Permission = PermissionKeys.VehicleTypes.View)]
    public sealed class VehicleTypesRow : Row<VehicleTypesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(250), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        public VehicleTypesRow()
            : base()
        {
        }

        public VehicleTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField Name;
        }
    }
}
