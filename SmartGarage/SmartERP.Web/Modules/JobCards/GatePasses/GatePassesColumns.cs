using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.JobCards.Columns
{
    [ColumnsScript("JobCards.GatePasses")]
    [BasedOnRow(typeof(Entities.GatePassesRow), CheckNames = true)]
    public class GatePassesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [QuickFilter]
        public String JobCardWorkOrderNo { get; set; }
        [QuickFilter]
        public String CustomerName { get; set; }
        [QuickFilter]
        public String VehicleVehicleRegistration { get; set; }
        [QuickFilter]
        public DateTime VehicleOutDate { get; set; }
    }
}