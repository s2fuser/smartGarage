using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.JobCards.Forms
{
    [FormScript("JobCards.GatePasses")]
    [BasedOnRow(typeof(Entities.GatePassesRow), CheckNames = true)]
    public class GatePassesForm
    {
        public Int64 JobCard { get; set; }
        [ReadOnly(true)]
        public Int64 Customer { get; set; }
        [ReadOnly(true)]
        public Int64 Vehicle { get; set; }
        [DefaultValue("now")]
        public DateTime VehicleOutDate { get; set; }
    }
}