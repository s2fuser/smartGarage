using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Masters.Entities
{
    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[VehicleModels]")]
    [DisplayName("Vehicle Models"), InstanceName("Vehicle Models")]
    [ReadPermission(PermissionKeys.VehicleModels.View)]
    [InsertPermission(PermissionKeys.VehicleModels.Create)]
    [UpdatePermission(PermissionKeys.VehicleModels.Update)]
    [DeletePermission(PermissionKeys.VehicleModels.Delete)]


    [LookupScript("Masters.VehicleModels", Permission = PermissionKeys.VehicleModels.View)]
    public sealed class VehicleModelsRow : Row<VehicleModelsRow.RowFields>, IIdRow, INameRow
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

        public VehicleModelsRow()
            : base()
        {
        }

        public VehicleModelsRow(RowFields fields)
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
