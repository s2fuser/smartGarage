using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Bookings.Pages
{

    [PageAuthorize(typeof(Entities.VehicleBookingsRow))]
    public class VehicleBookingsController : Controller
    {
        [Route("Bookings/VehicleBookings")]
        public ActionResult Index()
        {
            return View("~/Modules/Bookings/VehicleBookings/VehicleBookingsIndex.cshtml");
        }
    }
}