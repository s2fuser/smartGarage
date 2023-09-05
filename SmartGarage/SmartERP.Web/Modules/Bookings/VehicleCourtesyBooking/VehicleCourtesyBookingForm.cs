using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Bookings.Forms
{
    [FormScript("Bookings.VehicleCourtesyBooking")]
    [BasedOnRow(typeof(Entities.VehicleCourtesyBookingRow), CheckNames = true)]
    public class VehicleCourtesyBookingForm
    {
        public String Title { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public Int64 Customer { get; set; }
        public Int64 Vehicle { get; set; }
        [TextAreaEditor(Cols = 1, Rows = 3)]
        public String Note { get; set; }
    }
}