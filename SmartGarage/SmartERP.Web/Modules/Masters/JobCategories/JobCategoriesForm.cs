using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SmartERP.Masters.Forms
{
    [FormScript("Masters.JobCategories")]
    [BasedOnRow(typeof(Entities.JobCategoriesRow), CheckNames = true)]
    public class JobCategoriesForm
    {
        public String Name { get; set; }
    }
}