using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.JobCards.Columns
{
    [ColumnsScript("JobCards.JobCardDetails")]
    [BasedOnRow(typeof(Entities.JobCardDetailsRow), CheckNames = true)]
    public class JobCardDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public String JobTypeName { get; set; }
        //public String JobOrderWorkOrderNo { get; set; }
        public string  MechanicFullName { get; set; }
        [EditLink]
        public String CustomerNotes { get; set; }
    }
}