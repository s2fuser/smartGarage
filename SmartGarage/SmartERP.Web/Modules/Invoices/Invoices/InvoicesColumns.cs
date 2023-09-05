using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Invoices.Columns
{
    [ColumnsScript("Invoices.Invoices")]
    [BasedOnRow(typeof(Entities.InvoicesRow), CheckNames = true)]
    public class InvoicesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int64 Id { get; set; }
        [QuickFilter]
        public String CustomerName { get; set; }
         
        [QuickFilter]
        public String JobcardWorkOrderNo { get; set; }
        public string ServiceType { get; set; }
        [QuickFilter]
        public String VehicleVehicleRegistration { get; set; }
        [QuickFilter]
        public DateTime Date { get; set; }
        public String InsuranceCoName { get; set; }
        public String InsuranceCoAdd { get; set; }
        public String InsuranceCoCit { get; set; }
        public String GstIN { get; set; }
        public Double Discount { get; set; }
        public Double TotalDiscount { get; set; }
        //public Double Vat { get; set; }
        public Double TotalTax { get; set; }
        public Double ShippingCost { get; set; }
        public Double Gst { get; set; }
        public Double CGST { get; set; }
        public Double SGST { get; set; }
        public Double GrandTotal { get; set; }
        public Double NetTotal { get; set; }
        public Double PaidAmount { get; set; }
        public Double Due { get; set; }
        public Double Change { get; set; }
        [EditLink]
        public String Details { get; set; }
        [QuickFilter]
        public Int64 PaymentAccount { get; set; }
        public Int64 VNo { get; set; }
        public DateTime ScheduleDatetime { get; set; }
        public DateTime DeliveryDatetime { get; set; }
    }
}