using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Vehicles.Pages
{

    [PageAuthorize(typeof(Entities.VehiclesRow))]
    public class VehiclesController : Controller
    {
        [Route("Vehicles/Vehicles")]
        public ActionResult Index()
        {
            return View("~/Modules/Vehicles/Vehicles/VehiclesIndex.cshtml");
        }
    }
}