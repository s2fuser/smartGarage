

using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.Bookings
{
    [NestedPermissionKeys]
    [DisplayName("Bookings")]
    public class PermissionKeys
    {
        [DisplayName("Vehicle Bookings")]
        public class VehicleBookings
        {
            public const string View = "Bookings:Vehicle Booking:View";
            public const string Create = "Bookings:Vehicle Booking:Create";
            public const string Update = "Bookings:Vehicle Booking:Update";
            public const string Delete = "Bookings:Vehicle Booking:Delete";
        }
        [DisplayName("Vehicle Courtesy Bookings")]
        public class VehicleCourtesyBooking
        {
            public const string View = "Bookings:Vehicle Courtesy Booking:View";
            public const string Create = "Bookings:Vehicle Courtesy Booking:Create";
            public const string Update = "Bookings:Vehicle Courtesy Booking:Update";
            public const string Delete = "Bookings:Vehicle Courtesy Booking:Delete";
        }
    }
}
