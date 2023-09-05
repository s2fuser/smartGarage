using Serenity.Navigation;
using MyPages = SmartERP.Administration.Pages;
using Administration = SmartERP.Administration.Pages;

[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments", Permission = SmartERP.Administration.PermissionKeys.Menu.Translation)]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o", Permission = SmartERP.Administration.PermissionKeys.Menu.Translation)]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock", Permission = SmartERP.Administration.PermissionKeys.Menu.Security)]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users", Permission = SmartERP.Administration.PermissionKeys.Menu.Security)]
[assembly: NavigationLink(9000, "Administration/Currencies", typeof(MyPages.CurrenciesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Currency)]
[assembly: NavigationLink(9000, "Administration/Settings", typeof(MyPages.CompaniesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Settings)]
