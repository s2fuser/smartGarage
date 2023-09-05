using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Bookings.Pages
{

    [PageAuthorize(typeof(Entities.VehicleCourtesyBookingRow))]
    public class VehicleCourtesyBookingController : Controller
    {
        [Route("Bookings/VehicleCourtesyBooking")]
        public ActionResult Index()
        {
            return View("~/Modules/Bookings/VehicleCourtesyBooking/VehicleCourtesyBookingIndex.cshtml");
        }
    }
}