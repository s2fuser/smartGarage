using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Masters.Pages
{

    [PageAuthorize(typeof(Entities.JobTypesRow))]
    public class JobTypesController : Controller
    {
        [Route("Masters/JobTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/JobTypes/JobTypesIndex.cshtml");
        }
    }
}