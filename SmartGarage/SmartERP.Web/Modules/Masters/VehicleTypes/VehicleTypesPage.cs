using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Masters.Pages
{

    [PageAuthorize(typeof(Entities.VehicleTypesRow))]
    public class VehicleTypesController : Controller
    {
        [Route("Masters/VehicleTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/VehicleTypes/VehicleTypesIndex.cshtml");
        }
    }
}