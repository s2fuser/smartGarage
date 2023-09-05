using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Invoices.Pages
{

    [PageAuthorize(typeof(Entities.InvoiceJobItemsRow))]
    public class InvoiceJobItemsController : Controller
    {
        [Route("Invoices/InvoiceJobItems")]
        public ActionResult Index()
        {
            return View("~/Modules/Invoices/InvoiceJobItems/InvoiceJobItemsIndex.cshtml");
        }
    }
}