using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Invoices.Columns
{
    [ColumnsScript("Invoices.InvoiceItems")]
    [BasedOnRow(typeof(Entities.InvoiceItemsRow), CheckNames = true)]
    public class InvoiceItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int64 Id { get; set; }
        [EditLink]
        public String ProductProductName { get; set; }
        [EditLink]
        public Int64 HSN { get; set; }
        public String Description { get; set; }
        public String UnitName { get; set; }
        public Double Quantity { get; set; }      
        public Double UnitPrice { get; set; }
        public Double Gst { get; set; }      
        public Double CGST { get; set; }
        public Double SGST { get; set; }
        public Double TotalTax { get; set; }
        public Double Discount { get; set; }
        public Double SubTotal { get; set; }
        public Double Total { get; set; }
     
    }
}