using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Masters.Pages
{

    [PageAuthorize(typeof(Entities.ColorTypesRow))]
    public class ColorTypesController : Controller
    {
        [Route("Masters/ColorTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/ColorTypes/ColorTypesIndex.cshtml");
        }
    }
}