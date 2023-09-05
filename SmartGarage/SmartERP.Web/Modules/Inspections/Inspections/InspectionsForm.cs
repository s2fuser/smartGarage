using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using SmartERP.Inspections.Entities;

namespace SmartERP.Inspections.Forms
{
    [FormScript("Inspections.Inspections")]
    [BasedOnRow(typeof(Entities.InspectionsRow), CheckNames = true)]
    public class InspectionsForm
    {
        public String Name { get; set; }
        public Double Rate { get; set; }
        public TimeSpan StandardTiming { get; set; }
        public Boolean IsInspectionList { get; set; }
        [InspectionChecklistEditor]
        public List<InspectionChecklistRow> Checklist { get; set; }
    }
}