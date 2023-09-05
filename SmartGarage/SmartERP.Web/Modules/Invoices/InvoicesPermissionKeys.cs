

using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.Invoices
{
    [NestedPermissionKeys]
    [DisplayName("Invoices")]
    public class PermissionKeys
    {
        [DisplayName("Invoices")]
        public class Invoices
        {
           
            public const string View = "Invoices:Invoice:View";
            public const string Create = "Invoices:Invoice:Create";
            public const string Update = "Invoices:Invoice:Update";
            public const string Delete = "Invoices:Invoice:Delete";
        }
    }
}
