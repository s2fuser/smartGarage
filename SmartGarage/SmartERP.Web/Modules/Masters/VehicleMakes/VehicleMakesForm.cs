using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Masters.Forms
{
    [FormScript("Masters.VehicleMakes")]
    [BasedOnRow(typeof(Entities.VehicleMakesRow), CheckNames = true)]
    public class VehicleMakesForm
    {
        public String Name { get; set; }
    }
}