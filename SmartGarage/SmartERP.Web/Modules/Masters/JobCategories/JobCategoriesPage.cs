using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Masters.Pages
{

    [PageAuthorize(typeof(Entities.JobCategoriesRow))]
    public class JobCategoriesController : Controller
    {
        [Route("Masters/JobCategories")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/JobCategories/JobCategoriesIndex.cshtml");
        }
    }
}