﻿
using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmartERP.Masters
{
    [NestedPermissionKeys]
    [DisplayName("Masters")]
    public class PermissionKeys
    {

        [DisplayName("Countries")]
        public class Countries
        {
            public const string View = "Masters:Country:View";
            public const string Create = "Masters:Country:Create";
            public const string Update = "Masters:Country:Update";
            public const string Delete = "Masters:Country:Delete";
        }
        [DisplayName("States")]
        public class States
        {
            public const string View = "Masters:State:View";
            public const string Create = "Masters:State:Create";
            public const string Update = "Masters:State:Update";
            public const string Delete = "Masters:State:Delete";
        }
        [DisplayName("Cities")]
        public class Cities
        {
            public const string View = "Masters:City:View";
            public const string Create = "Masters:City:Create";
            public const string Update = "Masters:City:Update";
            public const string Delete = "Masters:City:Delete";
        }

        [DisplayName("Banks")]
        public class Banks
        {
            public const string View = "Masters:Bank:View";
            public const string Create = "Masters:Bank:Create";
            public const string Update = "Masters:Bank:Update";
            public const string Delete = "Masters:Bank:Delete";
        }
        [DisplayName("Expense Types")]
        public class ExpenseTypes
        {
            public const string View = "Masters:Expense Type:View";
            public const string Create = "Masters:Expense Type:Create";
            public const string Update = "Masters:Expense Type:Update";
            public const string Delete = "Masters:Expense Type:Delete";
        }
        [DisplayName("Regions")]
        public class Regions
        {
            public const string View = "Masters:Region:View";
            public const string Create = "Masters:Region:Create";
            public const string Update = "Masters:Region:Update";
            public const string Delete = "Masters:Region:Delete";
        }
        [DisplayName("Shippers")]
        public class Shippers
        {
            public const string View = "Masters:Shipper:View";
            public const string Create = "Masters:Shipper:Create";
            public const string Update = "Masters:Shipper:Update";
            public const string Delete = "Masters:Shipper:Delete";
        }


        [DisplayName("Territories")]
        public class Territories
        {
            public const string View = "Masters:Territory:View";
            public const string Create = "Masters:Territory:Create";
            public const string Update = "Masters:Territory:Update";
            public const string Delete = "Masters:Territory:Delete";
        }
        [DisplayName("Warehouses")]
        public class Warehouses
        {
            public const string View = "Masters:Warehouse:View";
            public const string Create = "Masters:Warehouse:Create";
            public const string Update = "Masters:Warehouse:Update";
            public const string Delete = "Masters:Warehouse:Delete";
        }
        [DisplayName("Services")]
        public class Services
        {
            public const string View = "Masters:Service:View";
            public const string Create = "Masters:Service:Create";
            public const string Update = "Masters:Service:Update";
            public const string Delete = "Masters:Service:Delete";
        }
        [DisplayName("Customer Groups")]
        public class CustomerGroups
        {
            public const string View = "Masters:Customer Groups:View";
            public const string Create = "Masters:Customer Groups:Create";
            public const string Update = "Masters:Customer Groups:Update";
            public const string Delete = "Masters:Customer Groups:Delete";
        }
        [DisplayName("Supplier Groups")]
        public class SupplierGroups
        {
            public const string View = "Masters:Supplier Groups:View";
            public const string Create = "Masters:Supplier Groups:Create";
            public const string Update = "Masters:Supplier Groups:Update";
            public const string Delete = "Masters:Supplier Groups:Delete";
        }

        [DisplayName("Locations")]
        public class Locations
        {
            public const string View = "Masters:Locations:View";
            public const string Create = "Masters:Locations:Create";
            public const string Update = "Masters:Locations:Update";
            public const string Delete = "Masters:Locations:Delete";
        }

        [DisplayName("Meeting Types")]
        public class MeetingTypes
        {
            public const string View = "Masters:Meeting Types:View";
            public const string Create = "Masters:Meeting Types:Create";
            public const string Update = "Masters:Meeting Types:Update";
            public const string Delete = "Masters:Meeting Types:Delete";
        }

        [DisplayName("Agenda Item Types")]
        public class AgendaItemTypes
        {
            public const string View = "Masters:Agenda Item Types:View";
            public const string Create = "Masters:Agenda Item Types:Create";
            public const string Update = "Masters:Agenda Item Types:Update";
            public const string Delete = "Masters:Agenda Item Types:Delete";
        }

        [DisplayName("Attendance Statuses")]
        public class AttendanceStatuses
        {
            public const string View = "Masters:Attendance Statusess:View";
            public const string Create = "Masters:Attendance Statuses:Create";
            public const string Update = "Masters:Attendance Statuses:Update";
            public const string Delete = "Masters:Attendance Statuses:Delete";
        }

        [DisplayName("Attendee Types")]
        public class AttendeeTypes
        {
            public const string View = "Masters:Attendee Types:View";
            public const string Create = "Masters:Attendee Types:Create";
            public const string Update = "Masters:Attendee Types:Update";
            public const string Delete = "Masters:Attendee Types:Delete";
        }

        [DisplayName("Resolution Statuses")]
        public class ResolutionStatuses
        {
            public const string View = "Masters:Resolution Statuses:View";
            public const string Create = "Masters:Resolution Statuses:Create";
            public const string Update = "Masters:Resolution Statuses:Update";
            public const string Delete = "Masters:Resolution Statuses:Delete";
        }

        //**********

        [DisplayName("Assembly Types")]
        public class AssemblyTypes
        {
            public const string View = "Masters:Assembly Types:View";
            public const string Create = "Masters:Assembly Types:Create";
            public const string Update = "Masters:Assembly Types:Update";
            public const string Delete = "Masters:Assembly Types:Delete";
        }
        [DisplayName("Color Types")]
        public class ColorTypes
        {
            public const string View = "Masters:Color Types:View";
            public const string Create = "Masters:Color Types:Create";
            public const string Update = "Masters:Color Types:Update";
            public const string Delete = "Masters:Color Types:Delete";
        }
        [DisplayName("Fuel Types")]
        public class FuelTypes
        {
            public const string View = "Masters:Fuel Types:View";
            public const string Create = "Masters:Fuel Types:Create";
            public const string Update = "Masters:Fuel Types:Update";
            public const string Delete = "Masters:Fuel Types:Delete";
        }
        [DisplayName("Job Types")]
        public class JobTypes
        {
            public const string View = "Masters:Job Types:View";
            public const string Create = "Masters:Job Types:Create";
            public const string Update = "Masters:Job Types:Update";
            public const string Delete = "Masters:Job Types:Delete";
        }
        [DisplayName("Vehicle Makes")]
        public class VehicleMakes
        {
            public const string View = "Masters:Vehicle Makes:View";
            public const string Create = "Masters:Vehicle Makes:Create";
            public const string Update = "Masters:Vehicle Makes:Update";
            public const string Delete = "Masters:Vehicle Makes:Delete";
        }
        [DisplayName("Vehicle Models")]
        public class VehicleModels
        {
            public const string View = "Masters:Vehicle Models:View";
            public const string Create = "Masters:Vehicle Models:Create";
            public const string Update = "Masters:Vehicle Models:Update";
            public const string Delete = "Masters:Vehicle Models:Delete";
        }
        [DisplayName("Vehicle Types")]
        public class VehicleTypes
        {
            public const string View = "Masters:Vehicle Types:View";
            public const string Create = "Masters:Vehicle Types:Create";
            public const string Update = "Masters:Vehicle Types:Update";
            public const string Delete = "Masters:Vehicle Types:Delete";
        }
        [DisplayName("Job Categories")]
        public class JobCategories
        {
            public const string View = "Masters:Job Categories:View";
            public const string Create = "Masters:Job Categories:Create";
            public const string Update = "Masters:Job Categories:Update";
            public const string Delete = "Masters:Job Categories:Delete";
        }
        //[DisplayName("Warehouses")]
        //public class Warehouses
        //{
        //    public const string View = "Masters:Warehouse:View";
        //    public const string Create = "Masters:Warehouse:Create";
        //    public const string Update = "Masters:Warehouse:Update";
        //    public const string Delete = "Masters:Warehouse:Delete";
        //}
        //[DisplayName("Warehouses")]
        //public class Warehouses
        //{
        //    public const string View = "Masters:Warehouse:View";
        //    public const string Create = "Masters:Warehouse:Create";
        //    public const string Update = "Masters:Warehouse:Update";
        //    public const string Delete = "Masters:Warehouse:Delete";
        //}
        //[DisplayName("Warehouses")]
        //public class Warehouses
        //{
        //    public const string View = "Masters:Warehouse:View";
        //    public const string Create = "Masters:Warehouse:Create";
        //    public const string Update = "Masters:Warehouse:Update";
        //    public const string Delete = "Masters:Warehouse:Delete";
        //}
        //[DisplayName("Warehouses")]
        //public class Warehouses
        //{
        //    public const string View = "Masters:Warehouse:View";
        //    public const string Create = "Masters:Warehouse:Create";
        //    public const string Update = "Masters:Warehouse:Update";
        //    public const string Delete = "Masters:Warehouse:Delete";
        //}
        //[DisplayName("Warehouses")]
        //public class Warehouses
        //{
        //    public const string View = "Masters:Warehouse:View";
        //    public const string Create = "Masters:Warehouse:Create";
        //    public const string Update = "Masters:Warehouse:Update";
        //    public const string Delete = "Masters:Warehouse:Delete";
        //}
    }
}
