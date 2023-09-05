using Serenity.Navigation;
using MyPages = SmartERP.Quotations.Pages;

[assembly: NavigationMenu(3810, "Quotations", icon: "fa-check-square")]
[assembly: NavigationLink(3810, "Quotations/New Quotation", typeof(MyPages.QuotationsController), icon: null, Url = "/Quotations/Quotations#new", Permission = SmartERP.Administration.PermissionKeys.Menu.Quotation.NewQuotation)]
[assembly: NavigationLink(3810, "Quotations/Quotations", typeof(MyPages.QuotationsController), icon: "fa-check-square", Permission = SmartERP.Administration.PermissionKeys.Menu.Quotation.Quotations)]
//[assembly: NavigationLink(int.MaxValue, "Quotations/Quotation Job Items", typeof(MyPages.QuotationJobItemsController), icon: null)]