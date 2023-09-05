using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Inspections.Entities
{
    [ConnectionKey("Default"), Module("Inspections"), TableName("[dbo].[InspectionJobTypes]")]
    [DisplayName("Inspection Job Types"), InstanceName("Inspection Job Types")]
    [ReadPermission(PermissionKeys.Inspections.View)]
    [InsertPermission(PermissionKeys.Inspections.Create)]
    [UpdatePermission(PermissionKeys.Inspections.Update)]
    [DeletePermission(PermissionKeys.Inspections.Delete)]
    public sealed class InspectionJobTypesRow : Row<InspectionJobTypesRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Inspection"), NotNull, ForeignKey("[dbo].[InspectionChecklist]", "Id"), LeftJoin("jInspection")]
        public Int64? InspectionId
        {
            get => fields.InspectionId[this];
            set => fields.InspectionId[this] = value;
        }

        [DisplayName("Job Type"), NotNull, ForeignKey("[dbo].[JobTypes]", "Id"), LeftJoin("jJobType"), TextualField("JobTypeName")]
        public Int64? JobType
        {
            get => fields.JobType[this];
            set => fields.JobType[this] = value;
        }

        [DisplayName("Inspection Job Category"), Expression("jInspection.[JobCategory]")]
        public Int64? InspectionJobCategory
        {
            get => fields.InspectionJobCategory[this];
            set => fields.InspectionJobCategory[this] = value;
        }

        [DisplayName("Inspection Job Type"), Expression("jInspection.[JobType]")]
        public Int64? InspectionJobType
        {
            get => fields.InspectionJobType[this];
            set => fields.InspectionJobType[this] = value;
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

        public InspectionJobTypesRow()
            : base()
        {
        }

        public InspectionJobTypesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field InspectionId;
            public Int64Field JobType;

            public Int64Field InspectionJobCategory;
            public Int64Field InspectionJobType;

            public Int64Field JobTypeJobCategory;
            public StringField JobTypeName;
            public DoubleField JobTypeRate;
            public TimeSpanField JobTypeStandardTiming;
        }
    }
}
