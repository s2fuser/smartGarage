using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Inspections.Columns
{
    [ColumnsScript("Inspections.Inspections")]
    [BasedOnRow(typeof(Entities.InspectionsRow), CheckNames = true)]
    public class InspectionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Double Rate { get; set; }
        public TimeSpan StandardTiming { get; set; }
       
    }
}