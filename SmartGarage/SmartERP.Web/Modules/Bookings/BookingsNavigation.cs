using Serenity.Navigation;
using MyPages = SmartERP.Bookings.Pages;

[assembly: NavigationMenu(1920, "Bookings", icon: "fa-calendar")]
[assembly: NavigationLink(int.MaxValue, "Bookings/Vehicle Bookings", typeof(MyPages.VehicleBookingsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Bookings.VehicleBookings)]
[assembly: NavigationLink(int.MaxValue, "Bookings/Vehicle Courtesy Booking", typeof(MyPages.VehicleCourtesyBookingController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Bookings.VehicleCourtesyBooking)]