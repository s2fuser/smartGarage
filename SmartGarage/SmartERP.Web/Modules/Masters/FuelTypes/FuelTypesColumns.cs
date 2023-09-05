using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Masters.Columns
{
    [ColumnsScript("Masters.FuelTypes")]
    [BasedOnRow(typeof(Entities.FuelTypesRow), CheckNames = true)]
    public class FuelTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}