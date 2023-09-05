using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Masters.Forms
{
    [FormScript("Masters.FuelTypes")]
    [BasedOnRow(typeof(Entities.FuelTypesRow), CheckNames = true)]
    public class FuelTypesForm
    {
        public String Name { get; set; }
    }
}