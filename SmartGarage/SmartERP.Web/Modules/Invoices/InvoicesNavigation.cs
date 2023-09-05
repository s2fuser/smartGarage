using Serenity.Navigation;
using MyPages = SmartERP.Invoices.Pages;

[assembly: NavigationMenu(3800, "Invoices", icon: "fa-cogs")]
[assembly: NavigationLink(4000, "Invoices/New Invoice", typeof(MyPages.InvoicesController), icon: null, Url = "/Invoices/Invoices#new",Permission = SmartERP.Administration.PermissionKeys.Menu.Invoices.NewInvoice)]
[assembly: NavigationLink(int.MaxValue, "Invoices/Invoices", typeof(MyPages.InvoicesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Invoices.InvoiceList)]
