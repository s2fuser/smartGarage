using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Inspections.Forms
{
    [FormScript("Inspections.InspectionChecklist")]
    [BasedOnRow(typeof(Entities.InspectionChecklistRow), CheckNames = true)]
    public class InspectionChecklistForm
    {
        public Int64 JobCategory { get; set; }
        //public Int64 JobType { get; set; }
        public List<Int64> JobTypes { get; set; }
    }
}