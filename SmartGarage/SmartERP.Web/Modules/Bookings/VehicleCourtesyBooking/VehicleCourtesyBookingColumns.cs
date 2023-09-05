using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Bookings.Columns
{
    [ColumnsScript("Bookings.VehicleCourtesyBooking")]
    [BasedOnRow(typeof(Entities.VehicleCourtesyBookingRow), CheckNames = true)]
    public class VehicleCourtesyBookingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Title { get; set; }
        [QuickFilter]
        public String CustomerName { get; set; }
        [QuickFilter]
        public String VehicleVehicleRegistration { get; set; }
        [QuickFilter]
        public DateTime StartDateTime { get; set; }
        [QuickFilter]
        public DateTime EndDateTime { get; set; }
      
        public String Note { get; set; }
    }
}