using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Quotations.Columns
{
    [ColumnsScript("Quotations.QuotationJobItems")]
    [BasedOnRow(typeof(Entities.QuotationJobItemsRow), CheckNames = true)]
    public class QuotationJobItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String JobTypeName { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Double UnitPrice { get; set; }
        public Double Discount { get; set; }
        public Double Total { get; set; }
      
    }
}