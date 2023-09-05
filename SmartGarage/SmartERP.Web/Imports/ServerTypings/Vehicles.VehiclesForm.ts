namespace SmartERP.Vehicles {
    export interface VehiclesForm {
        CustomerId: Serenity.LookupEditor;
        VehicleRegistration: Serenity.StringEditor;
        ChassisNo: Serenity.StringEditor;
        Brand: Serenity.LookupEditor;
        Year: Serenity.IntegerEditor;
        Mileage: Serenity.IntegerEditor;
        Seats: Serenity.IntegerEditor;
        Make: Serenity.LookupEditor;
        CcRating: Serenity.StringEditor;
        Model: Serenity.LookupEditor;
        FuelType: Serenity.LookupEditor;
        Color: Serenity.LookupEditor;
        AssemblyType: Serenity.LookupEditor;
        SecondColor: Serenity.LookupEditor;
        CountryOfOrigin: Serenity.LookupEditor;
        SubModel: Serenity.StringEditor;
        GrossVehicleMass: Serenity.IntegerEditor;
        BodyStyle: Serenity.StringEditor;
        TareWeight: Serenity.StringEditor;
        Axles: Serenity.StringEditor;
        Wheelbase: Serenity.StringEditor;
        EngineNo: Serenity.StringEditor;
        FrontAxleGroupRating: Serenity.StringEditor;
        VehicleType: Serenity.LookupEditor;
        RearAxleGroupRating: Serenity.StringEditor;
    }

    export class VehiclesForm extends Serenity.PrefixedContext {
        static formKey = 'Vehicles.Vehicles';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehiclesForm.init)  {
                VehiclesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(VehiclesForm, [
                    'CustomerId', w0,
                    'VehicleRegistration', w1,
                    'ChassisNo', w1,
                    'Brand', w0,
                    'Year', w2,
                    'Mileage', w2,
                    'Seats', w2,
                    'Make', w0,
                    'CcRating', w1,
                    'Model', w0,
                    'FuelType', w0,
                    'Color', w0,
                    'AssemblyType', w0,
                    'SecondColor', w0,
                    'CountryOfOrigin', w0,
                    'SubModel', w1,
                    'GrossVehicleMass', w2,
                    'BodyStyle', w1,
                    'TareWeight', w1,
                    'Axles', w1,
                    'Wheelbase', w1,
                    'EngineNo', w1,
                    'FrontAxleGroupRating', w1,
                    'VehicleType', w0,
                    'RearAxleGroupRating', w1
                ]);
            }
        }
    }
}
