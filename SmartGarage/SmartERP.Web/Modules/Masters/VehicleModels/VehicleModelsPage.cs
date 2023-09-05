using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Masters.Pages
{

    [PageAuthorize(typeof(Entities.VehicleModelsRow))]
    public class VehicleModelsController : Controller
    {
        [Route("Masters/VehicleModels")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/VehicleModels/VehicleModelsIndex.cshtml");
        }
    }
}