using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Masters.Entities
{
    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[AssemblyTypes]")]
    [DisplayName("Assembly Types"), InstanceName("Assembly Types")]
   
    [ReadPermission(PermissionKeys.AssemblyTypes.View)]
    [InsertPermission(PermissionKeys.AssemblyTypes.Create)]
    [UpdatePermission(PermissionKeys.AssemblyTypes.Update)]
    [DeletePermission(PermissionKeys.AssemblyTypes.Delete)]


    [LookupScript("Masters.AssemblyTypes", Permission = PermissionKeys.AssemblyTypes.View)]
    public sealed class AssemblyTypesRow : Row<AssemblyTypesRow.RowFields>, IIdRow, INameRow
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

        public AssemblyTypesRow()
            : base()
        {
        }

        public AssemblyTypesRow(RowFields fields)
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
