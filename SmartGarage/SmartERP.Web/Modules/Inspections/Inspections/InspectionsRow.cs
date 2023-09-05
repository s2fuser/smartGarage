using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace SmartERP.Inspections.Entities
{
    [ConnectionKey("Default"), Module("Inspections"), TableName("[dbo].[JobTypes]")]
    [DisplayName("Inspections"), InstanceName("Inspections")]


    [ReadPermission(PermissionKeys.Inspections.View)]
    [InsertPermission(PermissionKeys.Inspections.Create)]
    [UpdatePermission(PermissionKeys.Inspections.Update)]
    [DeletePermission(PermissionKeys.Inspections.Delete)]

    [LookupScript("Inspections.Inspections", Permission = PermissionKeys.Inspections.View)]
    public sealed class InspectionsRow : Row<InspectionsRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Rate"), NotNull]
        public Double? Rate
        {
            get => fields.Rate[this];
            set => fields.Rate[this] = value;
        }

        [DisplayName("Standard Timing")]
        public TimeSpan? StandardTiming
        {
            get => fields.StandardTiming[this];
            set => fields.StandardTiming[this] = value;
        }

        [DisplayName("Is Inspection List"),Hidden,DefaultValue(true)]
        public Boolean? IsInspectionList
        {
            get => fields.IsInspectionList[this];
            set => fields.IsInspectionList[this] = value;
        }
        [MasterDetailRelation(foreignKey: "JobType")]
        [DisplayName("Checklist"), NotMapped]
        public List<InspectionChecklistRow> Checklist
        {
            get { return Fields.Checklist[this]; }
            set { Fields.Checklist[this] = value; }
        }

        public InspectionsRow()
            : base()
        {
        }

        public InspectionsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;           
            public StringField Name;
            public DoubleField Rate;
            public TimeSpanField StandardTiming;
            public BooleanField IsInspectionList;
            public readonly RowListField<InspectionChecklistRow> Checklist;


        }
    }
}
