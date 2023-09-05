
namespace SmartERP.Invoices {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class InvoicesDialog extends Serenity.EntityDialog<InvoicesRow, any> {
        protected getFormKey() { return InvoicesForm.formKey; }
        protected getIdProperty() { return InvoicesRow.idProperty; }
        protected getLocalTextPrefix() { return InvoicesRow.localTextPrefix; }
        protected getNameProperty() { return InvoicesRow.nameProperty; }
        protected getService() { return InvoicesService.baseUrl; }
        protected getDeletePermission() { return InvoicesRow.deletePermission; }
        protected getInsertPermission() { return InvoicesRow.insertPermission; }
        protected getUpdatePermission() { return InvoicesRow.updatePermission; }

        protected form = new InvoicesForm(this.idPrefix);
         
        constructor() {
            super();

           

            this.form = new InvoicesForm(this.idPrefix);
            this.form.Date.change(e => {
             
            });
            //this.form.CustomerId.changeSelect2(e => {

            //    var custumer = Q.toId(this.form.CustomerId.value);
            //    if (custumer != null) {
            //        this.form.CustomerId.value = SmartERP.Customers.CustomersRow.getLookup().itemById[custumer].Name;
            //        this.form.Email.value = SmartERP.Customers.CustomersRow.getLookup().itemById[custumer].Email;

            //    }
            //});
           /* this.form.Email=*/
            this.form.GrandTotal.change(() => {
                this.doCalculation();
            });
            (this.form.LineItems.view as any).onRowCountChanged.subscribe(() => {
                this.doCalculation();
               
            });
            (this.form.Jobs.view as any).onRowCountChanged.subscribe(() => {
                this.doCalculation();
              
            });
            this.form.Discount.change(() => {
                this.doCalculation();
            });
            //this.form.Gst.change(() => {
            //    this.doCalculation();
            //});
            //this.form.Vat.change(() => {
            //    this.doCalculation();
            //});
            this.form.ShippingCost.change(() => {
                this.doCalculation();
            });
            this.form.PaidAmount.change(() => {
                this.doCalculation();
            });
        }
               
        public dialogOpen(asPanel?: boolean): void {
            super.dialogOpen(asPanel)

            
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.doCalculation();
        }

        private doCalculation() {
            var total = 0;
            var GST = 0;
            var GSTPercentage = 0;
            var GSTAverage = 0;
            var cout = 0;
            var Totel_Tax=0;
            for (var k of this.form.LineItems.getItems()) {
                total += k.SubTotal || 0;
               GST += k.Gst || 0;
                
                
            }
            //for (var a of this.form.LineItems.getItems())
            //{
            //    GSTPercentage += ((a.Gst / total) * 100) || 0;                              
            //}
            //this.form.CGST.value = total * GSTPercentage / 200;
            //this.form.SGST.value = total * GSTPercentage / 200;

            for (var j of this.form.Jobs.getItems()) {
                total += j.SubTotal || 0;
            }

            this.form.GrandTotal.value = total;
            
           
            var subDiscount = 0;
            for (var k of this.form.LineItems.getItems()) {
                subDiscount += (k.Discount * k.Quantity * k.UnitPrice / 100) || 0;
            }
            
            this.form.TotalDiscount.value = this.form.Discount.value + subDiscount;

            this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.ShippingCost.value;
            for (var g of this.form.Jobs.getItems()) {
                cout == 0
                cout = g.Gst;
            }
            this.form.Gst.value == 0;
            this.form.CGST.value = this.form.Gst.value / 2;
            this.form.SGST.value = this.form.Gst.value / 2;
            for (var b of this.form.LineItems.getItems()) {
                cout==0
                cout = b.Gst;
            }
            this.form.Gst.value == 0;
            this.form.Gst.value = cout;
            this.form.CGST.value = this.form.Gst.value / 2;
            this.form.SGST.value = this.form.Gst.value / 2;
            
            for (var d of this.form.Jobs.getItems()) {
                Totel_Tax += d.TotalTax || 0;
            }
            for (var c of this.form.LineItems.getItems()) {

                Totel_Tax += c.TotalTax || 0;
            }
            this.form.TotalTax.value = Totel_Tax;
             
            //var Totel_Tax = 0;
            //for (var k of this.form.LineItems.getItems()) {
            //    Totel_Tax += (k.GstPrice * k.InvoiceNetTotal / 100) || 0;
            //}
            //var vat = 0;
            //if (SmartERP.Administration.CompaniesRow.getLookup().items.length > 0) {
            //    vat = SmartERP.Administration.CompaniesRow.getLookup().items[0].VatPercentage;
            //}
            //this.form.Vat.value = (this.form.GrandTotal.value - this.form.Discount.value) * vat / 100;
            //this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
            //this.form.TotalTax.value = Totel_Tax;
            this.form.GrandTotal.value += this.form.TotalTax.value;
            this.form.Due.value = this.form.TotalTax.value + this.form.NetTotal.value - this.form.PaidAmount.value;
            if ((this.form.PaidAmount.value - this.form.NetTotal.value) > 0) {
                this.form.Change.value = this.form.PaidAmount.value - this.form.NetTotal.value;
                this.form.Due.value = 0;
            } else {
                this.form.Change.value = 0;
            }
        }
    }
}