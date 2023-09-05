using Serenity.Navigation;
using MyPages = SmartERP.JobCards.Pages;

[assembly: NavigationMenu(1930, "Job Cards", icon: "fa-tasks")]

[assembly: NavigationLink(int.MaxValue, "Job Cards/Job Cards", typeof(MyPages.JobCardsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.JobCards.JobCardList)]
//[assembly: NavigationLink(int.MaxValue, "Job Cards/Job Card Details", typeof(MyPages.JobCardDetailsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Job Cards/Gate Passes", typeof(MyPages.GatePassesController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.JobCards.GatePasses)]