namespace SmartERP.Vehicles {
    export interface VehiclesRow {
        Id?: number;
        CustomerId?: number;
        VehicleRegistration?: string;
        ChassisNo?: string;
        Year?: number;
        Mileage?: number;
        Seats?: number;
        Make?: number;
        CcRating?: string;
        Model?: number;
        FuelType?: number;
        Color?: number;
        AssemblyType?: number;
        SecondColor?: number;
        CountryOfOrigin?: number;
        SubModel?: string;
        GrossVehicleMass?: number;
        BodyStyle?: string;
        TareWeight?: string;
        Axles?: string;
        Wheelbase?: string;
        EngineNo?: string;
        FrontAxleGroupRating?: string;
        VehicleType?: number;
        RearAxleGroupRating?: string;
        Brand?: number;
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
        MakeName?: string;
        ModelName?: string;
        FuelTypeName?: string;
        ColorName?: string;
        AssemblyTypeName?: string;
        SecondColorName?: string;
        CountryOfOriginName?: string;
        CountryOfOriginInsertDate?: string;
        CountryOfOriginInsertUserId?: number;
        CountryOfOriginUpdateDate?: string;
        CountryOfOriginUpdateUserId?: number;
        CountryOfOriginDeleteDate?: string;
        CountryOfOriginDeleteUserId?: number;
        CountryOfOriginIsActive?: number;
        VehicleTypeName?: string;
        BrandName?: string;
        BrandDescription?: string;
        BrandInsertDate?: string;
        BrandInsertUserId?: number;
        BrandUpdateDate?: string;
        BrandUpdateUserId?: number;
        BrandDeleteDate?: string;
        BrandDeleteUserId?: number;
        BrandIsActive?: number;
    }

    export namespace VehiclesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'VehicleRegistration';
        export const localTextPrefix = 'Vehicles.Vehicles';
        export const lookupKey = 'Vehicles.Vehicles';

        export function getLookup(): Q.Lookup<VehiclesRow> {
            return Q.getLookup<VehiclesRow>('Vehicles.Vehicles');
        }
        export const deletePermission = 'Vehicles:Vehicle:Delete';
        export const insertPermission = 'Vehicles:Vehicle:Create';
        export const readPermission = 'Vehicles:Vehicle:View';
        export const updatePermission = 'Vehicles:Vehicle:Update';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            VehicleRegistration = "VehicleRegistration",
            ChassisNo = "ChassisNo",
            Year = "Year",
            Mileage = "Mileage",
            Seats = "Seats",
            Make = "Make",
            CcRating = "CcRating",
            Model = "Model",
            FuelType = "FuelType",
            Color = "Color",
            AssemblyType = "AssemblyType",
            SecondColor = "SecondColor",
            CountryOfOrigin = "CountryOfOrigin",
            SubModel = "SubModel",
            GrossVehicleMass = "GrossVehicleMass",
            BodyStyle = "BodyStyle",
            TareWeight = "TareWeight",
            Axles = "Axles",
            Wheelbase = "Wheelbase",
            EngineNo = "EngineNo",
            FrontAxleGroupRating = "FrontAxleGroupRating",
            VehicleType = "VehicleType",
            RearAxleGroupRating = "RearAxleGroupRating",
            Brand = "Brand",
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
            MakeName = "MakeName",
            ModelName = "ModelName",
            FuelTypeName = "FuelTypeName",
            ColorName = "ColorName",
            AssemblyTypeName = "AssemblyTypeName",
            SecondColorName = "SecondColorName",
            CountryOfOriginName = "CountryOfOriginName",
            CountryOfOriginInsertDate = "CountryOfOriginInsertDate",
            CountryOfOriginInsertUserId = "CountryOfOriginInsertUserId",
            CountryOfOriginUpdateDate = "CountryOfOriginUpdateDate",
            CountryOfOriginUpdateUserId = "CountryOfOriginUpdateUserId",
            CountryOfOriginDeleteDate = "CountryOfOriginDeleteDate",
            CountryOfOriginDeleteUserId = "CountryOfOriginDeleteUserId",
            CountryOfOriginIsActive = "CountryOfOriginIsActive",
            VehicleTypeName = "VehicleTypeName",
            BrandName = "BrandName",
            BrandDescription = "BrandDescription",
            BrandInsertDate = "BrandInsertDate",
            BrandInsertUserId = "BrandInsertUserId",
            BrandUpdateDate = "BrandUpdateDate",
            BrandUpdateUserId = "BrandUpdateUserId",
            BrandDeleteDate = "BrandDeleteDate",
            BrandDeleteUserId = "BrandDeleteUserId",
            BrandIsActive = "BrandIsActive"
        }
    }
}
