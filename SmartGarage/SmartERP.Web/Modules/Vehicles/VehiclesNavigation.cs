using Serenity.Navigation;
using MyPages = SmartERP.Vehicles.Pages;

[assembly: NavigationMenu(1910, "Vehicles", icon: "fa-car")]

[assembly: NavigationLink(int.MaxValue, "Vehicles/Vehicles", typeof(MyPages.VehiclesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Vehicle.Vehicles)]