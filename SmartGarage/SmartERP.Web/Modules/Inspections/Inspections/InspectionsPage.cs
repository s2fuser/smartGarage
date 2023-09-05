using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Inspections.Pages
{

    [PageAuthorize(typeof(Entities.InspectionsRow))]
    public class InspectionsController : Controller
    {
        [Route("Inspections/Inspections")]
        public ActionResult Index()
        {
            return View("~/Modules/Inspections/Inspections/InspectionsIndex.cshtml");
        }
    }
}