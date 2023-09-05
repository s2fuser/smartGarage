namespace SmartERP.Bookings {
    export interface VehicleCourtesyBookingForm {
        Title: Serenity.StringEditor;
        StartDateTime: Serenity.DateEditor;
        EndDateTime: Serenity.DateEditor;
        Customer: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class VehicleCourtesyBookingForm extends Serenity.PrefixedContext {
        static formKey = 'Bookings.VehicleCourtesyBooking';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicleCourtesyBookingForm.init)  {
                VehicleCourtesyBookingForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(VehicleCourtesyBookingForm, [
                    'Title', w0,
                    'StartDateTime', w1,
                    'EndDateTime', w1,
                    'Customer', w2,
                    'Vehicle', w2,
                    'Note', w3
                ]);
            }
        }
    }
}
