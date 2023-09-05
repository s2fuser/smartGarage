using Serenity.Navigation;
using MyPages = SmartERP.Meeting.Pages;

[assembly: NavigationMenu(1900, "Meeting", icon: "fa-comments")]
[assembly: NavigationLink(int.MaxValue, "Meeting/Meetings", typeof(MyPages.MeetingsController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Meeting.Meetings)]
//[assembly: NavigationLink(int.MaxValue, "Meeting/Meeting Attendees", typeof(MyPages.MeetingAttendeesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Meeting/Agenda Decisions", typeof(MyPages.AgendaDecisionsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Meeting/Agenda Items", typeof(MyPages.AgendaItemsController), icon: null)]