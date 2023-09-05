using MyPages = SmartERP.Inventory.Pages;
using Serenity.Navigation;

[assembly: NavigationMenu(3000, "Inventory", icon: "fa-th")]
[assembly: NavigationLink(3000, "Inventory/Products", typeof(SmartERP.Products.Pages.ProductsController), icon: "fa-th", Permission = SmartERP.Administration.PermissionKeys.Menu.Inventory.Products)]
[assembly: NavigationLink(3000, "Inventory/Categories", typeof(SmartERP.Products.Pages.CategoriesController), icon: "fa-list", Permission = SmartERP.Administration.PermissionKeys.Menu.Inventory.Categories)]
[assembly: NavigationLink(3000, "Inventory/Units", typeof(SmartERP.Products.Pages.UnitsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Inventory.Units)]
[assembly: NavigationLink(3000, "Inventory/Brands", typeof(SmartERP.Products.Pages.BrandsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Inventory.Brands)]
[assembly: NavigationLink(3000, "Inventory/Damaged Products", typeof(MyPages.DamagedProductsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Inventory.DamagedProducts)]
[assembly: NavigationLink(3000, "Inventory/Goods Receipt", typeof(MyPages.GoodsReceiptController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Inventory.GoodsReceipt)]
//[assembly: NavigationLink(int.MaxValue, "Inventory/Goods Receipt Details", typeof(MyPages.GoodsReceiptDetailsController), icon: null)]
[assembly: NavigationLink(3000, "Inventory/Goods Issue", typeof(MyPages.GoodsIssueController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Inventory.GoodsIssue)]
//[assembly: NavigationLink(int.MaxValue, "Inventory/Goods Issue Details", typeof(MyPages.GoodsIssueDetailsController), icon: null)]