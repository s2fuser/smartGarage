using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Masters.Pages
{

    [PageAuthorize(typeof(Entities.FuelTypesRow))]
    public class FuelTypesController : Controller
    {
        [Route("Masters/FuelTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/FuelTypes/FuelTypesIndex.cshtml");
        }
    }
}