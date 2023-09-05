using Serenity.Navigation;
using MyPages = SmartERP.Sales.Pages;

[assembly: NavigationMenu(4000, "Sales", icon: "fa-shopping-cart")]
[assembly: NavigationLink(4000, "Sales/New Sale", typeof(MyPages.SalesController), icon: null, Url = "/Sales/Sales#new", Permission = SmartERP.Administration.PermissionKeys.Menu.Sale.NewSale)]
[assembly: NavigationLink(4000, "Sales/Sales", typeof(MyPages.SalesController), icon: "fa-shopping-cart", Permission = SmartERP.Administration.PermissionKeys.Menu.Sale.Sales)]






