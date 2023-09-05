using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SmartERP.Invoices.Pages
{

    [PageAuthorize(typeof(Entities.InvoicesRow))]
    public class InvoicesController : Controller
    {
        [Route("Invoices/Invoices")]
        public ActionResult Index()
        {
            return View("~/Modules/Invoices/Invoices/InvoicesIndex.cshtml");
        }
    }
}