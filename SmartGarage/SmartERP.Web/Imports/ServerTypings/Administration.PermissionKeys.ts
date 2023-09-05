namespace SmartERP.Administration {
    declare namespace PermissionKeys {
        export const Security = "Administration:Security";
        export const Translation = "Administration:Translation";
        export const Settings = "Administration:Settings";

        namespace Currencies {
            export const View = "Administration:Currency:View";
            export const Create = "Administration:Currency:Create";
            export const Update = "Administration:Currency:Update";
            export const Delete = "Administration:Currency:Delete";
        }

        namespace Menu {
            export const Translation = "Menu:Administration:Translation";
            export const Settings = "Menu:Administration:Settings";
            export const Currency = "Menu:Administration:Currency";
            export const Security = "Menu:Administration:Security";

            namespace BusinessPartners {
                export const NewCustomers = "Menu:Business Partners:New Customers";
                export const NewSuppliers = "Menu:Business Partners:New Suppliers";
                export const Customers = "Menu:Business Partners:Customers";
                export const Suppliers = "Menu:Business Partners:Suppliers";
            }

            namespace CashBank {
                export const BankTransactions = "Menu:Cash//Bank:Bank Transactions";
                export const Expenses = "Menu:Cash//Bank:Expenses";
                export const CustomerReceive = "Menu:Cash//Bank:Customer Receive";
                export const SupplierPayment = "Menu:Cash//Bank:Supplier Payment";
                export const CashAdjustment = "Menu:Cash//Bank:Cash Adjustment";
            }

            namespace Bookings {
                export const VehicleBookings = "Menu:Bookings:Vehicle Bookings";
                export const VehicleCourtesyBooking = "Menu:Bookings:Vehicle Courtesy Booking";
            }

            namespace Financial {
                export const ChartOfAccounts = "Menu:Financial:Chart Of Accounts";
                export const OpeningBalance = "Menu:Financial:Opening Balance";
                export const DebitVoucher = "Menu:Financial:Debit Voucher";
                export const CreditVoucher = "Menu:Financial:Credit Voucher";
                export const ContraVoucher = "Menu:Financial:Contra Voucher";
                export const JournalVoucher = "Menu:Financial:Journal Voucher";
            }

            namespace HumanResource {
                export const NewEmployee = "Menu:Human Resource:New Employee";
                export const Employees = "Menu:Human Resource:Employees";
                export const Departments = "Menu:Human Resource:Departments";
                export const Designations = "Menu:Human Resource:Designations";
                export const Attendance = "Menu:Human Resource:Attendance";
            }

            namespace Inspections {
                export const InspectionList = "Menu:Inspections:Inspections";
            }

            namespace Inventory {
                export const Products = "Menu:Inventory:Products";
                export const Categories = "Menu:Inventory:Categories";
                export const Units = "Menu:Inventory:Units";
                export const Brands = "Menu:Inventory:Brands";
                export const DamagedProducts = "Menu:Inventory:Damaged Products";
                export const GoodsReceipt = "Menu:Inventory:Goods Receipt";
                export const GoodsIssue = "Menu:Inventory:Goods Issue";
            }

            namespace Invoices {
                export const NewInvoice = "Menu:Invoices:New Invoice";
                export const InvoiceList = "Menu:Invoices:Invoices";
            }

            namespace JobCards {
                export const JobCardList = "Menu:Job Cards:Job Cards";
                export const GatePasses = "Menu:Job Cards:Gate Passes";
            }

            namespace Masters {
                export const Countries = "Menu:Masters:Countries";
                export const Cities = "Menu:Masters:Cities";
                export const Territories = "Menu:Masters:Territories";
                export const Regions = "Menu:Masters:Regions";
                export const Shippers = "Menu:Masters:Shippers";
                export const Warehouses = "Menu:Masters:Warehouses";
                export const CustomerGroups = "Menu:Masters:Customer Groups";
                export const SupplierGroups = "Menu:Masters:Supplier Groups";
                export const AgendaItemTypes = "Menu:Masters:Agenda Item Types";
                export const MeetingTypes = "Menu:Masters:Meeting Types";
                export const Locations = "Menu:Masters:Locations";
                export const AttendanceStatuses = "Menu:Masters:Attendance Statuses";
                export const AttendeeTypes = "Menu:Masters:Attendee Types";
                export const ResolutionStatuses = "Menu:Masters:Resolution Statuses";
                export const JobTypes = "Menu:Masters:Job Types";
                export const VehicleTypes = "Menu:Masters:Vehicle Types";
                export const ColorTypes = "Menu:Masters:Color Types";
                export const FuelTypes = "Menu:Masters:Fuel Types";
                export const VehicleMakes = "Menu:Masters:Vehicle Makes";
                export const AssemblyTypes = "Menu:Masters:Assembly Types";
                export const VehicleModels = "Menu:Masters:Vehicle Models";
                export const JobCategories = "Menu:Masters:Job Categories";
            }

            namespace Meeting {
                export const Meetings = "Menu:Meetings:Meetings";
            }

            namespace Purchasing {
                export const NewPurchase = "Menu:Purchasing:New Purchase";
                export const Purchases = "Menu:Purchasing:Purchases";
            }

            namespace Quotation {
                export const NewQuotation = "Menu:Quotations:New Quotation";
                export const Quotations = "Menu:Quotations:Quotations";
            }

            namespace Reports {
                export const DayClosing = "Menu:Reports:Day Closing";
                export const TodaysReport = "Menu:Reports:Today's Report";
                export const DailyClosingReport = "Menu:Reports:Daily Closing Report";
                export const StockReport = "Menu:Reports:Stock Report";
                export const SaleReport = "Menu:Reports:Sale Report";
                export const ProductWiseSaleReport = "Menu:Reports:Product Wise Sale Report";
                export const PurchaseReport = "Menu:Reports:Purchase Report";
                export const CustomerReceivableReport = "Menu:Reports:Customer Receivable Report";
                export const SupplierPayableReport = "Menu:Reports:Supplier Payable Report";
            }

            namespace Sale {
                export const NewSale = "Menu:Sales:New Sale";
                export const Sales = "Menu:Sales:Sales";
            }

            namespace Vehicle {
                export const Vehicles = "Menu:Vehicles:Vehicles";
            }
        }
    }
}
