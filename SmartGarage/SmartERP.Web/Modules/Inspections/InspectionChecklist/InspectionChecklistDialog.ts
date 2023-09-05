
namespace SmartERP.Inspections {

    @Serenity.Decorators.registerClass()
    export class InspectionChecklistDialog extends Serenity.EntityDialog<InspectionChecklistRow, any> {
        protected getFormKey() { return InspectionChecklistForm.formKey; }
        protected getIdProperty() { return InspectionChecklistRow.idProperty; }
        protected getLocalTextPrefix() { return InspectionChecklistRow.localTextPrefix; }
        protected getService() { return InspectionChecklistService.baseUrl; }
        protected getDeletePermission() { return InspectionChecklistRow.deletePermission; }
        protected getInsertPermission() { return InspectionChecklistRow.insertPermission; }
        protected getUpdatePermission() { return InspectionChecklistRow.updatePermission; }

        protected form = new InspectionChecklistForm(this.idPrefix);

    }
}