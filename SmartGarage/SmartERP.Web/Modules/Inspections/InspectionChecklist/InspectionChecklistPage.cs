using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Inspections.Pages
{

    [PageAuthorize(typeof(Entities.InspectionChecklistRow))]
    public class InspectionChecklistController : Controller
    {
        [Route("Inspections/InspectionChecklist")]
        public ActionResult Index()
        {
            return View("~/Modules/Inspections/InspectionChecklist/InspectionChecklistIndex.cshtml");
        }
    }
}