using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Invoices.Forms
{
    [FormScript("Invoices.InvoiceJobItems")]
    [BasedOnRow(typeof(Entities.InvoiceJobItemsRow), CheckNames = true)]
    public class InvoiceJobItemsForm
    {
        [HalfWidth]
        public Int64 JobType { get; set; }
        //[FormCssClass("line-break-sm")]
        [MediumThirdLargeQuarterWidth(UntilNext = true)]
        public Double UnitPrice { get; set; }
        
        public Double Gst { get; set; }
        public Double Discount { get; set; }
        //public Double Total { get; set; }
        //public Int64 InvoiceId { get; set; }
        [FormCssClass("line-break-sm")]
        [TextAreaEditor(Cols = 1, Rows = 3)]
        [HalfWidth]
        public String Description { get; set; }
    }
}