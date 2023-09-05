using MyPages = SmartERP.Masters.Pages;
using Serenity.Navigation;


[assembly: NavigationMenu(1900, "Masters", icon: "fa-list-alt")]


[assembly: NavigationLink(1900, "Masters/Countries", typeof(SmartERP.Administration.Pages.CountriesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.Countries)]

[assembly: NavigationLink(1900, "Masters/Cities", typeof(SmartERP.Administration.Pages.CitiesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.Cities)]
//[assembly: NavigationLink(1900, "Masters/States", typeof(SmartERP.Administration.Pages.StatesController), icon: null)]
//[assembly: NavigationLink(1900, "Masters/Banks", typeof(SmartERP.Banks.Pages.BanksController), icon: "fa-university")]

//[assembly: NavigationLink(1900, "Masters/Expense Types", typeof(SmartERP.Expenses.Pages.ExpenseTypesController), icon: "fa-money")]
//[assembly: NavigationLink(1900, "Masters/Services", typeof(SmartERP.Services.Pages.ServicesController), icon: null)]

[assembly: NavigationLink(1900, "Masters/Territories", typeof(SmartERP.Administration.Pages.TerritoriesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.Territories)]
[assembly: NavigationLink(1900, "Masters/Regions", typeof(SmartERP.Administration.Pages.RegionsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.Regions)]
[assembly: NavigationLink(1900, "Masters/Shippers", typeof(SmartERP.Administration.Pages.ShippersController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.Shippers)]
[assembly: NavigationLink(1900, "Masters/Warehouses", typeof(SmartERP.Administration.Pages.WarehousesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.Warehouses)]
[assembly: NavigationLink(1900, "Masters/Customer Groups", typeof(MyPages.CustomerGroupsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.CustomerGroups)]
[assembly: NavigationLink(1900, "Masters/Supplier Groups", typeof(MyPages.SupplierGroupsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.SupplierGroups)]
[assembly: NavigationLink(1900, "Masters/Agenda Item Types", typeof(MyPages.AgendaItemTypesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.AgendaItemTypes)]
[assembly: NavigationLink(1900, "Masters/Meeting Types", typeof(MyPages.MeetingTypesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.MeetingTypes)]
[assembly: NavigationLink(1900, "Masters/Locations", typeof(MyPages.LocationsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.Locations)]
[assembly: NavigationLink(int.MaxValue, "Masters/Attendance Statuses", typeof(MyPages.AttendanceStatusesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.AttendanceStatuses)]
[assembly: NavigationLink(int.MaxValue, "Masters/Attendee Types", typeof(MyPages.AttendeeTypesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.AttendeeTypes)]
[assembly: NavigationLink(int.MaxValue, "Masters/Resolution Statuses", typeof(MyPages.ResolutionStatusesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.ResolutionStatuses)]
[assembly: NavigationLink(int.MaxValue, "Masters/Job Types", typeof(MyPages.JobTypesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.JobTypes)]
[assembly: NavigationLink(int.MaxValue, "Masters/Vehicle Types", typeof(MyPages.VehicleTypesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.VehicleTypes)]
[assembly: NavigationLink(int.MaxValue, "Masters/Color Types", typeof(MyPages.ColorTypesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.ColorTypes)]
[assembly: NavigationLink(int.MaxValue, "Masters/Fuel Types", typeof(MyPages.FuelTypesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.FuelTypes)]
[assembly: NavigationLink(int.MaxValue, "Masters/Vehicle Makes", typeof(MyPages.VehicleMakesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.VehicleMakes)]
[assembly: NavigationLink(int.MaxValue, "Masters/Assembly Types", typeof(MyPages.AssemblyTypesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.AssemblyTypes)]
[assembly: NavigationLink(int.MaxValue, "Masters/Vehicle Models", typeof(MyPages.VehicleModelsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.VehicleModels)]
[assembly: NavigationLink(int.MaxValue, "Masters/Job Categories", typeof(MyPages.JobCategoriesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Masters.JobCategories)]