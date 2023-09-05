namespace SmartERP.Invoices {
    export interface InvoicesRow {
        Id?: number;
        CustomerId?: number;
        InsuranceCoName?: string;
        InsuranceCoAdd?: string;
        InsuranceCoCit?: string;
        GstIN?: string;
        Jobcard?: number;
        Vehicle?: number;
        Date?: string;
        Discount?: number;
        TotalDiscount?: number;
        Gst?: number;
        CGST?: number;
        SGST?: number;
        TotalTax?: number;
        ShippingCost?: number;
        GrandTotal?: number;
        NetTotal?: number;
        PaidAmount?: number;
        Due?: number;
        Change?: number;
        Details?: string;
        LineItems?: InvoiceItemsRow[];
        Jobs?: InvoiceJobItemsRow[];
        HeadCodeName?: string;
        PaymentAccount?: number;
        VNo?: number;
        ScheduleDatetime?: string;
        DeliveryDatetime?: string;
        CustomerName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCountryId?: number;
        CustomerStateId?: number;
        CustomerCityId?: number;
        CustomerAddress?: string;
        CustomerRegionId?: number;
        CustomerPostalCode?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerWebsite?: string;
        CustomerEmailAddress?: string;
        CustomerPreviousCreditBalance?: number;
        CustomerInsertDate?: string;
        CustomerInsertUserId?: number;
        CustomerUpdateDate?: string;
        CustomerUpdateUserId?: number;
        CustomerDeleteDate?: string;
        CustomerDeleteUserId?: number;
        CustomerIsActive?: number;
        CustomerCustomerGroupId?: number;
        JobcardCustomer?: number;
        JobcardWorkOrderNo?: string;
        JobcardAddress?: string;
        ServiceType?: string;
        JobcardVehicle?: number;
        JobcardPhone?: string;
        JobcardReference?: string;
        JobcardMobile?: string;
        JobcardScheduleDatetime?: string;
        JobcardWebsite?: string;
        JobcardDeliveryDatetime?: string;
        JobcardDetails?: string;
        VehicleCustomerId?: number;
        VehicleVehicleRegistration?: string;
        VehicleYear?: number;
        VehicleSeats?: number;
        VehicleMake?: number;
        VehicleCcRating?: string;
        VehicleModel?: number;
        VehicleFuelType?: number;
        VehicleColor?: number;
        VehicleAssemblyType?: number;
        VehicleSecondColor?: number;
        VehicleCountryOfOrigin?: number;
        VehicleSubModel?: string;
        VehicleGrossVehicleMass?: number;
        VehicleBodyStyle?: string;
        VehicleTareWeight?: string;
        VehicleAxles?: string;
        VehicleWheelbase?: string;
        VehicleEngineNo?: string;
        VehicleFrontAxleGroupRating?: string;
        VehicleVehicleType?: number;
        VehicleRearAxleGroupRating?: string;
        VehicleBrand?: number;
    }

    export namespace InvoicesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Details';
        export const localTextPrefix = 'Invoices.Invoices';
        export const lookupKey = 'Invoices.Invoices';

        export function getLookup(): Q.Lookup<InvoicesRow> {
            return Q.getLookup<InvoicesRow>('Invoices.Invoices');
        }
        export const deletePermission = 'Invoices:Invoice:Delete';
        export const insertPermission = 'Invoices:Invoice:Create';
        export const readPermission = 'Invoices:Invoice:View';
        export const updatePermission = 'Invoices:Invoice:Update';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            InsuranceCoName = "InsuranceCoName",
            InsuranceCoAdd = "InsuranceCoAdd",
            InsuranceCoCit = "InsuranceCoCit",
            GstIN = "GstIN",
            Jobcard = "Jobcard",
            Vehicle = "Vehicle",
            Date = "Date",
            Discount = "Discount",
            TotalDiscount = "TotalDiscount",
            Gst = "Gst",
            CGST = "CGST",
            SGST = "SGST",
            TotalTax = "TotalTax",
            ShippingCost = "ShippingCost",
            GrandTotal = "GrandTotal",
            NetTotal = "NetTotal",
            PaidAmount = "PaidAmount",
            Due = "Due",
            Change = "Change",
            Details = "Details",
            LineItems = "LineItems",
            Jobs = "Jobs",
            HeadCodeName = "HeadCodeName",
            PaymentAccount = "PaymentAccount",
            VNo = "VNo",
            ScheduleDatetime = "ScheduleDatetime",
            DeliveryDatetime = "DeliveryDatetime",
            CustomerName = "CustomerName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCountryId = "CustomerCountryId",
            CustomerStateId = "CustomerStateId",
            CustomerCityId = "CustomerCityId",
            CustomerAddress = "CustomerAddress",
            CustomerRegionId = "CustomerRegionId",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerWebsite = "CustomerWebsite",
            CustomerEmailAddress = "CustomerEmailAddress",
            CustomerPreviousCreditBalance = "CustomerPreviousCreditBalance",
            CustomerInsertDate = "CustomerInsertDate",
            CustomerInsertUserId = "CustomerInsertUserId",
            CustomerUpdateDate = "CustomerUpdateDate",
            CustomerUpdateUserId = "CustomerUpdateUserId",
            CustomerDeleteDate = "CustomerDeleteDate",
            CustomerDeleteUserId = "CustomerDeleteUserId",
            CustomerIsActive = "CustomerIsActive",
            CustomerCustomerGroupId = "CustomerCustomerGroupId",
            JobcardCustomer = "JobcardCustomer",
            JobcardWorkOrderNo = "JobcardWorkOrderNo",
            JobcardAddress = "JobcardAddress",
            ServiceType = "ServiceType",
            JobcardVehicle = "JobcardVehicle",
            JobcardPhone = "JobcardPhone",
            JobcardReference = "JobcardReference",
            JobcardMobile = "JobcardMobile",
            JobcardScheduleDatetime = "JobcardScheduleDatetime",
            JobcardWebsite = "JobcardWebsite",
            JobcardDeliveryDatetime = "JobcardDeliveryDatetime",
            JobcardDetails = "JobcardDetails",
            VehicleCustomerId = "VehicleCustomerId",
            VehicleVehicleRegistration = "VehicleVehicleRegistration",
            VehicleYear = "VehicleYear",
            VehicleSeats = "VehicleSeats",
            VehicleMake = "VehicleMake",
            VehicleCcRating = "VehicleCcRating",
            VehicleModel = "VehicleModel",
            VehicleFuelType = "VehicleFuelType",
            VehicleColor = "VehicleColor",
            VehicleAssemblyType = "VehicleAssemblyType",
            VehicleSecondColor = "VehicleSecondColor",
            VehicleCountryOfOrigin = "VehicleCountryOfOrigin",
            VehicleSubModel = "VehicleSubModel",
            VehicleGrossVehicleMass = "VehicleGrossVehicleMass",
            VehicleBodyStyle = "VehicleBodyStyle",
            VehicleTareWeight = "VehicleTareWeight",
            VehicleAxles = "VehicleAxles",
            VehicleWheelbase = "VehicleWheelbase",
            VehicleEngineNo = "VehicleEngineNo",
            VehicleFrontAxleGroupRating = "VehicleFrontAxleGroupRating",
            VehicleVehicleType = "VehicleVehicleType",
            VehicleRearAxleGroupRating = "VehicleRearAxleGroupRating",
            VehicleBrand = "VehicleBrand"
        }
    }
}
