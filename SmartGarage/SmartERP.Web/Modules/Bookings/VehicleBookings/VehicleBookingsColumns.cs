using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Bookings.Columns
{
    [ColumnsScript("Bookings.VehicleBookings")]
    [BasedOnRow(typeof(Entities.VehicleBookingsRow), CheckNames = true)]
    public class VehicleBookingsColumns
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
        public DateTime BookingDateTime { get; set; }
       
        public String Note { get; set; }
    }
}