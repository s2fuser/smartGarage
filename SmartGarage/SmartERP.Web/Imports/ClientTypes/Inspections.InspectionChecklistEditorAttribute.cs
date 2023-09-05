using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmartERP.Inspections
{
    public partial class InspectionChecklistEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmartERP.Inspections.InspectionChecklistEditor";

        public InspectionChecklistEditorAttribute()
            : base(Key)
        {
        }
    }
}
