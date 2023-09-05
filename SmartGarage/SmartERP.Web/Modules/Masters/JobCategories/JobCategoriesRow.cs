using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Masters.Entities
{
    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[JobCategories]")]
    [DisplayName("Job Categories"), InstanceName("Job Categories")]
   
    [ReadPermission(PermissionKeys.JobCategories.View)]
    [InsertPermission(PermissionKeys.JobCategories.Create)]
    [UpdatePermission(PermissionKeys.JobCategories.Update)]
    [DeletePermission(PermissionKeys.JobCategories.Delete)]


    [LookupScript("Masters.JobCategories", Permission = PermissionKeys.JobCategories.View)]
    public sealed class JobCategoriesRow : Row<JobCategoriesRow.RowFields>, IIdRow, INameRow
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

        public JobCategoriesRow()
            : base()
        {
        }

        public JobCategoriesRow(RowFields fields)
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
