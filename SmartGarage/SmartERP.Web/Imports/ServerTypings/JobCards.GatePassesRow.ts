namespace SmartERP.JobCards {
    export interface GatePassesRow {
        Id?: number;
        JobCard?: number;
        Customer?: number;
        Vehicle?: number;
        VehicleOutDate?: string;
        JobCardCustomer?: number;
        JobCardWorkOrderNo?: string;
        JobCardAddress?: string;
        JobCardVehicle?: number;
        JobCardPhone?: string;
        JobCardReference?: string;
        JobCardMobile?: string;
        JobCardScheduleDatetime?: string;
        JobCardWebsite?: string;
        JobCardDeliveryDatetime?: string;
        JobCardDetails?: string;
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
        CustomerEmail?: string;
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

    export namespace GatePassesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'JobCards.GatePasses';
        export const lookupKey = 'JobCards.GatePasses';

        export function getLookup(): Q.Lookup<GatePassesRow> {
            return Q.getLookup<GatePassesRow>('JobCards.GatePasses');
        }
        export const deletePermission = 'Gate Passes:Gate Passe:Delete';
        export const insertPermission = 'Gate Passes:Gate Passe:Create';
        export const readPermission = 'Gate Passes:Gate Passe:View';
        export const updatePermission = 'Gate Passes:Gate Passe:Update';

        export declare const enum Fields {
            Id = "Id",
            JobCard = "JobCard",
            Customer = "Customer",
            Vehicle = "Vehicle",
            VehicleOutDate = "VehicleOutDate",
            JobCardCustomer = "JobCardCustomer",
            JobCardWorkOrderNo = "JobCardWorkOrderNo",
            JobCardAddress = "JobCardAddress",
            JobCardVehicle = "JobCardVehicle",
            JobCardPhone = "JobCardPhone",
            JobCardReference = "JobCardReference",
            JobCardMobile = "JobCardMobile",
            JobCardScheduleDatetime = "JobCardScheduleDatetime",
            JobCardWebsite = "JobCardWebsite",
            JobCardDeliveryDatetime = "JobCardDeliveryDatetime",
            JobCardDetails = "JobCardDetails",
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
            CustomerEmail = "CustomerEmail",
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
