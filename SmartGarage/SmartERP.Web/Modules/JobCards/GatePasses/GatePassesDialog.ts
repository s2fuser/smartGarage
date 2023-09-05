
namespace SmartERP.JobCards {

    @Serenity.Decorators.registerClass()
    export class GatePassesDialog extends Serenity.EntityDialog<GatePassesRow, any> {
        protected getFormKey() { return GatePassesForm.formKey; }
        protected getIdProperty() { return GatePassesRow.idProperty; }
        protected getLocalTextPrefix() { return GatePassesRow.localTextPrefix; }
        protected getService() { return GatePassesService.baseUrl; }
        protected getDeletePermission() { return GatePassesRow.deletePermission; }
        protected getInsertPermission() { return GatePassesRow.insertPermission; }
        protected getUpdatePermission() { return GatePassesRow.updatePermission; }

        protected form = new GatePassesForm(this.idPrefix);
        constructor() {
            super();
            this.form = new GatePassesForm(this.idPrefix);

            this.form.JobCard.changeSelect2(e => {
                var jobCardID = Q.toId(this.form.JobCard.value);
                if (jobCardID != null) {
                    this.form.Customer.value = SmartERP.JobCards.JobCardsRow.getLookup().itemById[jobCardID].Customer.toString();
                    this.form.Vehicle.value = SmartERP.JobCards.JobCardsRow.getLookup().itemById[jobCardID].Vehicle.toString();
                    
                }
            });           
        }

    }
}