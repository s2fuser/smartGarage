using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Masters.Columns
{
    [ColumnsScript("Masters.JobTypes")]
    [BasedOnRow(typeof(Entities.JobTypesRow), CheckNames = true)]
    public class JobTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public String JobCategoryName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Double Rate { get; set; }
        public Double Gst { get; set; }
        public TimeSpan StandardTiming { get; set; }
      
    }
}