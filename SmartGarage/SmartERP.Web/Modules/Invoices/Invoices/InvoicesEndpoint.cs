using Microsoft.AspNetCore.Mvc;
using SelectPdf;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using System.IO;
using System.Net;
using System.Net.Mail;
using MyRepository = SmartERP.Invoices.Repositories.InvoicesRepository;
using MyRow = SmartERP.Invoices.Entities.InvoicesRow;

namespace SmartERP.Invoices.Endpoints
{
    [Route("Services/Invoices/Invoices/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class InvoicesController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            return new MyRepository(Context).Create(uow, request);

        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository(Context).Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository(Context).Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }
        [HttpPost]
        public IActionResult Email(Request contentRequest)
        {
            
        var htmlContent = contentRequest.Content; // Changed property name to match JSON
            HtmlToPdf _HtmlToPdf = new HtmlToPdf();
            PdfDocument _PdfDocument = _HtmlToPdf.ConvertHtmlString(htmlContent);
            byte[] pdf = _PdfDocument.Save();
            _PdfDocument.Close();

            MailMessage message = new MailMessage();
            message.From = new MailAddress("manoveera.ce@gmail.com");
            message.To.Add(new MailAddress(contentRequest.email)); // Changed property name to match JSON
            message.Subject = "Testing mail";
            message.Body = "Mail from coding";

            using (var memoryStream = new MemoryStream(pdf))
            {
                Attachment attachment = new Attachment(memoryStream, "InvoiceBill.pdf", "application/pdf");
                message.Attachments.Add(attachment);

                SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
                client.Credentials = new NetworkCredential("manoveera.ce@gmail.com", "oihbmpibzmtxegsk");
                client.EnableSsl = true;
                client.Send(message);
            }

            return Json(new { success = true, message = "Success" });
        }
    }
     public class Request
        {
            public string Content { get; set; }
            public string email { get; set; }
        }
}

