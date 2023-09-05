using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.JobCards.Columns
{
    [ColumnsScript("JobCards.JobCards")]
    [BasedOnRow(typeof(Entities.JobCardsRow), CheckNames = true)]
    public class JobCardsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int64 Id { get; set; }
        [QuickFilter]
        public String CustomerName { get; set; }
        [EditLink]
        public String WorkOrderNo { get; set; }
        public String Address { get; set; }
        [QuickFilter]
        public String VehicleVehicleRegistration { get; set; }
        public String Phone { get; set; }
        public String Reference { get; set; }
        public String Mobile { get; set; }
        [QuickFilter]
        public DateTime ScheduleDatetime { get; set; }
        public String Website { get; set; }
        [QuickFilter]
        public DateTime DeliveryDatetime { get; set; }
        public String Details { get; set; }
    }
}