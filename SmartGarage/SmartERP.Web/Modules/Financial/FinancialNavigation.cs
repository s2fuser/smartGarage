using Serenity.Navigation;


[assembly: NavigationMenu(7000, "Financial", icon: "fa-briefcase")]
[assembly: NavigationLink(7000, "Financial/Chart Of Accounts", typeof(SmartERP.Accounts.Pages.AccountsController), icon: "fa-briefcase", Permission = SmartERP.Administration.PermissionKeys.Menu.Financial.ChartOfAccounts)]

[assembly: NavigationLink(7000, "Financial/Opening Balance", typeof(SmartERP.Accounts.Pages.OpeningBalanceController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Financial.OpeningBalance)]

[assembly: NavigationLink(7000, "Financial/Debit Voucher", typeof(SmartERP.Accounts.Pages.DebitVoucherController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Financial.DebitVoucher)]
[assembly: NavigationLink(7000, "Financial/Credit Voucher", typeof(SmartERP.Accounts.Pages.CreditVoucherController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Financial.CreditVoucher)]
[assembly: NavigationLink(7000, "Financial/Contra Voucher", typeof(SmartERP.Accounts.Pages.ContraVoucherController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Financial.ContraVoucher)]
[assembly: NavigationLink(7000, "Financial/Journal Voucher", typeof(SmartERP.Accounts.Pages.JournalVoucherController), icon: null, Permission = SmartERP.Administration.PermissionKeys.Menu.Financial.JournalVoucher)]
//[assembly: NavigationMenu(7000, "Financial/Reports", icon: "fa-circle-o", Permission = SmartERP.Financial.PermissionKeys..View)]