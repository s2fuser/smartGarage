using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Inspections.Columns
{
    [ColumnsScript("Inspections.InspectionChecklist")]
    [BasedOnRow(typeof(Entities.InspectionChecklistRow), CheckNames = true)]
    public class InspectionChecklistColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String JobCategoryName { get; set; }
        //public String JobTypeName { get; set; }
        [Width(500), JobTypeListFormatter]
        public List<Int64> JobTypes { get; set; }
    }
}