using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.JobCards
{
    public partial class JobCardDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.JobCards.JobCardDetailsEditor";

        public JobCardDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}
