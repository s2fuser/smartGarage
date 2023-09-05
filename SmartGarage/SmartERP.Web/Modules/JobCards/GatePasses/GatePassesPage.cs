using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.JobCards.Pages
{

    [PageAuthorize(typeof(Entities.GatePassesRow))]
    public class GatePassesController : Controller
    {
        [Route("JobCards/GatePasses")]
        public ActionResult Index()
        {
            return View("~/Modules/JobCards/GatePasses/GatePassesIndex.cshtml");
        }
    }
}