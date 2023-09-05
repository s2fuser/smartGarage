
using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [Description("Settings")]
        public const string Settings = "Administration:Settings";

        
        [DisplayName("Currencies")]
        public class Currencies
        {
            public const string View = "Administration:Currency:View";
            public const string Create = "Administration:Currency:Create";
            public const string Update = "Administration:Currency:Update";
            public const string Delete = "Administration:Currency:Delete";
        }

        [DisplayName("Menu")]
        public class Menu
        {
            public const string Translation = "Menu:Administration:Translation";
            public const string Settings = "Menu:Administration:Settings";
            public const string Currency = "Menu:Administration:Currency";
            public const string Security = "Menu:Administration:Security";
            public class BusinessPartners {
                public const string NewCustomers = "Menu:Business Partners:New Customers";
                public const string NewSuppliers = "Menu:Business Partners:New Suppliers";
                public const string Customers = "Menu:Business Partners:Customers";
                public const string Suppliers = "Menu:Business Partners:Suppliers";
            }
            

            public class CashBank 
            {
                public const string BankTransactions = "Menu:Cash//Bank:Bank Transactions";
                public const string Expenses = "Menu:Cash//Bank:Expenses";
                public const string CustomerReceive = "Menu:Cash//Bank:Customer Receive";
                public const string SupplierPayment = "Menu:Cash//Bank:Supplier Payment";
                public const string CashAdjustment = "Menu:Cash//Bank:Cash Adjustment";
            }
            public class Bookings
            {
                public const string VehicleBookings = "Menu:Bookings:Vehicle Bookings";
                public const string VehicleCourtesyBooking = "Menu:Bookings:Vehicle Courtesy Booking";
               
            }
            public class Financial
            {
                public const string ChartOfAccounts = "Menu:Financial:Chart Of Accounts";
                public const string OpeningBalance = "Menu:Financial:Opening Balance";
                public const string DebitVoucher = "Menu:Financial:Debit Voucher";
                public const string CreditVoucher = "Menu:Financial:Credit Voucher";
                public const string ContraVoucher = "Menu:Financial:Contra Voucher";
                public const string JournalVoucher = "Menu:Financial:Journal Voucher";
                

            }
            public class HumanResource
            {
                public const string NewEmployee = "Menu:Human Resource:New Employee";
                public const string Employees = "Menu:Human Resource:Employees";
                public const string Departments = "Menu:Human Resource:Departments";
                public const string Designations = "Menu:Human Resource:Designations";
                public const string Attendance = "Menu:Human Resource:Attendance";
               
            }
           
            public class Inspections
            {
                public const string InspectionList = "Menu:Inspections:Inspections";
                

            }
            public class Inventory
            {
                public const string Products = "Menu:Inventory:Products";
                public const string Categories = "Menu:Inventory:Categories";
                public const string Units = "Menu:Inventory:Units";
                public const string Brands = "Menu:Inventory:Brands";
                public const string DamagedProducts = "Menu:Inventory:Damaged Products";
                public const string GoodsReceipt = "Menu:Inventory:Goods Receipt";
                public const string GoodsIssue = "Menu:Inventory:Goods Issue";
                

            }
            public class Invoices
            {
                public const string NewInvoice = "Menu:Invoices:New Invoice";
                public const string InvoiceList = "Menu:Invoices:Invoices";
                

            }
            public class JobCards
            {
                public const string JobCardList = "Menu:Job Cards:Job Cards";
                public const string GatePasses = "Menu:Job Cards:Gate Passes";
                

            }
            public class Masters
            {
                public const string Countries = "Menu:Masters:Countries";
                public const string Cities = "Menu:Masters:Cities";
                public const string Territories = "Menu:Masters:Territories";
                public const string Regions = "Menu:Masters:Regions";
                public const string Shippers = "Menu:Masters:Shippers";
                public const string Warehouses = "Menu:Masters:Warehouses";
                public const string CustomerGroups = "Menu:Masters:Customer Groups";
                public const string SupplierGroups = "Menu:Masters:Supplier Groups";
                public const string AgendaItemTypes = "Menu:Masters:Agenda Item Types";
                public const string MeetingTypes = "Menu:Masters:Meeting Types";
                public const string Locations = "Menu:Masters:Locations";
                public const string AttendanceStatuses = "Menu:Masters:Attendance Statuses";
                public const string AttendeeTypes = "Menu:Masters:Attendee Types";
                public const string ResolutionStatuses = "Menu:Masters:Resolution Statuses";
                public const string JobTypes = "Menu:Masters:Job Types";
                public const string VehicleTypes = "Menu:Masters:Vehicle Types";
                public const string ColorTypes = "Menu:Masters:Color Types";
                public const string FuelTypes = "Menu:Masters:Fuel Types";

                public const string VehicleMakes = "Menu:Masters:Vehicle Makes";
                public const string AssemblyTypes = "Menu:Masters:Assembly Types";
                public const string VehicleModels = "Menu:Masters:Vehicle Models";
                public const string JobCategories = "Menu:Masters:Job Categories";
                

            }
            public class Meeting
            {
                public const string Meetings = "Menu:Meetings:Meetings";
               

            }
            public class Purchasing
            {
                public const string NewPurchase = "Menu:Purchasing:New Purchase";
                public const string Purchases = "Menu:Purchasing:Purchases";
                

            }
            public class Quotation
            {
                public const string NewQuotation = "Menu:Quotations:New Quotation";
                public const string Quotations = "Menu:Quotations:Quotations";
                

            }
            public class Reports
            {
                public const string DayClosing = "Menu:Reports:Day Closing";
                public const string TodaysReport = "Menu:Reports:Today's Report";
                public const string DailyClosingReport = "Menu:Reports:Daily Closing Report";
                public const string StockReport = "Menu:Reports:Stock Report";
                public const string SaleReport = "Menu:Reports:Sale Report";
                public const string ProductWiseSaleReport = "Menu:Reports:Product Wise Sale Report";
                public const string PurchaseReport = "Menu:Reports:Purchase Report";
                public const string CustomerReceivableReport = "Menu:Reports:Customer Receivable Report";
                public const string SupplierPayableReport = "Menu:Reports:Supplier Payable Report";
               

            }
            public class Sale
            {
                public const string NewSale = "Menu:Sales:New Sale";
                public const string Sales = "Menu:Sales:Sales";
               

            }
            public class Vehicle
            {
                public const string Vehicles = "Menu:Vehicles:Vehicles";
                
            }
            
        }

    }
}
