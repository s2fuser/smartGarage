using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Inspections
{
    public partial class JobTypeListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "SmartERP.Inspections.JobTypeListFormatter";

        public JobTypeListFormatterAttribute()
            : base(Key)
        {
        }
    }
}
