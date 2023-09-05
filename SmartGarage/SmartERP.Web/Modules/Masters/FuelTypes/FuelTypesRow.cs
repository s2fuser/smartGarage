using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Masters.Entities
{
    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[FuelTypes]")]
    [DisplayName("Fuel Types"), InstanceName("Fuel Types")]
   
    [ReadPermission(PermissionKeys.FuelTypes.View)]
    [InsertPermission(PermissionKeys.FuelTypes.Create)]
    [UpdatePermission(PermissionKeys.FuelTypes.Update)]
    [DeletePermission(PermissionKeys.FuelTypes.Delete)]


    [LookupScript("Masters.FuelTypes", Permission = PermissionKeys.FuelTypes.View)]
    public sealed class FuelTypesRow : Row<FuelTypesRow.RowFields>, IIdRow, INameRow
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

        public FuelTypesRow()
            : base()
        {
        }

        public FuelTypesRow(RowFields fields)
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
