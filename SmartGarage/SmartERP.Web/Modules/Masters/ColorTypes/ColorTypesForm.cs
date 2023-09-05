using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Masters.Forms
{
    [FormScript("Masters.ColorTypes")]
    [BasedOnRow(typeof(Entities.ColorTypesRow), CheckNames = true)]
    public class ColorTypesForm
    {
        public String Name { get; set; }
    }
}