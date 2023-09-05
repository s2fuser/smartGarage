using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.JobCards.Pages
{

    [PageAuthorize(typeof(Entities.JobCardsRow))]
    public class JobCardsController : Controller
    {
        [Route("JobCards/JobCards")]
        public ActionResult Index()
        {
            return View("~/Modules/JobCards/JobCards/JobCardsIndex.cshtml");
        }
    }
}