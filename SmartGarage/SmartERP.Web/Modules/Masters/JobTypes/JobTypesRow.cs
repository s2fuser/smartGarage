using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Masters.Entities
{
    [ConnectionKey("Default"), Module("Masters"), TableName("[dbo].[JobTypes]")]
    [DisplayName("Job Types"), InstanceName("Job Types")]
    [ReadPermission(PermissionKeys.JobTypes.View)]
    [InsertPermission(PermissionKeys.JobTypes.Create)]
    [UpdatePermission(PermissionKeys.JobTypes.Update)]
    [DeletePermission(PermissionKeys.JobTypes.Delete)]


    [LookupScript("Masters.JobTypes", Permission = PermissionKeys.JobTypes.View)]
    public sealed class JobTypesRow : Row<JobTypesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Job Category"), ForeignKey("[dbo].[JobCategories]", "Id"), LeftJoin("jJobCategory"), TextualField("JobCategoryName")]
        [LookupEditor(typeof(JobCategoriesRow), InplaceAdd = true),LookupInclude, NotNull]
        public Int64? JobCategory
        {
            get => fields.JobCategory[this];
            set => fields.JobCategory[this] = value;
        }

        [DisplayName("Name"), Size(250), NotNull, QuickSearch, NameProperty, LookupInclude]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Rate"), NotNull, LookupInclude]
        public Double? Rate
        {
            get => fields.Rate[this];
            set => fields.Rate[this] = value;
        }
        [DisplayName("Gst"), NotNull, LookupInclude]
        public Double? Gst
        {
            get => fields.Gst[this];
            set => fields.Gst[this] = value;
        }

        [DisplayName("Standard Timing"), LookupInclude]
        public TimeSpan? StandardTiming
        {
            get => fields.StandardTiming[this];
            set => fields.StandardTiming[this] = value;
        }

        [DisplayName("Is Inspection List"),Hidden,DefaultValue(false), LookupInclude]
        public Boolean? IsInspectionList
        {
            get => fields.IsInspectionList[this];
            set => fields.IsInspectionList[this] = value;
        }

        [DisplayName("Job Category Name"), Expression("jJobCategory.[Name]")]
        public String JobCategoryName
        {
            get => fields.JobCategoryName[this];
            set => fields.JobCategoryName[this] = value;
        }

        public JobTypesRow()
            : base()
        {
        }

        public JobTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field JobCategory;
            public StringField Name;
            public DoubleField Rate;
            public DoubleField Gst;
            public TimeSpanField StandardTiming;
            public BooleanField IsInspectionList;

            public StringField JobCategoryName;
        }
    }
}
