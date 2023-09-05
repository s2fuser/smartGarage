using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Masters.Forms
{
    [FormScript("Masters.VehicleModels")]
    [BasedOnRow(typeof(Entities.VehicleModelsRow), CheckNames = true)]
    public class VehicleModelsForm
    {
        public String Name { get; set; }
    }
}