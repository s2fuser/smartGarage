using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Quotations.Pages
{

    [PageAuthorize(typeof(Entities.QuotationJobItemsRow))]
    public class QuotationJobItemsController : Controller
    {
        [Route("Quotations/QuotationJobItems")]
        public ActionResult Index()
        {
            return View("~/Modules/Quotations/QuotationJobItems/QuotationJobItemsIndex.cshtml");
        }
    }
}