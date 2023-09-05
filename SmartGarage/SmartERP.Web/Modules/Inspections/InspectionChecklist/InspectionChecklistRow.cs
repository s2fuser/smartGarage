using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using SmartERP.Masters.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Inspections.Entities
{
    [ConnectionKey("Default"), Module("Inspections"), TableName("[dbo].[InspectionChecklist]")]
    [DisplayName("Inspection Checklist"), InstanceName("Inspection Checklist")]
    [ReadPermission(PermissionKeys.Inspections.View)]
    [InsertPermission(PermissionKeys.Inspections.Create)]
    [UpdatePermission(PermissionKeys.Inspections.Update)]
    [DeletePermission(PermissionKeys.Inspections.Delete)]
    public sealed class InspectionChecklistRow : Row<InspectionChecklistRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Job Category"),PrimaryKey, NotNull, ForeignKey("[dbo].[JobCategories]", "Id"), LeftJoin("jJobCategory"), TextualField("JobCategoryName")]
        [LookupEditor(typeof(JobCategoriesRow), InplaceAdd = true)]
        public Int64? JobCategory
        {
            get => fields.JobCategory[this];
            set => fields.JobCategory[this] = value;
        }

        [DisplayName("Job Type"),PrimaryKey, NotNull, ForeignKey("[dbo].[JobTypes]", "Id"), LeftJoin("jJobType"), TextualField("JobTypeName"),Updatable(false)]
        public Int64? JobType
        {
            get => fields.JobType[this];
            set => fields.JobType[this] = value;
        }

        [DisplayName("Job Category Name"), Expression("jJobCategory.[Name]"), MinSelectLevel(SelectLevel.List)]
        public String JobCategoryName
        {
            get => fields.JobCategoryName[this];
            set => fields.JobCategoryName[this] = value;
        }

        [DisplayName("Job Type Job Category"), Expression("jJobType.[JobCategory]")]
        public Int64? JobTypeJobCategory
        {
            get => fields.JobTypeJobCategory[this];
            set => fields.JobTypeJobCategory[this] = value;
        }

        [DisplayName("Job Type Name"), Expression("jJobType.[Name]")]
        public String JobTypeName
        {
            get => fields.JobTypeName[this];
            set => fields.JobTypeName[this] = value;
        }

        [DisplayName("Job Type Rate"), Expression("jJobType.[Rate]")]
        public Double? JobTypeRate
        {
            get => fields.JobTypeRate[this];
            set => fields.JobTypeRate[this] = value;
        }

        [DisplayName("Job Type Standard Timing"), Expression("jJobType.[StandardTiming]")]
        public TimeSpan? JobTypeStandardTiming
        {
            get => fields.JobTypeStandardTiming[this];
            set => fields.JobTypeStandardTiming[this] = value;
        }

        [DisplayName("Job Types"), MinSelectLevel(SelectLevel.List)]
        [LookupEditor(typeof(JobTypesRow), Multiple = true,CascadeField = "JobCategory", CascadeFrom = "JobCategory"), NotMapped]
        [LinkingSetRelation(typeof(InspectionJobTypesRow), "InspectionId", "JobType")]
        public List<Int64> JobTypes
        {
            get { return Fields.JobTypes[this]; }
            set { Fields.JobTypes[this] = value; }
        }


        public InspectionChecklistRow()
            : base()
        {
        }

        public InspectionChecklistRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field JobCategory;
            public Int64Field JobType;

            public StringField JobCategoryName;

            public Int64Field JobTypeJobCategory;
            public StringField JobTypeName;
            public DoubleField JobTypeRate;
            public TimeSpanField JobTypeStandardTiming;
            public ListField<Int64> JobTypes;
        }
    }
}
