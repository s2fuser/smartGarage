namespace SmartERP.Bookings {
    export interface VehicleBookingsForm {
        Title: Serenity.StringEditor;
        BookingDateTime: Serenity.DateTimeEditor;
        Customer: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class VehicleBookingsForm extends Serenity.PrefixedContext {
        static formKey = 'Bookings.VehicleBookings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicleBookingsForm.init)  {
                VehicleBookingsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateTimeEditor;
                var w2 = s.LookupEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(VehicleBookingsForm, [
                    'Title', w0,
                    'BookingDateTime', w1,
                    'Customer', w2,
                    'Vehicle', w2,
                    'Note', w3
                ]);
            }
        }
    }
}
