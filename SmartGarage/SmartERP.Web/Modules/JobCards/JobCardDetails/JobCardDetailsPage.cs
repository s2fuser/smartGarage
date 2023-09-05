using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.JobCards.Pages
{

    [PageAuthorize(typeof(Entities.JobCardDetailsRow))]
    public class JobCardDetailsController : Controller
    {
        [Route("JobCards/JobCardDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/JobCards/JobCardDetails/JobCardDetailsIndex.cshtml");
        }
    }
}