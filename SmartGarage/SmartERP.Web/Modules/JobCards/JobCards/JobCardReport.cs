using System;
using Serenity.Data;
using Serenity.Reporting;
using SmartERP.Administration.Entities;
using SmartERP.Customers.Entities;
using SmartERP.Invoices.Entities;
using SmartERP.JobCards.Entities;
using SmartERP.Vehicles.Entities;
using System.Collections.Generic;

namespace SmartGarage.Web.Modules.JobCards.JobCards
{

    [Report("JobCards.JobCardReport")]
    [ReportDesign(MVC.Views.JobCards.JobCards_.JobCardReport)]
    public class JobCardReport : IReport
    {

    protected ISqlConnections SqlConnections { get; }
    public JobCardReport(ISqlConnections sqlConnections)
    {
        SqlConnections = sqlConnections;
    }
    public Int64 OrderID { get; set; }

    public object GetData()
    {
        var data = new JobCardsRowData();

        using (var connection = SqlConnections.NewFor<JobCardsRow>())
        {
            var o = JobCardsRow.Fields;

            data.Order = connection.TryById<JobCardsRow>(this.OrderID, q => q
                 .SelectTableFields()
                 .Select(o.CustomerName)
                 .Select(o.CustomerAddress)) ?? new JobCardsRow();

        
                var od = InvoiceItemsRow.Fields;
            data.Details = connection.List<InvoiceItemsRow>(q => q
                .SelectTableFields()
                .Select(od.ProductProductName)
                .Select(od.Total)
                .Where(od.InvoiceId == this.OrderID));

            var oJ = InvoiceJobItemsRow.Fields;
            data.Jobs = connection.List<InvoiceJobItemsRow>(q => q
                .SelectTableFields()
                .Select(oJ.JobTypeName)
                .Select(oJ.Total)
                .Where(oJ.InvoiceId == this.OrderID));
            

            var n = InvoicesRow.Fields;
                data.Invoice = connection.TryFirst<InvoicesRow>(n.Id == data.Order.Id.Value)
                    ?? new InvoicesRow();

                var c = CustomersRow.Fields;
            data.Customer = connection.TryFirst<CustomersRow>(c.Id == data.Order.Customer.Value)
                ?? new CustomersRow();

            var v = VehiclesRow.Fields;
            data.Vehicle = connection.TryFirst<VehiclesRow>(q => q.SelectTableFields().Select(v.ModelName).Select(v.VehicleTypeName).Where(v.Id == data.Order.Vehicle.Value))
                ?? new VehiclesRow();

            var s = CompaniesRow.Fields;
            data.Company = connection.TryFirst<CompaniesRow>(q => q.SelectTableFields().Select(s.CurrencyCurrencySymbol).Where(s.Id > 0)) ?? new CompaniesRow();
        }

        return data;
    }
     
    }

    public class JobCardsRowData
    {
        public JobCardsRow Order { get; set; }
        public List<InvoiceItemsRow> Details { get; set; }
        public List<InvoiceJobItemsRow> Jobs { get; set; }
        public CustomersRow Customer { get; set; }

        public VehiclesRow Vehicle { get; set; }
        public InvoicesRow Invoice { get; set; }    

        public CompaniesRow Company { get; set; }
    }
}

