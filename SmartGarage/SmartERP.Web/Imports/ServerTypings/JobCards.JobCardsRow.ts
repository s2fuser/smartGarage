namespace SmartERP.JobCards {
    export interface JobCardsRow {
        Id?: number;
        Customer?: number;
        WorkOrderNo?: string;
        Address?: string;
        Vehicle?: number;
        Phone?: string;
        Reference?: string;
        Mobile?: string;
        ScheduleDatetime?: string;
        Website?: string;
        DeliveryDatetime?: string;
        Details?: string;
        JobCardDetails?: JobCardDetailsRow[];
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

    export namespace JobCardsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Id';
        export const localTextPrefix = 'JobCards.JobCards';
        export const lookupKey = 'JobCards.JobCards';

        export function getLookup(): Q.Lookup<JobCardsRow> {
            return Q.getLookup<JobCardsRow>('JobCards.JobCards');
        }
        export const deletePermission = 'Job Cards:Job Card:Delete';
        export const insertPermission = 'Job Cards:Job Card:Create';
        export const readPermission = 'Job Cards:Job Card:View';
        export const updatePermission = 'Job Cards:Job Card:Update';

        export declare const enum Fields {
            Id = "Id",
            Customer = "Customer",
            WorkOrderNo = "WorkOrderNo",
            Address = "Address",
            Vehicle = "Vehicle",
            Phone = "Phone",
            Reference = "Reference",
            Mobile = "Mobile",
            ScheduleDatetime = "ScheduleDatetime",
            Website = "Website",
            DeliveryDatetime = "DeliveryDatetime",
            Details = "Details",
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
