using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Masters.Forms
{
    [FormScript("Masters.AssemblyTypes")]
    [BasedOnRow(typeof(Entities.AssemblyTypesRow), CheckNames = true)]
    public class AssemblyTypesForm
    {
        public String Name { get; set; }
    }
}