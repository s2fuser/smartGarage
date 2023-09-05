using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Invoices.Columns
{
    [ColumnsScript("Invoices.InvoiceJobItems")]
    [BasedOnRow(typeof(Entities.InvoiceJobItemsRow), CheckNames = true)]
    public class InvoiceJobItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
       
        public String Description { get; set; }
        public Double UnitPrice { get; set; }
        public Double Gst { get; set; }
        public Double TotalTax { get; set; }
        public Double Discount { get; set; }
        public Double SubTotal { get; set; }
        public Double Total { get; set; }
     
    }
}