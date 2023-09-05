using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.JobCards.Forms
{
    [FormScript("JobCards.JobCardDetails")]
    [BasedOnRow(typeof(Entities.JobCardDetailsRow), CheckNames = true)]
    public class JobCardDetailsForm
    {
        public Int64 JobType { get; set; }
        //public Int64 JobOrder { get; set; }
        public Int64 Mechanic { get; set; }
        [TextAreaEditor(Cols =1,Rows =3)]
        public String CustomerNotes { get; set; }
    }
}