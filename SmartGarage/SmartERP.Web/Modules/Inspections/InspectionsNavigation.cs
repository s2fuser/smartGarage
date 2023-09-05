using Serenity.Navigation;
using MyPages = SmartERP.Inspections.Pages;

[assembly: NavigationMenu(1930, "Inspections", icon: "fa-asl-interpreting")]

[assembly: NavigationLink(int.MaxValue, "Inspections/Inspections", typeof(MyPages.InspectionsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Inspections.InspectionList)]
//[assembly: NavigationLink(int.MaxValue, "Inspections/Inspection Checklist", typeof(MyPages.InspectionChecklistController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Inspections/Inspection Job Types", typeof(MyPages.InspectionJobTypesController), icon: null)]