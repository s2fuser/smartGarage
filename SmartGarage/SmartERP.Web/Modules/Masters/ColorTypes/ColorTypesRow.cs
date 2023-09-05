using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Masters.Entities
{
    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[ColorTypes]")]
    [DisplayName("Color Types"), InstanceName("Color Types")]
  

    [ReadPermission(PermissionKeys.ColorTypes.View)]
    [InsertPermission(PermissionKeys.ColorTypes.Create)]
    [UpdatePermission(PermissionKeys.ColorTypes.Update)]
    [DeletePermission(PermissionKeys.ColorTypes.Delete)]


    [LookupScript("Masters.ColorTypes", Permission = PermissionKeys.ColorTypes.View)]
    public sealed class ColorTypesRow : Row<ColorTypesRow.RowFields>, IIdRow, INameRow
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

        public ColorTypesRow()
            : base()
        {
        }

        public ColorTypesRow(RowFields fields)
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
