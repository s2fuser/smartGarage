using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Bookings.Forms
{
    [FormScript("Bookings.VehicleBookings")]
    [BasedOnRow(typeof(Entities.VehicleBookingsRow), CheckNames = true)]
    public class VehicleBookingsForm
    {
        public String Title { get; set; }
        [DateTimeEditor()]
        public DateTime BookingDateTime { get; set; }
        public Int64 Customer { get; set; }
        public Int64 Vehicle { get; set; }
        [TextAreaEditor(Cols =1,Rows =3)]
        public String Note { get; set; }
    }
}