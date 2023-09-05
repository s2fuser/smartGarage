using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Masters.Entities
{
    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[VehicleMakes]")]
    [DisplayName("Vehicle Makes"), InstanceName("Vehicle Makes")]
   
    [ReadPermission(PermissionKeys.VehicleMakes.View)]
    [InsertPermission(PermissionKeys.VehicleMakes.Create)]
    [UpdatePermission(PermissionKeys.VehicleMakes.Update)]
    [DeletePermission(PermissionKeys.VehicleMakes.Delete)]


    [LookupScript("Masters.VehicleMakes", Permission = PermissionKeys.VehicleMakes.View)]
    public sealed class VehicleMakesRow : Row<VehicleMakesRow.RowFields>, IIdRow, INameRow
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

        public VehicleMakesRow()
            : base()
        {
        }

        public VehicleMakesRow(RowFields fields)
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
