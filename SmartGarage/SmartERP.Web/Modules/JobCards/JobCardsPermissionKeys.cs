

using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.JobCards
{
    [NestedPermissionKeys]
    [DisplayName("JobCards")]
    public class PermissionKeys
    {
        [DisplayName("Job Cards")]
        public class JobCards
        {
            public const string View = "Job Cards:Job Card:View";
            public const string Create = "Job Cards:Job Card:Create";
            public const string Update = "Job Cards:Job Card:Update";
            public const string Delete = "Job Cards:Job Card:Delete";
        }
        [DisplayName("Gate Passes")]
        public class GatePasses
        {
            public const string View = "Gate Passes:Gate Passe:View";
            public const string Create = "Gate Passes:Gate Passe:Create";
            public const string Update = "Gate Passes:Gate Passe:Update";
            public const string Delete = "Gate Passes:Gate Passe:Delete";
        }
    }
}
