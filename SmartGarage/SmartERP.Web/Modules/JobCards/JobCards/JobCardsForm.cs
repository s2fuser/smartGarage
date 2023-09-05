using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using SmartERP.JobCards.Entities;

namespace SmartERP.JobCards.Forms
{
    [FormScript("JobCards.JobCards")]
    [BasedOnRow(typeof(Entities.JobCardsRow), CheckNames = true)]
    public class JobCardsForm
    {
        [HalfWidth(UntilNext =true)]
        public Int64 Customer { get; set; }
        public String WorkOrderNo { get; set; }
        public String Address { get; set; }
        public Int64 Vehicle { get; set; }
        public String Phone { get; set; }
        public String Reference { get; set; }
        public String Mobile { get; set; }
        public DateTime ScheduleDatetime { get; set; }
        public String Website { get; set; }
        public DateTime DeliveryDatetime { get; set; }
        [FullWidth]
        [JobCardDetailsEditor]
        public List<JobCardDetailsRow> JobCardDetails { get; set; }
        [TextAreaEditor(Cols =1,Rows =3)]
        public String Details { get; set; }
    }
}