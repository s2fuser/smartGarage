namespace SmartERP.Bookings {
    export interface VehicleBookingsRow {
        Id?: number;
        Title?: string;
        BookingDateTime?: string;
        Customer?: number;
        Vehicle?: number;
        Note?: string;
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

    export namespace VehicleBookingsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Bookings.VehicleBookings';
        export const lookupKey = 'Bookings.VehicleBookings';

        export function getLookup(): Q.Lookup<VehicleBookingsRow> {
            return Q.getLookup<VehicleBookingsRow>('Bookings.VehicleBookings');
        }
        export const deletePermission = 'Bookings:Vehicle Booking:Delete';
        export const insertPermission = 'Bookings:Vehicle Booking:Create';
        export const readPermission = 'Bookings:Vehicle Booking:View';
        export const updatePermission = 'Bookings:Vehicle Booking:Update';

        export declare const enum Fields {
            Id = "Id",
            Title = "Title",
            BookingDateTime = "BookingDateTime",
            Customer = "Customer",
            Vehicle = "Vehicle",
            Note = "Note",
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
