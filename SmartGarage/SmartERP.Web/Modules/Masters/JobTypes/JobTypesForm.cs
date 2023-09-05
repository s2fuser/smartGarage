using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Masters.Forms
{
    [FormScript("Masters.JobTypes")]
    [BasedOnRow(typeof(Entities.JobTypesRow), CheckNames = true)]
    public class JobTypesForm
    {
        public Int64 JobCategory { get; set; }
        public String Name { get; set; }
        public Double Rate { get; set; }
        public Double Gst { get; set; }
        public TimeSpan StandardTiming { get; set; }
        public Boolean IsInspectionList { get; set; }
    }
}