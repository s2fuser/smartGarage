using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Masters.Pages
{

    [PageAuthorize(typeof(Entities.AssemblyTypesRow))]
    public class AssemblyTypesController : Controller
    {
        [Route("Masters/AssemblyTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/AssemblyTypes/AssemblyTypesIndex.cshtml");
        }
    }
}