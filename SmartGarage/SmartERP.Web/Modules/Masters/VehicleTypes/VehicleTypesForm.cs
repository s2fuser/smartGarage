using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Masters.Forms
{
    [FormScript("Masters.VehicleTypes")]
    [BasedOnRow(typeof(Entities.VehicleTypesRow), CheckNames = true)]
    public class VehicleTypesForm
    {
        public String Name { get; set; }
    }
}