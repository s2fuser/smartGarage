using Serenity.Navigation;
using MyPages = SmartERP.Reports.Pages;

[assembly: NavigationMenu(8100, "Reports", icon: "fa-circle-o")]
[assembly: NavigationLink(8100, "Reports/Day Closing", typeof(MyPages.CloseDayController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Reports.DayClosing)]
[assembly: NavigationLink(8100, "Reports/Today's Report", typeof(MyPages.TodaysReportController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Reports.TodaysReport)]
[assembly: NavigationLink(8100, "Reports/Daily Closing Report", typeof(MyPages.DailyClosingController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Reports.DailyClosingReport)]

//[assembly: NavigationLink(8100, "Reports/Closing Report", typeof(MyPages.ClosingReportController), icon: null)]

[assembly: NavigationLink(8100, "Reports/Stock Report", typeof(MyPages.StockReportController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Reports.StockReport)]
[assembly: NavigationLink(8100, "Reports/Sale Report", typeof(MyPages.SaleReportController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Reports.SaleReport)]
[assembly: NavigationLink(8100, "Reports/Product Wise Sale Report", typeof(MyPages.ProductWiseSalesReportController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Reports.ProductWiseSaleReport)]
[assembly: NavigationLink(8100, "Reports/Purchase Report", typeof(MyPages.PurchaseReporController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Reports.PurchaseReport)]



[assembly: NavigationLink(8100, "Reports/Customer Receivable Report", typeof(MyPages.CustomerReceivableReportController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Reports.CustomerReceivableReport)]

[assembly: NavigationLink(8100, "Reports/Supplier Payable Report", typeof(MyPages.SupplierPayableReportController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Reports.SupplierPayableReport)]
//[assembly: NavigationLink(8100, "Reports/Profit Report", typeof(MyPages.ProfitReportController), icon: null)]


