using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Masters.Pages
{

    [PageAuthorize(typeof(Entities.VehicleMakesRow))]
    public class VehicleMakesController : Controller
    {
        [Route("Masters/VehicleMakes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/VehicleMakes/VehicleMakesIndex.cshtml");
        }
    }
}