using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Invoices
{
    public partial class InvoiceItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.Invoices.InvoiceItemsEditor";

        public InvoiceItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}
