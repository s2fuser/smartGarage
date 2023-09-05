

using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.Inspections
{
    [NestedPermissionKeys]
    [DisplayName("Inspections")]
    public class PermissionKeys
    {
        [DisplayName("Inspections")]
        public class Inspections
        {
            public const string View = "Inspections:Inspection:View";
            public const string Create = "Inspections:Inspection:Create";
            public const string Update = "Inspections:Inspection:Update";
            public const string Delete = "Inspections:Inspection:Delete";
        }
    }
}
