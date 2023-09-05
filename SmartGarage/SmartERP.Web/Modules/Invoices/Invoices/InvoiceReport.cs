
namespace SmartERP.Invoices
{
    using Entities;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Data;
    using Serenity.Reporting;
    using SmartERP.Administration.Entities;
    using SmartERP.Customers.Entities;
    using SmartERP.Vehicles.Entities;
    
    using System.Collections.Generic;
    using System;
    using System.Net.Mail;
    using MimeKit;
    using System.IO;
    using TheArtOfDev.HtmlRenderer.PdfSharp;
    using MailKit.Net.Smtp;
    using Serenity.Web;
    using SmartERP.JobCards.Entities;
    using SmartERP.Invoices.Forms;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using System.Net;
    using System.Net.Mail;
    using Microsoft.Identity.Client;



    [Report("Invoices.InvoiceReport")]
    [ReportDesign(MVC.Views.Invoices.Invoices_.InvoiceReport)]
    //[RequiredPermission(PermissionKeys.General)]
    public class InvoiceReport : IReport, ICustomizeHtmlToPdf
    {
        protected ISqlConnections SqlConnections { get; }
        public InvoiceReport(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections;
        }
        public Int64 OrderID { get; set; }

        public object GetData()
        {
            var data = new InvoicesRowData();

            using (var connection = SqlConnections.NewFor<InvoicesRow>())
            {
                var o = InvoicesRow.Fields;

                data.Order = connection.TryById<InvoicesRow>(this.OrderID, q => q
                     .SelectTableFields()
                     .Select(o.CustomerName)
                     .Select(o.CustomerAddress)) ?? new InvoicesRow();

                var od = InvoiceItemsRow.Fields;
                data.Details = connection.List<InvoiceItemsRow>(q => q
                    .SelectTableFields()
                    .Select(od.ProductProductName)
                    .Select(od.Total)
                    .Where(od.InvoiceId == this.OrderID));

                var oJ = InvoiceJobItemsRow.Fields;
                data.Jobs = connection.List<InvoiceJobItemsRow>(q => q
                    .SelectTableFields()
                    .Select(oJ.JobTypeName)
                    .Select(oJ.Total)
                    .Where(oJ.InvoiceId == this.OrderID));
                var oJj = JobCardsRow.Fields;
              

                var c = CustomersRow.Fields;
                data.Customer = connection.TryFirst<CustomersRow>(c.Id == data.Order.CustomerId.Value)
                    ?? new CustomersRow();

                var v = VehiclesRow.Fields;
                data.Vehicle = connection.TryFirst<VehiclesRow>(q => q.SelectTableFields().Select(v.ModelName).Select(v.VehicleTypeName).Where(v.Id == data.Order.Vehicle.Value))
                    ?? new VehiclesRow();

                var s = CompaniesRow.Fields;
                data.Company = connection.TryFirst<CompaniesRow>(q => q.SelectTableFields().Select(s.CurrencyCurrencySymbol).Where(s.Id > 0)) ?? new CompaniesRow();
            }

            return data;
        }

        //private async Task SendEmail(UserEmailOption userEmailOption)
        //{
        //    InvoicesForm invoicesForm = new InvoicesForm();
        //    CustomersRow customerRow = new CustomersRow();

        //    // Create a new mail message
        //    MailMessage message = new MailMessage();
        //    message.From = new MailAddress("manoveera.ce@gmail.com");
        //    message.To.Add(new MailAddress("praison0606@gmail.com"));
        //    message.Subject = "Testing mail";
        //    message.Body = "Mail from coding";
        //    // Create a new attachment from the memory stream
        //    //Attachment attachment = new Attachment(stream, "Payslip for " + monthName + " " + data[i].EMP_LAST_PRYL_YEAR + " _Verve VFX Studio.pdf", "application/pdf");

        //    // Add the attachment to the mail message
        //    // message.Attachments.Add(attachment);

        //    // Create a new SMTP client and send the mail message
        //    SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
        //    client.Credentials = new NetworkCredential("manoveera.ce@gmail.com", "oihbmpibzmtxegsk");
        //    client.EnableSsl = true;
        //    client.Send(message);
        //}

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }

        //public void sendMail()
        //{
        //public IActionResult OnPostSubmitButtonClicked()
        //{
        //    // Code to execute when the button is clicked
        //    // For example, you can add your business logic here.

        //    return null; // Redirects back to the same page
        //}

        //}

     
        

    }


    public class InvoicesRowData
    {
        public InvoicesRow Order { get; set; }
        public List<InvoiceItemsRow> Details { get; set; }
        public List<InvoiceJobItemsRow> Jobs { get; set; }
        public CustomersRow Customer { get; set; }

        public VehiclesRow Vehicle { get; set; }


        public CompaniesRow Company { get; set; }
    }
}