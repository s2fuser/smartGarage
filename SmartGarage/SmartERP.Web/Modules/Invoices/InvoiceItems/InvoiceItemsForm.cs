using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Invoices.Forms
{
    [FormScript("Invoices.InvoiceItems")]
    [BasedOnRow(typeof(Entities.InvoiceItemsRow), CheckNames = true)]
    public class InvoiceItemsForm
    {
        [HalfWidth]
        public Int64 ProductId { get; set; }
        
        [HalfWidth, ReadOnly(true)]
        public Int64 UnitId { get; set; }
       
        [FormCssClass("line-break-sm")]
        [MediumThirdLargeQuarterWidth(UntilNext = true)]
        public Double Quantity { get; set; }
        public Int16 HSN { get; set; }
        //public Double PurchasePrice { get; set; }
        public Double UnitPrice { get; set; }
        [HalfWidth, ReadOnly(true)]
        public Double Gst { get; set; }
        [HalfWidth]
        public Double Discount { get; set; }
        //public Double TotalTax { get; set; }
        //public Double Total { get; set; }

        //public Int64 InvoiceId { get; set; }
        //[FormCssClass("line-break-sm")]
        //[TextAreaEditor(Cols = 1, Rows = 3)]
        //[HalfWidth]
        //public String Description { get; set; }
    }
}