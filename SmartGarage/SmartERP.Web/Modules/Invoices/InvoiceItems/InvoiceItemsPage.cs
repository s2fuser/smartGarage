using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Invoices.Pages
{

    [PageAuthorize(typeof(Entities.InvoiceItemsRow))]
    public class InvoiceItemsController : Controller
    {
        [Route("Invoices/InvoiceItems")]
        public ActionResult Index()
        {
            return View("~/Modules/Invoices/InvoiceItems/InvoiceItemsIndex.cshtml");
        }
    }
}