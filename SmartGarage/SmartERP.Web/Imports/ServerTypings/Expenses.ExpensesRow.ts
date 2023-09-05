namespace SmartERP.Expenses {
    export interface ExpensesRow {
        Id?: number;
        ExpenseTypeId?: number;
        VNo?: number;
        Date?: string;
        PaymentAccount?: number;
        Amount?: number;
        ExpenseTypeType?: string;
        HeadCodeName?: string;
    }

    export namespace ExpensesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Expenses.Expenses';
        export const lookupKey = 'Expenses.Expenses';

        export function getLookup(): Q.Lookup<ExpensesRow> {
            return Q.getLookup<ExpensesRow>('Expenses.Expenses');
        }
        export const deletePermission = 'Cash\/Bank:Expense:Delete';
        export const insertPermission = 'Cash\/Bank:Expense:Create';
        export const readPermission = 'Cash\/Bank:Expense:View';
        export const updatePermission = 'Cash\/Bank:Expense:Update';

        export declare const enum Fields {
            Id = "Id",
            ExpenseTypeId = "ExpenseTypeId",
            VNo = "VNo",
            Date = "Date",
            PaymentAccount = "PaymentAccount",
            Amount = "Amount",
            ExpenseTypeType = "ExpenseTypeType",
            HeadCodeName = "HeadCodeName"
        }
    }
}
