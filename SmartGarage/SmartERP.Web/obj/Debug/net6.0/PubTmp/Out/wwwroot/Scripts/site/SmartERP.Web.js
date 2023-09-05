﻿var SmartERP;
(function (SmartERP) {
    var AccountKind;
    (function (AccountKind) {
        AccountKind[AccountKind["Debit"] = 1] = "Debit";
        AccountKind[AccountKind["Credit"] = 2] = "Credit";
    })(AccountKind = SmartERP.AccountKind || (SmartERP.AccountKind = {}));
    Serenity.Decorators.registerEnumType(AccountKind, 'SmartERP.AccountKind');
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsForm = /** @class */ (function (_super) {
            __extends(AccountsForm, _super);
            function AccountsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AccountsForm.init) {
                    AccountsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = Accounts.AccountsEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(AccountsForm, [
                        'HeadName', w0,
                        'HeadCode', w1,
                        'ParentHead', w2,
                        'PHeadName', w0,
                        'HeadLevel', w1,
                        'HeadType', w0,
                        'IsTransaction', w3,
                        'IsGl', w3
                    ]);
                }
                return _this;
            }
            AccountsForm.formKey = 'Accounts.Accounts';
            return AccountsForm;
        }(Serenity.PrefixedContext));
        Accounts.AccountsForm = AccountsForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsRow;
        (function (AccountsRow) {
            AccountsRow.idProperty = 'Id';
            AccountsRow.isActiveProperty = 'IsActive';
            AccountsRow.nameProperty = 'HeadCode';
            AccountsRow.localTextPrefix = 'Accounts.Accounts';
            AccountsRow.lookupKey = 'Accounts.Accounts';
            function getLookup() {
                return Q.getLookup('Accounts.Accounts');
            }
            AccountsRow.getLookup = getLookup;
            AccountsRow.deletePermission = 'Financial:Chart Of Accounts:Delete';
            AccountsRow.insertPermission = 'Financial:Chart Of Accounts:Create';
            AccountsRow.readPermission = 'Financial:Chart Of Accounts:View';
            AccountsRow.updatePermission = 'Financial:Chart Of Accounts:Update';
        })(AccountsRow = Accounts.AccountsRow || (Accounts.AccountsRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsService;
        (function (AccountsService) {
            AccountsService.baseUrl = 'Accounts/Accounts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AccountsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AccountsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AccountsService = Accounts.AccountsService || (Accounts.AccountsService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var BankTransactionsForm = /** @class */ (function (_super) {
            __extends(BankTransactionsForm, _super);
            function BankTransactionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BankTransactionsForm.init) {
                    BankTransactionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(BankTransactionsForm, [
                        'VDate', w0,
                        'AccountType', w1,
                        'VNo', w2,
                        'CoaId', w3,
                        'Credit', w4,
                        'Narration', w5
                    ]);
                }
                return _this;
            }
            BankTransactionsForm.formKey = 'Accounts.BankTransactions';
            return BankTransactionsForm;
        }(Serenity.PrefixedContext));
        Accounts.BankTransactionsForm = BankTransactionsForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var BankTransactionsRow;
        (function (BankTransactionsRow) {
            BankTransactionsRow.idProperty = 'Id';
            BankTransactionsRow.nameProperty = 'VNo';
            BankTransactionsRow.localTextPrefix = 'Accounts.BankTransactions';
            BankTransactionsRow.deletePermission = 'Cash\/Bank:Bank Transactions';
            BankTransactionsRow.insertPermission = 'Cash\/Bank:Bank Transactions';
            BankTransactionsRow.readPermission = 'Cash\/Bank:Bank Transactions';
            BankTransactionsRow.updatePermission = 'Cash\/Bank:Bank Transactions';
        })(BankTransactionsRow = Accounts.BankTransactionsRow || (Accounts.BankTransactionsRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var BankTransactionsService;
        (function (BankTransactionsService) {
            BankTransactionsService.baseUrl = 'Accounts/BankTransactions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                BankTransactionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BankTransactionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BankTransactionsService = Accounts.BankTransactionsService || (Accounts.BankTransactionsService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CashAdjustmentForm = /** @class */ (function (_super) {
            __extends(CashAdjustmentForm, _super);
            function CashAdjustmentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CashAdjustmentForm.init) {
                    CashAdjustmentForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(CashAdjustmentForm, [
                        'VDate', w0,
                        'Coa', w1,
                        'AccountType', w2,
                        'Credit', w3,
                        'Narration', w4
                    ]);
                }
                return _this;
            }
            CashAdjustmentForm.formKey = 'Accounts.CashAdjustment';
            return CashAdjustmentForm;
        }(Serenity.PrefixedContext));
        Accounts.CashAdjustmentForm = CashAdjustmentForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CashAdjustmentRow;
        (function (CashAdjustmentRow) {
            CashAdjustmentRow.idProperty = 'Id';
            CashAdjustmentRow.nameProperty = 'VNo';
            CashAdjustmentRow.localTextPrefix = 'Accounts.CashAdjustment';
            CashAdjustmentRow.deletePermission = 'Cash\/Bank:Cash Adjustment';
            CashAdjustmentRow.insertPermission = 'Cash\/Bank:Cash Adjustment';
            CashAdjustmentRow.readPermission = 'Cash\/Bank:Cash Adjustment';
            CashAdjustmentRow.updatePermission = 'Cash\/Bank:Cash Adjustment';
        })(CashAdjustmentRow = Accounts.CashAdjustmentRow || (Accounts.CashAdjustmentRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CashAdjustmentService;
        (function (CashAdjustmentService) {
            CashAdjustmentService.baseUrl = 'Accounts/CashAdjustment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CashAdjustmentService[x] = function (r, s, o) {
                    return Q.serviceRequest(CashAdjustmentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CashAdjustmentService = Accounts.CashAdjustmentService || (Accounts.CashAdjustmentService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var ContraVoucherForm = /** @class */ (function (_super) {
            __extends(ContraVoucherForm, _super);
            function ContraVoucherForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ContraVoucherForm.init) {
                    ContraVoucherForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(ContraVoucherForm, [
                        'VDate', w0,
                        'CoaId', w1,
                        'Debit', w2,
                        'Credit', w2,
                        'Narration', w3
                    ]);
                }
                return _this;
            }
            ContraVoucherForm.formKey = 'Accounts.ContraVoucher';
            return ContraVoucherForm;
        }(Serenity.PrefixedContext));
        Accounts.ContraVoucherForm = ContraVoucherForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var ContraVoucherRow;
        (function (ContraVoucherRow) {
            ContraVoucherRow.idProperty = 'Id';
            ContraVoucherRow.nameProperty = 'VNo';
            ContraVoucherRow.localTextPrefix = 'Accounts.ContraVoucher';
            ContraVoucherRow.deletePermission = 'Financial:Contra Voucher';
            ContraVoucherRow.insertPermission = 'Financial:Contra Voucher';
            ContraVoucherRow.readPermission = 'Financial:Contra Voucher';
            ContraVoucherRow.updatePermission = 'Financial:Contra Voucher';
        })(ContraVoucherRow = Accounts.ContraVoucherRow || (Accounts.ContraVoucherRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var ContraVoucherService;
        (function (ContraVoucherService) {
            ContraVoucherService.baseUrl = 'Accounts/ContraVoucher';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ContraVoucherService[x] = function (r, s, o) {
                    return Q.serviceRequest(ContraVoucherService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ContraVoucherService = Accounts.ContraVoucherService || (Accounts.ContraVoucherService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CreditVoucherForm = /** @class */ (function (_super) {
            __extends(CreditVoucherForm, _super);
            function CreditVoucherForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CreditVoucherForm.init) {
                    CreditVoucherForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(CreditVoucherForm, [
                        'VDate', w0,
                        'CoaId', w1,
                        'CreditAccountId', w1,
                        'Debit', w2,
                        'Remark', w3
                    ]);
                }
                return _this;
            }
            CreditVoucherForm.formKey = 'Accounts.CreditVoucher';
            return CreditVoucherForm;
        }(Serenity.PrefixedContext));
        Accounts.CreditVoucherForm = CreditVoucherForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CreditVoucherRow;
        (function (CreditVoucherRow) {
            CreditVoucherRow.idProperty = 'Id';
            CreditVoucherRow.nameProperty = 'VNo';
            CreditVoucherRow.localTextPrefix = 'Accounts.CreditVoucher';
            CreditVoucherRow.deletePermission = 'Financial:Credit Voucher';
            CreditVoucherRow.insertPermission = 'Financial:Credit Voucher';
            CreditVoucherRow.readPermission = 'Financial:Credit Voucher';
            CreditVoucherRow.updatePermission = 'Financial:Credit Voucher';
        })(CreditVoucherRow = Accounts.CreditVoucherRow || (Accounts.CreditVoucherRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CreditVoucherService;
        (function (CreditVoucherService) {
            CreditVoucherService.baseUrl = 'Accounts/CreditVoucher';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CreditVoucherService[x] = function (r, s, o) {
                    return Q.serviceRequest(CreditVoucherService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CreditVoucherService = Accounts.CreditVoucherService || (Accounts.CreditVoucherService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CustomerReceiveForm = /** @class */ (function (_super) {
            __extends(CustomerReceiveForm, _super);
            function CustomerReceiveForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerReceiveForm.init) {
                    CustomerReceiveForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(CustomerReceiveForm, [
                        'VDate', w0,
                        'CustomerId', w1,
                        'CoaId', w1,
                        'Debit', w2,
                        'Remark', w3
                    ]);
                }
                return _this;
            }
            CustomerReceiveForm.formKey = 'Accounts.CustomerReceive';
            return CustomerReceiveForm;
        }(Serenity.PrefixedContext));
        Accounts.CustomerReceiveForm = CustomerReceiveForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CustomerReceiveRow;
        (function (CustomerReceiveRow) {
            CustomerReceiveRow.idProperty = 'Id';
            CustomerReceiveRow.nameProperty = 'VNo';
            CustomerReceiveRow.localTextPrefix = 'Accounts.CustomerReceive';
            CustomerReceiveRow.deletePermission = 'Cash\/Bank:Customer Receive';
            CustomerReceiveRow.insertPermission = 'Cash\/Bank:Customer Receive';
            CustomerReceiveRow.readPermission = 'Cash\/Bank:Customer Receive';
            CustomerReceiveRow.updatePermission = 'Cash\/Bank:Customer Receive';
        })(CustomerReceiveRow = Accounts.CustomerReceiveRow || (Accounts.CustomerReceiveRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CustomerReceiveService;
        (function (CustomerReceiveService) {
            CustomerReceiveService.baseUrl = 'Accounts/CustomerReceive';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CustomerReceiveService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerReceiveService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerReceiveService = Accounts.CustomerReceiveService || (Accounts.CustomerReceiveService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var DebitVoucherForm = /** @class */ (function (_super) {
            __extends(DebitVoucherForm, _super);
            function DebitVoucherForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DebitVoucherForm.init) {
                    DebitVoucherForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(DebitVoucherForm, [
                        'VDate', w0,
                        'CoaId', w1,
                        'DebitAccountId', w1,
                        'Credit', w2,
                        'Remark', w3
                    ]);
                }
                return _this;
            }
            DebitVoucherForm.formKey = 'Accounts.DebitVoucher';
            return DebitVoucherForm;
        }(Serenity.PrefixedContext));
        Accounts.DebitVoucherForm = DebitVoucherForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var DebitVoucherRow;
        (function (DebitVoucherRow) {
            DebitVoucherRow.idProperty = 'Id';
            DebitVoucherRow.nameProperty = 'VNo';
            DebitVoucherRow.localTextPrefix = 'Accounts.DebitVoucher';
            DebitVoucherRow.deletePermission = 'Financial:Debit Voucher';
            DebitVoucherRow.insertPermission = 'Financial:Debit Voucher';
            DebitVoucherRow.readPermission = 'Financial:Debit Voucher';
            DebitVoucherRow.updatePermission = 'Financial:Debit Voucher';
        })(DebitVoucherRow = Accounts.DebitVoucherRow || (Accounts.DebitVoucherRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var DebitVoucherService;
        (function (DebitVoucherService) {
            DebitVoucherService.baseUrl = 'Accounts/DebitVoucher';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                DebitVoucherService[x] = function (r, s, o) {
                    return Q.serviceRequest(DebitVoucherService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DebitVoucherService = Accounts.DebitVoucherService || (Accounts.DebitVoucherService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var JournalVoucherForm = /** @class */ (function (_super) {
            __extends(JournalVoucherForm, _super);
            function JournalVoucherForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!JournalVoucherForm.init) {
                    JournalVoucherForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(JournalVoucherForm, [
                        'VDate', w0,
                        'CoaId', w1,
                        'Debit', w2,
                        'Credit', w2,
                        'Narration', w3
                    ]);
                }
                return _this;
            }
            JournalVoucherForm.formKey = 'Accounts.JournalVoucher';
            return JournalVoucherForm;
        }(Serenity.PrefixedContext));
        Accounts.JournalVoucherForm = JournalVoucherForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var JournalVoucherRow;
        (function (JournalVoucherRow) {
            JournalVoucherRow.idProperty = 'Id';
            JournalVoucherRow.nameProperty = 'VNo';
            JournalVoucherRow.localTextPrefix = 'Accounts.JournalVoucher';
            JournalVoucherRow.deletePermission = 'Financial:Journal Voucher';
            JournalVoucherRow.insertPermission = 'Financial:Journal Voucher';
            JournalVoucherRow.readPermission = 'Financial:Journal Voucher';
            JournalVoucherRow.updatePermission = 'Financial:Journal Voucher';
        })(JournalVoucherRow = Accounts.JournalVoucherRow || (Accounts.JournalVoucherRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var JournalVoucherService;
        (function (JournalVoucherService) {
            JournalVoucherService.baseUrl = 'Accounts/JournalVoucher';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                JournalVoucherService[x] = function (r, s, o) {
                    return Q.serviceRequest(JournalVoucherService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(JournalVoucherService = Accounts.JournalVoucherService || (Accounts.JournalVoucherService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var OpeningBalanceForm = /** @class */ (function (_super) {
            __extends(OpeningBalanceForm, _super);
            function OpeningBalanceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OpeningBalanceForm.init) {
                    OpeningBalanceForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(OpeningBalanceForm, [
                        'VDate', w0,
                        'CoaId', w1,
                        'AccountType', w2,
                        'Debit', w3,
                        'Narration', w4
                    ]);
                }
                return _this;
            }
            OpeningBalanceForm.formKey = 'Accounts.OpeningBalance';
            return OpeningBalanceForm;
        }(Serenity.PrefixedContext));
        Accounts.OpeningBalanceForm = OpeningBalanceForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var OpeningBalanceRow;
        (function (OpeningBalanceRow) {
            OpeningBalanceRow.idProperty = 'Id';
            OpeningBalanceRow.nameProperty = 'VNo';
            OpeningBalanceRow.localTextPrefix = 'Accounts.OpeningBalance';
            OpeningBalanceRow.deletePermission = 'Financial:Opening Balance';
            OpeningBalanceRow.insertPermission = 'Financial:Opening Balance';
            OpeningBalanceRow.readPermission = 'Financial:Opening Balance';
            OpeningBalanceRow.updatePermission = 'Financial:Opening Balance';
        })(OpeningBalanceRow = Accounts.OpeningBalanceRow || (Accounts.OpeningBalanceRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var OpeningBalanceService;
        (function (OpeningBalanceService) {
            OpeningBalanceService.baseUrl = 'Accounts/OpeningBalance';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                OpeningBalanceService[x] = function (r, s, o) {
                    return Q.serviceRequest(OpeningBalanceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OpeningBalanceService = Accounts.OpeningBalanceService || (Accounts.OpeningBalanceService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var SupplierPaymentForm = /** @class */ (function (_super) {
            __extends(SupplierPaymentForm, _super);
            function SupplierPaymentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierPaymentForm.init) {
                    SupplierPaymentForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(SupplierPaymentForm, [
                        'VDate', w0,
                        'SupplierId', w1,
                        'CoaId', w1,
                        'Credit', w2,
                        'Remark', w3
                    ]);
                }
                return _this;
            }
            SupplierPaymentForm.formKey = 'Accounts.SupplierPayment';
            return SupplierPaymentForm;
        }(Serenity.PrefixedContext));
        Accounts.SupplierPaymentForm = SupplierPaymentForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var SupplierPaymentRow;
        (function (SupplierPaymentRow) {
            SupplierPaymentRow.idProperty = 'Id';
            SupplierPaymentRow.nameProperty = 'VNo';
            SupplierPaymentRow.localTextPrefix = 'Accounts.SupplierPayment';
            SupplierPaymentRow.deletePermission = 'Cash\/Bank:Supplier Payment';
            SupplierPaymentRow.insertPermission = 'Cash\/Bank:Supplier Payment';
            SupplierPaymentRow.readPermission = 'Cash\/Bank:Supplier Payment';
            SupplierPaymentRow.updatePermission = 'Cash\/Bank:Supplier Payment';
        })(SupplierPaymentRow = Accounts.SupplierPaymentRow || (Accounts.SupplierPaymentRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var SupplierPaymentService;
        (function (SupplierPaymentService) {
            SupplierPaymentService.baseUrl = 'Accounts/SupplierPayment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                SupplierPaymentService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierPaymentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierPaymentService = Accounts.SupplierPaymentService || (Accounts.SupplierPaymentService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var TransactionsForm = /** @class */ (function (_super) {
            __extends(TransactionsForm, _super);
            function TransactionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TransactionsForm.init) {
                    TransactionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.IntegerEditor;
                    Q.initFormType(TransactionsForm, [
                        'VNo', w0,
                        'Vtype', w0,
                        'VDate', w1,
                        'CoaId', w0,
                        'Coa', w0,
                        'Narration', w0,
                        'Debit', w2,
                        'Credit', w2,
                        'IsPosted', w3,
                        'IsAppove', w3,
                        'InsertDate', w1,
                        'InsertUserId', w4,
                        'UpdateDate', w1,
                        'UpdateUserId', w4
                    ]);
                }
                return _this;
            }
            TransactionsForm.formKey = 'Accounts.Transactions';
            return TransactionsForm;
        }(Serenity.PrefixedContext));
        Accounts.TransactionsForm = TransactionsForm;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var TransactionsRow;
        (function (TransactionsRow) {
            TransactionsRow.idProperty = 'Id';
            TransactionsRow.nameProperty = 'VNo';
            TransactionsRow.localTextPrefix = 'Accounts.Transactions';
            TransactionsRow.deletePermission = 'Financial:Transactions';
            TransactionsRow.insertPermission = 'Financial:Transactions';
            TransactionsRow.readPermission = 'Financial:Transactions';
            TransactionsRow.updatePermission = 'Financial:Transactions';
        })(TransactionsRow = Accounts.TransactionsRow || (Accounts.TransactionsRow = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var TransactionsService;
        (function (TransactionsService) {
            TransactionsService.baseUrl = 'Accounts/Transactions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                TransactionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TransactionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TransactionsService = Accounts.TransactionsService || (Accounts.TransactionsService = {}));
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CitiesForm = /** @class */ (function (_super) {
            __extends(CitiesForm, _super);
            function CitiesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CitiesForm.init) {
                    CitiesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(CitiesForm, [
                        'Name', w0,
                        'CountryId', w1,
                        'StateId', w1
                    ]);
                }
                return _this;
            }
            CitiesForm.formKey = 'Administration.Cities';
            return CitiesForm;
        }(Serenity.PrefixedContext));
        Administration.CitiesForm = CitiesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CitiesRow;
        (function (CitiesRow) {
            CitiesRow.idProperty = 'Id';
            CitiesRow.isActiveProperty = 'IsActive';
            CitiesRow.nameProperty = 'Name';
            CitiesRow.localTextPrefix = 'Administration.Cities';
            CitiesRow.lookupKey = 'Administration.Cities';
            function getLookup() {
                return Q.getLookup('Administration.Cities');
            }
            CitiesRow.getLookup = getLookup;
            CitiesRow.deletePermission = 'Masters:City:Delete';
            CitiesRow.insertPermission = 'Masters:City:Create';
            CitiesRow.readPermission = 'Masters:City:View';
            CitiesRow.updatePermission = 'Masters:City:Update';
        })(CitiesRow = Administration.CitiesRow || (Administration.CitiesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CitiesService;
        (function (CitiesService) {
            CitiesService.baseUrl = 'Administration/Cities';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CitiesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CitiesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CitiesService = Administration.CitiesService || (Administration.CitiesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CompaniesForm = /** @class */ (function (_super) {
            __extends(CompaniesForm, _super);
            function CompaniesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CompaniesForm.init) {
                    CompaniesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.EnumEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(CompaniesForm, [
                        'CompanyName', w0,
                        'CompanyEmail', w0,
                        'Address', w0,
                        'Phone', w0,
                        'CurrencyId', w1,
                        'VatPercentage', w2,
                        'Logo', w3,
                        'SaleLogo', w3,
                        'Favicon', w3,
                        'CurrencyPosition', w4,
                        'FooterText', w5
                    ]);
                }
                return _this;
            }
            CompaniesForm.formKey = 'Administration.Companies';
            return CompaniesForm;
        }(Serenity.PrefixedContext));
        Administration.CompaniesForm = CompaniesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CompaniesRow;
        (function (CompaniesRow) {
            CompaniesRow.idProperty = 'Id';
            CompaniesRow.isActiveProperty = 'IsActive';
            CompaniesRow.nameProperty = 'CompanyName';
            CompaniesRow.localTextPrefix = 'Administration.Companies';
            CompaniesRow.lookupKey = 'Administration.Companies';
            function getLookup() {
                return Q.getLookup('Administration.Companies');
            }
            CompaniesRow.getLookup = getLookup;
            CompaniesRow.deletePermission = 'Administration:Settings';
            CompaniesRow.insertPermission = 'Administration:Settings';
            CompaniesRow.readPermission = 'Administration:Settings';
            CompaniesRow.updatePermission = 'Administration:Settings';
        })(CompaniesRow = Administration.CompaniesRow || (Administration.CompaniesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CompaniesService;
        (function (CompaniesService) {
            CompaniesService.baseUrl = 'Administration/Companies';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CompaniesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CompaniesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CompaniesService = Administration.CompaniesService || (Administration.CompaniesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CountriesForm = /** @class */ (function (_super) {
            __extends(CountriesForm, _super);
            function CountriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CountriesForm.init) {
                    CountriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CountriesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            CountriesForm.formKey = 'Administration.Countries';
            return CountriesForm;
        }(Serenity.PrefixedContext));
        Administration.CountriesForm = CountriesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CountriesRow;
        (function (CountriesRow) {
            CountriesRow.idProperty = 'Id';
            CountriesRow.isActiveProperty = 'IsActive';
            CountriesRow.nameProperty = 'Name';
            CountriesRow.localTextPrefix = 'Administration.Countries';
            CountriesRow.lookupKey = 'Administration.Countries';
            function getLookup() {
                return Q.getLookup('Administration.Countries');
            }
            CountriesRow.getLookup = getLookup;
            CountriesRow.deletePermission = 'Masters:Country:Delete';
            CountriesRow.insertPermission = 'Masters:Country:Create';
            CountriesRow.readPermission = 'Masters:Country:View';
            CountriesRow.updatePermission = 'Masters:Country:Update';
        })(CountriesRow = Administration.CountriesRow || (Administration.CountriesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CountriesService;
        (function (CountriesService) {
            CountriesService.baseUrl = 'Administration/Countries';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CountriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CountriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CountriesService = Administration.CountriesService || (Administration.CountriesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CurrenciesForm = /** @class */ (function (_super) {
            __extends(CurrenciesForm, _super);
            function CurrenciesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CurrenciesForm.init) {
                    CurrenciesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CurrenciesForm, [
                        'CurrencyName', w0,
                        'CurrencySymbol', w0
                    ]);
                }
                return _this;
            }
            CurrenciesForm.formKey = 'Administration.Currencies';
            return CurrenciesForm;
        }(Serenity.PrefixedContext));
        Administration.CurrenciesForm = CurrenciesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CurrenciesRow;
        (function (CurrenciesRow) {
            CurrenciesRow.idProperty = 'Id';
            CurrenciesRow.isActiveProperty = 'IsActive';
            CurrenciesRow.nameProperty = 'CurrencyName';
            CurrenciesRow.localTextPrefix = 'Administration.Currencies';
            CurrenciesRow.lookupKey = 'Administration.Currencies';
            function getLookup() {
                return Q.getLookup('Administration.Currencies');
            }
            CurrenciesRow.getLookup = getLookup;
            CurrenciesRow.deletePermission = 'Administration:Currency:Delete';
            CurrenciesRow.insertPermission = 'Administration:Currency:Create';
            CurrenciesRow.readPermission = 'Administration:Currency:View';
            CurrenciesRow.updatePermission = 'Administration:Currency:Update';
        })(CurrenciesRow = Administration.CurrenciesRow || (Administration.CurrenciesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CurrenciesService;
        (function (CurrenciesService) {
            CurrenciesService.baseUrl = 'Administration/Currencies';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CurrenciesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CurrenciesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CurrenciesService = Administration.CurrenciesService || (Administration.CurrenciesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RegionsForm = /** @class */ (function (_super) {
            __extends(RegionsForm, _super);
            function RegionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegionsForm.init) {
                    RegionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RegionsForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            RegionsForm.formKey = 'Administration.Regions';
            return RegionsForm;
        }(Serenity.PrefixedContext));
        Administration.RegionsForm = RegionsForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RegionsRow;
        (function (RegionsRow) {
            RegionsRow.idProperty = 'Id';
            RegionsRow.isActiveProperty = 'IsActive';
            RegionsRow.nameProperty = 'Name';
            RegionsRow.localTextPrefix = 'Administration.Regions';
            RegionsRow.lookupKey = 'Administration.Regions';
            function getLookup() {
                return Q.getLookup('Administration.Regions');
            }
            RegionsRow.getLookup = getLookup;
            RegionsRow.deletePermission = 'Masters:Region:Delete';
            RegionsRow.insertPermission = 'Masters:Region:Create';
            RegionsRow.readPermission = 'Masters:Region:View';
            RegionsRow.updatePermission = 'Masters:Region:Update';
        })(RegionsRow = Administration.RegionsRow || (Administration.RegionsRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RegionsService;
        (function (RegionsService) {
            RegionsService.baseUrl = 'Administration/Regions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                RegionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegionsService = Administration.RegionsService || (Administration.RegionsService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var ShippersForm = /** @class */ (function (_super) {
            __extends(ShippersForm, _super);
            function ShippersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ShippersForm.init) {
                    ShippersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ShippersForm, [
                        'CompanyName', w0,
                        'Phone', w0
                    ]);
                }
                return _this;
            }
            ShippersForm.formKey = 'Administration.Shippers';
            return ShippersForm;
        }(Serenity.PrefixedContext));
        Administration.ShippersForm = ShippersForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var ShippersRow;
        (function (ShippersRow) {
            ShippersRow.idProperty = 'Id';
            ShippersRow.isActiveProperty = 'IsActive';
            ShippersRow.nameProperty = 'CompanyName';
            ShippersRow.localTextPrefix = 'Administration.Shippers';
            ShippersRow.lookupKey = 'Administration.Shippers';
            function getLookup() {
                return Q.getLookup('Administration.Shippers');
            }
            ShippersRow.getLookup = getLookup;
            ShippersRow.deletePermission = 'Masters:Shipper:Delete';
            ShippersRow.insertPermission = 'Masters:Shipper:Create';
            ShippersRow.readPermission = 'Masters:Shipper:View';
            ShippersRow.updatePermission = 'Masters:Shipper:Update';
        })(ShippersRow = Administration.ShippersRow || (Administration.ShippersRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var ShippersService;
        (function (ShippersService) {
            ShippersService.baseUrl = 'Administration/Shippers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ShippersService[x] = function (r, s, o) {
                    return Q.serviceRequest(ShippersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ShippersService = Administration.ShippersService || (Administration.ShippersService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var StatesForm = /** @class */ (function (_super) {
            __extends(StatesForm, _super);
            function StatesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StatesForm.init) {
                    StatesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(StatesForm, [
                        'Name', w0,
                        'CountryId', w1
                    ]);
                }
                return _this;
            }
            StatesForm.formKey = 'Administration.States';
            return StatesForm;
        }(Serenity.PrefixedContext));
        Administration.StatesForm = StatesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var StatesRow;
        (function (StatesRow) {
            StatesRow.idProperty = 'Id';
            StatesRow.isActiveProperty = 'IsActive';
            StatesRow.nameProperty = 'Name';
            StatesRow.localTextPrefix = 'Administration.States';
            StatesRow.lookupKey = 'Administration.States';
            function getLookup() {
                return Q.getLookup('Administration.States');
            }
            StatesRow.getLookup = getLookup;
            StatesRow.deletePermission = 'Masters:State:Delete';
            StatesRow.insertPermission = 'Masters:State:Create';
            StatesRow.readPermission = 'Masters:State:View';
            StatesRow.updatePermission = 'Masters:State:Update';
        })(StatesRow = Administration.StatesRow || (Administration.StatesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var StatesService;
        (function (StatesService) {
            StatesService.baseUrl = 'Administration/States';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                StatesService[x] = function (r, s, o) {
                    return Q.serviceRequest(StatesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StatesService = Administration.StatesService || (Administration.StatesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TerritoriesForm = /** @class */ (function (_super) {
            __extends(TerritoriesForm, _super);
            function TerritoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TerritoriesForm.init) {
                    TerritoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(TerritoriesForm, [
                        'TerritoryDescription', w0,
                        'RegionId', w1
                    ]);
                }
                return _this;
            }
            TerritoriesForm.formKey = 'Administration.Territories';
            return TerritoriesForm;
        }(Serenity.PrefixedContext));
        Administration.TerritoriesForm = TerritoriesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TerritoriesRow;
        (function (TerritoriesRow) {
            TerritoriesRow.idProperty = 'Id';
            TerritoriesRow.isActiveProperty = 'IsActive';
            TerritoriesRow.nameProperty = 'TerritoryDescription';
            TerritoriesRow.localTextPrefix = 'Administration.Territories';
            TerritoriesRow.lookupKey = 'Administration.Territories';
            function getLookup() {
                return Q.getLookup('Administration.Territories');
            }
            TerritoriesRow.getLookup = getLookup;
            TerritoriesRow.deletePermission = 'Masters:Territory:Delete';
            TerritoriesRow.insertPermission = 'Masters:Territory:Create';
            TerritoriesRow.readPermission = 'Masters:Territory:View';
            TerritoriesRow.updatePermission = 'Masters:Territory:Update';
        })(TerritoriesRow = Administration.TerritoriesRow || (Administration.TerritoriesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TerritoriesService;
        (function (TerritoriesService) {
            TerritoriesService.baseUrl = 'Administration/Territories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                TerritoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(TerritoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TerritoriesService = Administration.TerritoriesService || (Administration.TerritoriesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var WarehousesForm = /** @class */ (function (_super) {
            __extends(WarehousesForm, _super);
            function WarehousesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WarehousesForm.init) {
                    WarehousesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(WarehousesForm, [
                        'Name', w0,
                        'CountryId', w1,
                        'StateId', w1,
                        'CityId', w1,
                        'Phone', w0,
                        'Address', w2,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            WarehousesForm.formKey = 'Administration.Warehouses';
            return WarehousesForm;
        }(Serenity.PrefixedContext));
        Administration.WarehousesForm = WarehousesForm;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var WarehousesRow;
        (function (WarehousesRow) {
            WarehousesRow.idProperty = 'Id';
            WarehousesRow.isActiveProperty = 'IsActive';
            WarehousesRow.nameProperty = 'Name';
            WarehousesRow.localTextPrefix = 'Administration.Warehouses';
            WarehousesRow.lookupKey = 'Administration.Warehouses';
            function getLookup() {
                return Q.getLookup('Administration.Warehouses');
            }
            WarehousesRow.getLookup = getLookup;
            WarehousesRow.deletePermission = 'Masters:Warehouse:Delete';
            WarehousesRow.insertPermission = 'Masters:Warehouse:Create';
            WarehousesRow.readPermission = 'Masters:Warehouse:View';
            WarehousesRow.updatePermission = 'Masters:Warehouse:Update';
        })(WarehousesRow = Administration.WarehousesRow || (Administration.WarehousesRow = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var WarehousesService;
        (function (WarehousesService) {
            WarehousesService.baseUrl = 'Administration/Warehouses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                WarehousesService[x] = function (r, s, o) {
                    return Q.serviceRequest(WarehousesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WarehousesService = Administration.WarehousesService || (Administration.WarehousesService = {}));
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Banks;
    (function (Banks) {
        var BanksForm = /** @class */ (function (_super) {
            __extends(BanksForm, _super);
            function BanksForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BanksForm.init) {
                    BanksForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    Q.initFormType(BanksForm, [
                        'BankName', w0,
                        'AcName', w0,
                        'AcNumber', w0,
                        'Branch', w0,
                        'SignaturePicture', w1
                    ]);
                }
                return _this;
            }
            BanksForm.formKey = 'Banks.Banks';
            return BanksForm;
        }(Serenity.PrefixedContext));
        Banks.BanksForm = BanksForm;
    })(Banks = SmartERP.Banks || (SmartERP.Banks = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Banks;
    (function (Banks) {
        var BanksRow;
        (function (BanksRow) {
            BanksRow.idProperty = 'Id';
            BanksRow.isActiveProperty = 'IsActive';
            BanksRow.nameProperty = 'BankName';
            BanksRow.localTextPrefix = 'Banks.Banks';
            BanksRow.lookupKey = 'Banks.Banks';
            function getLookup() {
                return Q.getLookup('Banks.Banks');
            }
            BanksRow.getLookup = getLookup;
            BanksRow.deletePermission = 'Masters:Bank:Delete';
            BanksRow.insertPermission = 'Masters:Bank:Create';
            BanksRow.readPermission = 'Masters:Bank:View';
            BanksRow.updatePermission = 'Masters:Bank:Update';
        })(BanksRow = Banks.BanksRow || (Banks.BanksRow = {}));
    })(Banks = SmartERP.Banks || (SmartERP.Banks = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Banks;
    (function (Banks) {
        var BanksService;
        (function (BanksService) {
            BanksService.baseUrl = 'Banks/Banks';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                BanksService[x] = function (r, s, o) {
                    return Q.serviceRequest(BanksService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BanksService = Banks.BanksService || (Banks.BanksService = {}));
    })(Banks = SmartERP.Banks || (SmartERP.Banks = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var BloodGroupKind;
    (function (BloodGroupKind) {
        BloodGroupKind[BloodGroupKind["APositive"] = 1] = "APositive";
        BloodGroupKind[BloodGroupKind["ANegative"] = 2] = "ANegative";
        BloodGroupKind[BloodGroupKind["BPositive"] = 3] = "BPositive";
        BloodGroupKind[BloodGroupKind["BNegative"] = 4] = "BNegative";
        BloodGroupKind[BloodGroupKind["ABPsitive"] = 5] = "ABPsitive";
        BloodGroupKind[BloodGroupKind["ABNegative"] = 6] = "ABNegative";
        BloodGroupKind[BloodGroupKind["OPositive"] = 7] = "OPositive";
        BloodGroupKind[BloodGroupKind["ONegative"] = 8] = "ONegative";
    })(BloodGroupKind = SmartERP.BloodGroupKind || (SmartERP.BloodGroupKind = {}));
    Serenity.Decorators.registerEnumType(BloodGroupKind, 'SmartERP.BloodGroupKind');
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Bookings;
    (function (Bookings) {
    })(Bookings = SmartERP.Bookings || (SmartERP.Bookings = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Bookings;
    (function (Bookings) {
        var VehicleBookingsForm = /** @class */ (function (_super) {
            __extends(VehicleBookingsForm, _super);
            function VehicleBookingsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VehicleBookingsForm.init) {
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
                return _this;
            }
            VehicleBookingsForm.formKey = 'Bookings.VehicleBookings';
            return VehicleBookingsForm;
        }(Serenity.PrefixedContext));
        Bookings.VehicleBookingsForm = VehicleBookingsForm;
    })(Bookings = SmartERP.Bookings || (SmartERP.Bookings = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Bookings;
    (function (Bookings) {
        var VehicleBookingsRow;
        (function (VehicleBookingsRow) {
            VehicleBookingsRow.idProperty = 'Id';
            VehicleBookingsRow.nameProperty = 'Title';
            VehicleBookingsRow.localTextPrefix = 'Bookings.VehicleBookings';
            VehicleBookingsRow.lookupKey = 'Bookings.VehicleBookings';
            function getLookup() {
                return Q.getLookup('Bookings.VehicleBookings');
            }
            VehicleBookingsRow.getLookup = getLookup;
            VehicleBookingsRow.deletePermission = 'Bookings:Vehicle Booking:Delete';
            VehicleBookingsRow.insertPermission = 'Bookings:Vehicle Booking:Create';
            VehicleBookingsRow.readPermission = 'Bookings:Vehicle Booking:View';
            VehicleBookingsRow.updatePermission = 'Bookings:Vehicle Booking:Update';
        })(VehicleBookingsRow = Bookings.VehicleBookingsRow || (Bookings.VehicleBookingsRow = {}));
    })(Bookings = SmartERP.Bookings || (SmartERP.Bookings = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Bookings;
    (function (Bookings) {
        var VehicleBookingsService;
        (function (VehicleBookingsService) {
            VehicleBookingsService.baseUrl = 'Bookings/VehicleBookings';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VehicleBookingsService[x] = function (r, s, o) {
                    return Q.serviceRequest(VehicleBookingsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VehicleBookingsService = Bookings.VehicleBookingsService || (Bookings.VehicleBookingsService = {}));
    })(Bookings = SmartERP.Bookings || (SmartERP.Bookings = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Bookings;
    (function (Bookings) {
        var VehicleCourtesyBookingForm = /** @class */ (function (_super) {
            __extends(VehicleCourtesyBookingForm, _super);
            function VehicleCourtesyBookingForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VehicleCourtesyBookingForm.init) {
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
                return _this;
            }
            VehicleCourtesyBookingForm.formKey = 'Bookings.VehicleCourtesyBooking';
            return VehicleCourtesyBookingForm;
        }(Serenity.PrefixedContext));
        Bookings.VehicleCourtesyBookingForm = VehicleCourtesyBookingForm;
    })(Bookings = SmartERP.Bookings || (SmartERP.Bookings = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Bookings;
    (function (Bookings) {
        var VehicleCourtesyBookingRow;
        (function (VehicleCourtesyBookingRow) {
            VehicleCourtesyBookingRow.idProperty = 'Id';
            VehicleCourtesyBookingRow.nameProperty = 'Title';
            VehicleCourtesyBookingRow.localTextPrefix = 'Bookings.VehicleCourtesyBooking';
            VehicleCourtesyBookingRow.lookupKey = 'Bookings.VehicleCourtesyBooking';
            function getLookup() {
                return Q.getLookup('Bookings.VehicleCourtesyBooking');
            }
            VehicleCourtesyBookingRow.getLookup = getLookup;
            VehicleCourtesyBookingRow.deletePermission = 'Bookings:Vehicle Courtesy Booking:Delete';
            VehicleCourtesyBookingRow.insertPermission = 'Bookings:Vehicle Courtesy Booking:Create';
            VehicleCourtesyBookingRow.readPermission = 'Bookings:Vehicle Courtesy Booking:View';
            VehicleCourtesyBookingRow.updatePermission = 'Bookings:Vehicle Courtesy Booking:Update';
        })(VehicleCourtesyBookingRow = Bookings.VehicleCourtesyBookingRow || (Bookings.VehicleCourtesyBookingRow = {}));
    })(Bookings = SmartERP.Bookings || (SmartERP.Bookings = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Bookings;
    (function (Bookings) {
        var VehicleCourtesyBookingService;
        (function (VehicleCourtesyBookingService) {
            VehicleCourtesyBookingService.baseUrl = 'Bookings/VehicleCourtesyBooking';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VehicleCourtesyBookingService[x] = function (r, s, o) {
                    return Q.serviceRequest(VehicleCourtesyBookingService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VehicleCourtesyBookingService = Bookings.VehicleCourtesyBookingService || (Bookings.VehicleCourtesyBookingService = {}));
    })(Bookings = SmartERP.Bookings || (SmartERP.Bookings = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var BusinessPartners;
    (function (BusinessPartners) {
    })(BusinessPartners = SmartERP.BusinessPartners || (SmartERP.BusinessPartners = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var CashBank;
    (function (CashBank) {
    })(CashBank = SmartERP.CashBank || (SmartERP.CashBank = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var CurrencyPositionKind;
    (function (CurrencyPositionKind) {
        CurrencyPositionKind[CurrencyPositionKind["Left"] = 1] = "Left";
        CurrencyPositionKind[CurrencyPositionKind["Right"] = 2] = "Right";
    })(CurrencyPositionKind = SmartERP.CurrencyPositionKind || (SmartERP.CurrencyPositionKind = {}));
    Serenity.Decorators.registerEnumType(CurrencyPositionKind, 'SmartERP.CurrencyPositionKind');
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Customers;
    (function (Customers) {
        var CustomersForm = /** @class */ (function (_super) {
            __extends(CustomersForm, _super);
            function CustomersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomersForm.init) {
                    CustomersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(CustomersForm, [
                        'Name', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'CountryId', w1,
                        'StateId', w1,
                        'CityId', w1,
                        'CustomerGroupId', w1,
                        'Address', w2,
                        'RegionId', w1,
                        'PostalCode', w0,
                        'Phone', w0,
                        'Website', w0,
                        'Fax', w0,
                        'Email', w0,
                        'EmailAddress', w0,
                        'PreviousCreditBalance', w3
                    ]);
                }
                return _this;
            }
            CustomersForm.formKey = 'Customers.Customers';
            return CustomersForm;
        }(Serenity.PrefixedContext));
        Customers.CustomersForm = CustomersForm;
    })(Customers = SmartERP.Customers || (SmartERP.Customers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Customers;
    (function (Customers) {
        var CustomersRow;
        (function (CustomersRow) {
            CustomersRow.idProperty = 'Id';
            CustomersRow.isActiveProperty = 'IsActive';
            CustomersRow.nameProperty = 'Name';
            CustomersRow.localTextPrefix = 'Customers.Customers';
            CustomersRow.lookupKey = 'Customers.Customers';
            function getLookup() {
                return Q.getLookup('Customers.Customers');
            }
            CustomersRow.getLookup = getLookup;
            CustomersRow.deletePermission = 'Business Partners:Customer:Delete';
            CustomersRow.insertPermission = 'Business Partners:Customer:Create';
            CustomersRow.readPermission = 'Business Partners:Customer:View';
            CustomersRow.updatePermission = 'Business Partners:Customer:Update';
        })(CustomersRow = Customers.CustomersRow || (Customers.CustomersRow = {}));
    })(Customers = SmartERP.Customers || (SmartERP.Customers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Customers;
    (function (Customers) {
        var CustomersService;
        (function (CustomersService) {
            CustomersService.baseUrl = 'Customers/Customers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CustomersService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomersService = Customers.CustomersService || (Customers.CustomersService = {}));
    })(Customers = SmartERP.Customers || (SmartERP.Customers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpenseTypesForm = /** @class */ (function (_super) {
            __extends(ExpenseTypesForm, _super);
            function ExpenseTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ExpenseTypesForm.init) {
                    ExpenseTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ExpenseTypesForm, [
                        'Type', w0
                    ]);
                }
                return _this;
            }
            ExpenseTypesForm.formKey = 'Expenses.ExpenseTypes';
            return ExpenseTypesForm;
        }(Serenity.PrefixedContext));
        Expenses.ExpenseTypesForm = ExpenseTypesForm;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpenseTypesRow;
        (function (ExpenseTypesRow) {
            ExpenseTypesRow.idProperty = 'Id';
            ExpenseTypesRow.isActiveProperty = 'IsActive';
            ExpenseTypesRow.nameProperty = 'Type';
            ExpenseTypesRow.localTextPrefix = 'Expenses.ExpenseTypes';
            ExpenseTypesRow.lookupKey = 'Expenses.ExpenseTypes';
            function getLookup() {
                return Q.getLookup('Expenses.ExpenseTypes');
            }
            ExpenseTypesRow.getLookup = getLookup;
            ExpenseTypesRow.deletePermission = 'Masters:Expense Type:Delete';
            ExpenseTypesRow.insertPermission = 'Masters:Expense Type:Create';
            ExpenseTypesRow.readPermission = 'Masters:Expense Type:View';
            ExpenseTypesRow.updatePermission = 'Masters:Expense Type:Update';
        })(ExpenseTypesRow = Expenses.ExpenseTypesRow || (Expenses.ExpenseTypesRow = {}));
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpenseTypesService;
        (function (ExpenseTypesService) {
            ExpenseTypesService.baseUrl = 'Expenses/ExpenseTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ExpenseTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ExpenseTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ExpenseTypesService = Expenses.ExpenseTypesService || (Expenses.ExpenseTypesService = {}));
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpensesForm = /** @class */ (function (_super) {
            __extends(ExpensesForm, _super);
            function ExpensesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ExpensesForm.init) {
                    ExpensesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(ExpensesForm, [
                        'ExpenseTypeId', w0,
                        'Date', w1,
                        'PaymentAccount', w0,
                        'Amount', w2
                    ]);
                }
                return _this;
            }
            ExpensesForm.formKey = 'Expenses.Expenses';
            return ExpensesForm;
        }(Serenity.PrefixedContext));
        Expenses.ExpensesForm = ExpensesForm;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpensesRow;
        (function (ExpensesRow) {
            ExpensesRow.idProperty = 'Id';
            ExpensesRow.localTextPrefix = 'Expenses.Expenses';
            ExpensesRow.lookupKey = 'Expenses.Expenses';
            function getLookup() {
                return Q.getLookup('Expenses.Expenses');
            }
            ExpensesRow.getLookup = getLookup;
            ExpensesRow.deletePermission = 'Cash\/Bank:Expense:Delete';
            ExpensesRow.insertPermission = 'Cash\/Bank:Expense:Create';
            ExpensesRow.readPermission = 'Cash\/Bank:Expense:View';
            ExpensesRow.updatePermission = 'Cash\/Bank:Expense:Update';
        })(ExpensesRow = Expenses.ExpensesRow || (Expenses.ExpensesRow = {}));
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpensesService;
        (function (ExpensesService) {
            ExpensesService.baseUrl = 'Expenses/Expenses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ExpensesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ExpensesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ExpensesService = Expenses.ExpensesService || (Expenses.ExpensesService = {}));
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Financial;
    (function (Financial) {
    })(Financial = SmartERP.Financial || (SmartERP.Financial = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var AttendanceForm = /** @class */ (function (_super) {
            __extends(AttendanceForm, _super);
            function AttendanceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AttendanceForm.init) {
                    AttendanceForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateTimeEditor;
                    Q.initFormType(AttendanceForm, [
                        'EmployeeId', w0,
                        'CheckIn', w1,
                        'CheckOut', w1
                    ]);
                }
                return _this;
            }
            AttendanceForm.formKey = 'HumanResource.Attendance';
            return AttendanceForm;
        }(Serenity.PrefixedContext));
        HumanResource.AttendanceForm = AttendanceForm;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var AttendanceRow;
        (function (AttendanceRow) {
            AttendanceRow.idProperty = 'Id';
            AttendanceRow.localTextPrefix = 'HumanResource.Attendance';
            AttendanceRow.lookupKey = 'HumanResource.Attendance';
            function getLookup() {
                return Q.getLookup('HumanResource.Attendance');
            }
            AttendanceRow.getLookup = getLookup;
            AttendanceRow.deletePermission = 'Human Resource:Attendance:Delete';
            AttendanceRow.insertPermission = 'Human Resource:Attendance:Create';
            AttendanceRow.readPermission = 'Human Resource:Attendance:View';
            AttendanceRow.updatePermission = 'Human Resource:Attendance:Update';
        })(AttendanceRow = HumanResource.AttendanceRow || (HumanResource.AttendanceRow = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var AttendanceService;
        (function (AttendanceService) {
            AttendanceService.baseUrl = 'HumanResource/Attendance';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AttendanceService[x] = function (r, s, o) {
                    return Q.serviceRequest(AttendanceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AttendanceService = HumanResource.AttendanceService || (HumanResource.AttendanceService = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsForm = /** @class */ (function (_super) {
            __extends(DepartmentsForm, _super);
            function DepartmentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DepartmentsForm.init) {
                    DepartmentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = HumanResource.DepartmentsEditor;
                    Q.initFormType(DepartmentsForm, [
                        'Department', w0,
                        'Description', w0,
                        'ParentDepartmentId', w1
                    ]);
                }
                return _this;
            }
            DepartmentsForm.formKey = 'HumanResource.Departments';
            return DepartmentsForm;
        }(Serenity.PrefixedContext));
        HumanResource.DepartmentsForm = DepartmentsForm;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsRow;
        (function (DepartmentsRow) {
            DepartmentsRow.idProperty = 'Id';
            DepartmentsRow.isActiveProperty = 'IsActive';
            DepartmentsRow.nameProperty = 'Department';
            DepartmentsRow.localTextPrefix = 'HumanResource.Departments';
            DepartmentsRow.lookupKey = 'HumanResource.Departments';
            function getLookup() {
                return Q.getLookup('HumanResource.Departments');
            }
            DepartmentsRow.getLookup = getLookup;
            DepartmentsRow.deletePermission = 'Human Resource:Department:Delete';
            DepartmentsRow.insertPermission = 'Human Resource:Department:Create';
            DepartmentsRow.readPermission = 'Human Resource:Department:View';
            DepartmentsRow.updatePermission = 'Human Resource:Department:Update';
        })(DepartmentsRow = HumanResource.DepartmentsRow || (HumanResource.DepartmentsRow = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsService;
        (function (DepartmentsService) {
            DepartmentsService.baseUrl = 'HumanResource/Departments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                DepartmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DepartmentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DepartmentsService = HumanResource.DepartmentsService || (HumanResource.DepartmentsService = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsForm = /** @class */ (function (_super) {
            __extends(DesignationsForm, _super);
            function DesignationsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DesignationsForm.init) {
                    DesignationsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = HumanResource.DesignationsEditor;
                    Q.initFormType(DesignationsForm, [
                        'Designation', w0,
                        'Description', w0,
                        'ParentDesignationId', w1
                    ]);
                }
                return _this;
            }
            DesignationsForm.formKey = 'HumanResource.Designations';
            return DesignationsForm;
        }(Serenity.PrefixedContext));
        HumanResource.DesignationsForm = DesignationsForm;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsRow;
        (function (DesignationsRow) {
            DesignationsRow.idProperty = 'Id';
            DesignationsRow.isActiveProperty = 'IsActive';
            DesignationsRow.nameProperty = 'Designation';
            DesignationsRow.localTextPrefix = 'HumanResource.Designations';
            DesignationsRow.lookupKey = 'HumanResource.Designations';
            function getLookup() {
                return Q.getLookup('HumanResource.Designations');
            }
            DesignationsRow.getLookup = getLookup;
            DesignationsRow.deletePermission = 'Human Resource:Designation:Delete';
            DesignationsRow.insertPermission = 'Human Resource:Designation:Create';
            DesignationsRow.readPermission = 'Human Resource:Designation:View';
            DesignationsRow.updatePermission = 'Human Resource:Designation:Update';
        })(DesignationsRow = HumanResource.DesignationsRow || (HumanResource.DesignationsRow = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsService;
        (function (DesignationsService) {
            DesignationsService.baseUrl = 'HumanResource/Designations';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                DesignationsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DesignationsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DesignationsService = HumanResource.DesignationsService || (HumanResource.DesignationsService = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeesForm = /** @class */ (function (_super) {
            __extends(EmployeesForm, _super);
            function EmployeesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeesForm.init) {
                    EmployeesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = HumanResource.DesignationsEditor;
                    var w2 = HumanResource.DepartmentsEditor;
                    var w3 = s.EnumEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.ImageUploadEditor;
                    var w6 = s.LookupEditor;
                    Q.initFormType(EmployeesForm, [
                        'FirstName', w0,
                        'LastName', w0,
                        'DesignationId', w1,
                        'DepartmentId', w2,
                        'RateType', w3,
                        'Phone', w0,
                        'HoureRateSalary', w4,
                        'Email', w0,
                        'BloodGroup', w3,
                        'Picture', w5,
                        'CountryId', w6,
                        'StateId', w6,
                        'CityId', w6,
                        'ZipCode', w0,
                        'Address', w0,
                        'UserId', w6,
                        'RegionId', w6,
                        'TerritoryId', w6
                    ]);
                }
                return _this;
            }
            EmployeesForm.formKey = 'HumanResource.Employees';
            return EmployeesForm;
        }(Serenity.PrefixedContext));
        HumanResource.EmployeesForm = EmployeesForm;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeesRow;
        (function (EmployeesRow) {
            EmployeesRow.idProperty = 'Id';
            EmployeesRow.isActiveProperty = 'IsActive';
            EmployeesRow.nameProperty = 'EmployeeFullName';
            EmployeesRow.localTextPrefix = 'HumanResource.Employees';
            EmployeesRow.lookupKey = 'HumanResource.Employees';
            function getLookup() {
                return Q.getLookup('HumanResource.Employees');
            }
            EmployeesRow.getLookup = getLookup;
            EmployeesRow.deletePermission = 'Human Resource:Employee:Delete';
            EmployeesRow.insertPermission = 'Human Resource:Employee:Create';
            EmployeesRow.readPermission = 'Human Resource:Employee:View';
            EmployeesRow.updatePermission = 'Human Resource:Employee:Update';
        })(EmployeesRow = HumanResource.EmployeesRow || (HumanResource.EmployeesRow = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeesService;
        (function (EmployeesService) {
            EmployeesService.baseUrl = 'HumanResource/Employees';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                EmployeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeesService = HumanResource.EmployeesService || (HumanResource.EmployeesService = {}));
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionChecklistForm = /** @class */ (function (_super) {
            __extends(InspectionChecklistForm, _super);
            function InspectionChecklistForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InspectionChecklistForm.init) {
                    InspectionChecklistForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    Q.initFormType(InspectionChecklistForm, [
                        'JobCategory', w0,
                        'JobTypes', w0
                    ]);
                }
                return _this;
            }
            InspectionChecklistForm.formKey = 'Inspections.InspectionChecklist';
            return InspectionChecklistForm;
        }(Serenity.PrefixedContext));
        Inspections.InspectionChecklistForm = InspectionChecklistForm;
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionChecklistRow;
        (function (InspectionChecklistRow) {
            InspectionChecklistRow.idProperty = 'Id';
            InspectionChecklistRow.localTextPrefix = 'Inspections.InspectionChecklist';
            InspectionChecklistRow.deletePermission = 'Inspections:Inspection:Delete';
            InspectionChecklistRow.insertPermission = 'Inspections:Inspection:Create';
            InspectionChecklistRow.readPermission = 'Inspections:Inspection:View';
            InspectionChecklistRow.updatePermission = 'Inspections:Inspection:Update';
        })(InspectionChecklistRow = Inspections.InspectionChecklistRow || (Inspections.InspectionChecklistRow = {}));
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionChecklistService;
        (function (InspectionChecklistService) {
            InspectionChecklistService.baseUrl = 'Inspections/InspectionChecklist';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InspectionChecklistService[x] = function (r, s, o) {
                    return Q.serviceRequest(InspectionChecklistService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InspectionChecklistService = Inspections.InspectionChecklistService || (Inspections.InspectionChecklistService = {}));
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionJobTypesRow;
        (function (InspectionJobTypesRow) {
            InspectionJobTypesRow.idProperty = 'Id';
            InspectionJobTypesRow.localTextPrefix = 'Inspections.InspectionJobTypes';
            InspectionJobTypesRow.deletePermission = 'Inspections:Inspection:Delete';
            InspectionJobTypesRow.insertPermission = 'Inspections:Inspection:Create';
            InspectionJobTypesRow.readPermission = 'Inspections:Inspection:View';
            InspectionJobTypesRow.updatePermission = 'Inspections:Inspection:Update';
        })(InspectionJobTypesRow = Inspections.InspectionJobTypesRow || (Inspections.InspectionJobTypesRow = {}));
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionsForm = /** @class */ (function (_super) {
            __extends(InspectionsForm, _super);
            function InspectionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InspectionsForm.init) {
                    InspectionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = Inspections.InspectionChecklistEditor;
                    Q.initFormType(InspectionsForm, [
                        'Name', w0,
                        'Rate', w1,
                        'StandardTiming', w0,
                        'IsInspectionList', w2,
                        'Checklist', w3
                    ]);
                }
                return _this;
            }
            InspectionsForm.formKey = 'Inspections.Inspections';
            return InspectionsForm;
        }(Serenity.PrefixedContext));
        Inspections.InspectionsForm = InspectionsForm;
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionsRow;
        (function (InspectionsRow) {
            InspectionsRow.idProperty = 'Id';
            InspectionsRow.nameProperty = 'Name';
            InspectionsRow.localTextPrefix = 'Inspections.Inspections';
            InspectionsRow.lookupKey = 'Inspections.Inspections';
            function getLookup() {
                return Q.getLookup('Inspections.Inspections');
            }
            InspectionsRow.getLookup = getLookup;
            InspectionsRow.deletePermission = 'Inspections:Inspection:Delete';
            InspectionsRow.insertPermission = 'Inspections:Inspection:Create';
            InspectionsRow.readPermission = 'Inspections:Inspection:View';
            InspectionsRow.updatePermission = 'Inspections:Inspection:Update';
        })(InspectionsRow = Inspections.InspectionsRow || (Inspections.InspectionsRow = {}));
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionsService;
        (function (InspectionsService) {
            InspectionsService.baseUrl = 'Inspections/Inspections';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InspectionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(InspectionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InspectionsService = Inspections.InspectionsService || (Inspections.InspectionsService = {}));
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections_1) {
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var DamagedProductsForm = /** @class */ (function (_super) {
            __extends(DamagedProductsForm, _super);
            function DamagedProductsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DamagedProductsForm.init) {
                    DamagedProductsForm.init = true;
                    var s = Serenity;
                    var w0 = SmartERP.Products.CategoriesEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.DateEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(DamagedProductsForm, [
                        'CategoryId', w0,
                        'ProductId', w1,
                        'Code', w2,
                        'Name', w2,
                        'PurchasePrice', w3,
                        'Quantity', w3,
                        'Date', w4,
                        'Note', w5
                    ]);
                }
                return _this;
            }
            DamagedProductsForm.formKey = 'Inventory.DamagedProducts';
            return DamagedProductsForm;
        }(Serenity.PrefixedContext));
        Inventory.DamagedProductsForm = DamagedProductsForm;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var DamagedProductsRow;
        (function (DamagedProductsRow) {
            DamagedProductsRow.idProperty = 'Id';
            DamagedProductsRow.nameProperty = 'Code';
            DamagedProductsRow.localTextPrefix = 'Inventory.DamagedProducts';
            DamagedProductsRow.lookupKey = 'Inventory.DamagedProducts';
            function getLookup() {
                return Q.getLookup('Inventory.DamagedProducts');
            }
            DamagedProductsRow.getLookup = getLookup;
            DamagedProductsRow.deletePermission = 'Inventory:Damaged Product:Delete';
            DamagedProductsRow.insertPermission = 'Inventory:Damaged Product:Create';
            DamagedProductsRow.readPermission = 'Inventory:Damaged Product:View';
            DamagedProductsRow.updatePermission = 'Inventory:Damaged Product:Update';
        })(DamagedProductsRow = Inventory.DamagedProductsRow || (Inventory.DamagedProductsRow = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var DamagedProductsService;
        (function (DamagedProductsService) {
            DamagedProductsService.baseUrl = 'Inventory/DamagedProducts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                DamagedProductsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DamagedProductsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DamagedProductsService = Inventory.DamagedProductsService || (Inventory.DamagedProductsService = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailsForm = /** @class */ (function (_super) {
            __extends(GoodsIssueDetailsForm, _super);
            function GoodsIssueDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GoodsIssueDetailsForm.init) {
                    GoodsIssueDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(GoodsIssueDetailsForm, [
                        'ProductId', w0,
                        'Quantity', w1,
                        'WarehouseId', w0,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            GoodsIssueDetailsForm.formKey = 'Inventory.GoodsIssueDetails';
            return GoodsIssueDetailsForm;
        }(Serenity.PrefixedContext));
        Inventory.GoodsIssueDetailsForm = GoodsIssueDetailsForm;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailsRow;
        (function (GoodsIssueDetailsRow) {
            GoodsIssueDetailsRow.idProperty = 'Id';
            GoodsIssueDetailsRow.nameProperty = 'ProductName';
            GoodsIssueDetailsRow.localTextPrefix = 'Inventory.GoodsIssueDetails';
            GoodsIssueDetailsRow.deletePermission = 'Inventory:Goods Issue:Delete';
            GoodsIssueDetailsRow.insertPermission = 'Inventory:Goods Issue:Create';
            GoodsIssueDetailsRow.readPermission = 'Inventory:Goods Issue:View';
            GoodsIssueDetailsRow.updatePermission = 'Inventory:Goods Issue:Update';
        })(GoodsIssueDetailsRow = Inventory.GoodsIssueDetailsRow || (Inventory.GoodsIssueDetailsRow = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailsService;
        (function (GoodsIssueDetailsService) {
            GoodsIssueDetailsService.baseUrl = 'Inventory/GoodsIssueDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                GoodsIssueDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(GoodsIssueDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GoodsIssueDetailsService = Inventory.GoodsIssueDetailsService || (Inventory.GoodsIssueDetailsService = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueForm = /** @class */ (function (_super) {
            __extends(GoodsIssueForm, _super);
            function GoodsIssueForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GoodsIssueForm.init) {
                    GoodsIssueForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = Inventory.GoodsIssueDetailEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(GoodsIssueForm, [
                        'SaleId', w0,
                        'CustomerId', w0,
                        'Date', w1,
                        'EmployeenId', w0,
                        'Reference', w2,
                        'LineItems', w3,
                        'TotalQuantity', w4,
                        'Remarks', w5,
                        'JournalRemarks', w5
                    ]);
                }
                return _this;
            }
            GoodsIssueForm.formKey = 'Inventory.GoodsIssue';
            return GoodsIssueForm;
        }(Serenity.PrefixedContext));
        Inventory.GoodsIssueForm = GoodsIssueForm;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueRow;
        (function (GoodsIssueRow) {
            GoodsIssueRow.idProperty = 'Id';
            GoodsIssueRow.nameProperty = 'Date';
            GoodsIssueRow.localTextPrefix = 'Inventory.GoodsIssue';
            GoodsIssueRow.deletePermission = 'Inventory:Goods Issue:Delete';
            GoodsIssueRow.insertPermission = 'Inventory:Goods Issue:Create';
            GoodsIssueRow.readPermission = 'Inventory:Goods Issue:View';
            GoodsIssueRow.updatePermission = 'Inventory:Goods Issue:Update';
        })(GoodsIssueRow = Inventory.GoodsIssueRow || (Inventory.GoodsIssueRow = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueService;
        (function (GoodsIssueService) {
            GoodsIssueService.baseUrl = 'Inventory/GoodsIssue';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                GoodsIssueService[x] = function (r, s, o) {
                    return Q.serviceRequest(GoodsIssueService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GoodsIssueService = Inventory.GoodsIssueService || (Inventory.GoodsIssueService = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailsForm = /** @class */ (function (_super) {
            __extends(GoodsReceiptDetailsForm, _super);
            function GoodsReceiptDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GoodsReceiptDetailsForm.init) {
                    GoodsReceiptDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(GoodsReceiptDetailsForm, [
                        'ProductId', w0,
                        'Quantity', w1,
                        'WarehouseId', w0,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            GoodsReceiptDetailsForm.formKey = 'Inventory.GoodsReceiptDetails';
            return GoodsReceiptDetailsForm;
        }(Serenity.PrefixedContext));
        Inventory.GoodsReceiptDetailsForm = GoodsReceiptDetailsForm;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailsRow;
        (function (GoodsReceiptDetailsRow) {
            GoodsReceiptDetailsRow.idProperty = 'Id';
            GoodsReceiptDetailsRow.nameProperty = 'ProductName';
            GoodsReceiptDetailsRow.localTextPrefix = 'Inventory.GoodsReceiptDetails';
            GoodsReceiptDetailsRow.deletePermission = 'Inventory:Goods Receipt:Delete';
            GoodsReceiptDetailsRow.insertPermission = 'Inventory:Goods Receipt:Create';
            GoodsReceiptDetailsRow.readPermission = 'Inventory:Goods Receipt:View';
            GoodsReceiptDetailsRow.updatePermission = 'Inventory:Goods Receipt:Update';
        })(GoodsReceiptDetailsRow = Inventory.GoodsReceiptDetailsRow || (Inventory.GoodsReceiptDetailsRow = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailsService;
        (function (GoodsReceiptDetailsService) {
            GoodsReceiptDetailsService.baseUrl = 'Inventory/GoodsReceiptDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                GoodsReceiptDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(GoodsReceiptDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GoodsReceiptDetailsService = Inventory.GoodsReceiptDetailsService || (Inventory.GoodsReceiptDetailsService = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptForm = /** @class */ (function (_super) {
            __extends(GoodsReceiptForm, _super);
            function GoodsReceiptForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GoodsReceiptForm.init) {
                    GoodsReceiptForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = Inventory.GoodsReceiptDetailEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(GoodsReceiptForm, [
                        'PurchaseId', w0,
                        'SupplierId', w0,
                        'Date', w1,
                        'EmployeenId', w0,
                        'Reference', w2,
                        'LineItems', w3,
                        'TotalQuantity', w4,
                        'Remarks', w5,
                        'JournalRemarks', w5
                    ]);
                }
                return _this;
            }
            GoodsReceiptForm.formKey = 'Inventory.GoodsReceipt';
            return GoodsReceiptForm;
        }(Serenity.PrefixedContext));
        Inventory.GoodsReceiptForm = GoodsReceiptForm;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptRow;
        (function (GoodsReceiptRow) {
            GoodsReceiptRow.idProperty = 'Id';
            GoodsReceiptRow.nameProperty = 'Date';
            GoodsReceiptRow.localTextPrefix = 'Inventory.GoodsReceipt';
            GoodsReceiptRow.deletePermission = 'Inventory:Goods Receipt:Delete';
            GoodsReceiptRow.insertPermission = 'Inventory:Goods Receipt:Create';
            GoodsReceiptRow.readPermission = 'Inventory:Goods Receipt:View';
            GoodsReceiptRow.updatePermission = 'Inventory:Goods Receipt:Update';
        })(GoodsReceiptRow = Inventory.GoodsReceiptRow || (Inventory.GoodsReceiptRow = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptService;
        (function (GoodsReceiptService) {
            GoodsReceiptService.baseUrl = 'Inventory/GoodsReceipt';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                GoodsReceiptService[x] = function (r, s, o) {
                    return Q.serviceRequest(GoodsReceiptService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GoodsReceiptService = Inventory.GoodsReceiptService || (Inventory.GoodsReceiptService = {}));
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceItemsForm = /** @class */ (function (_super) {
            __extends(InvoiceItemsForm, _super);
            function InvoiceItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoiceItemsForm.init) {
                    InvoiceItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(InvoiceItemsForm, [
                        'ProductId', w0,
                        'UnitId', w0,
                        'Quantity', w1,
                        'HSN', w2,
                        'UnitPrice', w1,
                        'Gst', w1,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            InvoiceItemsForm.formKey = 'Invoices.InvoiceItems';
            return InvoiceItemsForm;
        }(Serenity.PrefixedContext));
        Invoices.InvoiceItemsForm = InvoiceItemsForm;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceItemsRow;
        (function (InvoiceItemsRow) {
            InvoiceItemsRow.idProperty = 'Id';
            InvoiceItemsRow.nameProperty = 'Description';
            InvoiceItemsRow.localTextPrefix = 'Invoices.InvoiceItems';
            InvoiceItemsRow.deletePermission = 'Invoices:Invoice:Delete';
            InvoiceItemsRow.insertPermission = 'Invoices:Invoice:Create';
            InvoiceItemsRow.readPermission = 'Invoices:Invoice:View';
            InvoiceItemsRow.updatePermission = 'Invoices:Invoice:Update';
        })(InvoiceItemsRow = Invoices.InvoiceItemsRow || (Invoices.InvoiceItemsRow = {}));
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceItemsService;
        (function (InvoiceItemsService) {
            InvoiceItemsService.baseUrl = 'Invoices/InvoiceItems';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceItemsService = Invoices.InvoiceItemsService || (Invoices.InvoiceItemsService = {}));
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceJobItemsForm = /** @class */ (function (_super) {
            __extends(InvoiceJobItemsForm, _super);
            function InvoiceJobItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoiceJobItemsForm.init) {
                    InvoiceJobItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(InvoiceJobItemsForm, [
                        'JobType', w0,
                        'UnitPrice', w1,
                        'Gst', w1,
                        'Discount', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            InvoiceJobItemsForm.formKey = 'Invoices.InvoiceJobItems';
            return InvoiceJobItemsForm;
        }(Serenity.PrefixedContext));
        Invoices.InvoiceJobItemsForm = InvoiceJobItemsForm;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceJobItemsRow;
        (function (InvoiceJobItemsRow) {
            InvoiceJobItemsRow.idProperty = 'Id';
            InvoiceJobItemsRow.nameProperty = 'Description';
            InvoiceJobItemsRow.localTextPrefix = 'Invoices.InvoiceJobItems';
            InvoiceJobItemsRow.deletePermission = 'Invoices:Invoice:Delete';
            InvoiceJobItemsRow.insertPermission = 'Invoices:Invoice:Create';
            InvoiceJobItemsRow.readPermission = 'Invoices:Invoice:View';
            InvoiceJobItemsRow.updatePermission = 'Invoices:Invoice:Update';
        })(InvoiceJobItemsRow = Invoices.InvoiceJobItemsRow || (Invoices.InvoiceJobItemsRow = {}));
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceJobItemsService;
        (function (InvoiceJobItemsService) {
            InvoiceJobItemsService.baseUrl = 'Invoices/InvoiceJobItems';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceJobItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceJobItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceJobItemsService = Invoices.InvoiceJobItemsService || (Invoices.InvoiceJobItemsService = {}));
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoicesForm = /** @class */ (function (_super) {
            __extends(InvoicesForm, _super);
            function InvoicesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoicesForm.init) {
                    InvoicesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = Invoices.InvoiceJobItemsEditor;
                    var w4 = Invoices.InvoiceItemsEditor;
                    var w5 = s.DecimalEditor;
                    Q.initFormType(InvoicesForm, [
                        'CustomerId', w0,
                        'Jobcard', w0,
                        'Vehicle', w0,
                        'Date', w1,
                        'ScheduleDatetime', w1,
                        'DeliveryDatetime', w1,
                        'PaymentAccount', w0,
                        'InsuranceCoName', w2,
                        'InsuranceCoAdd', w2,
                        'InsuranceCoCit', w2,
                        'GstIN', w2,
                        'ServiceType', w2,
                        'Jobs', w3,
                        'LineItems', w4,
                        'GrandTotal', w5,
                        'Discount', w5,
                        'TotalDiscount', w5,
                        'Gst', w5,
                        'CGST', w5,
                        'SGST', w5,
                        'TotalTax', w5,
                        'ShippingCost', w5,
                        'NetTotal', w5,
                        'PaidAmount', w5,
                        'Due', w5,
                        'Change', w5
                    ]);
                }
                return _this;
            }
            InvoicesForm.formKey = 'Invoices.Invoices';
            return InvoicesForm;
        }(Serenity.PrefixedContext));
        Invoices.InvoicesForm = InvoicesForm;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoicesRow;
        (function (InvoicesRow) {
            InvoicesRow.idProperty = 'Id';
            InvoicesRow.nameProperty = 'Details';
            InvoicesRow.localTextPrefix = 'Invoices.Invoices';
            InvoicesRow.lookupKey = 'Invoices.Invoices';
            function getLookup() {
                return Q.getLookup('Invoices.Invoices');
            }
            InvoicesRow.getLookup = getLookup;
            InvoicesRow.deletePermission = 'Invoices:Invoice:Delete';
            InvoicesRow.insertPermission = 'Invoices:Invoice:Create';
            InvoicesRow.readPermission = 'Invoices:Invoice:View';
            InvoicesRow.updatePermission = 'Invoices:Invoice:Update';
        })(InvoicesRow = Invoices.InvoicesRow || (Invoices.InvoicesRow = {}));
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoicesService;
        (function (InvoicesService) {
            InvoicesService.baseUrl = 'Invoices/Invoices';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Email'
            ].forEach(function (x) {
                InvoicesService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoicesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoicesService = Invoices.InvoicesService || (Invoices.InvoicesService = {}));
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices_1) {
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var GatePassesForm = /** @class */ (function (_super) {
            __extends(GatePassesForm, _super);
            function GatePassesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GatePassesForm.init) {
                    GatePassesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(GatePassesForm, [
                        'JobCard', w0,
                        'Customer', w0,
                        'Vehicle', w0,
                        'VehicleOutDate', w1
                    ]);
                }
                return _this;
            }
            GatePassesForm.formKey = 'JobCards.GatePasses';
            return GatePassesForm;
        }(Serenity.PrefixedContext));
        JobCards.GatePassesForm = GatePassesForm;
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var GatePassesRow;
        (function (GatePassesRow) {
            GatePassesRow.idProperty = 'Id';
            GatePassesRow.localTextPrefix = 'JobCards.GatePasses';
            GatePassesRow.lookupKey = 'JobCards.GatePasses';
            function getLookup() {
                return Q.getLookup('JobCards.GatePasses');
            }
            GatePassesRow.getLookup = getLookup;
            GatePassesRow.deletePermission = 'Gate Passes:Gate Passe:Delete';
            GatePassesRow.insertPermission = 'Gate Passes:Gate Passe:Create';
            GatePassesRow.readPermission = 'Gate Passes:Gate Passe:View';
            GatePassesRow.updatePermission = 'Gate Passes:Gate Passe:Update';
        })(GatePassesRow = JobCards.GatePassesRow || (JobCards.GatePassesRow = {}));
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var GatePassesService;
        (function (GatePassesService) {
            GatePassesService.baseUrl = 'JobCards/GatePasses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GatePassesService[x] = function (r, s, o) {
                    return Q.serviceRequest(GatePassesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GatePassesService = JobCards.GatePassesService || (JobCards.GatePassesService = {}));
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardDetailsForm = /** @class */ (function (_super) {
            __extends(JobCardDetailsForm, _super);
            function JobCardDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!JobCardDetailsForm.init) {
                    JobCardDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(JobCardDetailsForm, [
                        'JobType', w0,
                        'Mechanic', w0,
                        'CustomerNotes', w1
                    ]);
                }
                return _this;
            }
            JobCardDetailsForm.formKey = 'JobCards.JobCardDetails';
            return JobCardDetailsForm;
        }(Serenity.PrefixedContext));
        JobCards.JobCardDetailsForm = JobCardDetailsForm;
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardDetailsRow;
        (function (JobCardDetailsRow) {
            JobCardDetailsRow.idProperty = 'Id';
            JobCardDetailsRow.nameProperty = 'CustomerNotes';
            JobCardDetailsRow.localTextPrefix = 'JobCards.JobCardDetails';
            JobCardDetailsRow.deletePermission = 'Job Cards:Job Card:Delete';
            JobCardDetailsRow.insertPermission = 'Job Cards:Job Card:Create';
            JobCardDetailsRow.readPermission = 'Job Cards:Job Card:View';
            JobCardDetailsRow.updatePermission = 'Job Cards:Job Card:Update';
        })(JobCardDetailsRow = JobCards.JobCardDetailsRow || (JobCards.JobCardDetailsRow = {}));
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardDetailsService;
        (function (JobCardDetailsService) {
            JobCardDetailsService.baseUrl = 'JobCards/JobCardDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                JobCardDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(JobCardDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(JobCardDetailsService = JobCards.JobCardDetailsService || (JobCards.JobCardDetailsService = {}));
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardsForm = /** @class */ (function (_super) {
            __extends(JobCardsForm, _super);
            function JobCardsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!JobCardsForm.init) {
                    JobCardsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DateTimeEditor;
                    var w4 = JobCards.JobCardDetailsEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(JobCardsForm, [
                        'Customer', w0,
                        'WorkOrderNo', w1,
                        'Address', w1,
                        'Vehicle', w0,
                        'Phone', w1,
                        'Reference', w1,
                        'ServiceType', w1,
                        'Mobile', w1,
                        'ScheduleDatetime', w2,
                        'Website', w1,
                        'DeliveryDatetime', w3,
                        'JobCardDetails', w4,
                        'Details', w5
                    ]);
                }
                return _this;
            }
            JobCardsForm.formKey = 'JobCards.JobCards';
            return JobCardsForm;
        }(Serenity.PrefixedContext));
        JobCards.JobCardsForm = JobCardsForm;
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardsRow;
        (function (JobCardsRow) {
            JobCardsRow.idProperty = 'Id';
            JobCardsRow.nameProperty = 'Id';
            JobCardsRow.localTextPrefix = 'JobCards.JobCards';
            JobCardsRow.lookupKey = 'JobCards.JobCards';
            function getLookup() {
                return Q.getLookup('JobCards.JobCards');
            }
            JobCardsRow.getLookup = getLookup;
            JobCardsRow.deletePermission = 'Job Cards:Job Card:Delete';
            JobCardsRow.insertPermission = 'Job Cards:Job Card:Create';
            JobCardsRow.readPermission = 'Job Cards:Job Card:View';
            JobCardsRow.updatePermission = 'Job Cards:Job Card:Update';
        })(JobCardsRow = JobCards.JobCardsRow || (JobCards.JobCardsRow = {}));
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardsService;
        (function (JobCardsService) {
            JobCardsService.baseUrl = 'JobCards/JobCards';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                JobCardsService[x] = function (r, s, o) {
                    return Q.serviceRequest(JobCardsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(JobCardsService = JobCards.JobCardsService || (JobCards.JobCardsService = {}));
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards_1) {
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AgendaItemTypesForm = /** @class */ (function (_super) {
            __extends(AgendaItemTypesForm, _super);
            function AgendaItemTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AgendaItemTypesForm.init) {
                    AgendaItemTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AgendaItemTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            AgendaItemTypesForm.formKey = 'Masters.AgendaItemTypes';
            return AgendaItemTypesForm;
        }(Serenity.PrefixedContext));
        Masters.AgendaItemTypesForm = AgendaItemTypesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AgendaItemTypesRow;
        (function (AgendaItemTypesRow) {
            AgendaItemTypesRow.idProperty = 'Id';
            AgendaItemTypesRow.isActiveProperty = 'IsActive';
            AgendaItemTypesRow.nameProperty = 'Name';
            AgendaItemTypesRow.localTextPrefix = 'Masters.AgendaItemTypes';
            AgendaItemTypesRow.lookupKey = 'Masters.AgendaItemTypes';
            function getLookup() {
                return Q.getLookup('Masters.AgendaItemTypes');
            }
            AgendaItemTypesRow.getLookup = getLookup;
            AgendaItemTypesRow.deletePermission = 'Masters:Agenda Item Types:Delete';
            AgendaItemTypesRow.insertPermission = 'Masters:Agenda Item Types:Create';
            AgendaItemTypesRow.readPermission = 'Masters:Agenda Item Types:View';
            AgendaItemTypesRow.updatePermission = 'Masters:Agenda Item Types:Update';
        })(AgendaItemTypesRow = Masters.AgendaItemTypesRow || (Masters.AgendaItemTypesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AgendaItemTypesService;
        (function (AgendaItemTypesService) {
            AgendaItemTypesService.baseUrl = 'Masters/AgendaItemTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AgendaItemTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(AgendaItemTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AgendaItemTypesService = Masters.AgendaItemTypesService || (Masters.AgendaItemTypesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AssemblyTypesForm = /** @class */ (function (_super) {
            __extends(AssemblyTypesForm, _super);
            function AssemblyTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AssemblyTypesForm.init) {
                    AssemblyTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AssemblyTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            AssemblyTypesForm.formKey = 'Masters.AssemblyTypes';
            return AssemblyTypesForm;
        }(Serenity.PrefixedContext));
        Masters.AssemblyTypesForm = AssemblyTypesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AssemblyTypesRow;
        (function (AssemblyTypesRow) {
            AssemblyTypesRow.idProperty = 'Id';
            AssemblyTypesRow.nameProperty = 'Name';
            AssemblyTypesRow.localTextPrefix = 'Masters.AssemblyTypes';
            AssemblyTypesRow.lookupKey = 'Masters.AssemblyTypes';
            function getLookup() {
                return Q.getLookup('Masters.AssemblyTypes');
            }
            AssemblyTypesRow.getLookup = getLookup;
            AssemblyTypesRow.deletePermission = 'Masters:Assembly Types:Delete';
            AssemblyTypesRow.insertPermission = 'Masters:Assembly Types:Create';
            AssemblyTypesRow.readPermission = 'Masters:Assembly Types:View';
            AssemblyTypesRow.updatePermission = 'Masters:Assembly Types:Update';
        })(AssemblyTypesRow = Masters.AssemblyTypesRow || (Masters.AssemblyTypesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AssemblyTypesService;
        (function (AssemblyTypesService) {
            AssemblyTypesService.baseUrl = 'Masters/AssemblyTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssemblyTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssemblyTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AssemblyTypesService = Masters.AssemblyTypesService || (Masters.AssemblyTypesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendanceStatusesForm = /** @class */ (function (_super) {
            __extends(AttendanceStatusesForm, _super);
            function AttendanceStatusesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AttendanceStatusesForm.init) {
                    AttendanceStatusesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AttendanceStatusesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            AttendanceStatusesForm.formKey = 'Masters.AttendanceStatuses';
            return AttendanceStatusesForm;
        }(Serenity.PrefixedContext));
        Masters.AttendanceStatusesForm = AttendanceStatusesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendanceStatusesRow;
        (function (AttendanceStatusesRow) {
            AttendanceStatusesRow.idProperty = 'Id';
            AttendanceStatusesRow.isActiveProperty = 'IsActive';
            AttendanceStatusesRow.nameProperty = 'Name';
            AttendanceStatusesRow.localTextPrefix = 'Masters.AttendanceStatuses';
            AttendanceStatusesRow.lookupKey = 'Masters.AttendanceStatuses';
            function getLookup() {
                return Q.getLookup('Masters.AttendanceStatuses');
            }
            AttendanceStatusesRow.getLookup = getLookup;
            AttendanceStatusesRow.deletePermission = 'Masters:Attendance Statuses:Delete';
            AttendanceStatusesRow.insertPermission = 'Masters:Attendance Statuses:Create';
            AttendanceStatusesRow.readPermission = 'Masters:Attendance Statusess:View';
            AttendanceStatusesRow.updatePermission = 'Masters:Attendance Statuses:Update';
        })(AttendanceStatusesRow = Masters.AttendanceStatusesRow || (Masters.AttendanceStatusesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendanceStatusesService;
        (function (AttendanceStatusesService) {
            AttendanceStatusesService.baseUrl = 'Masters/AttendanceStatuses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AttendanceStatusesService[x] = function (r, s, o) {
                    return Q.serviceRequest(AttendanceStatusesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AttendanceStatusesService = Masters.AttendanceStatusesService || (Masters.AttendanceStatusesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendeeTypesForm = /** @class */ (function (_super) {
            __extends(AttendeeTypesForm, _super);
            function AttendeeTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AttendeeTypesForm.init) {
                    AttendeeTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AttendeeTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            AttendeeTypesForm.formKey = 'Masters.AttendeeTypes';
            return AttendeeTypesForm;
        }(Serenity.PrefixedContext));
        Masters.AttendeeTypesForm = AttendeeTypesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendeeTypesRow;
        (function (AttendeeTypesRow) {
            AttendeeTypesRow.idProperty = 'Id';
            AttendeeTypesRow.isActiveProperty = 'IsActive';
            AttendeeTypesRow.nameProperty = 'Name';
            AttendeeTypesRow.localTextPrefix = 'Masters.AttendeeTypes';
            AttendeeTypesRow.lookupKey = 'Masters.AttendeeTypes';
            function getLookup() {
                return Q.getLookup('Masters.AttendeeTypes');
            }
            AttendeeTypesRow.getLookup = getLookup;
            AttendeeTypesRow.deletePermission = 'Masters:Attendee Types:Delete';
            AttendeeTypesRow.insertPermission = 'Masters:Attendee Types:Create';
            AttendeeTypesRow.readPermission = 'Masters:Attendee Types:View';
            AttendeeTypesRow.updatePermission = 'Masters:Attendee Types:Update';
        })(AttendeeTypesRow = Masters.AttendeeTypesRow || (Masters.AttendeeTypesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendeeTypesService;
        (function (AttendeeTypesService) {
            AttendeeTypesService.baseUrl = 'Masters/AttendeeTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AttendeeTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(AttendeeTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AttendeeTypesService = Masters.AttendeeTypesService || (Masters.AttendeeTypesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ColorTypesForm = /** @class */ (function (_super) {
            __extends(ColorTypesForm, _super);
            function ColorTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ColorTypesForm.init) {
                    ColorTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ColorTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            ColorTypesForm.formKey = 'Masters.ColorTypes';
            return ColorTypesForm;
        }(Serenity.PrefixedContext));
        Masters.ColorTypesForm = ColorTypesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ColorTypesRow;
        (function (ColorTypesRow) {
            ColorTypesRow.idProperty = 'Id';
            ColorTypesRow.nameProperty = 'Name';
            ColorTypesRow.localTextPrefix = 'Masters.ColorTypes';
            ColorTypesRow.lookupKey = 'Masters.ColorTypes';
            function getLookup() {
                return Q.getLookup('Masters.ColorTypes');
            }
            ColorTypesRow.getLookup = getLookup;
            ColorTypesRow.deletePermission = 'Masters:Color Types:Delete';
            ColorTypesRow.insertPermission = 'Masters:Color Types:Create';
            ColorTypesRow.readPermission = 'Masters:Color Types:View';
            ColorTypesRow.updatePermission = 'Masters:Color Types:Update';
        })(ColorTypesRow = Masters.ColorTypesRow || (Masters.ColorTypesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ColorTypesService;
        (function (ColorTypesService) {
            ColorTypesService.baseUrl = 'Masters/ColorTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ColorTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ColorTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ColorTypesService = Masters.ColorTypesService || (Masters.ColorTypesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var CustomerGroupsForm = /** @class */ (function (_super) {
            __extends(CustomerGroupsForm, _super);
            function CustomerGroupsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerGroupsForm.init) {
                    CustomerGroupsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CustomerGroupsForm, [
                        'Name', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            CustomerGroupsForm.formKey = 'Masters.CustomerGroups';
            return CustomerGroupsForm;
        }(Serenity.PrefixedContext));
        Masters.CustomerGroupsForm = CustomerGroupsForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var CustomerGroupsRow;
        (function (CustomerGroupsRow) {
            CustomerGroupsRow.idProperty = 'Id';
            CustomerGroupsRow.isActiveProperty = 'IsActive';
            CustomerGroupsRow.nameProperty = 'Name';
            CustomerGroupsRow.localTextPrefix = 'Masters.CustomerGroups';
            CustomerGroupsRow.lookupKey = 'Masters.CustomerGroups';
            function getLookup() {
                return Q.getLookup('Masters.CustomerGroups');
            }
            CustomerGroupsRow.getLookup = getLookup;
            CustomerGroupsRow.deletePermission = 'Masters:Customer Groups:Delete';
            CustomerGroupsRow.insertPermission = 'Masters:Customer Groups:Create';
            CustomerGroupsRow.readPermission = 'Masters:Customer Groups:View';
            CustomerGroupsRow.updatePermission = 'Masters:Customer Groups:Update';
        })(CustomerGroupsRow = Masters.CustomerGroupsRow || (Masters.CustomerGroupsRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var CustomerGroupsService;
        (function (CustomerGroupsService) {
            CustomerGroupsService.baseUrl = 'Masters/CustomerGroups';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CustomerGroupsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerGroupsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerGroupsService = Masters.CustomerGroupsService || (Masters.CustomerGroupsService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var FuelTypesForm = /** @class */ (function (_super) {
            __extends(FuelTypesForm, _super);
            function FuelTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FuelTypesForm.init) {
                    FuelTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(FuelTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            FuelTypesForm.formKey = 'Masters.FuelTypes';
            return FuelTypesForm;
        }(Serenity.PrefixedContext));
        Masters.FuelTypesForm = FuelTypesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var FuelTypesRow;
        (function (FuelTypesRow) {
            FuelTypesRow.idProperty = 'Id';
            FuelTypesRow.nameProperty = 'Name';
            FuelTypesRow.localTextPrefix = 'Masters.FuelTypes';
            FuelTypesRow.lookupKey = 'Masters.FuelTypes';
            function getLookup() {
                return Q.getLookup('Masters.FuelTypes');
            }
            FuelTypesRow.getLookup = getLookup;
            FuelTypesRow.deletePermission = 'Masters:Fuel Types:Delete';
            FuelTypesRow.insertPermission = 'Masters:Fuel Types:Create';
            FuelTypesRow.readPermission = 'Masters:Fuel Types:View';
            FuelTypesRow.updatePermission = 'Masters:Fuel Types:Update';
        })(FuelTypesRow = Masters.FuelTypesRow || (Masters.FuelTypesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var FuelTypesService;
        (function (FuelTypesService) {
            FuelTypesService.baseUrl = 'Masters/FuelTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FuelTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(FuelTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FuelTypesService = Masters.FuelTypesService || (Masters.FuelTypesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var JobCategoriesForm = /** @class */ (function (_super) {
            __extends(JobCategoriesForm, _super);
            function JobCategoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!JobCategoriesForm.init) {
                    JobCategoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(JobCategoriesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            JobCategoriesForm.formKey = 'Masters.JobCategories';
            return JobCategoriesForm;
        }(Serenity.PrefixedContext));
        Masters.JobCategoriesForm = JobCategoriesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var JobCategoriesRow;
        (function (JobCategoriesRow) {
            JobCategoriesRow.idProperty = 'Id';
            JobCategoriesRow.nameProperty = 'Name';
            JobCategoriesRow.localTextPrefix = 'Masters.JobCategories';
            JobCategoriesRow.lookupKey = 'Masters.JobCategories';
            function getLookup() {
                return Q.getLookup('Masters.JobCategories');
            }
            JobCategoriesRow.getLookup = getLookup;
            JobCategoriesRow.deletePermission = 'Masters:Job Categories:Delete';
            JobCategoriesRow.insertPermission = 'Masters:Job Categories:Create';
            JobCategoriesRow.readPermission = 'Masters:Job Categories:View';
            JobCategoriesRow.updatePermission = 'Masters:Job Categories:Update';
        })(JobCategoriesRow = Masters.JobCategoriesRow || (Masters.JobCategoriesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var JobCategoriesService;
        (function (JobCategoriesService) {
            JobCategoriesService.baseUrl = 'Masters/JobCategories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                JobCategoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(JobCategoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(JobCategoriesService = Masters.JobCategoriesService || (Masters.JobCategoriesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var JobTypesForm = /** @class */ (function (_super) {
            __extends(JobTypesForm, _super);
            function JobTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!JobTypesForm.init) {
                    JobTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(JobTypesForm, [
                        'JobCategory', w0,
                        'Name', w1,
                        'Rate', w2,
                        'Gst', w2,
                        'StandardTiming', w1,
                        'IsInspectionList', w3
                    ]);
                }
                return _this;
            }
            JobTypesForm.formKey = 'Masters.JobTypes';
            return JobTypesForm;
        }(Serenity.PrefixedContext));
        Masters.JobTypesForm = JobTypesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var JobTypesRow;
        (function (JobTypesRow) {
            JobTypesRow.idProperty = 'Id';
            JobTypesRow.nameProperty = 'Name';
            JobTypesRow.localTextPrefix = 'Masters.JobTypes';
            JobTypesRow.lookupKey = 'Masters.JobTypes';
            function getLookup() {
                return Q.getLookup('Masters.JobTypes');
            }
            JobTypesRow.getLookup = getLookup;
            JobTypesRow.deletePermission = 'Masters:Job Types:Delete';
            JobTypesRow.insertPermission = 'Masters:Job Types:Create';
            JobTypesRow.readPermission = 'Masters:Job Types:View';
            JobTypesRow.updatePermission = 'Masters:Job Types:Update';
        })(JobTypesRow = Masters.JobTypesRow || (Masters.JobTypesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var JobTypesService;
        (function (JobTypesService) {
            JobTypesService.baseUrl = 'Masters/JobTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                JobTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(JobTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(JobTypesService = Masters.JobTypesService || (Masters.JobTypesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var LocationsForm = /** @class */ (function (_super) {
            __extends(LocationsForm, _super);
            function LocationsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LocationsForm.init) {
                    LocationsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(LocationsForm, [
                        'Name', w0,
                        'CountryId', w1,
                        'StateId', w1,
                        'CityId', w1,
                        'Address', w0,
                        'Latitude', w0,
                        'Longitude', w0
                    ]);
                }
                return _this;
            }
            LocationsForm.formKey = 'Masters.Locations';
            return LocationsForm;
        }(Serenity.PrefixedContext));
        Masters.LocationsForm = LocationsForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var LocationsRow;
        (function (LocationsRow) {
            LocationsRow.idProperty = 'Id';
            LocationsRow.isActiveProperty = 'IsActive';
            LocationsRow.nameProperty = 'Name';
            LocationsRow.localTextPrefix = 'Masters.Locations';
            LocationsRow.lookupKey = 'Masters.Locations';
            function getLookup() {
                return Q.getLookup('Masters.Locations');
            }
            LocationsRow.getLookup = getLookup;
            LocationsRow.deletePermission = 'Masters:Locations:Delete';
            LocationsRow.insertPermission = 'Masters:Locations:Create';
            LocationsRow.readPermission = 'Masters:Locations:View';
            LocationsRow.updatePermission = 'Masters:Locations:Update';
        })(LocationsRow = Masters.LocationsRow || (Masters.LocationsRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var LocationsService;
        (function (LocationsService) {
            LocationsService.baseUrl = 'Masters/Locations';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                LocationsService[x] = function (r, s, o) {
                    return Q.serviceRequest(LocationsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LocationsService = Masters.LocationsService || (Masters.LocationsService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var MeetingTypesForm = /** @class */ (function (_super) {
            __extends(MeetingTypesForm, _super);
            function MeetingTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MeetingTypesForm.init) {
                    MeetingTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(MeetingTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            MeetingTypesForm.formKey = 'Masters.MeetingTypes';
            return MeetingTypesForm;
        }(Serenity.PrefixedContext));
        Masters.MeetingTypesForm = MeetingTypesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var MeetingTypesRow;
        (function (MeetingTypesRow) {
            MeetingTypesRow.idProperty = 'Id';
            MeetingTypesRow.isActiveProperty = 'IsActive';
            MeetingTypesRow.nameProperty = 'Name';
            MeetingTypesRow.localTextPrefix = 'Masters.MeetingTypes';
            MeetingTypesRow.lookupKey = 'Masters.MeetingTypes';
            function getLookup() {
                return Q.getLookup('Masters.MeetingTypes');
            }
            MeetingTypesRow.getLookup = getLookup;
            MeetingTypesRow.deletePermission = 'Masters:Meeting Types:Delete';
            MeetingTypesRow.insertPermission = 'Masters:Meeting Types:Create';
            MeetingTypesRow.readPermission = 'Masters:Meeting Types:View';
            MeetingTypesRow.updatePermission = 'Masters:Meeting Types:Update';
        })(MeetingTypesRow = Masters.MeetingTypesRow || (Masters.MeetingTypesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var MeetingTypesService;
        (function (MeetingTypesService) {
            MeetingTypesService.baseUrl = 'Masters/MeetingTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                MeetingTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(MeetingTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MeetingTypesService = Masters.MeetingTypesService || (Masters.MeetingTypesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ResolutionStatusesForm = /** @class */ (function (_super) {
            __extends(ResolutionStatusesForm, _super);
            function ResolutionStatusesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResolutionStatusesForm.init) {
                    ResolutionStatusesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ResolutionStatusesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            ResolutionStatusesForm.formKey = 'Masters.ResolutionStatuses';
            return ResolutionStatusesForm;
        }(Serenity.PrefixedContext));
        Masters.ResolutionStatusesForm = ResolutionStatusesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ResolutionStatusesRow;
        (function (ResolutionStatusesRow) {
            ResolutionStatusesRow.idProperty = 'Id';
            ResolutionStatusesRow.isActiveProperty = 'IsActive';
            ResolutionStatusesRow.nameProperty = 'Name';
            ResolutionStatusesRow.localTextPrefix = 'Masters.ResolutionStatuses';
            ResolutionStatusesRow.lookupKey = 'Masters.ResolutionStatuses';
            function getLookup() {
                return Q.getLookup('Masters.ResolutionStatuses');
            }
            ResolutionStatusesRow.getLookup = getLookup;
            ResolutionStatusesRow.deletePermission = 'Masters:Resolution Statuses:Delete';
            ResolutionStatusesRow.insertPermission = 'Masters:Resolution Statuses:Create';
            ResolutionStatusesRow.readPermission = 'Masters:Resolution Statuses:View';
            ResolutionStatusesRow.updatePermission = 'Masters:Resolution Statuses:Update';
        })(ResolutionStatusesRow = Masters.ResolutionStatusesRow || (Masters.ResolutionStatusesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ResolutionStatusesService;
        (function (ResolutionStatusesService) {
            ResolutionStatusesService.baseUrl = 'Masters/ResolutionStatuses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ResolutionStatusesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ResolutionStatusesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ResolutionStatusesService = Masters.ResolutionStatusesService || (Masters.ResolutionStatusesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var SupplierGroupsForm = /** @class */ (function (_super) {
            __extends(SupplierGroupsForm, _super);
            function SupplierGroupsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierGroupsForm.init) {
                    SupplierGroupsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SupplierGroupsForm, [
                        'Name', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            SupplierGroupsForm.formKey = 'Masters.SupplierGroups';
            return SupplierGroupsForm;
        }(Serenity.PrefixedContext));
        Masters.SupplierGroupsForm = SupplierGroupsForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var SupplierGroupsRow;
        (function (SupplierGroupsRow) {
            SupplierGroupsRow.idProperty = 'Id';
            SupplierGroupsRow.isActiveProperty = 'IsActive';
            SupplierGroupsRow.nameProperty = 'Name';
            SupplierGroupsRow.localTextPrefix = 'Masters.SupplierGroups';
            SupplierGroupsRow.lookupKey = 'Masters.SupplierGroups';
            function getLookup() {
                return Q.getLookup('Masters.SupplierGroups');
            }
            SupplierGroupsRow.getLookup = getLookup;
            SupplierGroupsRow.deletePermission = 'Masters:Supplier Groups:Delete';
            SupplierGroupsRow.insertPermission = 'Masters:Supplier Groups:Create';
            SupplierGroupsRow.readPermission = 'Masters:Supplier Groups:View';
            SupplierGroupsRow.updatePermission = 'Masters:Supplier Groups:Update';
        })(SupplierGroupsRow = Masters.SupplierGroupsRow || (Masters.SupplierGroupsRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var SupplierGroupsService;
        (function (SupplierGroupsService) {
            SupplierGroupsService.baseUrl = 'Masters/SupplierGroups';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                SupplierGroupsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierGroupsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierGroupsService = Masters.SupplierGroupsService || (Masters.SupplierGroupsService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleMakesForm = /** @class */ (function (_super) {
            __extends(VehicleMakesForm, _super);
            function VehicleMakesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VehicleMakesForm.init) {
                    VehicleMakesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(VehicleMakesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            VehicleMakesForm.formKey = 'Masters.VehicleMakes';
            return VehicleMakesForm;
        }(Serenity.PrefixedContext));
        Masters.VehicleMakesForm = VehicleMakesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleMakesRow;
        (function (VehicleMakesRow) {
            VehicleMakesRow.idProperty = 'Id';
            VehicleMakesRow.nameProperty = 'Name';
            VehicleMakesRow.localTextPrefix = 'Masters.VehicleMakes';
            VehicleMakesRow.lookupKey = 'Masters.VehicleMakes';
            function getLookup() {
                return Q.getLookup('Masters.VehicleMakes');
            }
            VehicleMakesRow.getLookup = getLookup;
            VehicleMakesRow.deletePermission = 'Masters:Vehicle Makes:Delete';
            VehicleMakesRow.insertPermission = 'Masters:Vehicle Makes:Create';
            VehicleMakesRow.readPermission = 'Masters:Vehicle Makes:View';
            VehicleMakesRow.updatePermission = 'Masters:Vehicle Makes:Update';
        })(VehicleMakesRow = Masters.VehicleMakesRow || (Masters.VehicleMakesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleMakesService;
        (function (VehicleMakesService) {
            VehicleMakesService.baseUrl = 'Masters/VehicleMakes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VehicleMakesService[x] = function (r, s, o) {
                    return Q.serviceRequest(VehicleMakesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VehicleMakesService = Masters.VehicleMakesService || (Masters.VehicleMakesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleModelsForm = /** @class */ (function (_super) {
            __extends(VehicleModelsForm, _super);
            function VehicleModelsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VehicleModelsForm.init) {
                    VehicleModelsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(VehicleModelsForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            VehicleModelsForm.formKey = 'Masters.VehicleModels';
            return VehicleModelsForm;
        }(Serenity.PrefixedContext));
        Masters.VehicleModelsForm = VehicleModelsForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleModelsRow;
        (function (VehicleModelsRow) {
            VehicleModelsRow.idProperty = 'Id';
            VehicleModelsRow.nameProperty = 'Name';
            VehicleModelsRow.localTextPrefix = 'Masters.VehicleModels';
            VehicleModelsRow.lookupKey = 'Masters.VehicleModels';
            function getLookup() {
                return Q.getLookup('Masters.VehicleModels');
            }
            VehicleModelsRow.getLookup = getLookup;
            VehicleModelsRow.deletePermission = 'Masters:Vehicle Models:Delete';
            VehicleModelsRow.insertPermission = 'Masters:Vehicle Models:Create';
            VehicleModelsRow.readPermission = 'Masters:Vehicle Models:View';
            VehicleModelsRow.updatePermission = 'Masters:Vehicle Models:Update';
        })(VehicleModelsRow = Masters.VehicleModelsRow || (Masters.VehicleModelsRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleModelsService;
        (function (VehicleModelsService) {
            VehicleModelsService.baseUrl = 'Masters/VehicleModels';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VehicleModelsService[x] = function (r, s, o) {
                    return Q.serviceRequest(VehicleModelsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VehicleModelsService = Masters.VehicleModelsService || (Masters.VehicleModelsService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleTypesForm = /** @class */ (function (_super) {
            __extends(VehicleTypesForm, _super);
            function VehicleTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VehicleTypesForm.init) {
                    VehicleTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(VehicleTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            VehicleTypesForm.formKey = 'Masters.VehicleTypes';
            return VehicleTypesForm;
        }(Serenity.PrefixedContext));
        Masters.VehicleTypesForm = VehicleTypesForm;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleTypesRow;
        (function (VehicleTypesRow) {
            VehicleTypesRow.idProperty = 'Id';
            VehicleTypesRow.nameProperty = 'Name';
            VehicleTypesRow.localTextPrefix = 'Masters.VehicleTypes';
            VehicleTypesRow.lookupKey = 'Masters.VehicleTypes';
            function getLookup() {
                return Q.getLookup('Masters.VehicleTypes');
            }
            VehicleTypesRow.getLookup = getLookup;
            VehicleTypesRow.deletePermission = 'Masters:Vehicle Types:Delete';
            VehicleTypesRow.insertPermission = 'Masters:Vehicle Types:Create';
            VehicleTypesRow.readPermission = 'Masters:Vehicle Types:View';
            VehicleTypesRow.updatePermission = 'Masters:Vehicle Types:Update';
        })(VehicleTypesRow = Masters.VehicleTypesRow || (Masters.VehicleTypesRow = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleTypesService;
        (function (VehicleTypesService) {
            VehicleTypesService.baseUrl = 'Masters/VehicleTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VehicleTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(VehicleTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VehicleTypesService = Masters.VehicleTypesService || (Masters.VehicleTypesService = {}));
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsForm = /** @class */ (function (_super) {
            __extends(AgendaDecisionsForm, _super);
            function AgendaDecisionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AgendaDecisionsForm.init) {
                    AgendaDecisionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.IntegerEditor;
                    var w5 = s.ImageUploadEditor;
                    Q.initFormType(AgendaDecisionsForm, [
                        'Meeting', w0,
                        'Description', w1,
                        'DueDate', w2,
                        'AssignedTo', w3,
                        'DecisionNumber', w4,
                        'RelatedAgendaItem', w3,
                        'ResolutionStatus', w3,
                        'Images', w5,
                        'Attachments', w5
                    ]);
                }
                return _this;
            }
            AgendaDecisionsForm.formKey = 'Meeting.AgendaDecisions';
            return AgendaDecisionsForm;
        }(Serenity.PrefixedContext));
        Meeting.AgendaDecisionsForm = AgendaDecisionsForm;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsRow;
        (function (AgendaDecisionsRow) {
            AgendaDecisionsRow.idProperty = 'Id';
            AgendaDecisionsRow.isActiveProperty = 'IsActive';
            AgendaDecisionsRow.nameProperty = 'Description';
            AgendaDecisionsRow.localTextPrefix = 'Meeting.AgendaDecisions';
            AgendaDecisionsRow.lookupKey = 'Meetings.AgendaDecisions';
            function getLookup() {
                return Q.getLookup('Meetings.AgendaDecisions');
            }
            AgendaDecisionsRow.getLookup = getLookup;
            AgendaDecisionsRow.deletePermission = 'Masters:Meeting:Delete';
            AgendaDecisionsRow.insertPermission = 'Masters:Meeting:Create';
            AgendaDecisionsRow.readPermission = 'Masters:Meeting:View';
            AgendaDecisionsRow.updatePermission = 'Masters:Meeting:Update';
        })(AgendaDecisionsRow = Meeting.AgendaDecisionsRow || (Meeting.AgendaDecisionsRow = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsService;
        (function (AgendaDecisionsService) {
            AgendaDecisionsService.baseUrl = 'Meeting/AgendaDecisions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AgendaDecisionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AgendaDecisionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AgendaDecisionsService = Meeting.AgendaDecisionsService || (Meeting.AgendaDecisionsService = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsForm = /** @class */ (function (_super) {
            __extends(AgendaItemsForm, _super);
            function AgendaItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AgendaItemsForm.init) {
                    AgendaItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.ImageUploadEditor;
                    Q.initFormType(AgendaItemsForm, [
                        'Meeting', w0,
                        'Title', w0,
                        'Description', w1,
                        'ItemType', w2,
                        'RequestedBy', w2,
                        'SequenceNo', w3,
                        'Images', w4,
                        'Attachments', w4
                    ]);
                }
                return _this;
            }
            AgendaItemsForm.formKey = 'Meeting.AgendaItems';
            return AgendaItemsForm;
        }(Serenity.PrefixedContext));
        Meeting.AgendaItemsForm = AgendaItemsForm;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsRow;
        (function (AgendaItemsRow) {
            AgendaItemsRow.idProperty = 'Id';
            AgendaItemsRow.isActiveProperty = 'IsActive';
            AgendaItemsRow.nameProperty = 'Title';
            AgendaItemsRow.localTextPrefix = 'Meeting.AgendaItems';
            AgendaItemsRow.lookupKey = 'Meetings.AgendaItems';
            function getLookup() {
                return Q.getLookup('Meetings.AgendaItems');
            }
            AgendaItemsRow.getLookup = getLookup;
            AgendaItemsRow.deletePermission = 'Masters:Meeting:Delete';
            AgendaItemsRow.insertPermission = 'Masters:Meeting:Create';
            AgendaItemsRow.readPermission = 'Masters:Meeting:View';
            AgendaItemsRow.updatePermission = 'Masters:Meeting:Update';
        })(AgendaItemsRow = Meeting.AgendaItemsRow || (Meeting.AgendaItemsRow = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsService;
        (function (AgendaItemsService) {
            AgendaItemsService.baseUrl = 'Meeting/AgendaItems';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                AgendaItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AgendaItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AgendaItemsService = Meeting.AgendaItemsService || (Meeting.AgendaItemsService = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesForm = /** @class */ (function (_super) {
            __extends(MeetingAttendeesForm, _super);
            function MeetingAttendeesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MeetingAttendeesForm.init) {
                    MeetingAttendeesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    Q.initFormType(MeetingAttendeesForm, [
                        'Attendee', w0,
                        'AttendeeType', w0,
                        'AttendanceStatus', w0
                    ]);
                }
                return _this;
            }
            MeetingAttendeesForm.formKey = 'Meeting.MeetingAttendees';
            return MeetingAttendeesForm;
        }(Serenity.PrefixedContext));
        Meeting.MeetingAttendeesForm = MeetingAttendeesForm;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesRow;
        (function (MeetingAttendeesRow) {
            MeetingAttendeesRow.idProperty = 'Id';
            MeetingAttendeesRow.isActiveProperty = 'IsActive';
            MeetingAttendeesRow.localTextPrefix = 'Meeting.MeetingAttendees';
            MeetingAttendeesRow.lookupKey = 'Meetings.MeetingAttendees';
            function getLookup() {
                return Q.getLookup('Meetings.MeetingAttendees');
            }
            MeetingAttendeesRow.getLookup = getLookup;
            MeetingAttendeesRow.deletePermission = 'Masters:Meeting:Delete';
            MeetingAttendeesRow.insertPermission = 'Masters:Meeting:Create';
            MeetingAttendeesRow.readPermission = 'Masters:Meeting:View';
            MeetingAttendeesRow.updatePermission = 'Masters:Meeting:Update';
        })(MeetingAttendeesRow = Meeting.MeetingAttendeesRow || (Meeting.MeetingAttendeesRow = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesService;
        (function (MeetingAttendeesService) {
            MeetingAttendeesService.baseUrl = 'Meeting/MeetingAttendees';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                MeetingAttendeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(MeetingAttendeesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MeetingAttendeesService = Meeting.MeetingAttendeesService || (Meeting.MeetingAttendeesService = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingsForm = /** @class */ (function (_super) {
            __extends(MeetingsForm, _super);
            function MeetingsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MeetingsForm.init) {
                    MeetingsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateTimeEditor;
                    var w3 = Meeting.MeetingAttendeesEditor;
                    var w4 = Meeting.AgendaItemsEditor;
                    var w5 = Meeting.AgendaDecisionsEditor;
                    Q.initFormType(MeetingsForm, [
                        'MeetingName', w0,
                        'MeetingType', w1,
                        'StartDate', w2,
                        'EndDate', w2,
                        'Department', w1,
                        'Location', w1,
                        'OrganizedBy', w1,
                        'Reporter', w1,
                        'Attendees', w3,
                        'AgendaItems', w4,
                        'AgendaDecisions', w5
                    ]);
                }
                return _this;
            }
            MeetingsForm.formKey = 'Meeting.Meetings';
            return MeetingsForm;
        }(Serenity.PrefixedContext));
        Meeting.MeetingsForm = MeetingsForm;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingsRow;
        (function (MeetingsRow) {
            MeetingsRow.idProperty = 'Id';
            MeetingsRow.isActiveProperty = 'IsActive';
            MeetingsRow.nameProperty = 'MeetingName';
            MeetingsRow.localTextPrefix = 'Meeting.Meetings';
            MeetingsRow.lookupKey = 'Meetings.Meetings';
            function getLookup() {
                return Q.getLookup('Meetings.Meetings');
            }
            MeetingsRow.getLookup = getLookup;
            MeetingsRow.deletePermission = 'Masters:Meeting:Delete';
            MeetingsRow.insertPermission = 'Masters:Meeting:Create';
            MeetingsRow.readPermission = 'Masters:Meeting:View';
            MeetingsRow.updatePermission = 'Masters:Meeting:Update';
        })(MeetingsRow = Meeting.MeetingsRow || (Meeting.MeetingsRow = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingsService;
        (function (MeetingsService) {
            MeetingsService.baseUrl = 'Meeting/Meetings';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                MeetingsService[x] = function (r, s, o) {
                    return Q.serviceRequest(MeetingsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MeetingsService = Meeting.MeetingsService || (Meeting.MeetingsService = {}));
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var BrandsForm = /** @class */ (function (_super) {
            __extends(BrandsForm, _super);
            function BrandsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BrandsForm.init) {
                    BrandsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(BrandsForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            BrandsForm.formKey = 'Products.Brands';
            return BrandsForm;
        }(Serenity.PrefixedContext));
        Products.BrandsForm = BrandsForm;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var BrandsRow;
        (function (BrandsRow) {
            BrandsRow.idProperty = 'Id';
            BrandsRow.isActiveProperty = 'IsActive';
            BrandsRow.nameProperty = 'Name';
            BrandsRow.localTextPrefix = 'Products.Brands';
            BrandsRow.lookupKey = 'Products.Brands';
            function getLookup() {
                return Q.getLookup('Products.Brands');
            }
            BrandsRow.getLookup = getLookup;
            BrandsRow.deletePermission = 'Inventory:Brand:Delete';
            BrandsRow.insertPermission = 'Inventory:Brand:Create';
            BrandsRow.readPermission = 'Inventory:Brand:View';
            BrandsRow.updatePermission = 'Inventory:Brand:Update';
        })(BrandsRow = Products.BrandsRow || (Products.BrandsRow = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var BrandsService;
        (function (BrandsService) {
            BrandsService.baseUrl = 'Products/Brands';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                BrandsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BrandsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BrandsService = Products.BrandsService || (Products.BrandsService = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesForm = /** @class */ (function (_super) {
            __extends(CategoriesForm, _super);
            function CategoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoriesForm.init) {
                    CategoriesForm.init = true;
                    var s = Serenity;
                    var w0 = Products.CategoriesEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(CategoriesForm, [
                        'ParentCategoryId', w0,
                        'Name', w1,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            CategoriesForm.formKey = 'Products.Categories';
            return CategoriesForm;
        }(Serenity.PrefixedContext));
        Products.CategoriesForm = CategoriesForm;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesRow;
        (function (CategoriesRow) {
            CategoriesRow.idProperty = 'Id';
            CategoriesRow.isActiveProperty = 'IsActive';
            CategoriesRow.nameProperty = 'Name';
            CategoriesRow.localTextPrefix = 'Products.Categories';
            CategoriesRow.lookupKey = 'Products.Categories';
            function getLookup() {
                return Q.getLookup('Products.Categories');
            }
            CategoriesRow.getLookup = getLookup;
            CategoriesRow.deletePermission = 'Inventory:Category:Delete';
            CategoriesRow.insertPermission = 'Inventory:Category:Create';
            CategoriesRow.readPermission = 'Inventory:Category:View';
            CategoriesRow.updatePermission = 'Inventory:Category:Update';
        })(CategoriesRow = Products.CategoriesRow || (Products.CategoriesRow = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesService;
        (function (CategoriesService) {
            CategoriesService.baseUrl = 'Products/Categories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                CategoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoriesService = Products.CategoriesService || (Products.CategoriesService = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var ProductsForm = /** @class */ (function (_super) {
            __extends(ProductsForm, _super);
            function ProductsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductsForm.init) {
                    ProductsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = Products.CategoriesEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.ImageUploadEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(ProductsForm, [
                        'Barcode', w0,
                        'HSN', w0,
                        'ProductName', w0,
                        'Model', w0,
                        'UnitPrice', w1,
                        'Gst', w1,
                        'UnitsInStock', w1,
                        'UnitsOnOrder', w1,
                        'ReorderLevel', w1,
                        'CategoryId', w2,
                        'UnitId', w3,
                        'BrandId', w3,
                        'Image', w4,
                        'ProductDetails', w5
                    ]);
                }
                return _this;
            }
            ProductsForm.formKey = 'Products.Products';
            return ProductsForm;
        }(Serenity.PrefixedContext));
        Products.ProductsForm = ProductsForm;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var ProductsRow;
        (function (ProductsRow) {
            ProductsRow.idProperty = 'Id';
            ProductsRow.isActiveProperty = 'IsActive';
            ProductsRow.nameProperty = 'ProductName';
            ProductsRow.localTextPrefix = 'Products.Products';
            ProductsRow.lookupKey = 'Products.Products';
            function getLookup() {
                return Q.getLookup('Products.Products');
            }
            ProductsRow.getLookup = getLookup;
            ProductsRow.deletePermission = 'Inventory:Product:Delete';
            ProductsRow.insertPermission = 'Inventory:Product:Create';
            ProductsRow.readPermission = 'Inventory:Product:View';
            ProductsRow.updatePermission = 'Inventory:Product:Update';
        })(ProductsRow = Products.ProductsRow || (Products.ProductsRow = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var ProductsService;
        (function (ProductsService) {
            ProductsService.baseUrl = 'Products/Products';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                ProductsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductsService = Products.ProductsService || (Products.ProductsService = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var UnitsForm = /** @class */ (function (_super) {
            __extends(UnitsForm, _super);
            function UnitsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UnitsForm.init) {
                    UnitsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(UnitsForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            UnitsForm.formKey = 'Products.Units';
            return UnitsForm;
        }(Serenity.PrefixedContext));
        Products.UnitsForm = UnitsForm;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var UnitsRow;
        (function (UnitsRow) {
            UnitsRow.idProperty = 'Id';
            UnitsRow.isActiveProperty = 'IsActive';
            UnitsRow.nameProperty = 'Name';
            UnitsRow.localTextPrefix = 'Products.Units';
            UnitsRow.lookupKey = 'Products.Units';
            function getLookup() {
                return Q.getLookup('Products.Units');
            }
            UnitsRow.getLookup = getLookup;
            UnitsRow.deletePermission = 'Inventory:Unit:Delete';
            UnitsRow.insertPermission = 'Inventory:Unit:Create';
            UnitsRow.readPermission = 'Inventory:Unit:View';
            UnitsRow.updatePermission = 'Inventory:Unit:Update';
        })(UnitsRow = Products.UnitsRow || (Products.UnitsRow = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var UnitsService;
        (function (UnitsService) {
            UnitsService.baseUrl = 'Products/Units';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                UnitsService[x] = function (r, s, o) {
                    return Q.serviceRequest(UnitsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UnitsService = Products.UnitsService || (Products.UnitsService = {}));
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases_1) {
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailsForm = /** @class */ (function (_super) {
            __extends(PurchaseDetailsForm, _super);
            function PurchaseDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseDetailsForm.init) {
                    PurchaseDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(PurchaseDetailsForm, [
                        'ProductId', w0,
                        'UnitId', w0,
                        'Quantity', w1,
                        'UnitPrice', w1,
                        'Discount', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            PurchaseDetailsForm.formKey = 'Purchases.PurchaseDetails';
            return PurchaseDetailsForm;
        }(Serenity.PrefixedContext));
        Purchases.PurchaseDetailsForm = PurchaseDetailsForm;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailsRow;
        (function (PurchaseDetailsRow) {
            PurchaseDetailsRow.idProperty = 'Id';
            PurchaseDetailsRow.nameProperty = 'ProductName';
            PurchaseDetailsRow.localTextPrefix = 'Purchases.PurchaseDetails';
            PurchaseDetailsRow.deletePermission = 'Purchasing:Purchase:Delete';
            PurchaseDetailsRow.insertPermission = 'Purchasing:Purchase:Create';
            PurchaseDetailsRow.readPermission = 'Purchasing:Purchase:View';
            PurchaseDetailsRow.updatePermission = 'Purchasing:Purchase:Update';
        })(PurchaseDetailsRow = Purchases.PurchaseDetailsRow || (Purchases.PurchaseDetailsRow = {}));
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailsService;
        (function (PurchaseDetailsService) {
            PurchaseDetailsService.baseUrl = 'Purchases/PurchaseDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                PurchaseDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseDetailsService = Purchases.PurchaseDetailsService || (Purchases.PurchaseDetailsService = {}));
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchasesForm = /** @class */ (function (_super) {
            __extends(PurchasesForm, _super);
            function PurchasesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchasesForm.init) {
                    PurchasesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = Purchases.PurchaseDetailEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(PurchasesForm, [
                        'SupplierId', w0,
                        'InvoiceNo', w1,
                        'Date', w2,
                        'PaymentAccount', w0,
                        'LineItems', w3,
                        'GrandTotal', w4,
                        'Discount', w4,
                        'TotalDiscount', w4,
                        'ShippingCost', w4,
                        'NetTotal', w4,
                        'PaidAmount', w4,
                        'Due', w4,
                        'Change', w4,
                        'Details', w5
                    ]);
                }
                return _this;
            }
            PurchasesForm.formKey = 'Purchases.Purchases';
            return PurchasesForm;
        }(Serenity.PrefixedContext));
        Purchases.PurchasesForm = PurchasesForm;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchasesRow;
        (function (PurchasesRow) {
            PurchasesRow.idProperty = 'Id';
            PurchasesRow.nameProperty = 'InvoiceNo';
            PurchasesRow.localTextPrefix = 'Purchases.Purchases';
            PurchasesRow.lookupKey = 'Purchases.Purchases';
            function getLookup() {
                return Q.getLookup('Purchases.Purchases');
            }
            PurchasesRow.getLookup = getLookup;
            PurchasesRow.deletePermission = 'Purchasing:Purchase:Delete';
            PurchasesRow.insertPermission = 'Purchasing:Purchase:Create';
            PurchasesRow.readPermission = 'Purchasing:Purchase:View';
            PurchasesRow.updatePermission = 'Purchasing:Purchase:Update';
        })(PurchasesRow = Purchases.PurchasesRow || (Purchases.PurchasesRow = {}));
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchasesService;
        (function (PurchasesService) {
            PurchasesService.baseUrl = 'Purchases/Purchases';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                PurchasesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchasesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchasesService = Purchases.PurchasesService || (Purchases.PurchasesService = {}));
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationDetailsForm = /** @class */ (function (_super) {
            __extends(QuotationDetailsForm, _super);
            function QuotationDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!QuotationDetailsForm.init) {
                    QuotationDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(QuotationDetailsForm, [
                        'ProductId', w0,
                        'UnitId', w0,
                        'Quantity', w1,
                        'UnitPrice', w1,
                        'Discount', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            QuotationDetailsForm.formKey = 'Quotations.QuotationDetails';
            return QuotationDetailsForm;
        }(Serenity.PrefixedContext));
        Quotations.QuotationDetailsForm = QuotationDetailsForm;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationDetailsRow;
        (function (QuotationDetailsRow) {
            QuotationDetailsRow.idProperty = 'Id';
            QuotationDetailsRow.nameProperty = 'ProductName';
            QuotationDetailsRow.localTextPrefix = 'Quotations.QuotationDetails';
            QuotationDetailsRow.deletePermission = 'Sales:Quotation:Delete';
            QuotationDetailsRow.insertPermission = 'Sales:Quotation:Create';
            QuotationDetailsRow.readPermission = 'Sales:Quotation:View';
            QuotationDetailsRow.updatePermission = 'Sales:Quotation:Update';
        })(QuotationDetailsRow = Quotations.QuotationDetailsRow || (Quotations.QuotationDetailsRow = {}));
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationDetailsService;
        (function (QuotationDetailsService) {
            QuotationDetailsService.baseUrl = 'Quotations/QuotationDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                QuotationDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(QuotationDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(QuotationDetailsService = Quotations.QuotationDetailsService || (Quotations.QuotationDetailsService = {}));
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationJobItemsForm = /** @class */ (function (_super) {
            __extends(QuotationJobItemsForm, _super);
            function QuotationJobItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!QuotationJobItemsForm.init) {
                    QuotationJobItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(QuotationJobItemsForm, [
                        'JobType', w0,
                        'UnitPrice', w1,
                        'Discount', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            QuotationJobItemsForm.formKey = 'Quotations.QuotationJobItems';
            return QuotationJobItemsForm;
        }(Serenity.PrefixedContext));
        Quotations.QuotationJobItemsForm = QuotationJobItemsForm;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationJobItemsRow;
        (function (QuotationJobItemsRow) {
            QuotationJobItemsRow.idProperty = 'Id';
            QuotationJobItemsRow.nameProperty = 'Description';
            QuotationJobItemsRow.localTextPrefix = 'Quotations.QuotationJobItems';
            QuotationJobItemsRow.deletePermission = 'Sales:Quotation:Delete';
            QuotationJobItemsRow.insertPermission = 'Sales:Quotation:Create';
            QuotationJobItemsRow.readPermission = 'Sales:Quotation:View';
            QuotationJobItemsRow.updatePermission = 'Sales:Quotation:Update';
        })(QuotationJobItemsRow = Quotations.QuotationJobItemsRow || (Quotations.QuotationJobItemsRow = {}));
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationJobItemsService;
        (function (QuotationJobItemsService) {
            QuotationJobItemsService.baseUrl = 'Quotations/QuotationJobItems';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                QuotationJobItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(QuotationJobItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(QuotationJobItemsService = Quotations.QuotationJobItemsService || (Quotations.QuotationJobItemsService = {}));
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsForm = /** @class */ (function (_super) {
            __extends(QuotationsForm, _super);
            function QuotationsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!QuotationsForm.init) {
                    QuotationsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = Quotations.QuotationJobItemsEditor;
                    var w3 = Quotations.QuotationsDetailEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.TextAreaEditor;
                    Q.initFormType(QuotationsForm, [
                        'CustomerId', w0,
                        'Vehicle', w0,
                        'Date', w1,
                        'ExpiryDate', w1,
                        'Jobs', w2,
                        'LineItems', w3,
                        'GrandTotal', w4,
                        'Discount', w4,
                        'TotalDiscount', w4,
                        'Vat', w4,
                        'TotalTax', w4,
                        'ShippingCost', w4,
                        'NetTotal', w4,
                        'Details', w5
                    ]);
                }
                return _this;
            }
            QuotationsForm.formKey = 'Quotations.Quotations';
            return QuotationsForm;
        }(Serenity.PrefixedContext));
        Quotations.QuotationsForm = QuotationsForm;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsRow;
        (function (QuotationsRow) {
            QuotationsRow.idProperty = 'Id';
            QuotationsRow.nameProperty = 'Date';
            QuotationsRow.localTextPrefix = 'Quotations.Quotations';
            QuotationsRow.lookupKey = 'Quotations.Quotations';
            function getLookup() {
                return Q.getLookup('Quotations.Quotations');
            }
            QuotationsRow.getLookup = getLookup;
            QuotationsRow.deletePermission = 'Sales:Quotation:Delete';
            QuotationsRow.insertPermission = 'Sales:Quotation:Create';
            QuotationsRow.readPermission = 'Sales:Quotation:View';
            QuotationsRow.updatePermission = 'Sales:Quotation:Update';
        })(QuotationsRow = Quotations.QuotationsRow || (Quotations.QuotationsRow = {}));
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsService;
        (function (QuotationsService) {
            QuotationsService.baseUrl = 'Quotations/Quotations';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                QuotationsService[x] = function (r, s, o) {
                    return Q.serviceRequest(QuotationsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(QuotationsService = Quotations.QuotationsService || (Quotations.QuotationsService = {}));
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var RateKind;
    (function (RateKind) {
        RateKind[RateKind["Hourly"] = 1] = "Hourly";
        RateKind[RateKind["Salary"] = 2] = "Salary";
    })(RateKind = SmartERP.RateKind || (SmartERP.RateKind = {}));
    Serenity.Decorators.registerEnumType(RateKind, 'SmartERP.RateKind');
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var DailyClosingForm = /** @class */ (function (_super) {
            __extends(DailyClosingForm, _super);
            function DailyClosingForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DailyClosingForm.init) {
                    DailyClosingForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(DailyClosingForm, [
                        'Date', w0,
                        'LastDayClosing', w1,
                        'CashIn', w1,
                        'CashOut', w1,
                        'Amount', w1
                    ]);
                }
                return _this;
            }
            DailyClosingForm.formKey = 'Reports.DailyClosing';
            return DailyClosingForm;
        }(Serenity.PrefixedContext));
        Reports.DailyClosingForm = DailyClosingForm;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var DailyClosingRow;
        (function (DailyClosingRow) {
            DailyClosingRow.idProperty = 'Id';
            DailyClosingRow.localTextPrefix = 'Reports.DailyClosing';
            DailyClosingRow.deletePermission = 'Report:Daily Closing Report';
            DailyClosingRow.insertPermission = 'Report:Daily Closing Report';
            DailyClosingRow.readPermission = 'Report:Daily Closing Report';
            DailyClosingRow.updatePermission = 'Report:Daily Closing Report';
        })(DailyClosingRow = Reports.DailyClosingRow || (Reports.DailyClosingRow = {}));
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var DailyClosingService;
        (function (DailyClosingService) {
            DailyClosingService.baseUrl = 'Reports/DailyClosing';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                DailyClosingService[x] = function (r, s, o) {
                    return Q.serviceRequest(DailyClosingService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DailyClosingService = Reports.DailyClosingService || (Reports.DailyClosingService = {}));
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports_1) {
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales_1) {
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SaleDetailsForm = /** @class */ (function (_super) {
            __extends(SaleDetailsForm, _super);
            function SaleDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SaleDetailsForm.init) {
                    SaleDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(SaleDetailsForm, [
                        'ProductId', w0,
                        'UnitId', w0,
                        'Quantity', w1,
                        'UnitPrice', w1,
                        'Discount', w1,
                        'Description', w2
                    ]);
                }
                return _this;
            }
            SaleDetailsForm.formKey = 'Sales.SaleDetails';
            return SaleDetailsForm;
        }(Serenity.PrefixedContext));
        Sales.SaleDetailsForm = SaleDetailsForm;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SaleDetailsRow;
        (function (SaleDetailsRow) {
            SaleDetailsRow.idProperty = 'Id';
            SaleDetailsRow.nameProperty = 'ProductName';
            SaleDetailsRow.localTextPrefix = 'Sales.SaleDetails';
            SaleDetailsRow.deletePermission = 'Sales:Sale:Delete';
            SaleDetailsRow.insertPermission = 'Sales:Sale:Create';
            SaleDetailsRow.readPermission = 'Sales:Sale:View';
            SaleDetailsRow.updatePermission = 'Sales:Sale:Update';
        })(SaleDetailsRow = Sales.SaleDetailsRow || (Sales.SaleDetailsRow = {}));
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SaleDetailsService;
        (function (SaleDetailsService) {
            SaleDetailsService.baseUrl = 'Sales/SaleDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                SaleDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SaleDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SaleDetailsService = Sales.SaleDetailsService || (Sales.SaleDetailsService = {}));
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesForm = /** @class */ (function (_super) {
            __extends(SalesForm, _super);
            function SalesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesForm.init) {
                    SalesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    var w2 = Sales.SalesDetailEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(SalesForm, [
                        'CustomerId', w0,
                        'Date', w1,
                        'PaymentAccount', w0,
                        'LineItems', w2,
                        'GrandTotal', w3,
                        'Discount', w3,
                        'TotalDiscount', w3,
                        'Vat', w3,
                        'TotalTax', w3,
                        'ShippingCost', w3,
                        'NetTotal', w3,
                        'PaidAmount', w3,
                        'Due', w3,
                        'Change', w3,
                        'Details', w4
                    ]);
                }
                return _this;
            }
            SalesForm.formKey = 'Sales.Sales';
            return SalesForm;
        }(Serenity.PrefixedContext));
        Sales.SalesForm = SalesForm;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesRow;
        (function (SalesRow) {
            SalesRow.idProperty = 'Id';
            SalesRow.nameProperty = 'Date';
            SalesRow.localTextPrefix = 'Sales.Sales';
            SalesRow.lookupKey = 'Sales.Sales';
            function getLookup() {
                return Q.getLookup('Sales.Sales');
            }
            SalesRow.getLookup = getLookup;
            SalesRow.deletePermission = 'Sales:Sale:Delete';
            SalesRow.insertPermission = 'Sales:Sale:Create';
            SalesRow.readPermission = 'Sales:Sale:View';
            SalesRow.updatePermission = 'Sales:Sale:Update';
        })(SalesRow = Sales.SalesRow || (Sales.SalesRow = {}));
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesService;
        (function (SalesService) {
            SalesService.baseUrl = 'Sales/Sales';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                SalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesService = Sales.SalesService || (Sales.SalesService = {}));
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Suppliers;
    (function (Suppliers) {
        var SuppliersForm = /** @class */ (function (_super) {
            __extends(SuppliersForm, _super);
            function SuppliersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SuppliersForm.init) {
                    SuppliersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(SuppliersForm, [
                        'CompanyName', w0,
                        'CountryId', w1,
                        'StateId', w1,
                        'CityId', w1,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'SupplierGroupId', w1,
                        'Address', w2,
                        'RegionId', w1,
                        'PostalCode', w0,
                        'Phone', w0,
                        'Website', w0,
                        'Fax', w0,
                        'Email', w0,
                        'EmailAddress', w0,
                        'PreviousCreditBalance', w3
                    ]);
                }
                return _this;
            }
            SuppliersForm.formKey = 'Suppliers.Suppliers';
            return SuppliersForm;
        }(Serenity.PrefixedContext));
        Suppliers.SuppliersForm = SuppliersForm;
    })(Suppliers = SmartERP.Suppliers || (SmartERP.Suppliers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Suppliers;
    (function (Suppliers) {
        var SuppliersRow;
        (function (SuppliersRow) {
            SuppliersRow.idProperty = 'Id';
            SuppliersRow.isActiveProperty = 'IsActive';
            SuppliersRow.nameProperty = 'CompanyName';
            SuppliersRow.localTextPrefix = 'Suppliers.Suppliers';
            SuppliersRow.lookupKey = 'Suppliers.Suppliers';
            function getLookup() {
                return Q.getLookup('Suppliers.Suppliers');
            }
            SuppliersRow.getLookup = getLookup;
            SuppliersRow.deletePermission = 'Business Partners:Supplier:Delete';
            SuppliersRow.insertPermission = 'Business Partners:Supplier:Create';
            SuppliersRow.readPermission = 'Business Partners:Supplier:View';
            SuppliersRow.updatePermission = 'Business Partners:Supplier:Update';
        })(SuppliersRow = Suppliers.SuppliersRow || (Suppliers.SuppliersRow = {}));
    })(Suppliers = SmartERP.Suppliers || (SmartERP.Suppliers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Suppliers;
    (function (Suppliers) {
        var SuppliersService;
        (function (SuppliersService) {
            SuppliersService.baseUrl = 'Suppliers/Suppliers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Undelete'
            ].forEach(function (x) {
                SuppliersService[x] = function (r, s, o) {
                    return Q.serviceRequest(SuppliersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SuppliersService = Suppliers.SuppliersService || (Suppliers.SuppliersService = {}));
    })(Suppliers = SmartERP.Suppliers || (SmartERP.Suppliers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Texts;
    (function (Texts) {
        SmartERP['Texts'] = Q.proxyTexts(Texts, '', { Db: { Accounts: { Accounts: { Balance: 1, CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerId: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, DeleteDate: 1, DeleteUserId: 1, DepreciationRate: 1, HeadCode: 1, HeadCodeName: 1, HeadLevel: 1, HeadName: 1, HeadType: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, IsBudget: 1, IsDepreciation: 1, IsGl: 1, IsTransaction: 1, OpeningBalance: 1, PHeadName: 1, ParentHead: 1, ParentHead1: 1, ParentHeadCustomerId: 1, ParentHeadDepreciationRate: 1, ParentHeadHeadCode: 1, ParentHeadHeadLevel: 1, ParentHeadHeadName: 1, ParentHeadHeadType: 1, ParentHeadIsBudget: 1, ParentHeadIsDepreciation: 1, ParentHeadIsGl: 1, ParentHeadIsTransaction: 1, ParentHeadPHeadName: 1, ParentHeadSupplierId: 1, SupplierAddress: 1, SupplierCityId: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountryId: 1, SupplierDeleteDate: 1, SupplierDeleteUserId: 1, SupplierEmail: 1, SupplierEmailAddress: 1, SupplierFax: 1, SupplierId: 1, SupplierInsertDate: 1, SupplierInsertUserId: 1, SupplierIsActive: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierPreviousCreditBalance: 1, SupplierRegionId: 1, SupplierStateId: 1, SupplierUpdateDate: 1, SupplierUpdateUserId: 1, SupplierWebsite: 1, UpdateDate: 1, UpdateUserId: 1 }, BankTransactions: { AccountType: 1, Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, CashAdjustment: { AccountType: 1, Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, ContraVoucher: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, CreditVoucher: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, CreditAccountId: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, Remark: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, CustomerReceive: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, CustomerId: 1, CustomerName: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, Remark: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, DebitVoucher: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, DebitAccountId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, Remark: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, JournalVoucher: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, OpeningBalance: { AccountType: 1, Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsOpening: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, SupplierPayment: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, Remark: 1, SupplierCompanyName: 1, SupplierId: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 }, Transactions: { Coa: 1, CoaBankId: 1, CoaCustomerId: 1, CoaDeleteDate: 1, CoaDeleteUserId: 1, CoaDepreciationRate: 1, CoaEmployeeId: 1, CoaExpenseTypeId: 1, CoaHeadCode: 1, CoaHeadLevel: 1, CoaHeadName: 1, CoaHeadType: 1, CoaId: 1, CoaInsertDate: 1, CoaInsertUserId: 1, CoaIsActive: 1, CoaIsBudget: 1, CoaIsDepreciation: 1, CoaIsGl: 1, CoaIsTransaction: 1, CoaPHeadName: 1, CoaParentHead: 1, CoaSupplierId: 1, CoaUpdateDate: 1, CoaUpdateUserId: 1, Credit: 1, Debit: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsAppove: 1, IsPosted: 1, Narration: 1, UpdateDate: 1, UpdateUserId: 1, VDate: 1, VNo: 1, Vtype: 1 } }, Administration: { Cities: { CountryId: 1, CountryName: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, StateCountryId: 1, StateId: 1, StateName: 1, UpdateDate: 1, UpdateUserId: 1 }, Companies: { Address: 1, CompanyEmail: 1, CompanyName: 1, CurrencyCurrencyName: 1, CurrencyCurrencySymbol: 1, CurrencyId: 1, CurrencyPosition: 1, DeleteDate: 1, DeleteUserId: 1, Favicon: 1, FooterText: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Logo: 1, Phone: 1, SaleLogo: 1, UpdateDate: 1, UpdateUserId: 1, VatPercentage: 1 }, Countries: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, Currencies: { CurrencyName: 1, CurrencySymbol: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, UpdateDate: 1, UpdateUserId: 1 }, Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Regions: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Shippers: { CompanyName: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Phone: 1, UpdateDate: 1, UpdateUserId: 1 }, States: { CountryId: 1, CountryName: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, Territories: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, RegionId: 1, RegionName: 1, TerritoryDescription: 1, UpdateDate: 1, UpdateUserId: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 }, Warehouses: { Address: 1, CityCountryId: 1, CityDeleteDate: 1, CityDeleteUserId: 1, CityId: 1, CityInsertDate: 1, CityInsertUserId: 1, CityIsActive: 1, CityName: 1, CityStateId: 1, CityUpdateDate: 1, CityUpdateUserId: 1, CountryDeleteDate: 1, CountryDeleteUserId: 1, CountryId: 1, CountryInsertDate: 1, CountryInsertUserId: 1, CountryIsActive: 1, CountryName: 1, CountryUpdateDate: 1, CountryUpdateUserId: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, Phone: 1, StateCountryId: 1, StateDeleteDate: 1, StateDeleteUserId: 1, StateId: 1, StateInsertDate: 1, StateInsertUserId: 1, StateIsActive: 1, StateName: 1, StateUpdateDate: 1, StateUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 } }, Banks: { Banks: { AcName: 1, AcNumber: 1, BankName: 1, Branch: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, SignaturePicture: 1, UpdateDate: 1, UpdateUserId: 1 } }, Bookings: { VehicleBookings: { BookingDateTime: 1, Customer: 1, CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerCustomerGroupId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, Id: 1, Note: 1, Title: 1, Vehicle: 1, VehicleAssemblyType: 1, VehicleAxles: 1, VehicleBodyStyle: 1, VehicleBrand: 1, VehicleCcRating: 1, VehicleColor: 1, VehicleCountryOfOrigin: 1, VehicleCustomerId: 1, VehicleEngineNo: 1, VehicleFrontAxleGroupRating: 1, VehicleFuelType: 1, VehicleGrossVehicleMass: 1, VehicleMake: 1, VehicleModel: 1, VehicleRearAxleGroupRating: 1, VehicleSeats: 1, VehicleSecondColor: 1, VehicleSubModel: 1, VehicleTareWeight: 1, VehicleVehicleRegistration: 1, VehicleVehicleType: 1, VehicleWheelbase: 1, VehicleYear: 1 }, VehicleCourtesyBooking: { Customer: 1, CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerCustomerGroupId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, EndDateTime: 1, Id: 1, Note: 1, StartDateTime: 1, Title: 1, Vehicle: 1, VehicleAssemblyType: 1, VehicleAxles: 1, VehicleBodyStyle: 1, VehicleBrand: 1, VehicleCcRating: 1, VehicleColor: 1, VehicleCountryOfOrigin: 1, VehicleCustomerId: 1, VehicleEngineNo: 1, VehicleFrontAxleGroupRating: 1, VehicleFuelType: 1, VehicleGrossVehicleMass: 1, VehicleMake: 1, VehicleModel: 1, VehicleRearAxleGroupRating: 1, VehicleSeats: 1, VehicleSecondColor: 1, VehicleSubModel: 1, VehicleTareWeight: 1, VehicleVehicleRegistration: 1, VehicleVehicleType: 1, VehicleWheelbase: 1, VehicleYear: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Customers: { Customers: { Address: 1, CityCountryId: 1, CityId: 1, CityName: 1, CityStateId: 1, ContactName: 1, ContactTitle: 1, CountryId: 1, CountryName: 1, CustomerBalance: 1, CustomerGroupId: 1, CustomerGroupName: 1, CustomerReceivable: 1, CustomerReceived: 1, DeleteDate: 1, DeleteUserId: 1, Email: 1, EmailAddress: 1, Fax: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, Phone: 1, PostalCode: 1, PreviousCreditBalance: 1, RegionId: 1, RegionName: 1, StateCountryId: 1, StateId: 1, StateName: 1, UpdateDate: 1, UpdateUserId: 1, Website: 1 } }, Expenses: { ExpenseTypes: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Type: 1, UpdateDate: 1, UpdateUserId: 1 }, Expenses: { Amount: 1, Date: 1, ExpenseTypeId: 1, ExpenseTypeType: 1, HeadCodeName: 1, Id: 1, PaymentAccount: 1, VNo: 1 } }, HumanResource: { Attendance: { CheckIn: 1, CheckOut: 1, EmployeeAddress: 1, EmployeeBloodGroup: 1, EmployeeCityId: 1, EmployeeCnic: 1, EmployeeCountryId: 1, EmployeeDeleteDate: 1, EmployeeDeleteUserId: 1, EmployeeDepartmentId: 1, EmployeeDesignationId: 1, EmployeeEmail: 1, EmployeeFirstName: 1, EmployeeFullName: 1, EmployeeHoureRateSalary: 1, EmployeeId: 1, EmployeeInsertDate: 1, EmployeeInsertUserId: 1, EmployeeIsActive: 1, EmployeeLastName: 1, EmployeePhone: 1, EmployeePicture: 1, EmployeeRateType: 1, EmployeeRegionId: 1, EmployeeStateId: 1, EmployeeTerritoryId: 1, EmployeeUpdateDate: 1, EmployeeUpdateUserId: 1, EmployeeUserId: 1, EmployeeZipCode: 1, Id: 1, StayTime: 1 }, Departments: { DeleteDate: 1, DeleteUserId: 1, Department: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ParentDepartmentDepartment: 1, ParentDepartmentDescription: 1, ParentDepartmentId: 1, ParentDepartmentParentDepartmentId: 1, UpdateDate: 1, UpdateUserId: 1 }, Designations: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Designation: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ParentDesignationDescription: 1, ParentDesignationDesignation: 1, ParentDesignationId: 1, ParentDesignationParentDesignationId: 1, UpdateDate: 1, UpdateUserId: 1 }, Employees: { Address: 1, BloodGroup: 1, CityCountryId: 1, CityDeleteDate: 1, CityDeleteUserId: 1, CityId: 1, CityInsertDate: 1, CityInsertUserId: 1, CityIsActive: 1, CityName: 1, CityStateId: 1, CityUpdateDate: 1, CityUpdateUserId: 1, CountryDeleteDate: 1, CountryDeleteUserId: 1, CountryId: 1, CountryInsertDate: 1, CountryInsertUserId: 1, CountryIsActive: 1, CountryName: 1, CountryUpdateDate: 1, CountryUpdateUserId: 1, DeleteDate: 1, DeleteUserId: 1, Department: 1, DepartmentDescription: 1, DepartmentId: 1, DepartmentParentDepartmentId: 1, Designation: 1, DesignationDescription: 1, DesignationId: 1, DesignationParentDesignationId: 1, Email: 1, EmployeeFullName: 1, FirstName: 1, HoureRateSalary: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastName: 1, Phone: 1, Picture: 1, RateType: 1, RegionDeleteDate: 1, RegionDeleteUserId: 1, RegionId: 1, RegionInsertDate: 1, RegionInsertUserId: 1, RegionIsActive: 1, RegionName: 1, RegionUpdateDate: 1, RegionUpdateUserId: 1, StateCountryId: 1, StateDeleteDate: 1, StateDeleteUserId: 1, StateId: 1, StateInsertDate: 1, StateInsertUserId: 1, StateIsActive: 1, StateName: 1, StateUpdateDate: 1, StateUpdateUserId: 1, TerritoryDeleteDate: 1, TerritoryDeleteUserId: 1, TerritoryId: 1, TerritoryInsertDate: 1, TerritoryInsertUserId: 1, TerritoryIsActive: 1, TerritoryRegionId: 1, TerritoryTerritoryDescription: 1, TerritoryUpdateDate: 1, TerritoryUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, ZipCode: 1 } }, Inspections: { InspectionChecklist: { Id: 1, JobCategory: 1, JobCategoryName: 1, JobType: 1, JobTypeJobCategory: 1, JobTypeName: 1, JobTypeRate: 1, JobTypeStandardTiming: 1, JobTypes: 1 }, InspectionJobTypes: { Id: 1, InspectionId: 1, InspectionJobCategory: 1, InspectionJobType: 1, JobType: 1, JobTypeJobCategory: 1, JobTypeName: 1, JobTypeRate: 1, JobTypeStandardTiming: 1 }, Inspections: { Checklist: 1, Id: 1, IsInspectionList: 1, Name: 1, Rate: 1, StandardTiming: 1 } }, Inventory: { DamagedProducts: { CategoryDeleteDate: 1, CategoryDeleteUserId: 1, CategoryDescription: 1, CategoryId: 1, CategoryInsertDate: 1, CategoryInsertUserId: 1, CategoryIsActive: 1, CategoryName: 1, CategoryParentCategoryId: 1, CategoryUpdateDate: 1, CategoryUpdateUserId: 1, Code: 1, Date: 1, Id: 1, Name: 1, Note: 1, ProductBarcode: 1, ProductBrandId: 1, ProductCategoryId: 1, ProductDeleteDate: 1, ProductDeleteUserId: 1, ProductId: 1, ProductImage: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductModel: 1, ProductProductDetails: 1, ProductProductName: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, PurchasePrice: 1, Quantity: 1 }, GoodsIssue: { CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerId: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, Date: 1, EmployeeFullName: 1, EmployeenAddress: 1, EmployeenBloodGroup: 1, EmployeenCityId: 1, EmployeenCnic: 1, EmployeenCountryId: 1, EmployeenDeleteDate: 1, EmployeenDeleteUserId: 1, EmployeenDepartmentId: 1, EmployeenDesignationId: 1, EmployeenEmail: 1, EmployeenFirstName: 1, EmployeenHoureRateSalary: 1, EmployeenId: 1, EmployeenInsertDate: 1, EmployeenInsertUserId: 1, EmployeenIsActive: 1, EmployeenLastName: 1, EmployeenPhone: 1, EmployeenPicture: 1, EmployeenRateType: 1, EmployeenRegionId: 1, EmployeenStateId: 1, EmployeenTerritoryId: 1, EmployeenUpdateDate: 1, EmployeenUpdateUserId: 1, EmployeenUserId: 1, EmployeenZipCode: 1, Id: 1, JournalRemarks: 1, LineItems: 1, Reference: 1, Remarks: 1, SaleChange: 1, SaleCustomerId: 1, SaleDate: 1, SaleDetails: 1, SaleDiscount: 1, SaleDue: 1, SaleGrandTotal: 1, SaleId: 1, SaleInvoice: 1, SaleNetTotal: 1, SalePaidAmount: 1, SalePaymentAccount: 1, SaleShippingCost: 1, SaleTotalDiscount: 1, SaleTotalTax: 1, SaleVNo: 1, SaleVat: 1, TotalQuantity: 1 }, GoodsIssueDetails: { Description: 1, GoodsIssueCustomerId: 1, GoodsIssueDate: 1, GoodsIssueEmployeenId: 1, GoodsIssueId: 1, GoodsIssueJournalRemarks: 1, GoodsIssueReference: 1, GoodsIssueRemarks: 1, GoodsIssueSaleId: 1, GoodsIssueTotalQuantity: 1, Id: 1, ProductBarcode: 1, ProductBrandId: 1, ProductCategoryId: 1, ProductDeleteDate: 1, ProductDeleteUserId: 1, ProductId: 1, ProductImage: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductModel: 1, ProductName: 1, ProductProductDetails: 1, ProductProductName: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, Quantity: 1, WarehouseAddress: 1, WarehouseCityId: 1, WarehouseCountryId: 1, WarehouseDescription: 1, WarehouseId: 1, WarehouseName: 1, WarehousePhone: 1, WarehouseStateId: 1, WarehouseWarehouseName: 1 }, GoodsReceipt: { Date: 1, EmployeeFullName: 1, EmployeenAddress: 1, EmployeenBloodGroup: 1, EmployeenCityId: 1, EmployeenCnic: 1, EmployeenCountryId: 1, EmployeenDeleteDate: 1, EmployeenDeleteUserId: 1, EmployeenDepartmentId: 1, EmployeenDesignationId: 1, EmployeenEmail: 1, EmployeenFirstName: 1, EmployeenHoureRateSalary: 1, EmployeenId: 1, EmployeenInsertDate: 1, EmployeenInsertUserId: 1, EmployeenIsActive: 1, EmployeenLastName: 1, EmployeenPhone: 1, EmployeenPicture: 1, EmployeenRateType: 1, EmployeenRegionId: 1, EmployeenStateId: 1, EmployeenTerritoryId: 1, EmployeenUpdateDate: 1, EmployeenUpdateUserId: 1, EmployeenUserId: 1, EmployeenZipCode: 1, Id: 1, JournalRemarks: 1, LineItems: 1, PurchaseBill: 1, PurchaseChange: 1, PurchaseDate: 1, PurchaseDetails: 1, PurchaseDiscount: 1, PurchaseDue: 1, PurchaseEmployeeId: 1, PurchaseGrandTotal: 1, PurchaseId: 1, PurchaseInvoiceNo: 1, PurchaseNetTotal: 1, PurchasePaidAmount: 1, PurchasePaymentAccount: 1, PurchaseShippingCost: 1, PurchaseSupplierId: 1, PurchaseTotalDiscount: 1, PurchaseVNo: 1, Reference: 1, Remarks: 1, SupplierAddress: 1, SupplierCityId: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountryId: 1, SupplierDeleteDate: 1, SupplierDeleteUserId: 1, SupplierEmail: 1, SupplierEmailAddress: 1, SupplierFax: 1, SupplierId: 1, SupplierInsertDate: 1, SupplierInsertUserId: 1, SupplierIsActive: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierPreviousCreditBalance: 1, SupplierRegionId: 1, SupplierStateId: 1, SupplierUpdateDate: 1, SupplierUpdateUserId: 1, SupplierWebsite: 1, TotalQuantity: 1 }, GoodsReceiptDetails: { Description: 1, GoodsReceiptDate: 1, GoodsReceiptEmployeenId: 1, GoodsReceiptId: 1, GoodsReceiptJournalRemarks: 1, GoodsReceiptPurchaseId: 1, GoodsReceiptReference: 1, GoodsReceiptRemarks: 1, GoodsReceiptSupplierId: 1, GoodsReceiptTotalQuantity: 1, Id: 1, ProductBarcode: 1, ProductBrandId: 1, ProductCategoryId: 1, ProductDeleteDate: 1, ProductDeleteUserId: 1, ProductId: 1, ProductImage: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductModel: 1, ProductName: 1, ProductProductDetails: 1, ProductProductName: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, Quantity: 1, WarehouseAddress: 1, WarehouseCityId: 1, WarehouseCountryId: 1, WarehouseDescription: 1, WarehouseId: 1, WarehouseName: 1, WarehousePhone: 1, WarehouseStateId: 1, WarehouseWarehouseName: 1 } }, Invoices: { InvoiceItems: { CGST: 1, Description: 1, Discount: 1, Gst: 1, HSN: 1, Id: 1, InvoiceChange: 1, InvoiceCustomerId: 1, InvoiceDate: 1, InvoiceDeliveryDatetime: 1, InvoiceDetails: 1, InvoiceDiscount: 1, InvoiceDue: 1, InvoiceGrandTotal: 1, InvoiceId: 1, InvoiceJobcard: 1, InvoiceNetTotal: 1, InvoicePaidAmount: 1, InvoicePaymentAccount: 1, InvoiceScheduleDatetime: 1, InvoiceShippingCost: 1, InvoiceTotalDiscount: 1, InvoiceTotalTax: 1, InvoiceVNo: 1, InvoiceVat: 1, InvoiceVehicle: 1, ProductBarcode: 1, ProductBrandId: 1, ProductCategoryId: 1, ProductDeleteDate: 1, ProductDeleteUserId: 1, ProductId: 1, ProductImage: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductModel: 1, ProductProductDetails: 1, ProductProductName: 1, ProductReorderLevel: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, PurchasePrice: 1, Quantity: 1, SGST: 1, SubTotal: 1, Total: 1, TotalTax: 1, UnitDeleteDate: 1, UnitDeleteUserId: 1, UnitDescription: 1, UnitId: 1, UnitInsertDate: 1, UnitInsertUserId: 1, UnitIsActive: 1, UnitName: 1, UnitPrice: 1, UnitUpdateDate: 1, UnitUpdateUserId: 1 }, InvoiceJobItems: { Description: 1, Discount: 1, Gst: 1, Id: 1, InvoiceChange: 1, InvoiceCustomerId: 1, InvoiceDate: 1, InvoiceDeliveryDatetime: 1, InvoiceDetails: 1, InvoiceDiscount: 1, InvoiceDue: 1, InvoiceGrandTotal: 1, InvoiceId: 1, InvoiceJobcard: 1, InvoiceNetTotal: 1, InvoicePaidAmount: 1, InvoicePaymentAccount: 1, InvoiceScheduleDatetime: 1, InvoiceShippingCost: 1, InvoiceTotalDiscount: 1, InvoiceTotalTax: 1, InvoiceVNo: 1, InvoiceVat: 1, InvoiceVehicle: 1, JobType: 1, JobTypeIsInspectionList: 1, JobTypeJobCategory: 1, JobTypeName: 1, JobTypeRate: 1, JobTypeStandardTiming: 1, SubTotal: 1, Total: 1, TotalTax: 1, UnitPrice: 1 }, Invoices: { CGST: 1, Change: 1, CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerCustomerGroupId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerId: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, Date: 1, DeliveryDatetime: 1, Details: 1, Discount: 1, Due: 1, GrandTotal: 1, Gst: 1, GstIN: 1, HeadCodeName: 1, Id: 1, InsuranceCoAdd: 1, InsuranceCoCit: 1, InsuranceCoName: 1, Jobcard: 1, JobcardAddress: 1, JobcardCustomer: 1, JobcardDeliveryDatetime: 1, JobcardDetails: 1, JobcardMobile: 1, JobcardPhone: 1, JobcardReference: 1, JobcardScheduleDatetime: 1, JobcardVehicle: 1, JobcardWebsite: 1, JobcardWorkOrderNo: 1, Jobs: 1, LineItems: 1, NetTotal: 1, PaidAmount: 1, PaymentAccount: 1, SGST: 1, ScheduleDatetime: 1, ServiceType: 1, ShippingCost: 1, TotalDiscount: 1, TotalTax: 1, VNo: 1, Vehicle: 1, VehicleAssemblyType: 1, VehicleAxles: 1, VehicleBodyStyle: 1, VehicleBrand: 1, VehicleCcRating: 1, VehicleColor: 1, VehicleCountryOfOrigin: 1, VehicleCustomerId: 1, VehicleEngineNo: 1, VehicleFrontAxleGroupRating: 1, VehicleFuelType: 1, VehicleGrossVehicleMass: 1, VehicleMake: 1, VehicleModel: 1, VehicleRearAxleGroupRating: 1, VehicleSeats: 1, VehicleSecondColor: 1, VehicleSubModel: 1, VehicleTareWeight: 1, VehicleVehicleRegistration: 1, VehicleVehicleType: 1, VehicleWheelbase: 1, VehicleYear: 1 } }, JobCards: { GatePasses: { Customer: 1, CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerCustomerGroupId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, Id: 1, JobCard: 1, JobCardAddress: 1, JobCardCustomer: 1, JobCardDeliveryDatetime: 1, JobCardDetails: 1, JobCardMobile: 1, JobCardPhone: 1, JobCardReference: 1, JobCardScheduleDatetime: 1, JobCardVehicle: 1, JobCardWebsite: 1, JobCardWorkOrderNo: 1, Vehicle: 1, VehicleAssemblyType: 1, VehicleAxles: 1, VehicleBodyStyle: 1, VehicleBrand: 1, VehicleCcRating: 1, VehicleColor: 1, VehicleCountryOfOrigin: 1, VehicleCustomerId: 1, VehicleEngineNo: 1, VehicleFrontAxleGroupRating: 1, VehicleFuelType: 1, VehicleGrossVehicleMass: 1, VehicleMake: 1, VehicleModel: 1, VehicleOutDate: 1, VehicleRearAxleGroupRating: 1, VehicleSeats: 1, VehicleSecondColor: 1, VehicleSubModel: 1, VehicleTareWeight: 1, VehicleVehicleRegistration: 1, VehicleVehicleType: 1, VehicleWheelbase: 1, VehicleYear: 1 }, JobCardDetails: { CustomerNotes: 1, Id: 1, JobOrder: 1, JobOrderAddress: 1, JobOrderCustomer: 1, JobOrderDeliveryDatetime: 1, JobOrderDetails: 1, JobOrderMobile: 1, JobOrderPhone: 1, JobOrderReference: 1, JobOrderScheduleDatetime: 1, JobOrderVehicle: 1, JobOrderWebsite: 1, JobOrderWorkOrderNo: 1, JobType: 1, JobTypeName: 1, Mechanic: 1, MechanicFullName: 1 }, JobCards: { Address: 1, Customer: 1, CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerCustomerGroupId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, DeliveryDatetime: 1, Details: 1, Id: 1, JobCardDetails: 1, Mobile: 1, Phone: 1, Reference: 1, ScheduleDatetime: 1, ServiceType: 1, Vehicle: 1, VehicleAssemblyType: 1, VehicleAxles: 1, VehicleBodyStyle: 1, VehicleBrand: 1, VehicleCcRating: 1, VehicleColor: 1, VehicleCountryOfOrigin: 1, VehicleCustomerId: 1, VehicleEngineNo: 1, VehicleFrontAxleGroupRating: 1, VehicleFuelType: 1, VehicleGrossVehicleMass: 1, VehicleMake: 1, VehicleModel: 1, VehicleRearAxleGroupRating: 1, VehicleSeats: 1, VehicleSecondColor: 1, VehicleSubModel: 1, VehicleTareWeight: 1, VehicleVehicleRegistration: 1, VehicleVehicleType: 1, VehicleWheelbase: 1, VehicleYear: 1, Website: 1, WorkOrderNo: 1 } }, Masters: { AgendaItemTypes: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, AssemblyTypes: { Id: 1, Name: 1 }, AttendanceStatuses: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, AttendeeTypes: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, ColorTypes: { Id: 1, Name: 1 }, CustomerGroups: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, FuelTypes: { Id: 1, Name: 1 }, JobCategories: { Id: 1, Name: 1 }, JobTypes: { Gst: 1, Id: 1, IsInspectionList: 1, JobCategory: 1, JobCategoryName: 1, Name: 1, Rate: 1, StandardTiming: 1 }, Locations: { Address: 1, CityCountryId: 1, CityDeleteDate: 1, CityDeleteUserId: 1, CityId: 1, CityInsertDate: 1, CityInsertUserId: 1, CityIsActive: 1, CityName: 1, CityStateId: 1, CityUpdateDate: 1, CityUpdateUserId: 1, CountryDeleteDate: 1, CountryDeleteUserId: 1, CountryId: 1, CountryInsertDate: 1, CountryInsertUserId: 1, CountryIsActive: 1, CountryName: 1, CountryUpdateDate: 1, CountryUpdateUserId: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Latitude: 1, Longitude: 1, Name: 1, StateCountryId: 1, StateDeleteDate: 1, StateDeleteUserId: 1, StateId: 1, StateInsertDate: 1, StateInsertUserId: 1, StateIsActive: 1, StateName: 1, StateUpdateDate: 1, StateUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 }, MeetingTypes: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, ResolutionStatuses: { DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, SupplierGroups: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, VehicleMakes: { Id: 1, Name: 1 }, VehicleModels: { Id: 1, Name: 1 }, VehicleTypes: { Id: 1, Name: 1 } }, Meeting: { AgendaDecisions: { AssignedTo: 1, AssignedToAddress: 1, AssignedToBloodGroup: 1, AssignedToCityId: 1, AssignedToCnic: 1, AssignedToCountryId: 1, AssignedToDeleteDate: 1, AssignedToDeleteUserId: 1, AssignedToDepartmentId: 1, AssignedToDesignationId: 1, AssignedToEmail: 1, AssignedToFirstName: 1, AssignedToFullName: 1, AssignedToHoureRateSalary: 1, AssignedToInsertDate: 1, AssignedToInsertUserId: 1, AssignedToIsActive: 1, AssignedToLastName: 1, AssignedToPhone: 1, AssignedToPicture: 1, AssignedToRateType: 1, AssignedToRegionId: 1, AssignedToStateId: 1, AssignedToTerritoryId: 1, AssignedToUpdateDate: 1, AssignedToUpdateUserId: 1, AssignedToUserId: 1, AssignedToZipCode: 1, Attachments: 1, DecisionNumber: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, DueDate: 1, Id: 1, Images: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Meeting: 1, MeetingDepartment: 1, MeetingEndDate: 1, MeetingLocation: 1, MeetingMeetingName: 1, MeetingMeetingType: 1, MeetingOrganizedBy: 1, MeetingReporter: 1, MeetingStartDate: 1, RelatedAgendaItem: 1, RelatedAgendaItemAttachments: 1, RelatedAgendaItemDescription: 1, RelatedAgendaItemImages: 1, RelatedAgendaItemItemType: 1, RelatedAgendaItemMeeting: 1, RelatedAgendaItemRequestedBy: 1, RelatedAgendaItemSequenceNo: 1, RelatedAgendaItemTitle: 1, ResolutionStatus: 1, ResolutionStatusName: 1, UpdateDate: 1, UpdateUserId: 1 }, AgendaItems: { Attachments: 1, DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, Images: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ItemType: 1, ItemTypeName: 1, Meeting: 1, MeetingDepartment: 1, MeetingEndDate: 1, MeetingLocation: 1, MeetingMeetingName: 1, MeetingMeetingType: 1, MeetingOrganizedBy: 1, MeetingReporter: 1, MeetingStartDate: 1, RequestedBy: 1, RequestedByAddress: 1, RequestedByBloodGroup: 1, RequestedByCityId: 1, RequestedByCnic: 1, RequestedByCountryId: 1, RequestedByDeleteDate: 1, RequestedByDeleteUserId: 1, RequestedByDepartmentId: 1, RequestedByDesignationId: 1, RequestedByEmail: 1, RequestedByFirstName: 1, RequestedByFullName: 1, RequestedByHoureRateSalary: 1, RequestedByInsertDate: 1, RequestedByInsertUserId: 1, RequestedByIsActive: 1, RequestedByLastName: 1, RequestedByPhone: 1, RequestedByPicture: 1, RequestedByRateType: 1, RequestedByRegionId: 1, RequestedByStateId: 1, RequestedByTerritoryId: 1, RequestedByUpdateDate: 1, RequestedByUpdateUserId: 1, RequestedByUserId: 1, RequestedByZipCode: 1, SequenceNo: 1, Title: 1, UpdateDate: 1, UpdateUserId: 1 }, MeetingAttendees: { AttendanceStatus: 1, AttendanceStatusName: 1, Attendee: 1, AttendeeAddress: 1, AttendeeBloodGroup: 1, AttendeeCityId: 1, AttendeeCnic: 1, AttendeeCountryId: 1, AttendeeDeleteDate: 1, AttendeeDeleteUserId: 1, AttendeeDepartmentId: 1, AttendeeDesignationId: 1, AttendeeEmail: 1, AttendeeFirstName: 1, AttendeeFullName: 1, AttendeeHoureRateSalary: 1, AttendeeInsertDate: 1, AttendeeInsertUserId: 1, AttendeeIsActive: 1, AttendeeLastName: 1, AttendeePhone: 1, AttendeePicture: 1, AttendeeRateType: 1, AttendeeRegionId: 1, AttendeeStateId: 1, AttendeeTerritoryId: 1, AttendeeType: 1, AttendeeTypeName: 1, AttendeeUpdateDate: 1, AttendeeUpdateUserId: 1, AttendeeUserId: 1, AttendeeZipCode: 1, DeleteDate: 1, DeleteUserId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Meeting: 1, MeetingDepartment: 1, MeetingEndDate: 1, MeetingLocation: 1, MeetingMeetingName: 1, MeetingMeetingType: 1, MeetingOrganizedBy: 1, MeetingReporter: 1, MeetingStartDate: 1, UpdateDate: 1, UpdateUserId: 1 }, Meetings: { AgendaDecisions: 1, AgendaItems: 1, Attendees: 1, DeleteDate: 1, DeleteUserId: 1, Department: 1, Department1: 1, DepartmentDeleteDate: 1, DepartmentDeleteUserId: 1, DepartmentDescription: 1, DepartmentInsertDate: 1, DepartmentInsertUserId: 1, DepartmentIsActive: 1, DepartmentParentDepartmentId: 1, DepartmentUpdateDate: 1, DepartmentUpdateUserId: 1, EndDate: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Location: 1, LocationAddress: 1, LocationCityId: 1, LocationCountryId: 1, LocationLatitude: 1, LocationLongitude: 1, LocationName: 1, LocationStateId: 1, MeetingName: 1, MeetingType: 1, MeetingTypeName: 1, OrganizedBy: 1, OrganizedByAddress: 1, OrganizedByBloodGroup: 1, OrganizedByCityId: 1, OrganizedByCnic: 1, OrganizedByCountryId: 1, OrganizedByDeleteDate: 1, OrganizedByDeleteUserId: 1, OrganizedByDepartmentId: 1, OrganizedByDesignationId: 1, OrganizedByEmail: 1, OrganizedByFirstName: 1, OrganizedByFullName: 1, OrganizedByHoureRateSalary: 1, OrganizedByInsertDate: 1, OrganizedByInsertUserId: 1, OrganizedByIsActive: 1, OrganizedByLastName: 1, OrganizedByPhone: 1, OrganizedByPicture: 1, OrganizedByRateType: 1, OrganizedByRegionId: 1, OrganizedByStateId: 1, OrganizedByTerritoryId: 1, OrganizedByUpdateDate: 1, OrganizedByUpdateUserId: 1, OrganizedByUserId: 1, OrganizedByZipCode: 1, Reporter: 1, ReporterAddress: 1, ReporterBloodGroup: 1, ReporterCityId: 1, ReporterCnic: 1, ReporterCountryId: 1, ReporterDeleteDate: 1, ReporterDeleteUserId: 1, ReporterDepartmentId: 1, ReporterDesignationId: 1, ReporterEmail: 1, ReporterFirstName: 1, ReporterFullName: 1, ReporterHoureRateSalary: 1, ReporterInsertDate: 1, ReporterInsertUserId: 1, ReporterIsActive: 1, ReporterLastName: 1, ReporterPhone: 1, ReporterPicture: 1, ReporterRateType: 1, ReporterRegionId: 1, ReporterStateId: 1, ReporterTerritoryId: 1, ReporterUpdateDate: 1, ReporterUpdateUserId: 1, ReporterUserId: 1, ReporterZipCode: 1, StartDate: 1, UpdateDate: 1, UpdateUserId: 1 } }, Products: { Brands: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 }, Categories: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, ParentCategoryDescription: 1, ParentCategoryId: 1, ParentCategoryName: 1, ParentCategoryParentCategoryId: 1, UpdateDate: 1, UpdateUserId: 1 }, Products: { Barcode: 1, BrandId: 1, BrandName: 1, CategoryDescription: 1, CategoryId: 1, CategoryName: 1, DeleteDate: 1, DeleteUserId: 1, Gst: 1, HSN: 1, Id: 1, Image: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Model: 1, ProductDetails: 1, ProductName: 1, PurchasePrice: 1, QtyIn: 1, QtyOut: 1, ReorderLevel: 1, Stock: 1, UnitDescription: 1, UnitId: 1, UnitName: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, UpdateDate: 1, UpdateUserId: 1 }, Units: { DeleteDate: 1, DeleteUserId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Name: 1, UpdateDate: 1, UpdateUserId: 1 } }, Purchases: { PurchaseDetails: { Description: 1, Discount: 1, Id: 1, ProductBarcode: 1, ProductCategoryId: 1, ProductId: 1, ProductImage: 1, ProductModel: 1, ProductName: 1, ProductProductDetails: 1, ProductProductName: 1, ProductQuantityPerUnit: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, PurchaseBankId: 1, PurchaseChange: 1, PurchaseDate: 1, PurchaseDetails: 1, PurchaseDiscount: 1, PurchaseDue: 1, PurchaseGrandTotal: 1, PurchaseId: 1, PurchaseInvoiceNo: 1, PurchaseNetTotal: 1, PurchasePaidAmount: 1, PurchasePaymentType: 1, PurchaseShippingCost: 1, PurchaseSupplierId: 1, PurchaseTotalDiscount: 1, PurchaseTotalTax: 1, PurchaseVat: 1, Quantity: 1, Total: 1, UnitId: 1, UnitName: 1, UnitPrice: 1, UnitUnitName: 1 }, Purchases: { Change: 1, Date: 1, Details: 1, Discount: 1, Due: 1, GrandTotal: 1, HeadCodeName: 1, Id: 1, InvoiceNo: 1, LineItems: 1, NetTotal: 1, PaidAmount: 1, PaymentAccount: 1, ShippingCost: 1, SupplierAddress: 1, SupplierCityId: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountryId: 1, SupplierEmail: 1, SupplierEmailAddress: 1, SupplierFax: 1, SupplierId: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierPreviousCreditBalance: 1, SupplierRegionId: 1, SupplierStateId: 1, SupplierWebsite: 1, TotalDiscount: 1, VNo: 1 } }, Quotations: { QuotationDetails: { Description: 1, Discount: 1, Id: 1, ProductBarcode: 1, ProductBrandId: 1, ProductCategoryId: 1, ProductDeleteDate: 1, ProductDeleteUserId: 1, ProductId: 1, ProductImage: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductModel: 1, ProductName: 1, ProductProductDetails: 1, ProductProductName: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, Quantity: 1, QuotationCustomerId: 1, QuotationDate: 1, QuotationDetails: 1, QuotationDiscount: 1, QuotationExpiryDate: 1, QuotationGrandTotal: 1, QuotationId: 1, QuotationNetTotal: 1, QuotationShippingCost: 1, QuotationTotalDiscount: 1, QuotationTotalTax: 1, QuotationVat: 1, Total: 1, UnitDeleteDate: 1, UnitDeleteUserId: 1, UnitDescription: 1, UnitId: 1, UnitInsertDate: 1, UnitInsertUserId: 1, UnitIsActive: 1, UnitName: 1, UnitPrice: 1, UnitUnitName: 1, UnitUpdateDate: 1, UnitUpdateUserId: 1 }, QuotationJobItems: { Description: 1, Discount: 1, Id: 1, JobType: 1, JobTypeIsInspectionList: 1, JobTypeJobCategory: 1, JobTypeName: 1, JobTypeRate: 1, JobTypeStandardTiming: 1, QuotationCustomerId: 1, QuotationDate: 1, QuotationDetails: 1, QuotationDiscount: 1, QuotationExpiryDate: 1, QuotationGrandTotal: 1, QuotationId: 1, QuotationNetTotal: 1, QuotationShippingCost: 1, QuotationTotalDiscount: 1, QuotationTotalTax: 1, QuotationVat: 1, QuotationVehicle: 1, Total: 1, UnitPrice: 1 }, Quotations: { CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerId: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, Date: 1, Details: 1, Discount: 1, ExpiryDate: 1, GrandTotal: 1, Id: 1, Jobs: 1, LineItems: 1, NetTotal: 1, ShippingCost: 1, TotalDiscount: 1, TotalTax: 1, Vat: 1, Vehicle: 1 } }, Reports: { DailyClosing: { Adjustment: 1, Amount: 1, CashIn: 1, CashOut: 1, Date: 1, Id: 1, InsertDate: 1, InsertUserId: 1, LastClosingAmount: 1, LastClosingDate: 1, LastDayClosing: 1, Status: 1, TodayCashIn: 1, TodayCashOut: 1, UpdateDate: 1, UpdateUserId: 1 } }, Sales: { SaleDetails: { Description: 1, Discount: 1, Id: 1, ProductBarcode: 1, ProductCategoryId: 1, ProductId: 1, ProductImage: 1, ProductModel: 1, ProductName: 1, ProductProductDetails: 1, ProductProductName: 1, ProductQuantityPerUnit: 1, ProductReorderLevel: 1, ProductSn: 1, ProductUnitId: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, Quantity: 1, SaleBankId: 1, SaleChange: 1, SaleCustomerId: 1, SaleDate: 1, SaleDetails: 1, SaleDiscount: 1, SaleDue: 1, SaleGrandTotal: 1, SaleId: 1, SaleNetTotal: 1, SalePaidAmount: 1, SalePaymentType: 1, SaleShippingCost: 1, SaleTotalDiscount: 1, SaleTotalTax: 1, SaleVat: 1, Total: 1, UnitId: 1, UnitName: 1, UnitPrice: 1, UnitUnitName: 1 }, Sales: { Change: 1, CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerId: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerWebsite: 1, Date: 1, Details: 1, Discount: 1, Due: 1, GrandTotal: 1, HeadCodeName: 1, Id: 1, LineItems: 1, NetTotal: 1, PaidAmount: 1, PaymentAccount: 1, ShippingCost: 1, TotalDiscount: 1, TotalTax: 1, VNo: 1, Vat: 1 } }, Suppliers: { Suppliers: { Address: 1, CityCountryId: 1, CityId: 1, CityName: 1, CityStateId: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, CountryId: 1, CountryName: 1, DeleteDate: 1, DeleteUserId: 1, Email: 1, EmailAddress: 1, Fax: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Phone: 1, PostalCode: 1, PreviousCreditBalance: 1, RegionId: 1, RegionName: 1, StateCountryId: 1, StateId: 1, StateName: 1, SupplierBalance: 1, SupplierGroupId: 1, SupplierGroupName: 1, SupplierPaid: 1, SupplierPayable: 1, UpdateDate: 1, UpdateUserId: 1, Website: 1 } }, Vehicles: { Vehicles: { AssemblyType: 1, AssemblyTypeName: 1, Axles: 1, BodyStyle: 1, Brand: 1, BrandDeleteDate: 1, BrandDeleteUserId: 1, BrandDescription: 1, BrandInsertDate: 1, BrandInsertUserId: 1, BrandIsActive: 1, BrandName: 1, BrandUpdateDate: 1, BrandUpdateUserId: 1, CcRating: 1, Color: 1, ColorName: 1, CountryOfOrigin: 1, CountryOfOriginDeleteDate: 1, CountryOfOriginDeleteUserId: 1, CountryOfOriginInsertDate: 1, CountryOfOriginInsertUserId: 1, CountryOfOriginIsActive: 1, CountryOfOriginName: 1, CountryOfOriginUpdateDate: 1, CountryOfOriginUpdateUserId: 1, CustomerAddress: 1, CustomerCityId: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountryId: 1, CustomerCustomerGroupId: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerEmailAddress: 1, CustomerFax: 1, CustomerId: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerName: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerPreviousCreditBalance: 1, CustomerRegionId: 1, CustomerStateId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, CustomerWebsite: 1, EngineNo: 1, FrontAxleGroupRating: 1, FuelType: 1, FuelTypeName: 1, GrossVehicleMass: 1, Id: 1, Make: 1, MakeName: 1, Mileage: 1, Model: 1, ModelName: 1, RearAxleGroupRating: 1, Seats: 1, SecondColor: 1, SecondColorName: 1, SubModel: 1, TareWeight: 1, VehicleRegistration: 1, VehicleType: 1, VehicleTypeName: 1, Wheelbase: 1, Year: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = SmartERP.Texts || (SmartERP.Texts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Vehicles;
    (function (Vehicles_1) {
    })(Vehicles = SmartERP.Vehicles || (SmartERP.Vehicles = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Vehicles;
    (function (Vehicles) {
        var VehiclesForm = /** @class */ (function (_super) {
            __extends(VehiclesForm, _super);
            function VehiclesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VehiclesForm.init) {
                    VehiclesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(VehiclesForm, [
                        'CustomerId', w0,
                        'VehicleRegistration', w1,
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
                return _this;
            }
            VehiclesForm.formKey = 'Vehicles.Vehicles';
            return VehiclesForm;
        }(Serenity.PrefixedContext));
        Vehicles.VehiclesForm = VehiclesForm;
    })(Vehicles = SmartERP.Vehicles || (SmartERP.Vehicles = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Vehicles;
    (function (Vehicles) {
        var VehiclesRow;
        (function (VehiclesRow) {
            VehiclesRow.idProperty = 'Id';
            VehiclesRow.nameProperty = 'VehicleRegistration';
            VehiclesRow.localTextPrefix = 'Vehicles.Vehicles';
            VehiclesRow.lookupKey = 'Vehicles.Vehicles';
            function getLookup() {
                return Q.getLookup('Vehicles.Vehicles');
            }
            VehiclesRow.getLookup = getLookup;
            VehiclesRow.deletePermission = 'Vehicles:Vehicle:Delete';
            VehiclesRow.insertPermission = 'Vehicles:Vehicle:Create';
            VehiclesRow.readPermission = 'Vehicles:Vehicle:View';
            VehiclesRow.updatePermission = 'Vehicles:Vehicle:Update';
        })(VehiclesRow = Vehicles.VehiclesRow || (Vehicles.VehiclesRow = {}));
    })(Vehicles = SmartERP.Vehicles || (SmartERP.Vehicles = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Vehicles;
    (function (Vehicles) {
        var VehiclesService;
        (function (VehiclesService) {
            VehiclesService.baseUrl = 'Vehicles/Vehicles';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VehiclesService[x] = function (r, s, o) {
                    return Q.serviceRequest(VehiclesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VehiclesService = Vehicles.VehiclesService || (Vehicles.VehiclesService = {}));
    })(Vehicles = SmartERP.Vehicles || (SmartERP.Vehicles = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsDialog = /** @class */ (function (_super) {
            __extends(AccountsDialog, _super);
            function AccountsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.AccountsForm(_this.idPrefix);
                _this.form = new Accounts.AccountsForm(_this.idPrefix);
                _this.form.HeadName.element.attr("tabindex", 1);
                _this.setTabIndexSelect2(_this.form.ParentHead.element, 2);
                _this.form.IsGl.element.attr("tabindex", 3);
                _this.form.IsTransaction.element.attr("tabindex", 4);
                //https://github.com/volkanceylan/Serenity/issues/3935
                _this.form.ParentHead.changeSelect2(function (e) {
                    _this.UpdateAccountfields();
                });
                _this.form.HeadName.change(function (e) {
                    _this.UpdateAccountfields();
                });
                return _this;
            }
            AccountsDialog.prototype.getFormKey = function () { return Accounts.AccountsForm.formKey; };
            AccountsDialog.prototype.getIdProperty = function () { return Accounts.AccountsRow.idProperty; };
            AccountsDialog.prototype.getLocalTextPrefix = function () { return Accounts.AccountsRow.localTextPrefix; };
            AccountsDialog.prototype.getNameProperty = function () { return Accounts.AccountsRow.nameProperty; };
            AccountsDialog.prototype.getService = function () { return Accounts.AccountsService.baseUrl; };
            AccountsDialog.prototype.getDeletePermission = function () { return Accounts.AccountsRow.deletePermission; };
            AccountsDialog.prototype.getInsertPermission = function () { return Accounts.AccountsRow.insertPermission; };
            AccountsDialog.prototype.getUpdatePermission = function () { return Accounts.AccountsRow.updatePermission; };
            AccountsDialog.prototype.UpdateAccountfields = function () {
                if (this.isNew) {
                    var parentHead = Q.toId(this.form.ParentHead.value);
                    this.form.HeadType.value = 'A';
                    var accountsRows = SmartERP.Accounts.AccountsRow.getLookup().items;
                    if (parentHead != null) {
                        //alert(JSON.stringify(SmartERP.Accounts.AccountsRow.getLookup().itemById[parentHead]));
                        var parentRow = SmartERP.Accounts.AccountsRow.getLookup().itemById[parentHead];
                        this.form.HeadLevel.value = parentRow.HeadLevel + 1;
                        var headCode = parentRow.HeadCode * 100;
                        this.form.PHeadName.value = parentRow.HeadName;
                        for (var i = 0; i < accountsRows.length; i++) {
                            if (accountsRows[i].HeadLevel == parentRow.HeadLevel + 1) {
                                if (accountsRows[i].HeadCode > headCode) {
                                    headCode = accountsRows[i].HeadCode;
                                }
                            }
                        }
                        headCode++;
                        this.form.HeadCode.value = headCode;
                    }
                    else {
                        this.form.HeadLevel.value = 1;
                        //this.form.HeadCode.value = '1';
                        var headCode = 0;
                        this.form.PHeadName.value = 'COA';
                        for (var i = 0; i < accountsRows.length; i++) {
                            if (accountsRows[i].HeadLevel == 1) {
                                if (accountsRows[i].HeadCode > headCode) {
                                    headCode = accountsRows[i].HeadCode;
                                }
                            }
                        }
                        headCode++;
                        this.form.HeadCode.value = headCode;
                    }
                }
            };
            AccountsDialog.prototype.setTabIndexSelect2 = function (element, tabIndex) {
                element.prev("div.select2-container").find("input").attr("tabindex", tabIndex);
            };
            AccountsDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.HeadName.element.focus();
            };
            AccountsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], AccountsDialog);
            return AccountsDialog;
        }(Serenity.EntityDialog));
        Accounts.AccountsDialog = AccountsDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsEditor = /** @class */ (function (_super) {
            __extends(AccountsEditor, _super);
            function AccountsEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            AccountsEditor.prototype.getLookupKey = function () {
                return Accounts.AccountsRow.lookupKey;
            };
            AccountsEditor.prototype.getItemText = function (item, lookup) {
                var visited = {};
                var text = item.HeadName;
                while (item.ParentHead != null && !visited[item.ParentHead]) {
                    item = lookup.itemById[item.ParentHead];
                    if (!item)
                        break;
                    visited[item.Id] = true;
                    text = item.HeadName + " >> " + text;
                }
                return text;
            };
            AccountsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AccountsEditor);
            return AccountsEditor;
        }(Serenity.LookupEditorBase));
        Accounts.AccountsEditor = AccountsEditor;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var AccountsGrid = /** @class */ (function (_super) {
            __extends(AccountsGrid, _super);
            function AccountsGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    getParentId: function (x) { return x.ParentHead; },
                    toggleField: "HeadName" /* AccountsRow.Fields.HeadName */,
                    initialCollapse: function () { return false; }
                });
                return _this;
            }
            AccountsGrid.prototype.getColumnsKey = function () { return 'Accounts.Accounts'; };
            AccountsGrid.prototype.getDialogType = function () { return Accounts.AccountsDialog; };
            AccountsGrid.prototype.getIsActiveProperty = function () { return Accounts.AccountsRow.isActiveProperty; };
            AccountsGrid.prototype.getIdProperty = function () { return Accounts.AccountsRow.idProperty; };
            AccountsGrid.prototype.getInsertPermission = function () { return Accounts.AccountsRow.insertPermission; };
            AccountsGrid.prototype.getLocalTextPrefix = function () { return Accounts.AccountsRow.localTextPrefix; };
            AccountsGrid.prototype.getService = function () { return Accounts.AccountsService.baseUrl; };
            AccountsGrid.prototype.subDialogDataChange = function () {
                _super.prototype.subDialogDataChange.call(this);
                Q.reloadLookup(Accounts.AccountsRow.lookupKey);
            };
            AccountsGrid.prototype.usePager = function () {
                return false;
            };
            AccountsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(Q.indexOf(columns, function (x) { return x.name == "HeadName" /* AccountsRow.Fields.HeadName */; }) + 1, 0, {
                    field: 'Add Child Unit',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action add-child-unit" title="add child unit"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            AccountsGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('add-child-unit')) {
                        var dlg = new Accounts.AccountsDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            ParentHead: item.Id
                        });
                    }
                }
            };
            AccountsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountsGrid);
            return AccountsGrid;
        }(Serenity.EntityGrid));
        Accounts.AccountsGrid = AccountsGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var BankTransactionsDialog = /** @class */ (function (_super) {
            __extends(BankTransactionsDialog, _super);
            function BankTransactionsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.BankTransactionsForm(_this.idPrefix);
                return _this;
            }
            BankTransactionsDialog.prototype.getFormKey = function () { return Accounts.BankTransactionsForm.formKey; };
            BankTransactionsDialog.prototype.getIdProperty = function () { return Accounts.BankTransactionsRow.idProperty; };
            BankTransactionsDialog.prototype.getLocalTextPrefix = function () { return Accounts.BankTransactionsRow.localTextPrefix; };
            BankTransactionsDialog.prototype.getNameProperty = function () { return Accounts.BankTransactionsRow.nameProperty; };
            BankTransactionsDialog.prototype.getService = function () { return Accounts.BankTransactionsService.baseUrl; };
            BankTransactionsDialog.prototype.getDeletePermission = function () { return Accounts.BankTransactionsRow.deletePermission; };
            BankTransactionsDialog.prototype.getInsertPermission = function () { return Accounts.BankTransactionsRow.insertPermission; };
            BankTransactionsDialog.prototype.getUpdatePermission = function () { return Accounts.BankTransactionsRow.updatePermission; };
            BankTransactionsDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            BankTransactionsDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                window.location.href = "/Banks/Banks";
                //DialogUtils.dialogCloseRedirect("/Banks/Banks", this.element);
            };
            BankTransactionsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], BankTransactionsDialog);
            return BankTransactionsDialog;
        }(Serenity.EntityDialog));
        Accounts.BankTransactionsDialog = BankTransactionsDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var BankTransactionsGrid = /** @class */ (function (_super) {
            __extends(BankTransactionsGrid, _super);
            function BankTransactionsGrid(container) {
                return _super.call(this, container) || this;
            }
            BankTransactionsGrid.prototype.getColumnsKey = function () { return 'Accounts.BankTransactions'; };
            BankTransactionsGrid.prototype.getDialogType = function () { return Accounts.BankTransactionsDialog; };
            BankTransactionsGrid.prototype.getIdProperty = function () { return Accounts.BankTransactionsRow.idProperty; };
            BankTransactionsGrid.prototype.getInsertPermission = function () { return Accounts.BankTransactionsRow.insertPermission; };
            BankTransactionsGrid.prototype.getLocalTextPrefix = function () { return Accounts.BankTransactionsRow.localTextPrefix; };
            BankTransactionsGrid.prototype.getService = function () { return Accounts.BankTransactionsService.baseUrl; };
            BankTransactionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BankTransactionsGrid);
            return BankTransactionsGrid;
        }(Serenity.EntityGrid));
        Accounts.BankTransactionsGrid = BankTransactionsGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CashAdjustmentDialog = /** @class */ (function (_super) {
            __extends(CashAdjustmentDialog, _super);
            function CashAdjustmentDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.CashAdjustmentForm(_this.idPrefix);
                return _this;
            }
            CashAdjustmentDialog.prototype.getFormKey = function () { return Accounts.CashAdjustmentForm.formKey; };
            CashAdjustmentDialog.prototype.getIdProperty = function () { return Accounts.CashAdjustmentRow.idProperty; };
            CashAdjustmentDialog.prototype.getLocalTextPrefix = function () { return Accounts.CashAdjustmentRow.localTextPrefix; };
            CashAdjustmentDialog.prototype.getNameProperty = function () { return Accounts.CashAdjustmentRow.nameProperty; };
            CashAdjustmentDialog.prototype.getService = function () { return Accounts.CashAdjustmentService.baseUrl; };
            CashAdjustmentDialog.prototype.getDeletePermission = function () { return Accounts.CashAdjustmentRow.deletePermission; };
            CashAdjustmentDialog.prototype.getInsertPermission = function () { return Accounts.CashAdjustmentRow.insertPermission; };
            CashAdjustmentDialog.prototype.getUpdatePermission = function () { return Accounts.CashAdjustmentRow.updatePermission; };
            CashAdjustmentDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            CashAdjustmentDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                window.location.href = "/Customers/Customers";
            };
            CashAdjustmentDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CashAdjustmentDialog);
            return CashAdjustmentDialog;
        }(Serenity.EntityDialog));
        Accounts.CashAdjustmentDialog = CashAdjustmentDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CashAdjustmentGrid = /** @class */ (function (_super) {
            __extends(CashAdjustmentGrid, _super);
            function CashAdjustmentGrid(container) {
                return _super.call(this, container) || this;
            }
            CashAdjustmentGrid.prototype.getColumnsKey = function () { return 'Accounts.CashAdjustment'; };
            CashAdjustmentGrid.prototype.getDialogType = function () { return Accounts.CashAdjustmentDialog; };
            CashAdjustmentGrid.prototype.getIdProperty = function () { return Accounts.CashAdjustmentRow.idProperty; };
            CashAdjustmentGrid.prototype.getInsertPermission = function () { return Accounts.CashAdjustmentRow.insertPermission; };
            CashAdjustmentGrid.prototype.getLocalTextPrefix = function () { return Accounts.CashAdjustmentRow.localTextPrefix; };
            CashAdjustmentGrid.prototype.getService = function () { return Accounts.CashAdjustmentService.baseUrl; };
            CashAdjustmentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CashAdjustmentGrid);
            return CashAdjustmentGrid;
        }(Serenity.EntityGrid));
        Accounts.CashAdjustmentGrid = CashAdjustmentGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var ContraVoucherDialog = /** @class */ (function (_super) {
            __extends(ContraVoucherDialog, _super);
            function ContraVoucherDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.ContraVoucherForm(_this.idPrefix);
                return _this;
            }
            ContraVoucherDialog.prototype.getFormKey = function () { return Accounts.ContraVoucherForm.formKey; };
            ContraVoucherDialog.prototype.getIdProperty = function () { return Accounts.ContraVoucherRow.idProperty; };
            ContraVoucherDialog.prototype.getLocalTextPrefix = function () { return Accounts.ContraVoucherRow.localTextPrefix; };
            ContraVoucherDialog.prototype.getNameProperty = function () { return Accounts.ContraVoucherRow.nameProperty; };
            ContraVoucherDialog.prototype.getService = function () { return Accounts.ContraVoucherService.baseUrl; };
            ContraVoucherDialog.prototype.getDeletePermission = function () { return Accounts.ContraVoucherRow.deletePermission; };
            ContraVoucherDialog.prototype.getInsertPermission = function () { return Accounts.ContraVoucherRow.insertPermission; };
            ContraVoucherDialog.prototype.getUpdatePermission = function () { return Accounts.ContraVoucherRow.updatePermission; };
            ContraVoucherDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            ContraVoucherDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                window.location.href = "/Customers/Customers";
            };
            ContraVoucherDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ContraVoucherDialog);
            return ContraVoucherDialog;
        }(Serenity.EntityDialog));
        Accounts.ContraVoucherDialog = ContraVoucherDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var ContraVoucherGrid = /** @class */ (function (_super) {
            __extends(ContraVoucherGrid, _super);
            function ContraVoucherGrid(container) {
                return _super.call(this, container) || this;
            }
            ContraVoucherGrid.prototype.getColumnsKey = function () { return 'Accounts.ContraVoucher'; };
            ContraVoucherGrid.prototype.getDialogType = function () { return Accounts.ContraVoucherDialog; };
            ContraVoucherGrid.prototype.getIdProperty = function () { return Accounts.ContraVoucherRow.idProperty; };
            ContraVoucherGrid.prototype.getInsertPermission = function () { return Accounts.ContraVoucherRow.insertPermission; };
            ContraVoucherGrid.prototype.getLocalTextPrefix = function () { return Accounts.ContraVoucherRow.localTextPrefix; };
            ContraVoucherGrid.prototype.getService = function () { return Accounts.ContraVoucherService.baseUrl; };
            ContraVoucherGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ContraVoucherGrid);
            return ContraVoucherGrid;
        }(Serenity.EntityGrid));
        Accounts.ContraVoucherGrid = ContraVoucherGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CreditVoucherDialog = /** @class */ (function (_super) {
            __extends(CreditVoucherDialog, _super);
            function CreditVoucherDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.CreditVoucherForm(_this.idPrefix);
                return _this;
            }
            CreditVoucherDialog.prototype.getFormKey = function () { return Accounts.CreditVoucherForm.formKey; };
            CreditVoucherDialog.prototype.getIdProperty = function () { return Accounts.CreditVoucherRow.idProperty; };
            CreditVoucherDialog.prototype.getLocalTextPrefix = function () { return Accounts.CreditVoucherRow.localTextPrefix; };
            CreditVoucherDialog.prototype.getNameProperty = function () { return Accounts.CreditVoucherRow.nameProperty; };
            CreditVoucherDialog.prototype.getService = function () { return Accounts.CreditVoucherService.baseUrl; };
            CreditVoucherDialog.prototype.getDeletePermission = function () { return Accounts.CreditVoucherRow.deletePermission; };
            CreditVoucherDialog.prototype.getInsertPermission = function () { return Accounts.CreditVoucherRow.insertPermission; };
            CreditVoucherDialog.prototype.getUpdatePermission = function () { return Accounts.CreditVoucherRow.updatePermission; };
            CreditVoucherDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            CreditVoucherDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                window.location.href = "/Customers/Customers";
            };
            CreditVoucherDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CreditVoucherDialog);
            return CreditVoucherDialog;
        }(Serenity.EntityDialog));
        Accounts.CreditVoucherDialog = CreditVoucherDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CreditVoucherGrid = /** @class */ (function (_super) {
            __extends(CreditVoucherGrid, _super);
            function CreditVoucherGrid(container) {
                return _super.call(this, container) || this;
            }
            CreditVoucherGrid.prototype.getColumnsKey = function () { return 'Accounts.CreditVoucher'; };
            CreditVoucherGrid.prototype.getDialogType = function () { return Accounts.CreditVoucherDialog; };
            CreditVoucherGrid.prototype.getIdProperty = function () { return Accounts.CreditVoucherRow.idProperty; };
            CreditVoucherGrid.prototype.getInsertPermission = function () { return Accounts.CreditVoucherRow.insertPermission; };
            CreditVoucherGrid.prototype.getLocalTextPrefix = function () { return Accounts.CreditVoucherRow.localTextPrefix; };
            CreditVoucherGrid.prototype.getService = function () { return Accounts.CreditVoucherService.baseUrl; };
            CreditVoucherGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CreditVoucherGrid);
            return CreditVoucherGrid;
        }(Serenity.EntityGrid));
        Accounts.CreditVoucherGrid = CreditVoucherGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CustomerReceiveDialog = /** @class */ (function (_super) {
            __extends(CustomerReceiveDialog, _super);
            function CustomerReceiveDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.CustomerReceiveForm(_this.idPrefix);
                return _this;
            }
            CustomerReceiveDialog.prototype.getFormKey = function () { return Accounts.CustomerReceiveForm.formKey; };
            CustomerReceiveDialog.prototype.getIdProperty = function () { return Accounts.CustomerReceiveRow.idProperty; };
            CustomerReceiveDialog.prototype.getLocalTextPrefix = function () { return Accounts.CustomerReceiveRow.localTextPrefix; };
            CustomerReceiveDialog.prototype.getNameProperty = function () { return Accounts.CustomerReceiveRow.nameProperty; };
            CustomerReceiveDialog.prototype.getService = function () { return Accounts.CustomerReceiveService.baseUrl; };
            CustomerReceiveDialog.prototype.getDeletePermission = function () { return Accounts.CustomerReceiveRow.deletePermission; };
            CustomerReceiveDialog.prototype.getInsertPermission = function () { return Accounts.CustomerReceiveRow.insertPermission; };
            CustomerReceiveDialog.prototype.getUpdatePermission = function () { return Accounts.CustomerReceiveRow.updatePermission; };
            CustomerReceiveDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            CustomerReceiveDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                window.location.href = "/Customers/Customers";
            };
            CustomerReceiveDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CustomerReceiveDialog);
            return CustomerReceiveDialog;
        }(Serenity.EntityDialog));
        Accounts.CustomerReceiveDialog = CustomerReceiveDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var CustomerReceiveGrid = /** @class */ (function (_super) {
            __extends(CustomerReceiveGrid, _super);
            function CustomerReceiveGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerReceiveGrid.prototype.getColumnsKey = function () { return 'Accounts.CustomerReceive'; };
            CustomerReceiveGrid.prototype.getDialogType = function () { return Accounts.CustomerReceiveDialog; };
            CustomerReceiveGrid.prototype.getIdProperty = function () { return Accounts.CustomerReceiveRow.idProperty; };
            CustomerReceiveGrid.prototype.getInsertPermission = function () { return Accounts.CustomerReceiveRow.insertPermission; };
            CustomerReceiveGrid.prototype.getLocalTextPrefix = function () { return Accounts.CustomerReceiveRow.localTextPrefix; };
            CustomerReceiveGrid.prototype.getService = function () { return Accounts.CustomerReceiveService.baseUrl; };
            CustomerReceiveGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerReceiveGrid);
            return CustomerReceiveGrid;
        }(Serenity.EntityGrid));
        Accounts.CustomerReceiveGrid = CustomerReceiveGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var DebitVoucherDialog = /** @class */ (function (_super) {
            __extends(DebitVoucherDialog, _super);
            function DebitVoucherDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.DebitVoucherForm(_this.idPrefix);
                return _this;
            }
            DebitVoucherDialog.prototype.getFormKey = function () { return Accounts.DebitVoucherForm.formKey; };
            DebitVoucherDialog.prototype.getIdProperty = function () { return Accounts.DebitVoucherRow.idProperty; };
            DebitVoucherDialog.prototype.getLocalTextPrefix = function () { return Accounts.DebitVoucherRow.localTextPrefix; };
            DebitVoucherDialog.prototype.getNameProperty = function () { return Accounts.DebitVoucherRow.nameProperty; };
            DebitVoucherDialog.prototype.getService = function () { return Accounts.DebitVoucherService.baseUrl; };
            DebitVoucherDialog.prototype.getDeletePermission = function () { return Accounts.DebitVoucherRow.deletePermission; };
            DebitVoucherDialog.prototype.getInsertPermission = function () { return Accounts.DebitVoucherRow.insertPermission; };
            DebitVoucherDialog.prototype.getUpdatePermission = function () { return Accounts.DebitVoucherRow.updatePermission; };
            DebitVoucherDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            DebitVoucherDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                window.location.href = "/Customers/Customers";
            };
            DebitVoucherDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], DebitVoucherDialog);
            return DebitVoucherDialog;
        }(Serenity.EntityDialog));
        Accounts.DebitVoucherDialog = DebitVoucherDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var DebitVoucherGrid = /** @class */ (function (_super) {
            __extends(DebitVoucherGrid, _super);
            function DebitVoucherGrid(container) {
                return _super.call(this, container) || this;
            }
            DebitVoucherGrid.prototype.getColumnsKey = function () { return 'Accounts.DebitVoucher'; };
            DebitVoucherGrid.prototype.getDialogType = function () { return Accounts.DebitVoucherDialog; };
            DebitVoucherGrid.prototype.getIdProperty = function () { return Accounts.DebitVoucherRow.idProperty; };
            DebitVoucherGrid.prototype.getInsertPermission = function () { return Accounts.DebitVoucherRow.insertPermission; };
            DebitVoucherGrid.prototype.getLocalTextPrefix = function () { return Accounts.DebitVoucherRow.localTextPrefix; };
            DebitVoucherGrid.prototype.getService = function () { return Accounts.DebitVoucherService.baseUrl; };
            DebitVoucherGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DebitVoucherGrid);
            return DebitVoucherGrid;
        }(Serenity.EntityGrid));
        Accounts.DebitVoucherGrid = DebitVoucherGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var JournalVoucherDialog = /** @class */ (function (_super) {
            __extends(JournalVoucherDialog, _super);
            function JournalVoucherDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.JournalVoucherForm(_this.idPrefix);
                return _this;
            }
            JournalVoucherDialog.prototype.getFormKey = function () { return Accounts.JournalVoucherForm.formKey; };
            JournalVoucherDialog.prototype.getIdProperty = function () { return Accounts.JournalVoucherRow.idProperty; };
            JournalVoucherDialog.prototype.getLocalTextPrefix = function () { return Accounts.JournalVoucherRow.localTextPrefix; };
            JournalVoucherDialog.prototype.getNameProperty = function () { return Accounts.JournalVoucherRow.nameProperty; };
            JournalVoucherDialog.prototype.getService = function () { return Accounts.JournalVoucherService.baseUrl; };
            JournalVoucherDialog.prototype.getDeletePermission = function () { return Accounts.JournalVoucherRow.deletePermission; };
            JournalVoucherDialog.prototype.getInsertPermission = function () { return Accounts.JournalVoucherRow.insertPermission; };
            JournalVoucherDialog.prototype.getUpdatePermission = function () { return Accounts.JournalVoucherRow.updatePermission; };
            JournalVoucherDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            JournalVoucherDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                window.location.href = "/Customers/Customers";
            };
            JournalVoucherDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], JournalVoucherDialog);
            return JournalVoucherDialog;
        }(Serenity.EntityDialog));
        Accounts.JournalVoucherDialog = JournalVoucherDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var JournalVoucherGrid = /** @class */ (function (_super) {
            __extends(JournalVoucherGrid, _super);
            function JournalVoucherGrid(container) {
                return _super.call(this, container) || this;
            }
            JournalVoucherGrid.prototype.getColumnsKey = function () { return 'Accounts.JournalVoucher'; };
            JournalVoucherGrid.prototype.getDialogType = function () { return Accounts.JournalVoucherDialog; };
            JournalVoucherGrid.prototype.getIdProperty = function () { return Accounts.JournalVoucherRow.idProperty; };
            JournalVoucherGrid.prototype.getInsertPermission = function () { return Accounts.JournalVoucherRow.insertPermission; };
            JournalVoucherGrid.prototype.getLocalTextPrefix = function () { return Accounts.JournalVoucherRow.localTextPrefix; };
            JournalVoucherGrid.prototype.getService = function () { return Accounts.JournalVoucherService.baseUrl; };
            JournalVoucherGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], JournalVoucherGrid);
            return JournalVoucherGrid;
        }(Serenity.EntityGrid));
        Accounts.JournalVoucherGrid = JournalVoucherGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var OpeningBalanceDialog = /** @class */ (function (_super) {
            __extends(OpeningBalanceDialog, _super);
            function OpeningBalanceDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.OpeningBalanceForm(_this.idPrefix);
                return _this;
            }
            OpeningBalanceDialog.prototype.getFormKey = function () { return Accounts.OpeningBalanceForm.formKey; };
            OpeningBalanceDialog.prototype.getIdProperty = function () { return Accounts.OpeningBalanceRow.idProperty; };
            OpeningBalanceDialog.prototype.getLocalTextPrefix = function () { return Accounts.OpeningBalanceRow.localTextPrefix; };
            OpeningBalanceDialog.prototype.getNameProperty = function () { return Accounts.OpeningBalanceRow.nameProperty; };
            OpeningBalanceDialog.prototype.getService = function () { return Accounts.OpeningBalanceService.baseUrl; };
            OpeningBalanceDialog.prototype.getDeletePermission = function () { return Accounts.OpeningBalanceRow.deletePermission; };
            OpeningBalanceDialog.prototype.getInsertPermission = function () { return Accounts.OpeningBalanceRow.insertPermission; };
            OpeningBalanceDialog.prototype.getUpdatePermission = function () { return Accounts.OpeningBalanceRow.updatePermission; };
            OpeningBalanceDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            OpeningBalanceDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                window.location.href = "/Customers/Customers";
            };
            OpeningBalanceDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], OpeningBalanceDialog);
            return OpeningBalanceDialog;
        }(Serenity.EntityDialog));
        Accounts.OpeningBalanceDialog = OpeningBalanceDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var OpeningBalanceGrid = /** @class */ (function (_super) {
            __extends(OpeningBalanceGrid, _super);
            function OpeningBalanceGrid(container) {
                return _super.call(this, container) || this;
            }
            OpeningBalanceGrid.prototype.getColumnsKey = function () { return 'Accounts.OpeningBalance'; };
            OpeningBalanceGrid.prototype.getDialogType = function () { return Accounts.OpeningBalanceDialog; };
            OpeningBalanceGrid.prototype.getIdProperty = function () { return Accounts.OpeningBalanceRow.idProperty; };
            OpeningBalanceGrid.prototype.getInsertPermission = function () { return Accounts.OpeningBalanceRow.insertPermission; };
            OpeningBalanceGrid.prototype.getLocalTextPrefix = function () { return Accounts.OpeningBalanceRow.localTextPrefix; };
            OpeningBalanceGrid.prototype.getService = function () { return Accounts.OpeningBalanceService.baseUrl; };
            OpeningBalanceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OpeningBalanceGrid);
            return OpeningBalanceGrid;
        }(Serenity.EntityGrid));
        Accounts.OpeningBalanceGrid = OpeningBalanceGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var SupplierPaymentDialog = /** @class */ (function (_super) {
            __extends(SupplierPaymentDialog, _super);
            function SupplierPaymentDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Accounts.SupplierPaymentForm(_this.idPrefix);
                return _this;
            }
            SupplierPaymentDialog.prototype.getFormKey = function () { return Accounts.SupplierPaymentForm.formKey; };
            SupplierPaymentDialog.prototype.getIdProperty = function () { return Accounts.SupplierPaymentRow.idProperty; };
            SupplierPaymentDialog.prototype.getLocalTextPrefix = function () { return Accounts.SupplierPaymentRow.localTextPrefix; };
            SupplierPaymentDialog.prototype.getNameProperty = function () { return Accounts.SupplierPaymentRow.nameProperty; };
            SupplierPaymentDialog.prototype.getService = function () { return Accounts.SupplierPaymentService.baseUrl; };
            SupplierPaymentDialog.prototype.getDeletePermission = function () { return Accounts.SupplierPaymentRow.deletePermission; };
            SupplierPaymentDialog.prototype.getInsertPermission = function () { return Accounts.SupplierPaymentRow.insertPermission; };
            SupplierPaymentDialog.prototype.getUpdatePermission = function () { return Accounts.SupplierPaymentRow.updatePermission; };
            SupplierPaymentDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            SupplierPaymentDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                window.location.href = "/Suppliers/Suppliers";
            };
            SupplierPaymentDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], SupplierPaymentDialog);
            return SupplierPaymentDialog;
        }(Serenity.EntityDialog));
        Accounts.SupplierPaymentDialog = SupplierPaymentDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var SupplierPaymentGrid = /** @class */ (function (_super) {
            __extends(SupplierPaymentGrid, _super);
            function SupplierPaymentGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierPaymentGrid.prototype.getColumnsKey = function () { return 'Accounts.SupplierPayment'; };
            SupplierPaymentGrid.prototype.getDialogType = function () { return Accounts.SupplierPaymentDialog; };
            SupplierPaymentGrid.prototype.getIdProperty = function () { return Accounts.SupplierPaymentRow.idProperty; };
            SupplierPaymentGrid.prototype.getInsertPermission = function () { return Accounts.SupplierPaymentRow.insertPermission; };
            SupplierPaymentGrid.prototype.getLocalTextPrefix = function () { return Accounts.SupplierPaymentRow.localTextPrefix; };
            SupplierPaymentGrid.prototype.getService = function () { return Accounts.SupplierPaymentService.baseUrl; };
            SupplierPaymentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierPaymentGrid);
            return SupplierPaymentGrid;
        }(Serenity.EntityGrid));
        Accounts.SupplierPaymentGrid = SupplierPaymentGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var TransactionsDialog = /** @class */ (function (_super) {
            __extends(TransactionsDialog, _super);
            function TransactionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Accounts.TransactionsForm(_this.idPrefix);
                return _this;
            }
            TransactionsDialog.prototype.getFormKey = function () { return Accounts.TransactionsForm.formKey; };
            TransactionsDialog.prototype.getIdProperty = function () { return Accounts.TransactionsRow.idProperty; };
            TransactionsDialog.prototype.getLocalTextPrefix = function () { return Accounts.TransactionsRow.localTextPrefix; };
            TransactionsDialog.prototype.getNameProperty = function () { return Accounts.TransactionsRow.nameProperty; };
            TransactionsDialog.prototype.getService = function () { return Accounts.TransactionsService.baseUrl; };
            TransactionsDialog.prototype.getDeletePermission = function () { return Accounts.TransactionsRow.deletePermission; };
            TransactionsDialog.prototype.getInsertPermission = function () { return Accounts.TransactionsRow.insertPermission; };
            TransactionsDialog.prototype.getUpdatePermission = function () { return Accounts.TransactionsRow.updatePermission; };
            TransactionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionsDialog);
            return TransactionsDialog;
        }(Serenity.EntityDialog));
        Accounts.TransactionsDialog = TransactionsDialog;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Accounts;
    (function (Accounts) {
        var TransactionsGrid = /** @class */ (function (_super) {
            __extends(TransactionsGrid, _super);
            function TransactionsGrid(container) {
                return _super.call(this, container) || this;
            }
            TransactionsGrid.prototype.getColumnsKey = function () { return 'Accounts.Transactions'; };
            TransactionsGrid.prototype.getDialogType = function () { return Accounts.TransactionsDialog; };
            TransactionsGrid.prototype.getIdProperty = function () { return Accounts.TransactionsRow.idProperty; };
            TransactionsGrid.prototype.getInsertPermission = function () { return Accounts.TransactionsRow.insertPermission; };
            TransactionsGrid.prototype.getLocalTextPrefix = function () { return Accounts.TransactionsRow.localTextPrefix; };
            TransactionsGrid.prototype.getService = function () { return Accounts.TransactionsService.baseUrl; };
            TransactionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TransactionsGrid);
            return TransactionsGrid;
        }(Serenity.EntityGrid));
        Accounts.TransactionsGrid = TransactionsGrid;
    })(Accounts = SmartERP.Accounts || (SmartERP.Accounts = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CitiesDialog = /** @class */ (function (_super) {
            __extends(CitiesDialog, _super);
            function CitiesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.CitiesForm(_this.idPrefix);
                return _this;
            }
            CitiesDialog.prototype.getFormKey = function () { return Administration.CitiesForm.formKey; };
            CitiesDialog.prototype.getIdProperty = function () { return Administration.CitiesRow.idProperty; };
            CitiesDialog.prototype.getLocalTextPrefix = function () { return Administration.CitiesRow.localTextPrefix; };
            CitiesDialog.prototype.getNameProperty = function () { return Administration.CitiesRow.nameProperty; };
            CitiesDialog.prototype.getService = function () { return Administration.CitiesService.baseUrl; };
            CitiesDialog.prototype.getDeletePermission = function () { return Administration.CitiesRow.deletePermission; };
            CitiesDialog.prototype.getInsertPermission = function () { return Administration.CitiesRow.insertPermission; };
            CitiesDialog.prototype.getUpdatePermission = function () { return Administration.CitiesRow.updatePermission; };
            CitiesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CitiesDialog);
            return CitiesDialog;
        }(Serenity.EntityDialog));
        Administration.CitiesDialog = CitiesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CitiesGrid = /** @class */ (function (_super) {
            __extends(CitiesGrid, _super);
            function CitiesGrid(container) {
                return _super.call(this, container) || this;
            }
            CitiesGrid.prototype.getColumnsKey = function () { return 'Administration.Cities'; };
            CitiesGrid.prototype.getDialogType = function () { return Administration.CitiesDialog; };
            CitiesGrid.prototype.getIsActiveProperty = function () { return Administration.CitiesRow.isActiveProperty; };
            CitiesGrid.prototype.getIdProperty = function () { return Administration.CitiesRow.idProperty; };
            CitiesGrid.prototype.getInsertPermission = function () { return Administration.CitiesRow.insertPermission; };
            CitiesGrid.prototype.getLocalTextPrefix = function () { return Administration.CitiesRow.localTextPrefix; };
            CitiesGrid.prototype.getService = function () { return Administration.CitiesService.baseUrl; };
            CitiesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CitiesGrid);
            return CitiesGrid;
        }(Serenity.EntityGrid));
        Administration.CitiesGrid = CitiesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CompaniesDialog = /** @class */ (function (_super) {
            __extends(CompaniesDialog, _super);
            function CompaniesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.CompaniesForm(_this.idPrefix);
                return _this;
            }
            CompaniesDialog.prototype.getFormKey = function () { return Administration.CompaniesForm.formKey; };
            CompaniesDialog.prototype.getIdProperty = function () { return Administration.CompaniesRow.idProperty; };
            CompaniesDialog.prototype.getLocalTextPrefix = function () { return Administration.CompaniesRow.localTextPrefix; };
            CompaniesDialog.prototype.getNameProperty = function () { return Administration.CompaniesRow.nameProperty; };
            CompaniesDialog.prototype.getService = function () { return Administration.CompaniesService.baseUrl; };
            CompaniesDialog.prototype.getDeletePermission = function () { return Administration.CompaniesRow.deletePermission; };
            CompaniesDialog.prototype.getInsertPermission = function () { return Administration.CompaniesRow.insertPermission; };
            CompaniesDialog.prototype.getUpdatePermission = function () { return Administration.CompaniesRow.updatePermission; };
            CompaniesDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            CompaniesDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
            };
            CompaniesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CompaniesDialog);
            return CompaniesDialog;
        }(Serenity.EntityDialog));
        Administration.CompaniesDialog = CompaniesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CompaniesGrid = /** @class */ (function (_super) {
            __extends(CompaniesGrid, _super);
            function CompaniesGrid(container) {
                return _super.call(this, container) || this;
            }
            CompaniesGrid.prototype.getColumnsKey = function () { return 'Administration.Companies'; };
            CompaniesGrid.prototype.getDialogType = function () { return Administration.CompaniesDialog; };
            CompaniesGrid.prototype.getIsActiveProperty = function () { return Administration.CompaniesRow.isActiveProperty; };
            CompaniesGrid.prototype.getIdProperty = function () { return Administration.CompaniesRow.idProperty; };
            CompaniesGrid.prototype.getInsertPermission = function () { return Administration.CompaniesRow.insertPermission; };
            CompaniesGrid.prototype.getLocalTextPrefix = function () { return Administration.CompaniesRow.localTextPrefix; };
            CompaniesGrid.prototype.getService = function () { return Administration.CompaniesService.baseUrl; };
            CompaniesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CompaniesGrid);
            return CompaniesGrid;
        }(Serenity.EntityGrid));
        Administration.CompaniesGrid = CompaniesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CountriesDialog = /** @class */ (function (_super) {
            __extends(CountriesDialog, _super);
            function CountriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.CountriesForm(_this.idPrefix);
                return _this;
            }
            CountriesDialog.prototype.getFormKey = function () { return Administration.CountriesForm.formKey; };
            CountriesDialog.prototype.getIdProperty = function () { return Administration.CountriesRow.idProperty; };
            CountriesDialog.prototype.getLocalTextPrefix = function () { return Administration.CountriesRow.localTextPrefix; };
            CountriesDialog.prototype.getNameProperty = function () { return Administration.CountriesRow.nameProperty; };
            CountriesDialog.prototype.getService = function () { return Administration.CountriesService.baseUrl; };
            CountriesDialog.prototype.getDeletePermission = function () { return Administration.CountriesRow.deletePermission; };
            CountriesDialog.prototype.getInsertPermission = function () { return Administration.CountriesRow.insertPermission; };
            CountriesDialog.prototype.getUpdatePermission = function () { return Administration.CountriesRow.updatePermission; };
            CountriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CountriesDialog);
            return CountriesDialog;
        }(Serenity.EntityDialog));
        Administration.CountriesDialog = CountriesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CountriesGrid = /** @class */ (function (_super) {
            __extends(CountriesGrid, _super);
            function CountriesGrid(container) {
                return _super.call(this, container) || this;
            }
            CountriesGrid.prototype.getColumnsKey = function () { return 'Administration.Countries'; };
            CountriesGrid.prototype.getDialogType = function () { return Administration.CountriesDialog; };
            CountriesGrid.prototype.getIsActiveProperty = function () { return Administration.CountriesRow.isActiveProperty; };
            CountriesGrid.prototype.getIdProperty = function () { return Administration.CountriesRow.idProperty; };
            CountriesGrid.prototype.getInsertPermission = function () { return Administration.CountriesRow.insertPermission; };
            CountriesGrid.prototype.getLocalTextPrefix = function () { return Administration.CountriesRow.localTextPrefix; };
            CountriesGrid.prototype.getService = function () { return Administration.CountriesService.baseUrl; };
            CountriesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CountriesGrid);
            return CountriesGrid;
        }(Serenity.EntityGrid));
        Administration.CountriesGrid = CountriesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CurrenciesDialog = /** @class */ (function (_super) {
            __extends(CurrenciesDialog, _super);
            function CurrenciesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.CurrenciesForm(_this.idPrefix);
                return _this;
            }
            CurrenciesDialog.prototype.getFormKey = function () { return Administration.CurrenciesForm.formKey; };
            CurrenciesDialog.prototype.getIdProperty = function () { return Administration.CurrenciesRow.idProperty; };
            CurrenciesDialog.prototype.getLocalTextPrefix = function () { return Administration.CurrenciesRow.localTextPrefix; };
            CurrenciesDialog.prototype.getNameProperty = function () { return Administration.CurrenciesRow.nameProperty; };
            CurrenciesDialog.prototype.getService = function () { return Administration.CurrenciesService.baseUrl; };
            CurrenciesDialog.prototype.getDeletePermission = function () { return Administration.CurrenciesRow.deletePermission; };
            CurrenciesDialog.prototype.getInsertPermission = function () { return Administration.CurrenciesRow.insertPermission; };
            CurrenciesDialog.prototype.getUpdatePermission = function () { return Administration.CurrenciesRow.updatePermission; };
            CurrenciesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrenciesDialog);
            return CurrenciesDialog;
        }(Serenity.EntityDialog));
        Administration.CurrenciesDialog = CurrenciesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var CurrenciesGrid = /** @class */ (function (_super) {
            __extends(CurrenciesGrid, _super);
            function CurrenciesGrid(container) {
                return _super.call(this, container) || this;
            }
            CurrenciesGrid.prototype.getColumnsKey = function () { return 'Administration.Currencies'; };
            CurrenciesGrid.prototype.getDialogType = function () { return Administration.CurrenciesDialog; };
            CurrenciesGrid.prototype.getIsActiveProperty = function () { return Administration.CurrenciesRow.isActiveProperty; };
            CurrenciesGrid.prototype.getIdProperty = function () { return Administration.CurrenciesRow.idProperty; };
            CurrenciesGrid.prototype.getInsertPermission = function () { return Administration.CurrenciesRow.insertPermission; };
            CurrenciesGrid.prototype.getLocalTextPrefix = function () { return Administration.CurrenciesRow.localTextPrefix; };
            CurrenciesGrid.prototype.getService = function () { return Administration.CurrenciesService.baseUrl; };
            CurrenciesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CurrenciesGrid);
            return CurrenciesGrid;
        }(Serenity.EntityGrid));
        Administration.CurrenciesGrid = CurrenciesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageRow.Fields.LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RegionsDialog = /** @class */ (function (_super) {
            __extends(RegionsDialog, _super);
            function RegionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RegionsForm(_this.idPrefix);
                return _this;
            }
            RegionsDialog.prototype.getFormKey = function () { return Administration.RegionsForm.formKey; };
            RegionsDialog.prototype.getIdProperty = function () { return Administration.RegionsRow.idProperty; };
            RegionsDialog.prototype.getLocalTextPrefix = function () { return Administration.RegionsRow.localTextPrefix; };
            RegionsDialog.prototype.getNameProperty = function () { return Administration.RegionsRow.nameProperty; };
            RegionsDialog.prototype.getService = function () { return Administration.RegionsService.baseUrl; };
            RegionsDialog.prototype.getDeletePermission = function () { return Administration.RegionsRow.deletePermission; };
            RegionsDialog.prototype.getInsertPermission = function () { return Administration.RegionsRow.insertPermission; };
            RegionsDialog.prototype.getUpdatePermission = function () { return Administration.RegionsRow.updatePermission; };
            RegionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionsDialog);
            return RegionsDialog;
        }(Serenity.EntityDialog));
        Administration.RegionsDialog = RegionsDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RegionsGrid = /** @class */ (function (_super) {
            __extends(RegionsGrid, _super);
            function RegionsGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionsGrid.prototype.getColumnsKey = function () { return 'Administration.Regions'; };
            RegionsGrid.prototype.getDialogType = function () { return Administration.RegionsDialog; };
            RegionsGrid.prototype.getIsActiveProperty = function () { return Administration.RegionsRow.isActiveProperty; };
            RegionsGrid.prototype.getIdProperty = function () { return Administration.RegionsRow.idProperty; };
            RegionsGrid.prototype.getInsertPermission = function () { return Administration.RegionsRow.insertPermission; };
            RegionsGrid.prototype.getLocalTextPrefix = function () { return Administration.RegionsRow.localTextPrefix; };
            RegionsGrid.prototype.getService = function () { return Administration.RegionsService.baseUrl; };
            RegionsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], RegionsGrid);
            return RegionsGrid;
        }(Serenity.EntityGrid));
        Administration.RegionsGrid = RegionsGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleRow.Fields.RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var ShippersDialog = /** @class */ (function (_super) {
            __extends(ShippersDialog, _super);
            function ShippersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.ShippersForm(_this.idPrefix);
                return _this;
            }
            ShippersDialog.prototype.getFormKey = function () { return Administration.ShippersForm.formKey; };
            ShippersDialog.prototype.getIdProperty = function () { return Administration.ShippersRow.idProperty; };
            ShippersDialog.prototype.getLocalTextPrefix = function () { return Administration.ShippersRow.localTextPrefix; };
            ShippersDialog.prototype.getNameProperty = function () { return Administration.ShippersRow.nameProperty; };
            ShippersDialog.prototype.getService = function () { return Administration.ShippersService.baseUrl; };
            ShippersDialog.prototype.getDeletePermission = function () { return Administration.ShippersRow.deletePermission; };
            ShippersDialog.prototype.getInsertPermission = function () { return Administration.ShippersRow.insertPermission; };
            ShippersDialog.prototype.getUpdatePermission = function () { return Administration.ShippersRow.updatePermission; };
            ShippersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShippersDialog);
            return ShippersDialog;
        }(Serenity.EntityDialog));
        Administration.ShippersDialog = ShippersDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var ShippersGrid = /** @class */ (function (_super) {
            __extends(ShippersGrid, _super);
            function ShippersGrid(container) {
                return _super.call(this, container) || this;
            }
            ShippersGrid.prototype.getColumnsKey = function () { return 'Administration.Shippers'; };
            ShippersGrid.prototype.getDialogType = function () { return Administration.ShippersDialog; };
            ShippersGrid.prototype.getIsActiveProperty = function () { return Administration.ShippersRow.isActiveProperty; };
            ShippersGrid.prototype.getIdProperty = function () { return Administration.ShippersRow.idProperty; };
            ShippersGrid.prototype.getInsertPermission = function () { return Administration.ShippersRow.insertPermission; };
            ShippersGrid.prototype.getLocalTextPrefix = function () { return Administration.ShippersRow.localTextPrefix; };
            ShippersGrid.prototype.getService = function () { return Administration.ShippersService.baseUrl; };
            ShippersGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ShippersGrid);
            return ShippersGrid;
        }(Serenity.EntityGrid));
        Administration.ShippersGrid = ShippersGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var StatesDialog = /** @class */ (function (_super) {
            __extends(StatesDialog, _super);
            function StatesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.StatesForm(_this.idPrefix);
                return _this;
            }
            StatesDialog.prototype.getFormKey = function () { return Administration.StatesForm.formKey; };
            StatesDialog.prototype.getIdProperty = function () { return Administration.StatesRow.idProperty; };
            StatesDialog.prototype.getLocalTextPrefix = function () { return Administration.StatesRow.localTextPrefix; };
            StatesDialog.prototype.getNameProperty = function () { return Administration.StatesRow.nameProperty; };
            StatesDialog.prototype.getService = function () { return Administration.StatesService.baseUrl; };
            StatesDialog.prototype.getDeletePermission = function () { return Administration.StatesRow.deletePermission; };
            StatesDialog.prototype.getInsertPermission = function () { return Administration.StatesRow.insertPermission; };
            StatesDialog.prototype.getUpdatePermission = function () { return Administration.StatesRow.updatePermission; };
            StatesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StatesDialog);
            return StatesDialog;
        }(Serenity.EntityDialog));
        Administration.StatesDialog = StatesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var StatesGrid = /** @class */ (function (_super) {
            __extends(StatesGrid, _super);
            function StatesGrid(container) {
                return _super.call(this, container) || this;
            }
            StatesGrid.prototype.getColumnsKey = function () { return 'Administration.States'; };
            StatesGrid.prototype.getDialogType = function () { return Administration.StatesDialog; };
            StatesGrid.prototype.getIsActiveProperty = function () { return Administration.StatesRow.isActiveProperty; };
            StatesGrid.prototype.getIdProperty = function () { return Administration.StatesRow.idProperty; };
            StatesGrid.prototype.getInsertPermission = function () { return Administration.StatesRow.insertPermission; };
            StatesGrid.prototype.getLocalTextPrefix = function () { return Administration.StatesRow.localTextPrefix; };
            StatesGrid.prototype.getService = function () { return Administration.StatesService.baseUrl; };
            StatesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], StatesGrid);
            return StatesGrid;
        }(Serenity.EntityGrid));
        Administration.StatesGrid = StatesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TerritoriesDialog = /** @class */ (function (_super) {
            __extends(TerritoriesDialog, _super);
            function TerritoriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.TerritoriesForm(_this.idPrefix);
                return _this;
            }
            TerritoriesDialog.prototype.getFormKey = function () { return Administration.TerritoriesForm.formKey; };
            TerritoriesDialog.prototype.getIdProperty = function () { return Administration.TerritoriesRow.idProperty; };
            TerritoriesDialog.prototype.getLocalTextPrefix = function () { return Administration.TerritoriesRow.localTextPrefix; };
            TerritoriesDialog.prototype.getNameProperty = function () { return Administration.TerritoriesRow.nameProperty; };
            TerritoriesDialog.prototype.getService = function () { return Administration.TerritoriesService.baseUrl; };
            TerritoriesDialog.prototype.getDeletePermission = function () { return Administration.TerritoriesRow.deletePermission; };
            TerritoriesDialog.prototype.getInsertPermission = function () { return Administration.TerritoriesRow.insertPermission; };
            TerritoriesDialog.prototype.getUpdatePermission = function () { return Administration.TerritoriesRow.updatePermission; };
            TerritoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoriesDialog);
            return TerritoriesDialog;
        }(Serenity.EntityDialog));
        Administration.TerritoriesDialog = TerritoriesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TerritoriesGrid = /** @class */ (function (_super) {
            __extends(TerritoriesGrid, _super);
            function TerritoriesGrid(container) {
                return _super.call(this, container) || this;
            }
            TerritoriesGrid.prototype.getColumnsKey = function () { return 'Administration.Territories'; };
            TerritoriesGrid.prototype.getDialogType = function () { return Administration.TerritoriesDialog; };
            TerritoriesGrid.prototype.getIsActiveProperty = function () { return Administration.TerritoriesRow.isActiveProperty; };
            TerritoriesGrid.prototype.getIdProperty = function () { return Administration.TerritoriesRow.idProperty; };
            TerritoriesGrid.prototype.getInsertPermission = function () { return Administration.TerritoriesRow.insertPermission; };
            TerritoriesGrid.prototype.getLocalTextPrefix = function () { return Administration.TerritoriesRow.localTextPrefix; };
            TerritoriesGrid.prototype.getService = function () { return Administration.TerritoriesService.baseUrl; };
            TerritoriesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], TerritoriesGrid);
            return TerritoriesGrid;
        }(Serenity.EntityGrid));
        Administration.TerritoriesGrid = TerritoriesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* UserRow.Fields.Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = SmartERP.Authorization || (SmartERP.Authorization = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys');
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var WarehousesDialog = /** @class */ (function (_super) {
            __extends(WarehousesDialog, _super);
            function WarehousesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.WarehousesForm(_this.idPrefix);
                return _this;
            }
            WarehousesDialog.prototype.getFormKey = function () { return Administration.WarehousesForm.formKey; };
            WarehousesDialog.prototype.getIdProperty = function () { return Administration.WarehousesRow.idProperty; };
            WarehousesDialog.prototype.getLocalTextPrefix = function () { return Administration.WarehousesRow.localTextPrefix; };
            WarehousesDialog.prototype.getNameProperty = function () { return Administration.WarehousesRow.nameProperty; };
            WarehousesDialog.prototype.getService = function () { return Administration.WarehousesService.baseUrl; };
            WarehousesDialog.prototype.getDeletePermission = function () { return Administration.WarehousesRow.deletePermission; };
            WarehousesDialog.prototype.getInsertPermission = function () { return Administration.WarehousesRow.insertPermission; };
            WarehousesDialog.prototype.getUpdatePermission = function () { return Administration.WarehousesRow.updatePermission; };
            WarehousesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], WarehousesDialog);
            return WarehousesDialog;
        }(Serenity.EntityDialog));
        Administration.WarehousesDialog = WarehousesDialog;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Administration;
    (function (Administration) {
        var WarehousesGrid = /** @class */ (function (_super) {
            __extends(WarehousesGrid, _super);
            function WarehousesGrid(container) {
                return _super.call(this, container) || this;
            }
            WarehousesGrid.prototype.getColumnsKey = function () { return 'Administration.Warehouses'; };
            WarehousesGrid.prototype.getDialogType = function () { return Administration.WarehousesDialog; };
            WarehousesGrid.prototype.getIdProperty = function () { return Administration.WarehousesRow.idProperty; };
            WarehousesGrid.prototype.getInsertPermission = function () { return Administration.WarehousesRow.insertPermission; };
            WarehousesGrid.prototype.getLocalTextPrefix = function () { return Administration.WarehousesRow.localTextPrefix; };
            WarehousesGrid.prototype.getService = function () { return Administration.WarehousesService.baseUrl; };
            WarehousesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], WarehousesGrid);
            return WarehousesGrid;
        }(Serenity.EntityGrid));
        Administration.WarehousesGrid = WarehousesGrid;
    })(Administration = SmartERP.Administration || (SmartERP.Administration = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Banks;
    (function (Banks) {
        var BanksDialog = /** @class */ (function (_super) {
            __extends(BanksDialog, _super);
            function BanksDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Banks.BanksForm(_this.idPrefix);
                return _this;
            }
            BanksDialog.prototype.getFormKey = function () { return Banks.BanksForm.formKey; };
            BanksDialog.prototype.getIdProperty = function () { return Banks.BanksRow.idProperty; };
            BanksDialog.prototype.getLocalTextPrefix = function () { return Banks.BanksRow.localTextPrefix; };
            BanksDialog.prototype.getNameProperty = function () { return Banks.BanksRow.nameProperty; };
            BanksDialog.prototype.getService = function () { return Banks.BanksService.baseUrl; };
            BanksDialog.prototype.getDeletePermission = function () { return Banks.BanksRow.deletePermission; };
            BanksDialog.prototype.getInsertPermission = function () { return Banks.BanksRow.insertPermission; };
            BanksDialog.prototype.getUpdatePermission = function () { return Banks.BanksRow.updatePermission; };
            BanksDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BanksDialog);
            return BanksDialog;
        }(Serenity.EntityDialog));
        Banks.BanksDialog = BanksDialog;
    })(Banks = SmartERP.Banks || (SmartERP.Banks = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Banks;
    (function (Banks) {
        var BanksGrid = /** @class */ (function (_super) {
            __extends(BanksGrid, _super);
            function BanksGrid(container) {
                return _super.call(this, container) || this;
            }
            BanksGrid.prototype.getColumnsKey = function () { return 'Banks.Banks'; };
            BanksGrid.prototype.getDialogType = function () { return Banks.BanksDialog; };
            BanksGrid.prototype.getIsActiveProperty = function () { return Banks.BanksRow.isActiveProperty; };
            BanksGrid.prototype.getIdProperty = function () { return Banks.BanksRow.idProperty; };
            BanksGrid.prototype.getInsertPermission = function () { return Banks.BanksRow.insertPermission; };
            BanksGrid.prototype.getLocalTextPrefix = function () { return Banks.BanksRow.localTextPrefix; };
            BanksGrid.prototype.getService = function () { return Banks.BanksService.baseUrl; };
            BanksGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], BanksGrid);
            return BanksGrid;
        }(Serenity.EntityGrid));
        Banks.BanksGrid = BanksGrid;
    })(Banks = SmartERP.Banks || (SmartERP.Banks = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Bookings;
    (function (Bookings) {
        var VehicleBookingsDialog = /** @class */ (function (_super) {
            __extends(VehicleBookingsDialog, _super);
            function VehicleBookingsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Bookings.VehicleBookingsForm(_this.idPrefix);
                return _this;
            }
            VehicleBookingsDialog.prototype.getFormKey = function () { return Bookings.VehicleBookingsForm.formKey; };
            VehicleBookingsDialog.prototype.getIdProperty = function () { return Bookings.VehicleBookingsRow.idProperty; };
            VehicleBookingsDialog.prototype.getLocalTextPrefix = function () { return Bookings.VehicleBookingsRow.localTextPrefix; };
            VehicleBookingsDialog.prototype.getNameProperty = function () { return Bookings.VehicleBookingsRow.nameProperty; };
            VehicleBookingsDialog.prototype.getService = function () { return Bookings.VehicleBookingsService.baseUrl; };
            VehicleBookingsDialog.prototype.getDeletePermission = function () { return Bookings.VehicleBookingsRow.deletePermission; };
            VehicleBookingsDialog.prototype.getInsertPermission = function () { return Bookings.VehicleBookingsRow.insertPermission; };
            VehicleBookingsDialog.prototype.getUpdatePermission = function () { return Bookings.VehicleBookingsRow.updatePermission; };
            VehicleBookingsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleBookingsDialog);
            return VehicleBookingsDialog;
        }(Serenity.EntityDialog));
        Bookings.VehicleBookingsDialog = VehicleBookingsDialog;
    })(Bookings = SmartERP.Bookings || (SmartERP.Bookings = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Bookings;
    (function (Bookings) {
        var VehicleBookingsGrid = /** @class */ (function (_super) {
            __extends(VehicleBookingsGrid, _super);
            function VehicleBookingsGrid(container) {
                return _super.call(this, container) || this;
            }
            VehicleBookingsGrid.prototype.getColumnsKey = function () { return 'Bookings.VehicleBookings'; };
            VehicleBookingsGrid.prototype.getDialogType = function () { return Bookings.VehicleBookingsDialog; };
            VehicleBookingsGrid.prototype.getIdProperty = function () { return Bookings.VehicleBookingsRow.idProperty; };
            VehicleBookingsGrid.prototype.getInsertPermission = function () { return Bookings.VehicleBookingsRow.insertPermission; };
            VehicleBookingsGrid.prototype.getLocalTextPrefix = function () { return Bookings.VehicleBookingsRow.localTextPrefix; };
            VehicleBookingsGrid.prototype.getService = function () { return Bookings.VehicleBookingsService.baseUrl; };
            VehicleBookingsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleBookingsGrid);
            return VehicleBookingsGrid;
        }(Serenity.EntityGrid));
        Bookings.VehicleBookingsGrid = VehicleBookingsGrid;
    })(Bookings = SmartERP.Bookings || (SmartERP.Bookings = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Bookings;
    (function (Bookings) {
        var VehicleCourtesyBookingDialog = /** @class */ (function (_super) {
            __extends(VehicleCourtesyBookingDialog, _super);
            function VehicleCourtesyBookingDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Bookings.VehicleCourtesyBookingForm(_this.idPrefix);
                return _this;
            }
            VehicleCourtesyBookingDialog.prototype.getFormKey = function () { return Bookings.VehicleCourtesyBookingForm.formKey; };
            VehicleCourtesyBookingDialog.prototype.getIdProperty = function () { return Bookings.VehicleCourtesyBookingRow.idProperty; };
            VehicleCourtesyBookingDialog.prototype.getLocalTextPrefix = function () { return Bookings.VehicleCourtesyBookingRow.localTextPrefix; };
            VehicleCourtesyBookingDialog.prototype.getNameProperty = function () { return Bookings.VehicleCourtesyBookingRow.nameProperty; };
            VehicleCourtesyBookingDialog.prototype.getService = function () { return Bookings.VehicleCourtesyBookingService.baseUrl; };
            VehicleCourtesyBookingDialog.prototype.getDeletePermission = function () { return Bookings.VehicleCourtesyBookingRow.deletePermission; };
            VehicleCourtesyBookingDialog.prototype.getInsertPermission = function () { return Bookings.VehicleCourtesyBookingRow.insertPermission; };
            VehicleCourtesyBookingDialog.prototype.getUpdatePermission = function () { return Bookings.VehicleCourtesyBookingRow.updatePermission; };
            VehicleCourtesyBookingDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleCourtesyBookingDialog);
            return VehicleCourtesyBookingDialog;
        }(Serenity.EntityDialog));
        Bookings.VehicleCourtesyBookingDialog = VehicleCourtesyBookingDialog;
    })(Bookings = SmartERP.Bookings || (SmartERP.Bookings = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Bookings;
    (function (Bookings) {
        var VehicleCourtesyBookingGrid = /** @class */ (function (_super) {
            __extends(VehicleCourtesyBookingGrid, _super);
            function VehicleCourtesyBookingGrid(container) {
                return _super.call(this, container) || this;
            }
            VehicleCourtesyBookingGrid.prototype.getColumnsKey = function () { return 'Bookings.VehicleCourtesyBooking'; };
            VehicleCourtesyBookingGrid.prototype.getDialogType = function () { return Bookings.VehicleCourtesyBookingDialog; };
            VehicleCourtesyBookingGrid.prototype.getIdProperty = function () { return Bookings.VehicleCourtesyBookingRow.idProperty; };
            VehicleCourtesyBookingGrid.prototype.getInsertPermission = function () { return Bookings.VehicleCourtesyBookingRow.insertPermission; };
            VehicleCourtesyBookingGrid.prototype.getLocalTextPrefix = function () { return Bookings.VehicleCourtesyBookingRow.localTextPrefix; };
            VehicleCourtesyBookingGrid.prototype.getService = function () { return Bookings.VehicleCourtesyBookingService.baseUrl; };
            VehicleCourtesyBookingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleCourtesyBookingGrid);
            return VehicleCourtesyBookingGrid;
        }(Serenity.EntityGrid));
        Bookings.VehicleCourtesyBookingGrid = VehicleCourtesyBookingGrid;
    })(Bookings = SmartERP.Bookings || (SmartERP.Bookings = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = SmartERP.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = SmartERP.LanguageList || (SmartERP.LanguageList = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var SmartERP;
(function (SmartERP) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('SmartERP');
        Serenity.EntityDialog.defaultLanguageList = SmartERP.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = SmartERP.ScriptInitialization || (SmartERP.ScriptInitialization = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var EmailHelper;
        (function (EmailHelper) {
            function createEmailToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Mail'),
                    cssClass: Q.coalesce(options.cssClass, 'Send-mail-bt'),
                    icon: options.icon,
                    onClick: function () {
                        EmailHelper.execute(options);
                    }
                };
            }
            EmailHelper.createEmailToolButton = createEmailToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Mail/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'html'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            EmailHelper.execute = execute;
        })(EmailHelper = Common.EmailHelper || (Common.EmailHelper = {}));
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: false,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    SmartERP.BasicProgressDialog = BasicProgressDialog;
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new SmartERP.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = SmartERP.DialogUtils || (SmartERP.DialogUtils = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var addButton = Q.tryFirst(buttons, function (x) { return x.cssClass == 'add-button'; });
                if (addButton != null) {
                    addButton.onClick = function () {
                        _this.createEntityDialog(_this.getItemType(), function (dlg) {
                            var dialog = dlg;
                            dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                            _this.transferDialogReadOnly(dialog);
                            dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                        });
                    };
                }
                return buttons.filter(function (x) { return x.cssClass != "refresh-button"; });
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    _this.transferDialogReadOnly(dialog);
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: false,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    SmartERP.StaticTextBlock = StaticTextBlock;
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload();
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = SmartERP.Common || (SmartERP.Common = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Customers;
    (function (Customers) {
        var CustomersDialog = /** @class */ (function (_super) {
            __extends(CustomersDialog, _super);
            function CustomersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Customers.CustomersForm(_this.idPrefix);
                return _this;
            }
            CustomersDialog.prototype.getFormKey = function () { return Customers.CustomersForm.formKey; };
            CustomersDialog.prototype.getIdProperty = function () { return Customers.CustomersRow.idProperty; };
            CustomersDialog.prototype.getLocalTextPrefix = function () { return Customers.CustomersRow.localTextPrefix; };
            CustomersDialog.prototype.getNameProperty = function () { return Customers.CustomersRow.nameProperty; };
            CustomersDialog.prototype.getService = function () { return Customers.CustomersService.baseUrl; };
            CustomersDialog.prototype.getDeletePermission = function () { return Customers.CustomersRow.deletePermission; };
            CustomersDialog.prototype.getInsertPermission = function () { return Customers.CustomersRow.insertPermission; };
            CustomersDialog.prototype.getUpdatePermission = function () { return Customers.CustomersRow.updatePermission; };
            CustomersDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CustomersDialog);
            return CustomersDialog;
        }(Serenity.EntityDialog));
        Customers.CustomersDialog = CustomersDialog;
    })(Customers = SmartERP.Customers || (SmartERP.Customers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Customers;
    (function (Customers) {
        var CustomersGrid = /** @class */ (function (_super) {
            __extends(CustomersGrid, _super);
            function CustomersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomersGrid.prototype.getColumnsKey = function () { return 'Customers.Customers'; };
            CustomersGrid.prototype.getDialogType = function () { return Customers.CustomersDialog; };
            CustomersGrid.prototype.getIsActiveProperty = function () { return Customers.CustomersRow.isActiveProperty; };
            CustomersGrid.prototype.getIdProperty = function () { return Customers.CustomersRow.idProperty; };
            CustomersGrid.prototype.getInsertPermission = function () { return Customers.CustomersRow.insertPermission; };
            CustomersGrid.prototype.getLocalTextPrefix = function () { return Customers.CustomersRow.localTextPrefix; };
            CustomersGrid.prototype.getService = function () { return Customers.CustomersService.baseUrl; };
            CustomersGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomersGrid);
            return CustomersGrid;
        }(Serenity.EntityGrid));
        Customers.CustomersGrid = CustomersGrid;
    })(Customers = SmartERP.Customers || (SmartERP.Customers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpenseTypesDialog = /** @class */ (function (_super) {
            __extends(ExpenseTypesDialog, _super);
            function ExpenseTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Expenses.ExpenseTypesForm(_this.idPrefix);
                return _this;
            }
            ExpenseTypesDialog.prototype.getFormKey = function () { return Expenses.ExpenseTypesForm.formKey; };
            ExpenseTypesDialog.prototype.getIdProperty = function () { return Expenses.ExpenseTypesRow.idProperty; };
            ExpenseTypesDialog.prototype.getLocalTextPrefix = function () { return Expenses.ExpenseTypesRow.localTextPrefix; };
            ExpenseTypesDialog.prototype.getNameProperty = function () { return Expenses.ExpenseTypesRow.nameProperty; };
            ExpenseTypesDialog.prototype.getService = function () { return Expenses.ExpenseTypesService.baseUrl; };
            ExpenseTypesDialog.prototype.getDeletePermission = function () { return Expenses.ExpenseTypesRow.deletePermission; };
            ExpenseTypesDialog.prototype.getInsertPermission = function () { return Expenses.ExpenseTypesRow.insertPermission; };
            ExpenseTypesDialog.prototype.getUpdatePermission = function () { return Expenses.ExpenseTypesRow.updatePermission; };
            ExpenseTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpenseTypesDialog);
            return ExpenseTypesDialog;
        }(Serenity.EntityDialog));
        Expenses.ExpenseTypesDialog = ExpenseTypesDialog;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpenseTypesGrid = /** @class */ (function (_super) {
            __extends(ExpenseTypesGrid, _super);
            function ExpenseTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            ExpenseTypesGrid.prototype.getColumnsKey = function () { return 'Expenses.ExpenseTypes'; };
            ExpenseTypesGrid.prototype.getDialogType = function () { return Expenses.ExpenseTypesDialog; };
            ExpenseTypesGrid.prototype.getIdProperty = function () { return Expenses.ExpenseTypesRow.idProperty; };
            ExpenseTypesGrid.prototype.getInsertPermission = function () { return Expenses.ExpenseTypesRow.insertPermission; };
            ExpenseTypesGrid.prototype.getLocalTextPrefix = function () { return Expenses.ExpenseTypesRow.localTextPrefix; };
            ExpenseTypesGrid.prototype.getService = function () { return Expenses.ExpenseTypesService.baseUrl; };
            ExpenseTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpenseTypesGrid);
            return ExpenseTypesGrid;
        }(Serenity.EntityGrid));
        Expenses.ExpenseTypesGrid = ExpenseTypesGrid;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpensesDialog = /** @class */ (function (_super) {
            __extends(ExpensesDialog, _super);
            function ExpensesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Expenses.ExpensesForm(_this.idPrefix);
                return _this;
            }
            ExpensesDialog.prototype.getFormKey = function () { return Expenses.ExpensesForm.formKey; };
            ExpensesDialog.prototype.getIdProperty = function () { return Expenses.ExpensesRow.idProperty; };
            ExpensesDialog.prototype.getLocalTextPrefix = function () { return Expenses.ExpensesRow.localTextPrefix; };
            ExpensesDialog.prototype.getService = function () { return Expenses.ExpensesService.baseUrl; };
            ExpensesDialog.prototype.getDeletePermission = function () { return Expenses.ExpensesRow.deletePermission; };
            ExpensesDialog.prototype.getInsertPermission = function () { return Expenses.ExpensesRow.insertPermission; };
            ExpensesDialog.prototype.getUpdatePermission = function () { return Expenses.ExpensesRow.updatePermission; };
            ExpensesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpensesDialog);
            return ExpensesDialog;
        }(Serenity.EntityDialog));
        Expenses.ExpensesDialog = ExpensesDialog;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Expenses;
    (function (Expenses) {
        var ExpensesGrid = /** @class */ (function (_super) {
            __extends(ExpensesGrid, _super);
            function ExpensesGrid(container) {
                return _super.call(this, container) || this;
            }
            ExpensesGrid.prototype.getColumnsKey = function () { return 'Expenses.Expenses'; };
            ExpensesGrid.prototype.getDialogType = function () { return Expenses.ExpensesDialog; };
            ExpensesGrid.prototype.getIdProperty = function () { return Expenses.ExpensesRow.idProperty; };
            ExpensesGrid.prototype.getInsertPermission = function () { return Expenses.ExpensesRow.insertPermission; };
            ExpensesGrid.prototype.getLocalTextPrefix = function () { return Expenses.ExpensesRow.localTextPrefix; };
            ExpensesGrid.prototype.getService = function () { return Expenses.ExpensesService.baseUrl; };
            ExpensesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpensesGrid);
            return ExpensesGrid;
        }(Serenity.EntityGrid));
        Expenses.ExpensesGrid = ExpensesGrid;
    })(Expenses = SmartERP.Expenses || (SmartERP.Expenses = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var AttendanceDialog = /** @class */ (function (_super) {
            __extends(AttendanceDialog, _super);
            function AttendanceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HumanResource.AttendanceForm(_this.idPrefix);
                return _this;
            }
            AttendanceDialog.prototype.getFormKey = function () { return HumanResource.AttendanceForm.formKey; };
            AttendanceDialog.prototype.getIdProperty = function () { return HumanResource.AttendanceRow.idProperty; };
            AttendanceDialog.prototype.getLocalTextPrefix = function () { return HumanResource.AttendanceRow.localTextPrefix; };
            AttendanceDialog.prototype.getService = function () { return HumanResource.AttendanceService.baseUrl; };
            AttendanceDialog.prototype.getDeletePermission = function () { return HumanResource.AttendanceRow.deletePermission; };
            AttendanceDialog.prototype.getInsertPermission = function () { return HumanResource.AttendanceRow.insertPermission; };
            AttendanceDialog.prototype.getUpdatePermission = function () { return HumanResource.AttendanceRow.updatePermission; };
            AttendanceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendanceDialog);
            return AttendanceDialog;
        }(Serenity.EntityDialog));
        HumanResource.AttendanceDialog = AttendanceDialog;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var AttendanceGrid = /** @class */ (function (_super) {
            __extends(AttendanceGrid, _super);
            function AttendanceGrid(container) {
                return _super.call(this, container) || this;
            }
            AttendanceGrid.prototype.getColumnsKey = function () { return 'HumanResource.Attendance'; };
            AttendanceGrid.prototype.getDialogType = function () { return HumanResource.AttendanceDialog; };
            AttendanceGrid.prototype.getIdProperty = function () { return HumanResource.AttendanceRow.idProperty; };
            AttendanceGrid.prototype.getInsertPermission = function () { return HumanResource.AttendanceRow.insertPermission; };
            AttendanceGrid.prototype.getLocalTextPrefix = function () { return HumanResource.AttendanceRow.localTextPrefix; };
            AttendanceGrid.prototype.getService = function () { return HumanResource.AttendanceService.baseUrl; };
            AttendanceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendanceGrid);
            return AttendanceGrid;
        }(Serenity.EntityGrid));
        HumanResource.AttendanceGrid = AttendanceGrid;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsDialog = /** @class */ (function (_super) {
            __extends(DepartmentsDialog, _super);
            function DepartmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HumanResource.DepartmentsForm(_this.idPrefix);
                return _this;
            }
            DepartmentsDialog.prototype.getFormKey = function () { return HumanResource.DepartmentsForm.formKey; };
            DepartmentsDialog.prototype.getIdProperty = function () { return HumanResource.DepartmentsRow.idProperty; };
            DepartmentsDialog.prototype.getLocalTextPrefix = function () { return HumanResource.DepartmentsRow.localTextPrefix; };
            DepartmentsDialog.prototype.getNameProperty = function () { return HumanResource.DepartmentsRow.nameProperty; };
            DepartmentsDialog.prototype.getService = function () { return HumanResource.DepartmentsService.baseUrl; };
            DepartmentsDialog.prototype.getDeletePermission = function () { return HumanResource.DepartmentsRow.deletePermission; };
            DepartmentsDialog.prototype.getInsertPermission = function () { return HumanResource.DepartmentsRow.insertPermission; };
            DepartmentsDialog.prototype.getUpdatePermission = function () { return HumanResource.DepartmentsRow.updatePermission; };
            DepartmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentsDialog);
            return DepartmentsDialog;
        }(Serenity.EntityDialog));
        HumanResource.DepartmentsDialog = DepartmentsDialog;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsEditor = /** @class */ (function (_super) {
            __extends(DepartmentsEditor, _super);
            function DepartmentsEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            DepartmentsEditor.prototype.getLookupKey = function () {
                return HumanResource.DepartmentsRow.lookupKey;
            };
            DepartmentsEditor.prototype.getItemText = function (item, lookup) {
                var visited = {};
                var text = item.Department;
                while (item.ParentDepartmentId != null && !visited[item.ParentDepartmentId]) {
                    item = lookup.itemById[item.ParentDepartmentId];
                    if (!item)
                        break;
                    visited[item.Id] = true;
                    text = item.Department + " >> " + text;
                }
                return text;
            };
            DepartmentsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], DepartmentsEditor);
            return DepartmentsEditor;
        }(Serenity.LookupEditorBase));
        HumanResource.DepartmentsEditor = DepartmentsEditor;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DepartmentsGrid = /** @class */ (function (_super) {
            __extends(DepartmentsGrid, _super);
            function DepartmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            DepartmentsGrid.prototype.getColumnsKey = function () { return 'HumanResource.Departments'; };
            DepartmentsGrid.prototype.getDialogType = function () { return HumanResource.DepartmentsDialog; };
            DepartmentsGrid.prototype.getIsActiveProperty = function () { return HumanResource.DepartmentsRow.isActiveProperty; };
            DepartmentsGrid.prototype.getIdProperty = function () { return HumanResource.DepartmentsRow.idProperty; };
            DepartmentsGrid.prototype.getInsertPermission = function () { return HumanResource.DepartmentsRow.insertPermission; };
            DepartmentsGrid.prototype.getLocalTextPrefix = function () { return HumanResource.DepartmentsRow.localTextPrefix; };
            DepartmentsGrid.prototype.getService = function () { return HumanResource.DepartmentsService.baseUrl; };
            DepartmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentsGrid);
            return DepartmentsGrid;
        }(Serenity.EntityGrid));
        HumanResource.DepartmentsGrid = DepartmentsGrid;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsDialog = /** @class */ (function (_super) {
            __extends(DesignationsDialog, _super);
            function DesignationsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HumanResource.DesignationsForm(_this.idPrefix);
                return _this;
            }
            DesignationsDialog.prototype.getFormKey = function () { return HumanResource.DesignationsForm.formKey; };
            DesignationsDialog.prototype.getIdProperty = function () { return HumanResource.DesignationsRow.idProperty; };
            DesignationsDialog.prototype.getLocalTextPrefix = function () { return HumanResource.DesignationsRow.localTextPrefix; };
            DesignationsDialog.prototype.getNameProperty = function () { return HumanResource.DesignationsRow.nameProperty; };
            DesignationsDialog.prototype.getService = function () { return HumanResource.DesignationsService.baseUrl; };
            DesignationsDialog.prototype.getDeletePermission = function () { return HumanResource.DesignationsRow.deletePermission; };
            DesignationsDialog.prototype.getInsertPermission = function () { return HumanResource.DesignationsRow.insertPermission; };
            DesignationsDialog.prototype.getUpdatePermission = function () { return HumanResource.DesignationsRow.updatePermission; };
            DesignationsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DesignationsDialog);
            return DesignationsDialog;
        }(Serenity.EntityDialog));
        HumanResource.DesignationsDialog = DesignationsDialog;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsEditor = /** @class */ (function (_super) {
            __extends(DesignationsEditor, _super);
            function DesignationsEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            DesignationsEditor.prototype.getLookupKey = function () {
                return HumanResource.DesignationsRow.lookupKey;
            };
            DesignationsEditor.prototype.getItemText = function (item, lookup) {
                var visited = {};
                var text = item.Designation;
                while (item.ParentDesignationId != null && !visited[item.ParentDesignationId]) {
                    item = lookup.itemById[item.ParentDesignationId];
                    if (!item)
                        break;
                    visited[item.Id] = true;
                    text = item.Designation + " >> " + text;
                }
                return text;
            };
            DesignationsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], DesignationsEditor);
            return DesignationsEditor;
        }(Serenity.LookupEditorBase));
        HumanResource.DesignationsEditor = DesignationsEditor;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var DesignationsGrid = /** @class */ (function (_super) {
            __extends(DesignationsGrid, _super);
            function DesignationsGrid(container) {
                return _super.call(this, container) || this;
            }
            DesignationsGrid.prototype.getColumnsKey = function () { return 'HumanResource.Designations'; };
            DesignationsGrid.prototype.getDialogType = function () { return HumanResource.DesignationsDialog; };
            DesignationsGrid.prototype.getIsActiveProperty = function () { return HumanResource.DesignationsRow.isActiveProperty; };
            DesignationsGrid.prototype.getIdProperty = function () { return HumanResource.DesignationsRow.idProperty; };
            DesignationsGrid.prototype.getInsertPermission = function () { return HumanResource.DesignationsRow.insertPermission; };
            DesignationsGrid.prototype.getLocalTextPrefix = function () { return HumanResource.DesignationsRow.localTextPrefix; };
            DesignationsGrid.prototype.getService = function () { return HumanResource.DesignationsService.baseUrl; };
            DesignationsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DesignationsGrid);
            return DesignationsGrid;
        }(Serenity.EntityGrid));
        HumanResource.DesignationsGrid = DesignationsGrid;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeesDialog = /** @class */ (function (_super) {
            __extends(EmployeesDialog, _super);
            function EmployeesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HumanResource.EmployeesForm(_this.idPrefix);
                return _this;
            }
            EmployeesDialog.prototype.getFormKey = function () { return HumanResource.EmployeesForm.formKey; };
            EmployeesDialog.prototype.getIdProperty = function () { return HumanResource.EmployeesRow.idProperty; };
            EmployeesDialog.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeesRow.localTextPrefix; };
            EmployeesDialog.prototype.getNameProperty = function () { return HumanResource.EmployeesRow.nameProperty; };
            EmployeesDialog.prototype.getService = function () { return HumanResource.EmployeesService.baseUrl; };
            EmployeesDialog.prototype.getDeletePermission = function () { return HumanResource.EmployeesRow.deletePermission; };
            EmployeesDialog.prototype.getInsertPermission = function () { return HumanResource.EmployeesRow.insertPermission; };
            EmployeesDialog.prototype.getUpdatePermission = function () { return HumanResource.EmployeesRow.updatePermission; };
            EmployeesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], EmployeesDialog);
            return EmployeesDialog;
        }(Serenity.EntityDialog));
        HumanResource.EmployeesDialog = EmployeesDialog;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var HumanResource;
    (function (HumanResource) {
        var EmployeesGrid = /** @class */ (function (_super) {
            __extends(EmployeesGrid, _super);
            function EmployeesGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeesGrid.prototype.getColumnsKey = function () { return 'HumanResource.Employees'; };
            EmployeesGrid.prototype.getDialogType = function () { return HumanResource.EmployeesDialog; };
            EmployeesGrid.prototype.getIsActiveProperty = function () { return HumanResource.EmployeesRow.isActiveProperty; };
            EmployeesGrid.prototype.getIdProperty = function () { return HumanResource.EmployeesRow.idProperty; };
            EmployeesGrid.prototype.getInsertPermission = function () { return HumanResource.EmployeesRow.insertPermission; };
            EmployeesGrid.prototype.getLocalTextPrefix = function () { return HumanResource.EmployeesRow.localTextPrefix; };
            EmployeesGrid.prototype.getService = function () { return HumanResource.EmployeesService.baseUrl; };
            EmployeesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], EmployeesGrid);
            return EmployeesGrid;
        }(Serenity.EntityGrid));
        HumanResource.EmployeesGrid = EmployeesGrid;
    })(HumanResource = SmartERP.HumanResource || (SmartERP.HumanResource = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionChecklistDialog = /** @class */ (function (_super) {
            __extends(InspectionChecklistDialog, _super);
            function InspectionChecklistDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inspections.InspectionChecklistForm(_this.idPrefix);
                return _this;
            }
            InspectionChecklistDialog.prototype.getFormKey = function () { return Inspections.InspectionChecklistForm.formKey; };
            InspectionChecklistDialog.prototype.getIdProperty = function () { return Inspections.InspectionChecklistRow.idProperty; };
            InspectionChecklistDialog.prototype.getLocalTextPrefix = function () { return Inspections.InspectionChecklistRow.localTextPrefix; };
            InspectionChecklistDialog.prototype.getService = function () { return Inspections.InspectionChecklistService.baseUrl; };
            InspectionChecklistDialog.prototype.getDeletePermission = function () { return Inspections.InspectionChecklistRow.deletePermission; };
            InspectionChecklistDialog.prototype.getInsertPermission = function () { return Inspections.InspectionChecklistRow.insertPermission; };
            InspectionChecklistDialog.prototype.getUpdatePermission = function () { return Inspections.InspectionChecklistRow.updatePermission; };
            InspectionChecklistDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InspectionChecklistDialog);
            return InspectionChecklistDialog;
        }(Serenity.EntityDialog));
        Inspections.InspectionChecklistDialog = InspectionChecklistDialog;
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionChecklistGrid = /** @class */ (function (_super) {
            __extends(InspectionChecklistGrid, _super);
            function InspectionChecklistGrid(container) {
                return _super.call(this, container) || this;
            }
            InspectionChecklistGrid.prototype.getColumnsKey = function () { return 'Inspections.InspectionChecklist'; };
            InspectionChecklistGrid.prototype.getDialogType = function () { return Inspections.InspectionChecklistDialog; };
            InspectionChecklistGrid.prototype.getIdProperty = function () { return Inspections.InspectionChecklistRow.idProperty; };
            InspectionChecklistGrid.prototype.getInsertPermission = function () { return Inspections.InspectionChecklistRow.insertPermission; };
            InspectionChecklistGrid.prototype.getLocalTextPrefix = function () { return Inspections.InspectionChecklistRow.localTextPrefix; };
            InspectionChecklistGrid.prototype.getService = function () { return Inspections.InspectionChecklistService.baseUrl; };
            InspectionChecklistGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InspectionChecklistGrid);
            return InspectionChecklistGrid;
        }(Serenity.EntityGrid));
        Inspections.InspectionChecklistGrid = InspectionChecklistGrid;
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var JobTypeListFormatter = /** @class */ (function () {
            function JobTypeListFormatter() {
            }
            JobTypeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = SmartERP.Masters.JobTypesRow.getLookup().itemById;
                return idList.map(function (x) {
                    var g = byId[x];
                    if (!g)
                        return x.toString();
                    return Q.htmlEncode(g.Name);
                }).join(", ");
            };
            JobTypeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], JobTypeListFormatter);
            return JobTypeListFormatter;
        }());
        Inspections.JobTypeListFormatter = JobTypeListFormatter;
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionChecklistEditDialog = /** @class */ (function (_super) {
            __extends(InspectionChecklistEditDialog, _super);
            function InspectionChecklistEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inspections.InspectionChecklistForm(_this.idPrefix);
                return _this;
                //this.form.ProductId.changeSelect2(e => {
                //    var productID = Q.toId(this.form.ProductId.value);
                //    if (productID != null) {
                //        this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                //        this.form.Quantity.value = 1;
                //        this.form.Discount.value = 0;
                //        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                //        this.form.UnitId.value = unitId;
                //    }
                //});
            }
            InspectionChecklistEditDialog.prototype.getFormKey = function () { return Inspections.InspectionChecklistForm.formKey; };
            //protected getNameProperty() { return InspectionChecklistRow.nameProperty; }
            InspectionChecklistEditDialog.prototype.getLocalTextPrefix = function () { return Inspections.InspectionChecklistRow.localTextPrefix; };
            InspectionChecklistEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InspectionChecklistEditDialog);
            return InspectionChecklistEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Inspections.InspectionChecklistEditDialog = InspectionChecklistEditDialog;
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionChecklistEditor = /** @class */ (function (_super) {
            __extends(InspectionChecklistEditor, _super);
            function InspectionChecklistEditor(container) {
                return _super.call(this, container) || this;
            }
            InspectionChecklistEditor.prototype.getColumnsKey = function () { return "Inspections.InspectionChecklist"; };
            InspectionChecklistEditor.prototype.getLocalTextPrefix = function () { return Inspections.InspectionChecklistRow.localTextPrefix; };
            InspectionChecklistEditor.prototype.getDialogType = function () { return Inspections.InspectionChecklistEditDialog; };
            InspectionChecklistEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            InspectionChecklistEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.JobCategory) {
                    row.JobCategoryName = SmartERP.Masters.JobCategoriesRow.getLookup()
                        .itemById[row.JobCategory].Name;
                }
                if (row.JobTypes) {
                    //row.MechanicFullName = SmartERP.HumanResource.EmployeesRow.getLookup()
                    //    .itemById[row.Mechanic].EmployeeFullName;
                }
                return true;
            };
            InspectionChecklistEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            InspectionChecklistEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], InspectionChecklistEditor);
            return InspectionChecklistEditor;
        }(SmartERP.Common.GridEditorBase));
        Inspections.InspectionChecklistEditor = InspectionChecklistEditor;
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionsDialog = /** @class */ (function (_super) {
            __extends(InspectionsDialog, _super);
            function InspectionsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inspections.InspectionsForm(_this.idPrefix);
                return _this;
            }
            InspectionsDialog.prototype.getFormKey = function () { return Inspections.InspectionsForm.formKey; };
            InspectionsDialog.prototype.getIdProperty = function () { return Inspections.InspectionsRow.idProperty; };
            InspectionsDialog.prototype.getLocalTextPrefix = function () { return Inspections.InspectionsRow.localTextPrefix; };
            InspectionsDialog.prototype.getNameProperty = function () { return Inspections.InspectionsRow.nameProperty; };
            InspectionsDialog.prototype.getService = function () { return Inspections.InspectionsService.baseUrl; };
            InspectionsDialog.prototype.getDeletePermission = function () { return Inspections.InspectionsRow.deletePermission; };
            InspectionsDialog.prototype.getInsertPermission = function () { return Inspections.InspectionsRow.insertPermission; };
            InspectionsDialog.prototype.getUpdatePermission = function () { return Inspections.InspectionsRow.updatePermission; };
            InspectionsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], InspectionsDialog);
            return InspectionsDialog;
        }(Serenity.EntityDialog));
        Inspections.InspectionsDialog = InspectionsDialog;
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inspections;
    (function (Inspections) {
        var InspectionsGrid = /** @class */ (function (_super) {
            __extends(InspectionsGrid, _super);
            function InspectionsGrid(container) {
                return _super.call(this, container) || this;
            }
            InspectionsGrid.prototype.getColumnsKey = function () { return 'Inspections.Inspections'; };
            InspectionsGrid.prototype.getDialogType = function () { return Inspections.InspectionsDialog; };
            InspectionsGrid.prototype.getIdProperty = function () { return Inspections.InspectionsRow.idProperty; };
            InspectionsGrid.prototype.getInsertPermission = function () { return Inspections.InspectionsRow.insertPermission; };
            InspectionsGrid.prototype.getLocalTextPrefix = function () { return Inspections.InspectionsRow.localTextPrefix; };
            InspectionsGrid.prototype.getService = function () { return Inspections.InspectionsService.baseUrl; };
            InspectionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InspectionsGrid);
            return InspectionsGrid;
        }(Serenity.EntityGrid));
        Inspections.InspectionsGrid = InspectionsGrid;
    })(Inspections = SmartERP.Inspections || (SmartERP.Inspections = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var DamagedProductsDialog = /** @class */ (function (_super) {
            __extends(DamagedProductsDialog, _super);
            function DamagedProductsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.DamagedProductsForm(_this.idPrefix);
                _this.form = new Inventory.DamagedProductsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        var item = SmartERP.Products.ProductsRow.getLookup().itemById[productID];
                        _this.form.Name.value = item.ProductName;
                        _this.form.Code.value = item.Barcode;
                        _this.form.PurchasePrice.value = item.PurchasePrice;
                        _this.form.Quantity.value = 1;
                    }
                });
                return _this;
            }
            DamagedProductsDialog.prototype.getFormKey = function () { return Inventory.DamagedProductsForm.formKey; };
            DamagedProductsDialog.prototype.getIdProperty = function () { return Inventory.DamagedProductsRow.idProperty; };
            DamagedProductsDialog.prototype.getLocalTextPrefix = function () { return Inventory.DamagedProductsRow.localTextPrefix; };
            DamagedProductsDialog.prototype.getNameProperty = function () { return Inventory.DamagedProductsRow.nameProperty; };
            DamagedProductsDialog.prototype.getService = function () { return Inventory.DamagedProductsService.baseUrl; };
            DamagedProductsDialog.prototype.getDeletePermission = function () { return Inventory.DamagedProductsRow.deletePermission; };
            DamagedProductsDialog.prototype.getInsertPermission = function () { return Inventory.DamagedProductsRow.insertPermission; };
            DamagedProductsDialog.prototype.getUpdatePermission = function () { return Inventory.DamagedProductsRow.updatePermission; };
            DamagedProductsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], DamagedProductsDialog);
            return DamagedProductsDialog;
        }(Serenity.EntityDialog));
        Inventory.DamagedProductsDialog = DamagedProductsDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var DamagedProductsGrid = /** @class */ (function (_super) {
            __extends(DamagedProductsGrid, _super);
            function DamagedProductsGrid(container) {
                return _super.call(this, container) || this;
            }
            DamagedProductsGrid.prototype.getColumnsKey = function () { return 'Inventory.DamagedProducts'; };
            DamagedProductsGrid.prototype.getDialogType = function () { return Inventory.DamagedProductsDialog; };
            DamagedProductsGrid.prototype.getIdProperty = function () { return Inventory.DamagedProductsRow.idProperty; };
            DamagedProductsGrid.prototype.getInsertPermission = function () { return Inventory.DamagedProductsRow.insertPermission; };
            DamagedProductsGrid.prototype.getLocalTextPrefix = function () { return Inventory.DamagedProductsRow.localTextPrefix; };
            DamagedProductsGrid.prototype.getService = function () { return Inventory.DamagedProductsService.baseUrl; };
            DamagedProductsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], DamagedProductsGrid);
            return DamagedProductsGrid;
        }(Serenity.EntityGrid));
        Inventory.DamagedProductsGrid = DamagedProductsGrid;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailEditDialog = /** @class */ (function (_super) {
            __extends(GoodsIssueDetailEditDialog, _super);
            function GoodsIssueDetailEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.GoodsIssueDetailsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        _this.form.Quantity.value = 1;
                        //this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                        //this.form.Quantity.value = 1;
                        //this.form.Discount.value = 0;
                        //var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                        //this.form.UnitId.value = unitId;
                    }
                });
                return _this;
            }
            GoodsIssueDetailEditDialog.prototype.getFormKey = function () { return Inventory.GoodsIssueDetailsForm.formKey; };
            GoodsIssueDetailEditDialog.prototype.getNameProperty = function () { return Inventory.GoodsIssueDetailsRow.nameProperty; };
            GoodsIssueDetailEditDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueDetailsRow.localTextPrefix; };
            GoodsIssueDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsIssueDetailEditDialog);
            return GoodsIssueDetailEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Inventory.GoodsIssueDetailEditDialog = GoodsIssueDetailEditDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailEditor = /** @class */ (function (_super) {
            __extends(GoodsIssueDetailEditor, _super);
            function GoodsIssueDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            GoodsIssueDetailEditor.prototype.getColumnsKey = function () { return "Inventory.GoodsIssueDetails"; };
            GoodsIssueDetailEditor.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueDetailsRow.localTextPrefix; };
            GoodsIssueDetailEditor.prototype.getDialogType = function () { return Inventory.GoodsIssueDetailEditDialog; };
            GoodsIssueDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            GoodsIssueDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = SmartERP.Products.ProductsRow.getLookup()
                    .itemById[row.ProductId].ProductName;
                row.WarehouseName = SmartERP.Administration.WarehousesRow.getLookup()
                    .itemById[row.WarehouseId].Name;
                //row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);
                //row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                //    .itemById[row.UnitId].Name;
                return true;
            };
            GoodsIssueDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            GoodsIssueDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], GoodsIssueDetailEditor);
            return GoodsIssueDetailEditor;
        }(SmartERP.Common.GridEditorBase));
        Inventory.GoodsIssueDetailEditor = GoodsIssueDetailEditor;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDialog = /** @class */ (function (_super) {
            __extends(GoodsIssueDialog, _super);
            function GoodsIssueDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.GoodsIssueForm(_this.idPrefix);
                _this.form = new Inventory.GoodsIssueForm(_this.idPrefix);
                _this.form.SaleId.change(function (e) {
                    var saleId = Q.toId(_this.form.SaleId.value);
                    if (saleId != null) {
                        _this.form.CustomerId.value = Q.toId(SmartERP.Sales.SalesRow.getLookup().itemById[saleId].CustomerId);
                    }
                    //this.updateExpiryDate();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    var totalQuantity = 0;
                    for (var _i = 0, _a = _this.form.LineItems.getItems(); _i < _a.length; _i++) {
                        var k = _a[_i];
                        totalQuantity += k.Quantity;
                    }
                    _this.form.TotalQuantity.value = totalQuantity;
                    // Q.notifySuccess(total.toString());
                });
                return _this;
            }
            GoodsIssueDialog.prototype.getFormKey = function () { return Inventory.GoodsIssueForm.formKey; };
            GoodsIssueDialog.prototype.getIdProperty = function () { return Inventory.GoodsIssueRow.idProperty; };
            GoodsIssueDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueRow.localTextPrefix; };
            GoodsIssueDialog.prototype.getNameProperty = function () { return Inventory.GoodsIssueRow.nameProperty; };
            GoodsIssueDialog.prototype.getService = function () { return Inventory.GoodsIssueService.baseUrl; };
            GoodsIssueDialog.prototype.getDeletePermission = function () { return Inventory.GoodsIssueRow.deletePermission; };
            GoodsIssueDialog.prototype.getInsertPermission = function () { return Inventory.GoodsIssueRow.insertPermission; };
            GoodsIssueDialog.prototype.getUpdatePermission = function () { return Inventory.GoodsIssueRow.updatePermission; };
            GoodsIssueDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
            };
            GoodsIssueDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
            };
            GoodsIssueDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], GoodsIssueDialog);
            return GoodsIssueDialog;
        }(Serenity.EntityDialog));
        Inventory.GoodsIssueDialog = GoodsIssueDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueGrid = /** @class */ (function (_super) {
            __extends(GoodsIssueGrid, _super);
            function GoodsIssueGrid(container) {
                return _super.call(this, container) || this;
            }
            GoodsIssueGrid.prototype.getColumnsKey = function () { return 'Inventory.GoodsIssue'; };
            GoodsIssueGrid.prototype.getDialogType = function () { return Inventory.GoodsIssueDialog; };
            GoodsIssueGrid.prototype.getIdProperty = function () { return Inventory.GoodsIssueRow.idProperty; };
            GoodsIssueGrid.prototype.getInsertPermission = function () { return Inventory.GoodsIssueRow.insertPermission; };
            GoodsIssueGrid.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueRow.localTextPrefix; };
            GoodsIssueGrid.prototype.getService = function () { return Inventory.GoodsIssueService.baseUrl; };
            GoodsIssueGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], GoodsIssueGrid);
            return GoodsIssueGrid;
        }(Serenity.EntityGrid));
        Inventory.GoodsIssueGrid = GoodsIssueGrid;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailsDialog = /** @class */ (function (_super) {
            __extends(GoodsIssueDetailsDialog, _super);
            function GoodsIssueDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventory.GoodsIssueDetailsForm(_this.idPrefix);
                return _this;
            }
            GoodsIssueDetailsDialog.prototype.getFormKey = function () { return Inventory.GoodsIssueDetailsForm.formKey; };
            GoodsIssueDetailsDialog.prototype.getIdProperty = function () { return Inventory.GoodsIssueDetailsRow.idProperty; };
            GoodsIssueDetailsDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueDetailsRow.localTextPrefix; };
            GoodsIssueDetailsDialog.prototype.getNameProperty = function () { return Inventory.GoodsIssueDetailsRow.nameProperty; };
            GoodsIssueDetailsDialog.prototype.getService = function () { return Inventory.GoodsIssueDetailsService.baseUrl; };
            GoodsIssueDetailsDialog.prototype.getDeletePermission = function () { return Inventory.GoodsIssueDetailsRow.deletePermission; };
            GoodsIssueDetailsDialog.prototype.getInsertPermission = function () { return Inventory.GoodsIssueDetailsRow.insertPermission; };
            GoodsIssueDetailsDialog.prototype.getUpdatePermission = function () { return Inventory.GoodsIssueDetailsRow.updatePermission; };
            GoodsIssueDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsIssueDetailsDialog);
            return GoodsIssueDetailsDialog;
        }(Serenity.EntityDialog));
        Inventory.GoodsIssueDetailsDialog = GoodsIssueDetailsDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsIssueDetailsGrid = /** @class */ (function (_super) {
            __extends(GoodsIssueDetailsGrid, _super);
            function GoodsIssueDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            GoodsIssueDetailsGrid.prototype.getColumnsKey = function () { return 'Inventory.GoodsIssueDetails'; };
            GoodsIssueDetailsGrid.prototype.getDialogType = function () { return Inventory.GoodsIssueDetailsDialog; };
            GoodsIssueDetailsGrid.prototype.getIdProperty = function () { return Inventory.GoodsIssueDetailsRow.idProperty; };
            GoodsIssueDetailsGrid.prototype.getInsertPermission = function () { return Inventory.GoodsIssueDetailsRow.insertPermission; };
            GoodsIssueDetailsGrid.prototype.getLocalTextPrefix = function () { return Inventory.GoodsIssueDetailsRow.localTextPrefix; };
            GoodsIssueDetailsGrid.prototype.getService = function () { return Inventory.GoodsIssueDetailsService.baseUrl; };
            GoodsIssueDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsIssueDetailsGrid);
            return GoodsIssueDetailsGrid;
        }(Serenity.EntityGrid));
        Inventory.GoodsIssueDetailsGrid = GoodsIssueDetailsGrid;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailEditDialog = /** @class */ (function (_super) {
            __extends(GoodsReceiptDetailEditDialog, _super);
            function GoodsReceiptDetailEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.GoodsReceiptDetailsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        _this.form.Quantity.value = 1;
                        //this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                        //this.form.Quantity.value = 1;
                        //this.form.Discount.value = 0;
                        //var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                        //this.form.UnitId.value = unitId;
                    }
                });
                return _this;
            }
            GoodsReceiptDetailEditDialog.prototype.getFormKey = function () { return Inventory.GoodsReceiptDetailsForm.formKey; };
            GoodsReceiptDetailEditDialog.prototype.getNameProperty = function () { return Inventory.GoodsReceiptDetailsRow.nameProperty; };
            GoodsReceiptDetailEditDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptDetailsRow.localTextPrefix; };
            GoodsReceiptDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsReceiptDetailEditDialog);
            return GoodsReceiptDetailEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Inventory.GoodsReceiptDetailEditDialog = GoodsReceiptDetailEditDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailEditor = /** @class */ (function (_super) {
            __extends(GoodsReceiptDetailEditor, _super);
            function GoodsReceiptDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            GoodsReceiptDetailEditor.prototype.getColumnsKey = function () { return "Inventory.GoodsReceiptDetails"; };
            GoodsReceiptDetailEditor.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptDetailsRow.localTextPrefix; };
            GoodsReceiptDetailEditor.prototype.getDialogType = function () { return Inventory.GoodsReceiptDetailEditDialog; };
            GoodsReceiptDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            GoodsReceiptDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = SmartERP.Products.ProductsRow.getLookup()
                    .itemById[row.ProductId].ProductName;
                row.WarehouseName = SmartERP.Administration.WarehousesRow.getLookup()
                    .itemById[row.WarehouseId].Name;
                //row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);
                //row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                //    .itemById[row.UnitId].Name;
                return true;
            };
            GoodsReceiptDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            GoodsReceiptDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], GoodsReceiptDetailEditor);
            return GoodsReceiptDetailEditor;
        }(SmartERP.Common.GridEditorBase));
        Inventory.GoodsReceiptDetailEditor = GoodsReceiptDetailEditor;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDialog = /** @class */ (function (_super) {
            __extends(GoodsReceiptDialog, _super);
            function GoodsReceiptDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Inventory.GoodsReceiptForm(_this.idPrefix);
                _this.form = new Inventory.GoodsReceiptForm(_this.idPrefix);
                _this.form.PurchaseId.change(function (e) {
                    var purchaseId = Q.toId(_this.form.PurchaseId.value);
                    if (purchaseId != null) {
                        _this.form.SupplierId.value = Q.toId(SmartERP.Purchases.PurchasesRow.getLookup().itemById[purchaseId].SupplierId);
                    }
                    //this.updateExpiryDate();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    var totalQuantity = 0;
                    for (var _i = 0, _a = _this.form.LineItems.getItems(); _i < _a.length; _i++) {
                        var k = _a[_i];
                        totalQuantity += k.Quantity;
                    }
                    _this.form.TotalQuantity.value = totalQuantity;
                    // Q.notifySuccess(total.toString());
                });
                return _this;
            }
            GoodsReceiptDialog.prototype.getFormKey = function () { return Inventory.GoodsReceiptForm.formKey; };
            GoodsReceiptDialog.prototype.getIdProperty = function () { return Inventory.GoodsReceiptRow.idProperty; };
            GoodsReceiptDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptRow.localTextPrefix; };
            GoodsReceiptDialog.prototype.getNameProperty = function () { return Inventory.GoodsReceiptRow.nameProperty; };
            GoodsReceiptDialog.prototype.getService = function () { return Inventory.GoodsReceiptService.baseUrl; };
            GoodsReceiptDialog.prototype.getDeletePermission = function () { return Inventory.GoodsReceiptRow.deletePermission; };
            GoodsReceiptDialog.prototype.getInsertPermission = function () { return Inventory.GoodsReceiptRow.insertPermission; };
            GoodsReceiptDialog.prototype.getUpdatePermission = function () { return Inventory.GoodsReceiptRow.updatePermission; };
            GoodsReceiptDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
            };
            GoodsReceiptDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
            };
            GoodsReceiptDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], GoodsReceiptDialog);
            return GoodsReceiptDialog;
        }(Serenity.EntityDialog));
        Inventory.GoodsReceiptDialog = GoodsReceiptDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptGrid = /** @class */ (function (_super) {
            __extends(GoodsReceiptGrid, _super);
            function GoodsReceiptGrid(container) {
                return _super.call(this, container) || this;
            }
            GoodsReceiptGrid.prototype.getColumnsKey = function () { return 'Inventory.GoodsReceipt'; };
            GoodsReceiptGrid.prototype.getDialogType = function () { return Inventory.GoodsReceiptDialog; };
            GoodsReceiptGrid.prototype.getIdProperty = function () { return Inventory.GoodsReceiptRow.idProperty; };
            GoodsReceiptGrid.prototype.getInsertPermission = function () { return Inventory.GoodsReceiptRow.insertPermission; };
            GoodsReceiptGrid.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptRow.localTextPrefix; };
            GoodsReceiptGrid.prototype.getService = function () { return Inventory.GoodsReceiptService.baseUrl; };
            GoodsReceiptGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], GoodsReceiptGrid);
            return GoodsReceiptGrid;
        }(Serenity.EntityGrid));
        Inventory.GoodsReceiptGrid = GoodsReceiptGrid;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailsDialog = /** @class */ (function (_super) {
            __extends(GoodsReceiptDetailsDialog, _super);
            function GoodsReceiptDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventory.GoodsReceiptDetailsForm(_this.idPrefix);
                return _this;
            }
            GoodsReceiptDetailsDialog.prototype.getFormKey = function () { return Inventory.GoodsReceiptDetailsForm.formKey; };
            GoodsReceiptDetailsDialog.prototype.getIdProperty = function () { return Inventory.GoodsReceiptDetailsRow.idProperty; };
            GoodsReceiptDetailsDialog.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptDetailsRow.localTextPrefix; };
            GoodsReceiptDetailsDialog.prototype.getNameProperty = function () { return Inventory.GoodsReceiptDetailsRow.nameProperty; };
            GoodsReceiptDetailsDialog.prototype.getService = function () { return Inventory.GoodsReceiptDetailsService.baseUrl; };
            GoodsReceiptDetailsDialog.prototype.getDeletePermission = function () { return Inventory.GoodsReceiptDetailsRow.deletePermission; };
            GoodsReceiptDetailsDialog.prototype.getInsertPermission = function () { return Inventory.GoodsReceiptDetailsRow.insertPermission; };
            GoodsReceiptDetailsDialog.prototype.getUpdatePermission = function () { return Inventory.GoodsReceiptDetailsRow.updatePermission; };
            GoodsReceiptDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsReceiptDetailsDialog);
            return GoodsReceiptDetailsDialog;
        }(Serenity.EntityDialog));
        Inventory.GoodsReceiptDetailsDialog = GoodsReceiptDetailsDialog;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Inventory;
    (function (Inventory) {
        var GoodsReceiptDetailsGrid = /** @class */ (function (_super) {
            __extends(GoodsReceiptDetailsGrid, _super);
            function GoodsReceiptDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            GoodsReceiptDetailsGrid.prototype.getColumnsKey = function () { return 'Inventory.GoodsReceiptDetails'; };
            GoodsReceiptDetailsGrid.prototype.getDialogType = function () { return Inventory.GoodsReceiptDetailsDialog; };
            GoodsReceiptDetailsGrid.prototype.getIdProperty = function () { return Inventory.GoodsReceiptDetailsRow.idProperty; };
            GoodsReceiptDetailsGrid.prototype.getInsertPermission = function () { return Inventory.GoodsReceiptDetailsRow.insertPermission; };
            GoodsReceiptDetailsGrid.prototype.getLocalTextPrefix = function () { return Inventory.GoodsReceiptDetailsRow.localTextPrefix; };
            GoodsReceiptDetailsGrid.prototype.getService = function () { return Inventory.GoodsReceiptDetailsService.baseUrl; };
            GoodsReceiptDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GoodsReceiptDetailsGrid);
            return GoodsReceiptDetailsGrid;
        }(Serenity.EntityGrid));
        Inventory.GoodsReceiptDetailsGrid = GoodsReceiptDetailsGrid;
    })(Inventory = SmartERP.Inventory || (SmartERP.Inventory = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceItemsDialog = /** @class */ (function (_super) {
            __extends(InvoiceItemsDialog, _super);
            function InvoiceItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //protected getProductsRow() { return InvoiceItemsRow.readPermission }
                _this.form = new Invoices.InvoiceItemsForm(_this.idPrefix);
                return _this;
            }
            InvoiceItemsDialog.prototype.getFormKey = function () { return Invoices.InvoiceItemsForm.formKey; };
            InvoiceItemsDialog.prototype.getIdProperty = function () { return Invoices.InvoiceItemsRow.idProperty; };
            InvoiceItemsDialog.prototype.getLocalTextPrefix = function () { return Invoices.InvoiceItemsRow.localTextPrefix; };
            InvoiceItemsDialog.prototype.getNameProperty = function () { return Invoices.InvoiceItemsRow.nameProperty; };
            InvoiceItemsDialog.prototype.getService = function () { return Invoices.InvoiceItemsService.baseUrl; };
            InvoiceItemsDialog.prototype.getDeletePermission = function () { return Invoices.InvoiceItemsRow.deletePermission; };
            InvoiceItemsDialog.prototype.getInsertPermission = function () { return Invoices.InvoiceItemsRow.insertPermission; };
            InvoiceItemsDialog.prototype.getUpdatePermission = function () { return Invoices.InvoiceItemsRow.updatePermission; };
            InvoiceItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceItemsDialog);
            return InvoiceItemsDialog;
        }(Serenity.EntityDialog));
        Invoices.InvoiceItemsDialog = InvoiceItemsDialog;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceItemsGrid = /** @class */ (function (_super) {
            __extends(InvoiceItemsGrid, _super);
            function InvoiceItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoiceItemsGrid.prototype.getColumnsKey = function () { return 'Invoices.InvoiceItems'; };
            InvoiceItemsGrid.prototype.getDialogType = function () { return Invoices.InvoiceItemsDialog; };
            InvoiceItemsGrid.prototype.getIdProperty = function () { return Invoices.InvoiceItemsRow.idProperty; };
            InvoiceItemsGrid.prototype.getInsertPermission = function () { return Invoices.InvoiceItemsRow.insertPermission; };
            InvoiceItemsGrid.prototype.getLocalTextPrefix = function () { return Invoices.InvoiceItemsRow.localTextPrefix; };
            InvoiceItemsGrid.prototype.getService = function () { return Invoices.InvoiceItemsService.baseUrl; };
            InvoiceItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceItemsGrid);
            return InvoiceItemsGrid;
        }(Serenity.EntityGrid));
        Invoices.InvoiceItemsGrid = InvoiceItemsGrid;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceJobItemsDialog = /** @class */ (function (_super) {
            __extends(InvoiceJobItemsDialog, _super);
            function InvoiceJobItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Invoices.InvoiceJobItemsForm(_this.idPrefix);
                return _this;
            }
            InvoiceJobItemsDialog.prototype.getFormKey = function () { return Invoices.InvoiceJobItemsForm.formKey; };
            InvoiceJobItemsDialog.prototype.getIdProperty = function () { return Invoices.InvoiceJobItemsRow.idProperty; };
            InvoiceJobItemsDialog.prototype.getLocalTextPrefix = function () { return Invoices.InvoiceJobItemsRow.localTextPrefix; };
            InvoiceJobItemsDialog.prototype.getNameProperty = function () { return Invoices.InvoiceJobItemsRow.nameProperty; };
            InvoiceJobItemsDialog.prototype.getService = function () { return Invoices.InvoiceJobItemsService.baseUrl; };
            InvoiceJobItemsDialog.prototype.getDeletePermission = function () { return Invoices.InvoiceJobItemsRow.deletePermission; };
            InvoiceJobItemsDialog.prototype.getInsertPermission = function () { return Invoices.InvoiceJobItemsRow.insertPermission; };
            InvoiceJobItemsDialog.prototype.getUpdatePermission = function () { return Invoices.InvoiceJobItemsRow.updatePermission; };
            InvoiceJobItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceJobItemsDialog);
            return InvoiceJobItemsDialog;
        }(Serenity.EntityDialog));
        Invoices.InvoiceJobItemsDialog = InvoiceJobItemsDialog;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceJobItemsGrid = /** @class */ (function (_super) {
            __extends(InvoiceJobItemsGrid, _super);
            function InvoiceJobItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoiceJobItemsGrid.prototype.getColumnsKey = function () { return 'Invoices.InvoiceJobItems'; };
            InvoiceJobItemsGrid.prototype.getDialogType = function () { return Invoices.InvoiceJobItemsDialog; };
            InvoiceJobItemsGrid.prototype.getIdProperty = function () { return Invoices.InvoiceJobItemsRow.idProperty; };
            InvoiceJobItemsGrid.prototype.getInsertPermission = function () { return Invoices.InvoiceJobItemsRow.insertPermission; };
            InvoiceJobItemsGrid.prototype.getLocalTextPrefix = function () { return Invoices.InvoiceJobItemsRow.localTextPrefix; };
            InvoiceJobItemsGrid.prototype.getService = function () { return Invoices.InvoiceJobItemsService.baseUrl; };
            InvoiceJobItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceJobItemsGrid);
            return InvoiceJobItemsGrid;
        }(Serenity.EntityGrid));
        Invoices.InvoiceJobItemsGrid = InvoiceJobItemsGrid;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceItemsEditDialog = /** @class */ (function (_super) {
            __extends(InvoiceItemsEditDialog, _super);
            function InvoiceItemsEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Invoices.InvoiceItemsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                        _this.form.HSN.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].HSN;
                        _this.form.Quantity.value = 1;
                        _this.form.Discount.value = 0;
                        _this.form.Gst.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].Gst;
                        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                        _this.form.UnitId.value = unitId;
                    }
                });
                return _this;
            }
            InvoiceItemsEditDialog.prototype.getFormKey = function () { return Invoices.InvoiceItemsForm.formKey; };
            InvoiceItemsEditDialog.prototype.getNameProperty = function () { return Invoices.InvoiceItemsRow.nameProperty; };
            InvoiceItemsEditDialog.prototype.getLocalTextPrefix = function () { return Invoices.InvoiceItemsRow.localTextPrefix; };
            InvoiceItemsEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceItemsEditDialog);
            return InvoiceItemsEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Invoices.InvoiceItemsEditDialog = InvoiceItemsEditDialog;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceItemsEditor = /** @class */ (function (_super) {
            __extends(InvoiceItemsEditor, _super);
            function InvoiceItemsEditor(container) {
                return _super.call(this, container) || this;
            }
            InvoiceItemsEditor.prototype.getColumnsKey = function () { return "Invoices.InvoiceItems"; };
            InvoiceItemsEditor.prototype.getLocalTextPrefix = function () { return Invoices.InvoiceItemsRow.localTextPrefix; };
            InvoiceItemsEditor.prototype.getDialogType = function () { return Invoices.InvoiceItemsEditDialog; };
            InvoiceItemsEditor.prototype.getDisplayName = function () { return "Customers.CustomersRow"; };
            InvoiceItemsEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            InvoiceItemsEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.ProductId) {
                    row.ProductProductName = SmartERP.Products.ProductsRow.getLookup().itemById[row.ProductId].ProductName;
                }
                row.SubTotal = row.Quantity * row.UnitPrice;
                row.TotalTax = row.Gst * row.SubTotal / 100;
                row.Total = row.SubTotal;
                row.Total -= row.Quantity * row.UnitPrice * row.Discount / 100;
                row.Total = row.Total + row.TotalTax;
                row.CGST = row.Gst / 2;
                row.SGST = row.Gst / 2;
                if (row.UnitId) {
                    row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                        .itemById[row.UnitId].Name;
                }
                return true;
            };
            InvoiceItemsEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            InvoiceItemsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], InvoiceItemsEditor);
            return InvoiceItemsEditor;
        }(SmartERP.Common.GridEditorBase));
        Invoices.InvoiceItemsEditor = InvoiceItemsEditor;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
///<reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceJobItemsEditDialog = /** @class */ (function (_super) {
            __extends(InvoiceJobItemsEditDialog, _super);
            function InvoiceJobItemsEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Invoices.InvoiceJobItemsForm(_this.idPrefix);
                _this.form.JobType.changeSelect2(function (e) {
                    var JobTypeID = Q.toId(_this.form.JobType.value);
                    if (JobTypeID != null) {
                        _this.form.UnitPrice.value = SmartERP.Masters.JobTypesRow.getLookup().itemById[JobTypeID].Rate;
                        _this.form.Discount.value = 0;
                        _this.form.Gst.value = SmartERP.Masters.JobTypesRow.getLookup().itemById[JobTypeID].Gst;
                    }
                });
                return _this;
            }
            InvoiceJobItemsEditDialog.prototype.getFormKey = function () { return Invoices.InvoiceJobItemsForm.formKey; };
            InvoiceJobItemsEditDialog.prototype.getNameProperty = function () { return Invoices.InvoiceJobItemsRow.nameProperty; };
            InvoiceJobItemsEditDialog.prototype.getLocalTextPrefix = function () { return Invoices.InvoiceJobItemsRow.localTextPrefix; };
            InvoiceJobItemsEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceJobItemsEditDialog);
            return InvoiceJobItemsEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Invoices.InvoiceJobItemsEditDialog = InvoiceJobItemsEditDialog;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoiceJobItemsEditor = /** @class */ (function (_super) {
            __extends(InvoiceJobItemsEditor, _super);
            function InvoiceJobItemsEditor(container) {
                return _super.call(this, container) || this;
            }
            InvoiceJobItemsEditor.prototype.getColumnsKey = function () { return "Invoices.InvoiceJobItems"; };
            InvoiceJobItemsEditor.prototype.getLocalTextPrefix = function () { return Invoices.InvoiceJobItemsRow.localTextPrefix; };
            InvoiceJobItemsEditor.prototype.getDialogType = function () { return Invoices.InvoiceJobItemsEditDialog; };
            InvoiceJobItemsEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            InvoiceJobItemsEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.JobType) {
                    row.JobTypeName = SmartERP.Masters.JobTypesRow.getLookup()
                        .itemById[row.JobType].Name;
                }
                row.SubTotal = row.UnitPrice;
                row.TotalTax = row.Gst * row.SubTotal / 100;
                row.Total = row.SubTotal;
                row.Total -= row.UnitPrice * row.Discount / 100;
                row.Total = row.Total + row.TotalTax;
                //row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                //    .itemById[row.UnitId].Name;
                return true;
            };
            InvoiceJobItemsEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            InvoiceJobItemsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], InvoiceJobItemsEditor);
            return InvoiceJobItemsEditor;
        }(SmartERP.Common.GridEditorBase));
        Invoices.InvoiceJobItemsEditor = InvoiceJobItemsEditor;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoicesDialog = /** @class */ (function (_super) {
            __extends(InvoicesDialog, _super);
            function InvoicesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Invoices.InvoicesForm(_this.idPrefix);
                _this.form = new Invoices.InvoicesForm(_this.idPrefix);
                _this.form.Date.change(function (e) {
                });
                //this.form.CustomerId.changeSelect2(e => {
                //    var custumer = Q.toId(this.form.CustomerId.value);
                //    if (custumer != null) {
                //        this.form.CustomerId.value = SmartERP.Customers.CustomersRow.getLookup().itemById[custumer].Name;
                //        this.form.Email.value = SmartERP.Customers.CustomersRow.getLookup().itemById[custumer].Email;
                //    }
                //});
                /* this.form.Email=*/
                _this.form.GrandTotal.change(function () {
                    _this.doCalculation();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    _this.doCalculation();
                });
                _this.form.Jobs.view.onRowCountChanged.subscribe(function () {
                    _this.doCalculation();
                });
                _this.form.Discount.change(function () {
                    _this.doCalculation();
                });
                //this.form.Gst.change(() => {
                //    this.doCalculation();
                //});
                //this.form.Vat.change(() => {
                //    this.doCalculation();
                //});
                _this.form.ShippingCost.change(function () {
                    _this.doCalculation();
                });
                _this.form.PaidAmount.change(function () {
                    _this.doCalculation();
                });
                return _this;
            }
            InvoicesDialog.prototype.getFormKey = function () { return Invoices.InvoicesForm.formKey; };
            InvoicesDialog.prototype.getIdProperty = function () { return Invoices.InvoicesRow.idProperty; };
            InvoicesDialog.prototype.getLocalTextPrefix = function () { return Invoices.InvoicesRow.localTextPrefix; };
            InvoicesDialog.prototype.getNameProperty = function () { return Invoices.InvoicesRow.nameProperty; };
            InvoicesDialog.prototype.getService = function () { return Invoices.InvoicesService.baseUrl; };
            InvoicesDialog.prototype.getDeletePermission = function () { return Invoices.InvoicesRow.deletePermission; };
            InvoicesDialog.prototype.getInsertPermission = function () { return Invoices.InvoicesRow.insertPermission; };
            InvoicesDialog.prototype.getUpdatePermission = function () { return Invoices.InvoicesRow.updatePermission; };
            InvoicesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
            };
            InvoicesDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.doCalculation();
            };
            InvoicesDialog.prototype.doCalculation = function () {
                var total = 0;
                var GST = 0;
                var GSTPercentage = 0;
                var GSTAverage = 0;
                var cout = 0;
                var Totel_Tax = 0;
                for (var _i = 0, _a = this.form.LineItems.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    total += k.SubTotal || 0;
                    GST += k.Gst || 0;
                }
                //for (var a of this.form.LineItems.getItems())
                //{
                //    GSTPercentage += ((a.Gst / total) * 100) || 0;                              
                //}
                //this.form.CGST.value = total * GSTPercentage / 200;
                //this.form.SGST.value = total * GSTPercentage / 200;
                for (var _b = 0, _c = this.form.Jobs.getItems(); _b < _c.length; _b++) {
                    var j = _c[_b];
                    total += j.SubTotal || 0;
                }
                this.form.GrandTotal.value = total;
                var subDiscount = 0;
                for (var _d = 0, _e = this.form.LineItems.getItems(); _d < _e.length; _d++) {
                    var k = _e[_d];
                    subDiscount += (k.Discount * k.Quantity * k.UnitPrice / 100) || 0;
                }
                this.form.TotalDiscount.value = this.form.Discount.value + subDiscount;
                this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.ShippingCost.value;
                for (var _f = 0, _g = this.form.Jobs.getItems(); _f < _g.length; _f++) {
                    var g = _g[_f];
                    cout == 0;
                    cout = g.Gst;
                }
                this.form.Gst.value == 0;
                this.form.CGST.value = this.form.Gst.value / 2;
                this.form.SGST.value = this.form.Gst.value / 2;
                for (var _h = 0, _j = this.form.LineItems.getItems(); _h < _j.length; _h++) {
                    var b = _j[_h];
                    cout == 0;
                    cout = b.Gst;
                }
                this.form.Gst.value == 0;
                this.form.Gst.value = cout;
                this.form.CGST.value = this.form.Gst.value / 2;
                this.form.SGST.value = this.form.Gst.value / 2;
                for (var _k = 0, _l = this.form.Jobs.getItems(); _k < _l.length; _k++) {
                    var d = _l[_k];
                    Totel_Tax += d.TotalTax || 0;
                }
                for (var _m = 0, _o = this.form.LineItems.getItems(); _m < _o.length; _m++) {
                    var c = _o[_m];
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
                }
                else {
                    this.form.Change.value = 0;
                }
            };
            InvoicesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], InvoicesDialog);
            return InvoicesDialog;
        }(Serenity.EntityDialog));
        Invoices.InvoicesDialog = InvoicesDialog;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Invoices;
    (function (Invoices) {
        var InvoicesGrid = /** @class */ (function (_super) {
            __extends(InvoicesGrid, _super);
            function InvoicesGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoicesGrid.prototype.getColumnsKey = function () { return 'Invoices.Invoices'; };
            InvoicesGrid.prototype.getDialogType = function () { return Invoices.InvoicesDialog; };
            InvoicesGrid.prototype.getIdProperty = function () { return Invoices.InvoicesRow.idProperty; };
            InvoicesGrid.prototype.getInsertPermission = function () { return Invoices.InvoicesRow.insertPermission; };
            InvoicesGrid.prototype.getLocalTextPrefix = function () { return Invoices.InvoicesRow.localTextPrefix; };
            InvoicesGrid.prototype.getService = function () { return Invoices.InvoicesService.baseUrl; };
            InvoicesGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action SendMail" title="Send Mail">' +
                        '<i class="fa fa-send-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-invoice" title="View Invoice">' +
                        '<i class="fa fa-eye text-blue"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            InvoicesGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('Send-Mail')) {
                        SmartERP.Common.EmailHelper.execute({
                            reportKey: 'Invoices.InvoiceReport',
                            extension: 'html',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                    if (target.hasClass('view-invoice')) {
                        SmartERP.Common.ReportHelper.execute({
                            reportKey: 'Invoices.InvoiceReport',
                            extension: 'html',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                }
            };
            InvoicesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], InvoicesGrid);
            return InvoicesGrid;
        }(Serenity.EntityGrid));
        Invoices.InvoicesGrid = InvoicesGrid;
    })(Invoices = SmartERP.Invoices || (SmartERP.Invoices = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var GatePassesDialog = /** @class */ (function (_super) {
            __extends(GatePassesDialog, _super);
            function GatePassesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new JobCards.GatePassesForm(_this.idPrefix);
                _this.form = new JobCards.GatePassesForm(_this.idPrefix);
                _this.form.JobCard.changeSelect2(function (e) {
                    var jobCardID = Q.toId(_this.form.JobCard.value);
                    if (jobCardID != null) {
                        _this.form.Customer.value = SmartERP.JobCards.JobCardsRow.getLookup().itemById[jobCardID].Customer.toString();
                        _this.form.Vehicle.value = SmartERP.JobCards.JobCardsRow.getLookup().itemById[jobCardID].Vehicle.toString();
                    }
                });
                return _this;
            }
            GatePassesDialog.prototype.getFormKey = function () { return JobCards.GatePassesForm.formKey; };
            GatePassesDialog.prototype.getIdProperty = function () { return JobCards.GatePassesRow.idProperty; };
            GatePassesDialog.prototype.getLocalTextPrefix = function () { return JobCards.GatePassesRow.localTextPrefix; };
            GatePassesDialog.prototype.getService = function () { return JobCards.GatePassesService.baseUrl; };
            GatePassesDialog.prototype.getDeletePermission = function () { return JobCards.GatePassesRow.deletePermission; };
            GatePassesDialog.prototype.getInsertPermission = function () { return JobCards.GatePassesRow.insertPermission; };
            GatePassesDialog.prototype.getUpdatePermission = function () { return JobCards.GatePassesRow.updatePermission; };
            GatePassesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GatePassesDialog);
            return GatePassesDialog;
        }(Serenity.EntityDialog));
        JobCards.GatePassesDialog = GatePassesDialog;
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var GatePassesGrid = /** @class */ (function (_super) {
            __extends(GatePassesGrid, _super);
            function GatePassesGrid(container) {
                return _super.call(this, container) || this;
            }
            GatePassesGrid.prototype.getColumnsKey = function () { return 'JobCards.GatePasses'; };
            GatePassesGrid.prototype.getDialogType = function () { return JobCards.GatePassesDialog; };
            GatePassesGrid.prototype.getIdProperty = function () { return JobCards.GatePassesRow.idProperty; };
            GatePassesGrid.prototype.getInsertPermission = function () { return JobCards.GatePassesRow.insertPermission; };
            GatePassesGrid.prototype.getLocalTextPrefix = function () { return JobCards.GatePassesRow.localTextPrefix; };
            GatePassesGrid.prototype.getService = function () { return JobCards.GatePassesService.baseUrl; };
            GatePassesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GatePassesGrid);
            return GatePassesGrid;
        }(Serenity.EntityGrid));
        JobCards.GatePassesGrid = GatePassesGrid;
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardDetailsDialog = /** @class */ (function (_super) {
            __extends(JobCardDetailsDialog, _super);
            function JobCardDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new JobCards.JobCardDetailsForm(_this.idPrefix);
                return _this;
            }
            JobCardDetailsDialog.prototype.getFormKey = function () { return JobCards.JobCardDetailsForm.formKey; };
            JobCardDetailsDialog.prototype.getIdProperty = function () { return JobCards.JobCardDetailsRow.idProperty; };
            JobCardDetailsDialog.prototype.getLocalTextPrefix = function () { return JobCards.JobCardDetailsRow.localTextPrefix; };
            JobCardDetailsDialog.prototype.getNameProperty = function () { return JobCards.JobCardDetailsRow.nameProperty; };
            JobCardDetailsDialog.prototype.getService = function () { return JobCards.JobCardDetailsService.baseUrl; };
            JobCardDetailsDialog.prototype.getDeletePermission = function () { return JobCards.JobCardDetailsRow.deletePermission; };
            JobCardDetailsDialog.prototype.getInsertPermission = function () { return JobCards.JobCardDetailsRow.insertPermission; };
            JobCardDetailsDialog.prototype.getUpdatePermission = function () { return JobCards.JobCardDetailsRow.updatePermission; };
            JobCardDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], JobCardDetailsDialog);
            return JobCardDetailsDialog;
        }(Serenity.EntityDialog));
        JobCards.JobCardDetailsDialog = JobCardDetailsDialog;
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardDetailsEditor = /** @class */ (function (_super) {
            __extends(JobCardDetailsEditor, _super);
            function JobCardDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            JobCardDetailsEditor.prototype.getColumnsKey = function () { return "JobCards.JobCardDetails"; };
            JobCardDetailsEditor.prototype.getLocalTextPrefix = function () { return JobCards.JobCardDetailsRow.localTextPrefix; };
            JobCardDetailsEditor.prototype.getDialogType = function () { return JobCards.JobCardDetailsEditDialog; };
            JobCardDetailsEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            JobCardDetailsEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.JobType) {
                    row.JobTypeName = SmartERP.Masters.JobTypesRow.getLookup()
                        .itemById[row.JobType].Name;
                }
                if (row.Mechanic) {
                    row.MechanicFullName = SmartERP.HumanResource.EmployeesRow.getLookup()
                        .itemById[row.Mechanic].EmployeeFullName;
                }
                return true;
            };
            JobCardDetailsEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            JobCardDetailsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], JobCardDetailsEditor);
            return JobCardDetailsEditor;
        }(SmartERP.Common.GridEditorBase));
        JobCards.JobCardDetailsEditor = JobCardDetailsEditor;
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardDetailsGrid = /** @class */ (function (_super) {
            __extends(JobCardDetailsGrid, _super);
            function JobCardDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            JobCardDetailsGrid.prototype.getColumnsKey = function () { return 'JobCards.JobCardDetails'; };
            JobCardDetailsGrid.prototype.getDialogType = function () { return JobCards.JobCardDetailsDialog; };
            JobCardDetailsGrid.prototype.getIdProperty = function () { return JobCards.JobCardDetailsRow.idProperty; };
            JobCardDetailsGrid.prototype.getInsertPermission = function () { return JobCards.JobCardDetailsRow.insertPermission; };
            JobCardDetailsGrid.prototype.getLocalTextPrefix = function () { return JobCards.JobCardDetailsRow.localTextPrefix; };
            JobCardDetailsGrid.prototype.getService = function () { return JobCards.JobCardDetailsService.baseUrl; };
            JobCardDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], JobCardDetailsGrid);
            return JobCardDetailsGrid;
        }(Serenity.EntityGrid));
        JobCards.JobCardDetailsGrid = JobCardDetailsGrid;
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardDetailsEditDialog = /** @class */ (function (_super) {
            __extends(JobCardDetailsEditDialog, _super);
            function JobCardDetailsEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new JobCards.JobCardDetailsForm(_this.idPrefix);
                return _this;
                //this.form.ProductId.changeSelect2(e => {
                //    var productID = Q.toId(this.form.ProductId.value);
                //    if (productID != null) {
                //        this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                //        this.form.Quantity.value = 1;
                //        this.form.Discount.value = 0;
                //        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                //        this.form.UnitId.value = unitId;
                //    }
                //});
            }
            JobCardDetailsEditDialog.prototype.getFormKey = function () { return JobCards.JobCardDetailsForm.formKey; };
            JobCardDetailsEditDialog.prototype.getNameProperty = function () { return JobCards.JobCardDetailsRow.nameProperty; };
            JobCardDetailsEditDialog.prototype.getLocalTextPrefix = function () { return JobCards.JobCardDetailsRow.localTextPrefix; };
            JobCardDetailsEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], JobCardDetailsEditDialog);
            return JobCardDetailsEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        JobCards.JobCardDetailsEditDialog = JobCardDetailsEditDialog;
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardsDialog = /** @class */ (function (_super) {
            __extends(JobCardsDialog, _super);
            function JobCardsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new JobCards.JobCardsForm(_this.idPrefix);
                return _this;
            }
            JobCardsDialog.prototype.getFormKey = function () { return JobCards.JobCardsForm.formKey; };
            JobCardsDialog.prototype.getIdProperty = function () { return JobCards.JobCardsRow.idProperty; };
            JobCardsDialog.prototype.getLocalTextPrefix = function () { return JobCards.JobCardsRow.localTextPrefix; };
            JobCardsDialog.prototype.getNameProperty = function () { return JobCards.JobCardsRow.nameProperty; };
            JobCardsDialog.prototype.getService = function () { return JobCards.JobCardsService.baseUrl; };
            JobCardsDialog.prototype.getDeletePermission = function () { return JobCards.JobCardsRow.deletePermission; };
            JobCardsDialog.prototype.getInsertPermission = function () { return JobCards.JobCardsRow.insertPermission; };
            JobCardsDialog.prototype.getUpdatePermission = function () { return JobCards.JobCardsRow.updatePermission; };
            JobCardsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], JobCardsDialog);
            return JobCardsDialog;
        }(Serenity.EntityDialog));
        JobCards.JobCardsDialog = JobCardsDialog;
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var JobCards;
    (function (JobCards) {
        var JobCardsGrid = /** @class */ (function (_super) {
            __extends(JobCardsGrid, _super);
            function JobCardsGrid(container) {
                return _super.call(this, container) || this;
            }
            JobCardsGrid.prototype.getColumnsKey = function () { return 'JobCards.JobCards'; };
            JobCardsGrid.prototype.getDialogType = function () { return JobCards.JobCardsDialog; };
            JobCardsGrid.prototype.getIdProperty = function () { return JobCards.JobCardsRow.idProperty; };
            JobCardsGrid.prototype.getInsertPermission = function () { return JobCards.JobCardsRow.insertPermission; };
            JobCardsGrid.prototype.getLocalTextPrefix = function () { return JobCards.JobCardsRow.localTextPrefix; };
            JobCardsGrid.prototype.getService = function () { return JobCards.JobCardsService.baseUrl; };
            JobCardsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], JobCardsGrid);
            return JobCardsGrid;
        }(Serenity.EntityGrid));
        JobCards.JobCardsGrid = JobCardsGrid;
    })(JobCards = SmartERP.JobCards || (SmartERP.JobCards = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AgendaItemTypesDialog = /** @class */ (function (_super) {
            __extends(AgendaItemTypesDialog, _super);
            function AgendaItemTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.AgendaItemTypesForm(_this.idPrefix);
                return _this;
            }
            AgendaItemTypesDialog.prototype.getFormKey = function () { return Masters.AgendaItemTypesForm.formKey; };
            AgendaItemTypesDialog.prototype.getIdProperty = function () { return Masters.AgendaItemTypesRow.idProperty; };
            AgendaItemTypesDialog.prototype.getLocalTextPrefix = function () { return Masters.AgendaItemTypesRow.localTextPrefix; };
            AgendaItemTypesDialog.prototype.getNameProperty = function () { return Masters.AgendaItemTypesRow.nameProperty; };
            AgendaItemTypesDialog.prototype.getService = function () { return Masters.AgendaItemTypesService.baseUrl; };
            AgendaItemTypesDialog.prototype.getDeletePermission = function () { return Masters.AgendaItemTypesRow.deletePermission; };
            AgendaItemTypesDialog.prototype.getInsertPermission = function () { return Masters.AgendaItemTypesRow.insertPermission; };
            AgendaItemTypesDialog.prototype.getUpdatePermission = function () { return Masters.AgendaItemTypesRow.updatePermission; };
            AgendaItemTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaItemTypesDialog);
            return AgendaItemTypesDialog;
        }(Serenity.EntityDialog));
        Masters.AgendaItemTypesDialog = AgendaItemTypesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AgendaItemTypesGrid = /** @class */ (function (_super) {
            __extends(AgendaItemTypesGrid, _super);
            function AgendaItemTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            AgendaItemTypesGrid.prototype.getColumnsKey = function () { return 'Masters.AgendaItemTypes'; };
            AgendaItemTypesGrid.prototype.getDialogType = function () { return Masters.AgendaItemTypesDialog; };
            AgendaItemTypesGrid.prototype.getIsActiveProperty = function () { return Masters.AgendaItemTypesRow.isActiveProperty; };
            AgendaItemTypesGrid.prototype.getIdProperty = function () { return Masters.AgendaItemTypesRow.idProperty; };
            AgendaItemTypesGrid.prototype.getInsertPermission = function () { return Masters.AgendaItemTypesRow.insertPermission; };
            AgendaItemTypesGrid.prototype.getLocalTextPrefix = function () { return Masters.AgendaItemTypesRow.localTextPrefix; };
            AgendaItemTypesGrid.prototype.getService = function () { return Masters.AgendaItemTypesService.baseUrl; };
            AgendaItemTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaItemTypesGrid);
            return AgendaItemTypesGrid;
        }(Serenity.EntityGrid));
        Masters.AgendaItemTypesGrid = AgendaItemTypesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AssemblyTypesDialog = /** @class */ (function (_super) {
            __extends(AssemblyTypesDialog, _super);
            function AssemblyTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.AssemblyTypesForm(_this.idPrefix);
                return _this;
            }
            AssemblyTypesDialog.prototype.getFormKey = function () { return Masters.AssemblyTypesForm.formKey; };
            AssemblyTypesDialog.prototype.getIdProperty = function () { return Masters.AssemblyTypesRow.idProperty; };
            AssemblyTypesDialog.prototype.getLocalTextPrefix = function () { return Masters.AssemblyTypesRow.localTextPrefix; };
            AssemblyTypesDialog.prototype.getNameProperty = function () { return Masters.AssemblyTypesRow.nameProperty; };
            AssemblyTypesDialog.prototype.getService = function () { return Masters.AssemblyTypesService.baseUrl; };
            AssemblyTypesDialog.prototype.getDeletePermission = function () { return Masters.AssemblyTypesRow.deletePermission; };
            AssemblyTypesDialog.prototype.getInsertPermission = function () { return Masters.AssemblyTypesRow.insertPermission; };
            AssemblyTypesDialog.prototype.getUpdatePermission = function () { return Masters.AssemblyTypesRow.updatePermission; };
            AssemblyTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssemblyTypesDialog);
            return AssemblyTypesDialog;
        }(Serenity.EntityDialog));
        Masters.AssemblyTypesDialog = AssemblyTypesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AssemblyTypesGrid = /** @class */ (function (_super) {
            __extends(AssemblyTypesGrid, _super);
            function AssemblyTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            AssemblyTypesGrid.prototype.getColumnsKey = function () { return 'Masters.AssemblyTypes'; };
            AssemblyTypesGrid.prototype.getDialogType = function () { return Masters.AssemblyTypesDialog; };
            AssemblyTypesGrid.prototype.getIdProperty = function () { return Masters.AssemblyTypesRow.idProperty; };
            AssemblyTypesGrid.prototype.getInsertPermission = function () { return Masters.AssemblyTypesRow.insertPermission; };
            AssemblyTypesGrid.prototype.getLocalTextPrefix = function () { return Masters.AssemblyTypesRow.localTextPrefix; };
            AssemblyTypesGrid.prototype.getService = function () { return Masters.AssemblyTypesService.baseUrl; };
            AssemblyTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssemblyTypesGrid);
            return AssemblyTypesGrid;
        }(Serenity.EntityGrid));
        Masters.AssemblyTypesGrid = AssemblyTypesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendanceStatusesDialog = /** @class */ (function (_super) {
            __extends(AttendanceStatusesDialog, _super);
            function AttendanceStatusesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.AttendanceStatusesForm(_this.idPrefix);
                return _this;
            }
            AttendanceStatusesDialog.prototype.getFormKey = function () { return Masters.AttendanceStatusesForm.formKey; };
            AttendanceStatusesDialog.prototype.getIdProperty = function () { return Masters.AttendanceStatusesRow.idProperty; };
            AttendanceStatusesDialog.prototype.getLocalTextPrefix = function () { return Masters.AttendanceStatusesRow.localTextPrefix; };
            AttendanceStatusesDialog.prototype.getNameProperty = function () { return Masters.AttendanceStatusesRow.nameProperty; };
            AttendanceStatusesDialog.prototype.getService = function () { return Masters.AttendanceStatusesService.baseUrl; };
            AttendanceStatusesDialog.prototype.getDeletePermission = function () { return Masters.AttendanceStatusesRow.deletePermission; };
            AttendanceStatusesDialog.prototype.getInsertPermission = function () { return Masters.AttendanceStatusesRow.insertPermission; };
            AttendanceStatusesDialog.prototype.getUpdatePermission = function () { return Masters.AttendanceStatusesRow.updatePermission; };
            AttendanceStatusesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendanceStatusesDialog);
            return AttendanceStatusesDialog;
        }(Serenity.EntityDialog));
        Masters.AttendanceStatusesDialog = AttendanceStatusesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendanceStatusesGrid = /** @class */ (function (_super) {
            __extends(AttendanceStatusesGrid, _super);
            function AttendanceStatusesGrid(container) {
                return _super.call(this, container) || this;
            }
            AttendanceStatusesGrid.prototype.getColumnsKey = function () { return 'Masters.AttendanceStatuses'; };
            AttendanceStatusesGrid.prototype.getDialogType = function () { return Masters.AttendanceStatusesDialog; };
            AttendanceStatusesGrid.prototype.getIsActiveProperty = function () { return Masters.AttendanceStatusesRow.isActiveProperty; };
            AttendanceStatusesGrid.prototype.getIdProperty = function () { return Masters.AttendanceStatusesRow.idProperty; };
            AttendanceStatusesGrid.prototype.getInsertPermission = function () { return Masters.AttendanceStatusesRow.insertPermission; };
            AttendanceStatusesGrid.prototype.getLocalTextPrefix = function () { return Masters.AttendanceStatusesRow.localTextPrefix; };
            AttendanceStatusesGrid.prototype.getService = function () { return Masters.AttendanceStatusesService.baseUrl; };
            AttendanceStatusesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendanceStatusesGrid);
            return AttendanceStatusesGrid;
        }(Serenity.EntityGrid));
        Masters.AttendanceStatusesGrid = AttendanceStatusesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendeeTypesDialog = /** @class */ (function (_super) {
            __extends(AttendeeTypesDialog, _super);
            function AttendeeTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.AttendeeTypesForm(_this.idPrefix);
                return _this;
            }
            AttendeeTypesDialog.prototype.getFormKey = function () { return Masters.AttendeeTypesForm.formKey; };
            AttendeeTypesDialog.prototype.getIdProperty = function () { return Masters.AttendeeTypesRow.idProperty; };
            AttendeeTypesDialog.prototype.getLocalTextPrefix = function () { return Masters.AttendeeTypesRow.localTextPrefix; };
            AttendeeTypesDialog.prototype.getNameProperty = function () { return Masters.AttendeeTypesRow.nameProperty; };
            AttendeeTypesDialog.prototype.getService = function () { return Masters.AttendeeTypesService.baseUrl; };
            AttendeeTypesDialog.prototype.getDeletePermission = function () { return Masters.AttendeeTypesRow.deletePermission; };
            AttendeeTypesDialog.prototype.getInsertPermission = function () { return Masters.AttendeeTypesRow.insertPermission; };
            AttendeeTypesDialog.prototype.getUpdatePermission = function () { return Masters.AttendeeTypesRow.updatePermission; };
            AttendeeTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendeeTypesDialog);
            return AttendeeTypesDialog;
        }(Serenity.EntityDialog));
        Masters.AttendeeTypesDialog = AttendeeTypesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var AttendeeTypesGrid = /** @class */ (function (_super) {
            __extends(AttendeeTypesGrid, _super);
            function AttendeeTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            AttendeeTypesGrid.prototype.getColumnsKey = function () { return 'Masters.AttendeeTypes'; };
            AttendeeTypesGrid.prototype.getDialogType = function () { return Masters.AttendeeTypesDialog; };
            AttendeeTypesGrid.prototype.getIsActiveProperty = function () { return Masters.AttendeeTypesRow.isActiveProperty; };
            AttendeeTypesGrid.prototype.getIdProperty = function () { return Masters.AttendeeTypesRow.idProperty; };
            AttendeeTypesGrid.prototype.getInsertPermission = function () { return Masters.AttendeeTypesRow.insertPermission; };
            AttendeeTypesGrid.prototype.getLocalTextPrefix = function () { return Masters.AttendeeTypesRow.localTextPrefix; };
            AttendeeTypesGrid.prototype.getService = function () { return Masters.AttendeeTypesService.baseUrl; };
            AttendeeTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendeeTypesGrid);
            return AttendeeTypesGrid;
        }(Serenity.EntityGrid));
        Masters.AttendeeTypesGrid = AttendeeTypesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ColorTypesDialog = /** @class */ (function (_super) {
            __extends(ColorTypesDialog, _super);
            function ColorTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.ColorTypesForm(_this.idPrefix);
                return _this;
            }
            ColorTypesDialog.prototype.getFormKey = function () { return Masters.ColorTypesForm.formKey; };
            ColorTypesDialog.prototype.getIdProperty = function () { return Masters.ColorTypesRow.idProperty; };
            ColorTypesDialog.prototype.getLocalTextPrefix = function () { return Masters.ColorTypesRow.localTextPrefix; };
            ColorTypesDialog.prototype.getNameProperty = function () { return Masters.ColorTypesRow.nameProperty; };
            ColorTypesDialog.prototype.getService = function () { return Masters.ColorTypesService.baseUrl; };
            ColorTypesDialog.prototype.getDeletePermission = function () { return Masters.ColorTypesRow.deletePermission; };
            ColorTypesDialog.prototype.getInsertPermission = function () { return Masters.ColorTypesRow.insertPermission; };
            ColorTypesDialog.prototype.getUpdatePermission = function () { return Masters.ColorTypesRow.updatePermission; };
            ColorTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ColorTypesDialog);
            return ColorTypesDialog;
        }(Serenity.EntityDialog));
        Masters.ColorTypesDialog = ColorTypesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ColorTypesGrid = /** @class */ (function (_super) {
            __extends(ColorTypesGrid, _super);
            function ColorTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            ColorTypesGrid.prototype.getColumnsKey = function () { return 'Masters.ColorTypes'; };
            ColorTypesGrid.prototype.getDialogType = function () { return Masters.ColorTypesDialog; };
            ColorTypesGrid.prototype.getIdProperty = function () { return Masters.ColorTypesRow.idProperty; };
            ColorTypesGrid.prototype.getInsertPermission = function () { return Masters.ColorTypesRow.insertPermission; };
            ColorTypesGrid.prototype.getLocalTextPrefix = function () { return Masters.ColorTypesRow.localTextPrefix; };
            ColorTypesGrid.prototype.getService = function () { return Masters.ColorTypesService.baseUrl; };
            ColorTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ColorTypesGrid);
            return ColorTypesGrid;
        }(Serenity.EntityGrid));
        Masters.ColorTypesGrid = ColorTypesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var CustomerGroupsDialog = /** @class */ (function (_super) {
            __extends(CustomerGroupsDialog, _super);
            function CustomerGroupsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.CustomerGroupsForm(_this.idPrefix);
                return _this;
            }
            CustomerGroupsDialog.prototype.getFormKey = function () { return Masters.CustomerGroupsForm.formKey; };
            CustomerGroupsDialog.prototype.getIdProperty = function () { return Masters.CustomerGroupsRow.idProperty; };
            CustomerGroupsDialog.prototype.getLocalTextPrefix = function () { return Masters.CustomerGroupsRow.localTextPrefix; };
            CustomerGroupsDialog.prototype.getNameProperty = function () { return Masters.CustomerGroupsRow.nameProperty; };
            CustomerGroupsDialog.prototype.getService = function () { return Masters.CustomerGroupsService.baseUrl; };
            CustomerGroupsDialog.prototype.getDeletePermission = function () { return Masters.CustomerGroupsRow.deletePermission; };
            CustomerGroupsDialog.prototype.getInsertPermission = function () { return Masters.CustomerGroupsRow.insertPermission; };
            CustomerGroupsDialog.prototype.getUpdatePermission = function () { return Masters.CustomerGroupsRow.updatePermission; };
            CustomerGroupsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGroupsDialog);
            return CustomerGroupsDialog;
        }(Serenity.EntityDialog));
        Masters.CustomerGroupsDialog = CustomerGroupsDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var CustomerGroupsGrid = /** @class */ (function (_super) {
            __extends(CustomerGroupsGrid, _super);
            function CustomerGroupsGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGroupsGrid.prototype.getColumnsKey = function () { return 'Masters.CustomerGroups'; };
            CustomerGroupsGrid.prototype.getDialogType = function () { return Masters.CustomerGroupsDialog; };
            CustomerGroupsGrid.prototype.getIdProperty = function () { return Masters.CustomerGroupsRow.idProperty; };
            CustomerGroupsGrid.prototype.getIsActiveProperty = function () { return Masters.CustomerGroupsRow.isActiveProperty; };
            CustomerGroupsGrid.prototype.getInsertPermission = function () { return Masters.CustomerGroupsRow.insertPermission; };
            CustomerGroupsGrid.prototype.getLocalTextPrefix = function () { return Masters.CustomerGroupsRow.localTextPrefix; };
            CustomerGroupsGrid.prototype.getService = function () { return Masters.CustomerGroupsService.baseUrl; };
            CustomerGroupsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGroupsGrid);
            return CustomerGroupsGrid;
        }(Serenity.EntityGrid));
        Masters.CustomerGroupsGrid = CustomerGroupsGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var FuelTypesDialog = /** @class */ (function (_super) {
            __extends(FuelTypesDialog, _super);
            function FuelTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.FuelTypesForm(_this.idPrefix);
                return _this;
            }
            FuelTypesDialog.prototype.getFormKey = function () { return Masters.FuelTypesForm.formKey; };
            FuelTypesDialog.prototype.getIdProperty = function () { return Masters.FuelTypesRow.idProperty; };
            FuelTypesDialog.prototype.getLocalTextPrefix = function () { return Masters.FuelTypesRow.localTextPrefix; };
            FuelTypesDialog.prototype.getNameProperty = function () { return Masters.FuelTypesRow.nameProperty; };
            FuelTypesDialog.prototype.getService = function () { return Masters.FuelTypesService.baseUrl; };
            FuelTypesDialog.prototype.getDeletePermission = function () { return Masters.FuelTypesRow.deletePermission; };
            FuelTypesDialog.prototype.getInsertPermission = function () { return Masters.FuelTypesRow.insertPermission; };
            FuelTypesDialog.prototype.getUpdatePermission = function () { return Masters.FuelTypesRow.updatePermission; };
            FuelTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FuelTypesDialog);
            return FuelTypesDialog;
        }(Serenity.EntityDialog));
        Masters.FuelTypesDialog = FuelTypesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var FuelTypesGrid = /** @class */ (function (_super) {
            __extends(FuelTypesGrid, _super);
            function FuelTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            FuelTypesGrid.prototype.getColumnsKey = function () { return 'Masters.FuelTypes'; };
            FuelTypesGrid.prototype.getDialogType = function () { return Masters.FuelTypesDialog; };
            FuelTypesGrid.prototype.getIdProperty = function () { return Masters.FuelTypesRow.idProperty; };
            FuelTypesGrid.prototype.getInsertPermission = function () { return Masters.FuelTypesRow.insertPermission; };
            FuelTypesGrid.prototype.getLocalTextPrefix = function () { return Masters.FuelTypesRow.localTextPrefix; };
            FuelTypesGrid.prototype.getService = function () { return Masters.FuelTypesService.baseUrl; };
            FuelTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FuelTypesGrid);
            return FuelTypesGrid;
        }(Serenity.EntityGrid));
        Masters.FuelTypesGrid = FuelTypesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var JobCategoriesDialog = /** @class */ (function (_super) {
            __extends(JobCategoriesDialog, _super);
            function JobCategoriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.JobCategoriesForm(_this.idPrefix);
                return _this;
            }
            JobCategoriesDialog.prototype.getFormKey = function () { return Masters.JobCategoriesForm.formKey; };
            JobCategoriesDialog.prototype.getIdProperty = function () { return Masters.JobCategoriesRow.idProperty; };
            JobCategoriesDialog.prototype.getLocalTextPrefix = function () { return Masters.JobCategoriesRow.localTextPrefix; };
            JobCategoriesDialog.prototype.getNameProperty = function () { return Masters.JobCategoriesRow.nameProperty; };
            JobCategoriesDialog.prototype.getService = function () { return Masters.JobCategoriesService.baseUrl; };
            JobCategoriesDialog.prototype.getDeletePermission = function () { return Masters.JobCategoriesRow.deletePermission; };
            JobCategoriesDialog.prototype.getInsertPermission = function () { return Masters.JobCategoriesRow.insertPermission; };
            JobCategoriesDialog.prototype.getUpdatePermission = function () { return Masters.JobCategoriesRow.updatePermission; };
            JobCategoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], JobCategoriesDialog);
            return JobCategoriesDialog;
        }(Serenity.EntityDialog));
        Masters.JobCategoriesDialog = JobCategoriesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var JobCategoriesGrid = /** @class */ (function (_super) {
            __extends(JobCategoriesGrid, _super);
            function JobCategoriesGrid(container) {
                return _super.call(this, container) || this;
            }
            JobCategoriesGrid.prototype.getColumnsKey = function () { return 'Masters.JobCategories'; };
            JobCategoriesGrid.prototype.getDialogType = function () { return Masters.JobCategoriesDialog; };
            JobCategoriesGrid.prototype.getIdProperty = function () { return Masters.JobCategoriesRow.idProperty; };
            JobCategoriesGrid.prototype.getInsertPermission = function () { return Masters.JobCategoriesRow.insertPermission; };
            JobCategoriesGrid.prototype.getLocalTextPrefix = function () { return Masters.JobCategoriesRow.localTextPrefix; };
            JobCategoriesGrid.prototype.getService = function () { return Masters.JobCategoriesService.baseUrl; };
            JobCategoriesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], JobCategoriesGrid);
            return JobCategoriesGrid;
        }(Serenity.EntityGrid));
        Masters.JobCategoriesGrid = JobCategoriesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var JobTypesDialog = /** @class */ (function (_super) {
            __extends(JobTypesDialog, _super);
            function JobTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.JobTypesForm(_this.idPrefix);
                return _this;
            }
            JobTypesDialog.prototype.getFormKey = function () { return Masters.JobTypesForm.formKey; };
            JobTypesDialog.prototype.getIdProperty = function () { return Masters.JobTypesRow.idProperty; };
            JobTypesDialog.prototype.getLocalTextPrefix = function () { return Masters.JobTypesRow.localTextPrefix; };
            JobTypesDialog.prototype.getNameProperty = function () { return Masters.JobTypesRow.nameProperty; };
            JobTypesDialog.prototype.getService = function () { return Masters.JobTypesService.baseUrl; };
            JobTypesDialog.prototype.getDeletePermission = function () { return Masters.JobTypesRow.deletePermission; };
            JobTypesDialog.prototype.getInsertPermission = function () { return Masters.JobTypesRow.insertPermission; };
            JobTypesDialog.prototype.getUpdatePermission = function () { return Masters.JobTypesRow.updatePermission; };
            JobTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], JobTypesDialog);
            return JobTypesDialog;
        }(Serenity.EntityDialog));
        Masters.JobTypesDialog = JobTypesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var JobTypesGrid = /** @class */ (function (_super) {
            __extends(JobTypesGrid, _super);
            function JobTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            JobTypesGrid.prototype.getColumnsKey = function () { return 'Masters.JobTypes'; };
            JobTypesGrid.prototype.getDialogType = function () { return Masters.JobTypesDialog; };
            JobTypesGrid.prototype.getIdProperty = function () { return Masters.JobTypesRow.idProperty; };
            JobTypesGrid.prototype.getInsertPermission = function () { return Masters.JobTypesRow.insertPermission; };
            JobTypesGrid.prototype.getLocalTextPrefix = function () { return Masters.JobTypesRow.localTextPrefix; };
            JobTypesGrid.prototype.getService = function () { return Masters.JobTypesService.baseUrl; };
            JobTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], JobTypesGrid);
            return JobTypesGrid;
        }(Serenity.EntityGrid));
        Masters.JobTypesGrid = JobTypesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var LocationsDialog = /** @class */ (function (_super) {
            __extends(LocationsDialog, _super);
            function LocationsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.LocationsForm(_this.idPrefix);
                return _this;
            }
            LocationsDialog.prototype.getFormKey = function () { return Masters.LocationsForm.formKey; };
            LocationsDialog.prototype.getIdProperty = function () { return Masters.LocationsRow.idProperty; };
            LocationsDialog.prototype.getLocalTextPrefix = function () { return Masters.LocationsRow.localTextPrefix; };
            LocationsDialog.prototype.getNameProperty = function () { return Masters.LocationsRow.nameProperty; };
            LocationsDialog.prototype.getService = function () { return Masters.LocationsService.baseUrl; };
            LocationsDialog.prototype.getDeletePermission = function () { return Masters.LocationsRow.deletePermission; };
            LocationsDialog.prototype.getInsertPermission = function () { return Masters.LocationsRow.insertPermission; };
            LocationsDialog.prototype.getUpdatePermission = function () { return Masters.LocationsRow.updatePermission; };
            LocationsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationsDialog);
            return LocationsDialog;
        }(Serenity.EntityDialog));
        Masters.LocationsDialog = LocationsDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var LocationsGrid = /** @class */ (function (_super) {
            __extends(LocationsGrid, _super);
            function LocationsGrid(container) {
                return _super.call(this, container) || this;
            }
            LocationsGrid.prototype.getColumnsKey = function () { return 'Masters.Locations'; };
            LocationsGrid.prototype.getDialogType = function () { return Masters.LocationsDialog; };
            LocationsGrid.prototype.getIsActiveProperty = function () { return Masters.LocationsRow.isActiveProperty; };
            LocationsGrid.prototype.getIdProperty = function () { return Masters.LocationsRow.idProperty; };
            LocationsGrid.prototype.getInsertPermission = function () { return Masters.LocationsRow.insertPermission; };
            LocationsGrid.prototype.getLocalTextPrefix = function () { return Masters.LocationsRow.localTextPrefix; };
            LocationsGrid.prototype.getService = function () { return Masters.LocationsService.baseUrl; };
            LocationsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationsGrid);
            return LocationsGrid;
        }(Serenity.EntityGrid));
        Masters.LocationsGrid = LocationsGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var MeetingTypesDialog = /** @class */ (function (_super) {
            __extends(MeetingTypesDialog, _super);
            function MeetingTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.MeetingTypesForm(_this.idPrefix);
                return _this;
            }
            MeetingTypesDialog.prototype.getFormKey = function () { return Masters.MeetingTypesForm.formKey; };
            MeetingTypesDialog.prototype.getIdProperty = function () { return Masters.MeetingTypesRow.idProperty; };
            MeetingTypesDialog.prototype.getLocalTextPrefix = function () { return Masters.MeetingTypesRow.localTextPrefix; };
            MeetingTypesDialog.prototype.getNameProperty = function () { return Masters.MeetingTypesRow.nameProperty; };
            MeetingTypesDialog.prototype.getService = function () { return Masters.MeetingTypesService.baseUrl; };
            MeetingTypesDialog.prototype.getDeletePermission = function () { return Masters.MeetingTypesRow.deletePermission; };
            MeetingTypesDialog.prototype.getInsertPermission = function () { return Masters.MeetingTypesRow.insertPermission; };
            MeetingTypesDialog.prototype.getUpdatePermission = function () { return Masters.MeetingTypesRow.updatePermission; };
            MeetingTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingTypesDialog);
            return MeetingTypesDialog;
        }(Serenity.EntityDialog));
        Masters.MeetingTypesDialog = MeetingTypesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var MeetingTypesGrid = /** @class */ (function (_super) {
            __extends(MeetingTypesGrid, _super);
            function MeetingTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingTypesGrid.prototype.getColumnsKey = function () { return 'Masters.MeetingTypes'; };
            MeetingTypesGrid.prototype.getDialogType = function () { return Masters.MeetingTypesDialog; };
            MeetingTypesGrid.prototype.getIsActiveProperty = function () { return Masters.MeetingTypesRow.isActiveProperty; };
            MeetingTypesGrid.prototype.getIdProperty = function () { return Masters.MeetingTypesRow.idProperty; };
            MeetingTypesGrid.prototype.getInsertPermission = function () { return Masters.MeetingTypesRow.insertPermission; };
            MeetingTypesGrid.prototype.getLocalTextPrefix = function () { return Masters.MeetingTypesRow.localTextPrefix; };
            MeetingTypesGrid.prototype.getService = function () { return Masters.MeetingTypesService.baseUrl; };
            MeetingTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingTypesGrid);
            return MeetingTypesGrid;
        }(Serenity.EntityGrid));
        Masters.MeetingTypesGrid = MeetingTypesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ResolutionStatusesDialog = /** @class */ (function (_super) {
            __extends(ResolutionStatusesDialog, _super);
            function ResolutionStatusesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.ResolutionStatusesForm(_this.idPrefix);
                return _this;
            }
            ResolutionStatusesDialog.prototype.getFormKey = function () { return Masters.ResolutionStatusesForm.formKey; };
            ResolutionStatusesDialog.prototype.getIdProperty = function () { return Masters.ResolutionStatusesRow.idProperty; };
            ResolutionStatusesDialog.prototype.getLocalTextPrefix = function () { return Masters.ResolutionStatusesRow.localTextPrefix; };
            ResolutionStatusesDialog.prototype.getNameProperty = function () { return Masters.ResolutionStatusesRow.nameProperty; };
            ResolutionStatusesDialog.prototype.getService = function () { return Masters.ResolutionStatusesService.baseUrl; };
            ResolutionStatusesDialog.prototype.getDeletePermission = function () { return Masters.ResolutionStatusesRow.deletePermission; };
            ResolutionStatusesDialog.prototype.getInsertPermission = function () { return Masters.ResolutionStatusesRow.insertPermission; };
            ResolutionStatusesDialog.prototype.getUpdatePermission = function () { return Masters.ResolutionStatusesRow.updatePermission; };
            ResolutionStatusesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ResolutionStatusesDialog);
            return ResolutionStatusesDialog;
        }(Serenity.EntityDialog));
        Masters.ResolutionStatusesDialog = ResolutionStatusesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var ResolutionStatusesGrid = /** @class */ (function (_super) {
            __extends(ResolutionStatusesGrid, _super);
            function ResolutionStatusesGrid(container) {
                return _super.call(this, container) || this;
            }
            ResolutionStatusesGrid.prototype.getColumnsKey = function () { return 'Masters.ResolutionStatuses'; };
            ResolutionStatusesGrid.prototype.getDialogType = function () { return Masters.ResolutionStatusesDialog; };
            ResolutionStatusesGrid.prototype.getIsActiveProperty = function () { return Masters.ResolutionStatusesRow.isActiveProperty; };
            ResolutionStatusesGrid.prototype.getIdProperty = function () { return Masters.ResolutionStatusesRow.idProperty; };
            ResolutionStatusesGrid.prototype.getInsertPermission = function () { return Masters.ResolutionStatusesRow.insertPermission; };
            ResolutionStatusesGrid.prototype.getLocalTextPrefix = function () { return Masters.ResolutionStatusesRow.localTextPrefix; };
            ResolutionStatusesGrid.prototype.getService = function () { return Masters.ResolutionStatusesService.baseUrl; };
            ResolutionStatusesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ResolutionStatusesGrid);
            return ResolutionStatusesGrid;
        }(Serenity.EntityGrid));
        Masters.ResolutionStatusesGrid = ResolutionStatusesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var SupplierGroupsDialog = /** @class */ (function (_super) {
            __extends(SupplierGroupsDialog, _super);
            function SupplierGroupsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.SupplierGroupsForm(_this.idPrefix);
                return _this;
            }
            SupplierGroupsDialog.prototype.getFormKey = function () { return Masters.SupplierGroupsForm.formKey; };
            SupplierGroupsDialog.prototype.getIdProperty = function () { return Masters.SupplierGroupsRow.idProperty; };
            SupplierGroupsDialog.prototype.getLocalTextPrefix = function () { return Masters.SupplierGroupsRow.localTextPrefix; };
            SupplierGroupsDialog.prototype.getNameProperty = function () { return Masters.SupplierGroupsRow.nameProperty; };
            SupplierGroupsDialog.prototype.getService = function () { return Masters.SupplierGroupsService.baseUrl; };
            SupplierGroupsDialog.prototype.getDeletePermission = function () { return Masters.SupplierGroupsRow.deletePermission; };
            SupplierGroupsDialog.prototype.getInsertPermission = function () { return Masters.SupplierGroupsRow.insertPermission; };
            SupplierGroupsDialog.prototype.getUpdatePermission = function () { return Masters.SupplierGroupsRow.updatePermission; };
            SupplierGroupsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGroupsDialog);
            return SupplierGroupsDialog;
        }(Serenity.EntityDialog));
        Masters.SupplierGroupsDialog = SupplierGroupsDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var SupplierGroupsGrid = /** @class */ (function (_super) {
            __extends(SupplierGroupsGrid, _super);
            function SupplierGroupsGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGroupsGrid.prototype.getColumnsKey = function () { return 'Masters.SupplierGroups'; };
            SupplierGroupsGrid.prototype.getDialogType = function () { return Masters.SupplierGroupsDialog; };
            SupplierGroupsGrid.prototype.getIdProperty = function () { return Masters.SupplierGroupsRow.idProperty; };
            SupplierGroupsGrid.prototype.getIsActiveProperty = function () { return Masters.SupplierGroupsRow.isActiveProperty; };
            SupplierGroupsGrid.prototype.getInsertPermission = function () { return Masters.SupplierGroupsRow.insertPermission; };
            SupplierGroupsGrid.prototype.getLocalTextPrefix = function () { return Masters.SupplierGroupsRow.localTextPrefix; };
            SupplierGroupsGrid.prototype.getService = function () { return Masters.SupplierGroupsService.baseUrl; };
            SupplierGroupsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGroupsGrid);
            return SupplierGroupsGrid;
        }(Serenity.EntityGrid));
        Masters.SupplierGroupsGrid = SupplierGroupsGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleMakesDialog = /** @class */ (function (_super) {
            __extends(VehicleMakesDialog, _super);
            function VehicleMakesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.VehicleMakesForm(_this.idPrefix);
                return _this;
            }
            VehicleMakesDialog.prototype.getFormKey = function () { return Masters.VehicleMakesForm.formKey; };
            VehicleMakesDialog.prototype.getIdProperty = function () { return Masters.VehicleMakesRow.idProperty; };
            VehicleMakesDialog.prototype.getLocalTextPrefix = function () { return Masters.VehicleMakesRow.localTextPrefix; };
            VehicleMakesDialog.prototype.getNameProperty = function () { return Masters.VehicleMakesRow.nameProperty; };
            VehicleMakesDialog.prototype.getService = function () { return Masters.VehicleMakesService.baseUrl; };
            VehicleMakesDialog.prototype.getDeletePermission = function () { return Masters.VehicleMakesRow.deletePermission; };
            VehicleMakesDialog.prototype.getInsertPermission = function () { return Masters.VehicleMakesRow.insertPermission; };
            VehicleMakesDialog.prototype.getUpdatePermission = function () { return Masters.VehicleMakesRow.updatePermission; };
            VehicleMakesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleMakesDialog);
            return VehicleMakesDialog;
        }(Serenity.EntityDialog));
        Masters.VehicleMakesDialog = VehicleMakesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleMakesGrid = /** @class */ (function (_super) {
            __extends(VehicleMakesGrid, _super);
            function VehicleMakesGrid(container) {
                return _super.call(this, container) || this;
            }
            VehicleMakesGrid.prototype.getColumnsKey = function () { return 'Masters.VehicleMakes'; };
            VehicleMakesGrid.prototype.getDialogType = function () { return Masters.VehicleMakesDialog; };
            VehicleMakesGrid.prototype.getIdProperty = function () { return Masters.VehicleMakesRow.idProperty; };
            VehicleMakesGrid.prototype.getInsertPermission = function () { return Masters.VehicleMakesRow.insertPermission; };
            VehicleMakesGrid.prototype.getLocalTextPrefix = function () { return Masters.VehicleMakesRow.localTextPrefix; };
            VehicleMakesGrid.prototype.getService = function () { return Masters.VehicleMakesService.baseUrl; };
            VehicleMakesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleMakesGrid);
            return VehicleMakesGrid;
        }(Serenity.EntityGrid));
        Masters.VehicleMakesGrid = VehicleMakesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleModelsDialog = /** @class */ (function (_super) {
            __extends(VehicleModelsDialog, _super);
            function VehicleModelsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.VehicleModelsForm(_this.idPrefix);
                return _this;
            }
            VehicleModelsDialog.prototype.getFormKey = function () { return Masters.VehicleModelsForm.formKey; };
            VehicleModelsDialog.prototype.getIdProperty = function () { return Masters.VehicleModelsRow.idProperty; };
            VehicleModelsDialog.prototype.getLocalTextPrefix = function () { return Masters.VehicleModelsRow.localTextPrefix; };
            VehicleModelsDialog.prototype.getNameProperty = function () { return Masters.VehicleModelsRow.nameProperty; };
            VehicleModelsDialog.prototype.getService = function () { return Masters.VehicleModelsService.baseUrl; };
            VehicleModelsDialog.prototype.getDeletePermission = function () { return Masters.VehicleModelsRow.deletePermission; };
            VehicleModelsDialog.prototype.getInsertPermission = function () { return Masters.VehicleModelsRow.insertPermission; };
            VehicleModelsDialog.prototype.getUpdatePermission = function () { return Masters.VehicleModelsRow.updatePermission; };
            VehicleModelsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleModelsDialog);
            return VehicleModelsDialog;
        }(Serenity.EntityDialog));
        Masters.VehicleModelsDialog = VehicleModelsDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleModelsGrid = /** @class */ (function (_super) {
            __extends(VehicleModelsGrid, _super);
            function VehicleModelsGrid(container) {
                return _super.call(this, container) || this;
            }
            VehicleModelsGrid.prototype.getColumnsKey = function () { return 'Masters.VehicleModels'; };
            VehicleModelsGrid.prototype.getDialogType = function () { return Masters.VehicleModelsDialog; };
            VehicleModelsGrid.prototype.getIdProperty = function () { return Masters.VehicleModelsRow.idProperty; };
            VehicleModelsGrid.prototype.getInsertPermission = function () { return Masters.VehicleModelsRow.insertPermission; };
            VehicleModelsGrid.prototype.getLocalTextPrefix = function () { return Masters.VehicleModelsRow.localTextPrefix; };
            VehicleModelsGrid.prototype.getService = function () { return Masters.VehicleModelsService.baseUrl; };
            VehicleModelsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleModelsGrid);
            return VehicleModelsGrid;
        }(Serenity.EntityGrid));
        Masters.VehicleModelsGrid = VehicleModelsGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleTypesDialog = /** @class */ (function (_super) {
            __extends(VehicleTypesDialog, _super);
            function VehicleTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Masters.VehicleTypesForm(_this.idPrefix);
                return _this;
            }
            VehicleTypesDialog.prototype.getFormKey = function () { return Masters.VehicleTypesForm.formKey; };
            VehicleTypesDialog.prototype.getIdProperty = function () { return Masters.VehicleTypesRow.idProperty; };
            VehicleTypesDialog.prototype.getLocalTextPrefix = function () { return Masters.VehicleTypesRow.localTextPrefix; };
            VehicleTypesDialog.prototype.getNameProperty = function () { return Masters.VehicleTypesRow.nameProperty; };
            VehicleTypesDialog.prototype.getService = function () { return Masters.VehicleTypesService.baseUrl; };
            VehicleTypesDialog.prototype.getDeletePermission = function () { return Masters.VehicleTypesRow.deletePermission; };
            VehicleTypesDialog.prototype.getInsertPermission = function () { return Masters.VehicleTypesRow.insertPermission; };
            VehicleTypesDialog.prototype.getUpdatePermission = function () { return Masters.VehicleTypesRow.updatePermission; };
            VehicleTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleTypesDialog);
            return VehicleTypesDialog;
        }(Serenity.EntityDialog));
        Masters.VehicleTypesDialog = VehicleTypesDialog;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Masters;
    (function (Masters) {
        var VehicleTypesGrid = /** @class */ (function (_super) {
            __extends(VehicleTypesGrid, _super);
            function VehicleTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            VehicleTypesGrid.prototype.getColumnsKey = function () { return 'Masters.VehicleTypes'; };
            VehicleTypesGrid.prototype.getDialogType = function () { return Masters.VehicleTypesDialog; };
            VehicleTypesGrid.prototype.getIdProperty = function () { return Masters.VehicleTypesRow.idProperty; };
            VehicleTypesGrid.prototype.getInsertPermission = function () { return Masters.VehicleTypesRow.insertPermission; };
            VehicleTypesGrid.prototype.getLocalTextPrefix = function () { return Masters.VehicleTypesRow.localTextPrefix; };
            VehicleTypesGrid.prototype.getService = function () { return Masters.VehicleTypesService.baseUrl; };
            VehicleTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VehicleTypesGrid);
            return VehicleTypesGrid;
        }(Serenity.EntityGrid));
        Masters.VehicleTypesGrid = VehicleTypesGrid;
    })(Masters = SmartERP.Masters || (SmartERP.Masters = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsDialog = /** @class */ (function (_super) {
            __extends(AgendaDecisionsDialog, _super);
            function AgendaDecisionsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.AgendaDecisionsForm(_this.idPrefix);
                _this.form = new Meeting.AgendaDecisionsForm(_this.idPrefix);
                var url = window.location.href;
                var index = url.lastIndexOf('Meetings#edit/');
                var metingId = Q.toId(url.substring(index).replace('Meetings#edit/', ''));
                return _this;
                //this.form.RelatedAgendaItem.
                //this.form.Meeting.set_value(metingId);
            }
            AgendaDecisionsDialog.prototype.getFormKey = function () { return Meeting.AgendaDecisionsForm.formKey; };
            AgendaDecisionsDialog.prototype.getIdProperty = function () { return Meeting.AgendaDecisionsRow.idProperty; };
            AgendaDecisionsDialog.prototype.getLocalTextPrefix = function () { return Meeting.AgendaDecisionsRow.localTextPrefix; };
            AgendaDecisionsDialog.prototype.getNameProperty = function () { return Meeting.AgendaDecisionsRow.nameProperty; };
            AgendaDecisionsDialog.prototype.getService = function () { return Meeting.AgendaDecisionsService.baseUrl; };
            AgendaDecisionsDialog.prototype.getDeletePermission = function () { return Meeting.AgendaDecisionsRow.deletePermission; };
            AgendaDecisionsDialog.prototype.getInsertPermission = function () { return Meeting.AgendaDecisionsRow.insertPermission; };
            AgendaDecisionsDialog.prototype.getUpdatePermission = function () { return Meeting.AgendaDecisionsRow.updatePermission; };
            AgendaDecisionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaDecisionsDialog);
            return AgendaDecisionsDialog;
        }(Serenity.EntityDialog));
        Meeting.AgendaDecisionsDialog = AgendaDecisionsDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsGrid = /** @class */ (function (_super) {
            __extends(AgendaDecisionsGrid, _super);
            function AgendaDecisionsGrid(container) {
                return _super.call(this, container) || this;
            }
            AgendaDecisionsGrid.prototype.getColumnsKey = function () { return 'Meeting.AgendaDecisions'; };
            AgendaDecisionsGrid.prototype.getDialogType = function () { return Meeting.AgendaDecisionsDialog; };
            AgendaDecisionsGrid.prototype.getIsActiveProperty = function () { return Meeting.AgendaDecisionsRow.isActiveProperty; };
            AgendaDecisionsGrid.prototype.getIdProperty = function () { return Meeting.AgendaDecisionsRow.idProperty; };
            AgendaDecisionsGrid.prototype.getInsertPermission = function () { return Meeting.AgendaDecisionsRow.insertPermission; };
            AgendaDecisionsGrid.prototype.getLocalTextPrefix = function () { return Meeting.AgendaDecisionsRow.localTextPrefix; };
            AgendaDecisionsGrid.prototype.getService = function () { return Meeting.AgendaDecisionsService.baseUrl; };
            AgendaDecisionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaDecisionsGrid);
            return AgendaDecisionsGrid;
        }(Serenity.EntityGrid));
        Meeting.AgendaDecisionsGrid = AgendaDecisionsGrid;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsDialog = /** @class */ (function (_super) {
            __extends(AgendaItemsDialog, _super);
            function AgendaItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.AgendaItemsForm(_this.idPrefix);
                return _this;
            }
            AgendaItemsDialog.prototype.getFormKey = function () { return Meeting.AgendaItemsForm.formKey; };
            AgendaItemsDialog.prototype.getIdProperty = function () { return Meeting.AgendaItemsRow.idProperty; };
            AgendaItemsDialog.prototype.getLocalTextPrefix = function () { return Meeting.AgendaItemsRow.localTextPrefix; };
            AgendaItemsDialog.prototype.getNameProperty = function () { return Meeting.AgendaItemsRow.nameProperty; };
            AgendaItemsDialog.prototype.getService = function () { return Meeting.AgendaItemsService.baseUrl; };
            AgendaItemsDialog.prototype.getDeletePermission = function () { return Meeting.AgendaItemsRow.deletePermission; };
            AgendaItemsDialog.prototype.getInsertPermission = function () { return Meeting.AgendaItemsRow.insertPermission; };
            AgendaItemsDialog.prototype.getUpdatePermission = function () { return Meeting.AgendaItemsRow.updatePermission; };
            AgendaItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaItemsDialog);
            return AgendaItemsDialog;
        }(Serenity.EntityDialog));
        Meeting.AgendaItemsDialog = AgendaItemsDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsGrid = /** @class */ (function (_super) {
            __extends(AgendaItemsGrid, _super);
            function AgendaItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            AgendaItemsGrid.prototype.getColumnsKey = function () { return 'Meeting.AgendaItems'; };
            AgendaItemsGrid.prototype.getDialogType = function () { return Meeting.AgendaItemsDialog; };
            AgendaItemsGrid.prototype.getIsActiveProperty = function () { return Meeting.AgendaItemsRow.isActiveProperty; };
            AgendaItemsGrid.prototype.getIdProperty = function () { return Meeting.AgendaItemsRow.idProperty; };
            AgendaItemsGrid.prototype.getInsertPermission = function () { return Meeting.AgendaItemsRow.insertPermission; };
            AgendaItemsGrid.prototype.getLocalTextPrefix = function () { return Meeting.AgendaItemsRow.localTextPrefix; };
            AgendaItemsGrid.prototype.getService = function () { return Meeting.AgendaItemsService.baseUrl; };
            AgendaItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaItemsGrid);
            return AgendaItemsGrid;
        }(Serenity.EntityGrid));
        Meeting.AgendaItemsGrid = AgendaItemsGrid;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesDialog = /** @class */ (function (_super) {
            __extends(MeetingAttendeesDialog, _super);
            function MeetingAttendeesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Meeting.MeetingAttendeesForm(_this.idPrefix);
                return _this;
            }
            MeetingAttendeesDialog.prototype.getFormKey = function () { return Meeting.MeetingAttendeesForm.formKey; };
            MeetingAttendeesDialog.prototype.getIdProperty = function () { return Meeting.MeetingAttendeesRow.idProperty; };
            MeetingAttendeesDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeesRow.localTextPrefix; };
            MeetingAttendeesDialog.prototype.getService = function () { return Meeting.MeetingAttendeesService.baseUrl; };
            MeetingAttendeesDialog.prototype.getDeletePermission = function () { return Meeting.MeetingAttendeesRow.deletePermission; };
            MeetingAttendeesDialog.prototype.getInsertPermission = function () { return Meeting.MeetingAttendeesRow.insertPermission; };
            MeetingAttendeesDialog.prototype.getUpdatePermission = function () { return Meeting.MeetingAttendeesRow.updatePermission; };
            MeetingAttendeesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAttendeesDialog);
            return MeetingAttendeesDialog;
        }(Serenity.EntityDialog));
        Meeting.MeetingAttendeesDialog = MeetingAttendeesDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesGrid = /** @class */ (function (_super) {
            __extends(MeetingAttendeesGrid, _super);
            function MeetingAttendeesGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingAttendeesGrid.prototype.getColumnsKey = function () { return 'Meeting.MeetingAttendees'; };
            MeetingAttendeesGrid.prototype.getDialogType = function () { return Meeting.MeetingAttendeesDialog; };
            MeetingAttendeesGrid.prototype.getIsActiveProperty = function () { return Meeting.MeetingAttendeesRow.isActiveProperty; };
            MeetingAttendeesGrid.prototype.getIdProperty = function () { return Meeting.MeetingAttendeesRow.idProperty; };
            MeetingAttendeesGrid.prototype.getInsertPermission = function () { return Meeting.MeetingAttendeesRow.insertPermission; };
            MeetingAttendeesGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeesRow.localTextPrefix; };
            MeetingAttendeesGrid.prototype.getService = function () { return Meeting.MeetingAttendeesService.baseUrl; };
            MeetingAttendeesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAttendeesGrid);
            return MeetingAttendeesGrid;
        }(Serenity.EntityGrid));
        Meeting.MeetingAttendeesGrid = MeetingAttendeesGrid;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsEditDialog = /** @class */ (function (_super) {
            __extends(AgendaDecisionsEditDialog, _super);
            function AgendaDecisionsEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.AgendaDecisionsForm(_this.idPrefix);
                var url = window.location.href;
                var index = url.lastIndexOf('Meetings#edit/');
                var metingId = Q.toId(url.substring(index).replace('Meetings#edit/', ''));
                return _this;
                //alert(this.form.ResolutionStatus.value);
                //this.form.Meeting.value=metingId;
            }
            AgendaDecisionsEditDialog.prototype.getFormKey = function () { return Meeting.AgendaDecisionsForm.formKey; };
            AgendaDecisionsEditDialog.prototype.getNameProperty = function () { return Meeting.AgendaDecisionsRow.nameProperty; };
            AgendaDecisionsEditDialog.prototype.getLocalTextPrefix = function () { return Meeting.AgendaDecisionsRow.localTextPrefix; };
            //protected updateInterface() {
            //    super.updateInterface();
            //    var url = window.location.href
            //    var index = url.lastIndexOf('Meetings#edit/');
            //    var metingId = Q.toId(url.substring(index).replace('Meetings#edit/', ''));
            //    //this.form.RelatedAgendaItem.cascadeFrom = "Meeting";
            //    //this.form.RelatedAgendaItem.value = metingId;
            //    this.form.Meeting.value = metingId;
            //}d    
            AgendaDecisionsEditDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                var url = window.location.href;
                var index = url.lastIndexOf('Meetings#edit/');
                if (index > 0) {
                    var metingId = Q.toId(url.substring(index).replace('Meetings#edit/', ''));
                    //this.form.RelatedAgendaItem.cascadeFrom = "Meeting";
                    //this.form.RelatedAgendaItem.value = metingId;
                    this.form.Meeting.value = metingId;
                    this.form.Meeting.element.trigger("change");
                    //console.log(this.form.ResolutionStatus);
                    //alert(this.form.ResolutionStatus.value);
                }
            };
            AgendaDecisionsEditDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                //alert(this.form.ResolutionStatus.value);
                //console.log(this.form.ResolutionStatus);
                //this.form.Meeting.setState();
                //var url = window.location.href
                //alert(url);
                //var index = url.lastIndexOf('Meetings#edit/');
                //alert(index);
                //var substring = url.substring(index).replace('Meetings#edit/', '');
                //alert(substring);
                //var q = Q.parseQueryString();
                //console.log(q);
            };
            AgendaDecisionsEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaDecisionsEditDialog);
            return AgendaDecisionsEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Meeting.AgendaDecisionsEditDialog = AgendaDecisionsEditDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaDecisionsEditor = /** @class */ (function (_super) {
            __extends(AgendaDecisionsEditor, _super);
            function AgendaDecisionsEditor(container) {
                return _super.call(this, container) || this;
            }
            AgendaDecisionsEditor.prototype.getColumnsKey = function () { return "Meeting.AgendaDecisions"; };
            AgendaDecisionsEditor.prototype.getLocalTextPrefix = function () { return Meeting.AgendaDecisionsRow.localTextPrefix; };
            AgendaDecisionsEditor.prototype.getDialogType = function () { return Meeting.AgendaDecisionsEditDialog; };
            AgendaDecisionsEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            AgendaDecisionsEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.AssignedTo) {
                    row.AssignedToFullName = SmartERP.HumanResource.EmployeesRow.getLookup()
                        .itemById[row.AssignedTo].EmployeeFullName;
                }
                if (row.RelatedAgendaItem) {
                    row.RelatedAgendaItemTitle = SmartERP.Meeting.AgendaItemsRow.getLookup()
                        .itemById[row.RelatedAgendaItem].Title;
                }
                if (row.ResolutionStatus) {
                    row.ResolutionStatusName = SmartERP.Masters.ResolutionStatusesRow.getLookup().itemById[row.ResolutionStatus].Name;
                }
                return true;
            };
            AgendaDecisionsEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            AgendaDecisionsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AgendaDecisionsEditor);
            return AgendaDecisionsEditor;
        }(SmartERP.Common.GridEditorBase));
        Meeting.AgendaDecisionsEditor = AgendaDecisionsEditor;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsEditDialog = /** @class */ (function (_super) {
            __extends(AgendaItemsEditDialog, _super);
            function AgendaItemsEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.AgendaItemsForm(_this.idPrefix);
                return _this;
            }
            AgendaItemsEditDialog.prototype.getFormKey = function () { return Meeting.AgendaItemsForm.formKey; };
            AgendaItemsEditDialog.prototype.getNameProperty = function () { return Meeting.AgendaItemsRow.nameProperty; };
            AgendaItemsEditDialog.prototype.getLocalTextPrefix = function () { return Meeting.AgendaItemsRow.localTextPrefix; };
            AgendaItemsEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AgendaItemsEditDialog);
            return AgendaItemsEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Meeting.AgendaItemsEditDialog = AgendaItemsEditDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var AgendaItemsEditor = /** @class */ (function (_super) {
            __extends(AgendaItemsEditor, _super);
            function AgendaItemsEditor(container) {
                return _super.call(this, container) || this;
            }
            AgendaItemsEditor.prototype.getColumnsKey = function () { return "Meeting.AgendaItems"; };
            AgendaItemsEditor.prototype.getLocalTextPrefix = function () { return Meeting.AgendaItemsRow.localTextPrefix; };
            AgendaItemsEditor.prototype.getDialogType = function () { return Meeting.AgendaItemsEditDialog; };
            AgendaItemsEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            AgendaItemsEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.RequestedBy) {
                    row.RequestedByFullName = SmartERP.HumanResource.EmployeesRow.getLookup()
                        .itemById[row.RequestedBy].EmployeeFullName;
                }
                if (row.ItemType) {
                    row.ItemTypeName = SmartERP.Masters.MeetingTypesRow.getLookup().itemById[row.ItemType].Name;
                }
                return true;
            };
            AgendaItemsEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            AgendaItemsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AgendaItemsEditor);
            return AgendaItemsEditor;
        }(SmartERP.Common.GridEditorBase));
        Meeting.AgendaItemsEditor = AgendaItemsEditor;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesEditDialog = /** @class */ (function (_super) {
            __extends(MeetingAttendeesEditDialog, _super);
            function MeetingAttendeesEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.MeetingAttendeesForm(_this.idPrefix);
                return _this;
                //this.form.ProductId.changeSelect2(e => {
                //    var productID = Q.toId(this.form.ProductId.value);
                //    if (productID != null) {
                //        this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                //        this.form.Quantity.value = 1;
                //        this.form.Discount.value = 0;
                //        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                //        this.form.UnitId.value = unitId;
                //    }
                //});
            }
            MeetingAttendeesEditDialog.prototype.getFormKey = function () { return Meeting.MeetingAttendeesForm.formKey; };
            //protected getNameProperty() { return MeetingAttendeesRow.nameProperty; }
            MeetingAttendeesEditDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeesRow.localTextPrefix; };
            MeetingAttendeesEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MeetingAttendeesEditDialog);
            return MeetingAttendeesEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Meeting.MeetingAttendeesEditDialog = MeetingAttendeesEditDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingAttendeesEditor = /** @class */ (function (_super) {
            __extends(MeetingAttendeesEditor, _super);
            function MeetingAttendeesEditor(container) {
                return _super.call(this, container) || this;
            }
            MeetingAttendeesEditor.prototype.getColumnsKey = function () { return "Meeting.MeetingAttendees"; };
            MeetingAttendeesEditor.prototype.getLocalTextPrefix = function () { return Meeting.MeetingAttendeesRow.localTextPrefix; };
            MeetingAttendeesEditor.prototype.getDialogType = function () { return Meeting.MeetingAttendeesEditDialog; };
            MeetingAttendeesEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            MeetingAttendeesEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.Attendee) {
                    row.AttendeeFullName = SmartERP.HumanResource.EmployeesRow.getLookup()
                        .itemById[row.Attendee].EmployeeFullName;
                }
                if (row.AttendeeType) {
                    row.AttendeeTypeName = SmartERP.Masters.AttendeeTypesRow.getLookup().itemById[row.AttendeeType].Name;
                }
                if (row.AttendanceStatus) {
                    row.AttendanceStatusName = SmartERP.Masters.AttendanceStatusesRow.getLookup().itemById[row.AttendanceStatus].Name;
                }
                return true;
            };
            MeetingAttendeesEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            MeetingAttendeesEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], MeetingAttendeesEditor);
            return MeetingAttendeesEditor;
        }(SmartERP.Common.GridEditorBase));
        Meeting.MeetingAttendeesEditor = MeetingAttendeesEditor;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingsDialog = /** @class */ (function (_super) {
            __extends(MeetingsDialog, _super);
            function MeetingsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Meeting.MeetingsForm(_this.idPrefix);
                return _this;
                //var q = Q.parseQueryString();
                //var url = window.location.href
                // alert(url);
                // var index = url.indexOf('#');
                // alert(url.substring(index,2));
            }
            MeetingsDialog.prototype.getFormKey = function () { return Meeting.MeetingsForm.formKey; };
            MeetingsDialog.prototype.getIdProperty = function () { return Meeting.MeetingsRow.idProperty; };
            MeetingsDialog.prototype.getLocalTextPrefix = function () { return Meeting.MeetingsRow.localTextPrefix; };
            MeetingsDialog.prototype.getNameProperty = function () { return Meeting.MeetingsRow.nameProperty; };
            MeetingsDialog.prototype.getService = function () { return Meeting.MeetingsService.baseUrl; };
            MeetingsDialog.prototype.getDeletePermission = function () { return Meeting.MeetingsRow.deletePermission; };
            MeetingsDialog.prototype.getInsertPermission = function () { return Meeting.MeetingsRow.insertPermission; };
            MeetingsDialog.prototype.getUpdatePermission = function () { return Meeting.MeetingsRow.updatePermission; };
            MeetingsDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                //var q = Q.parseQueryString();
                //alert(q["Id"]);
                if (this.isNewOrDeleted() == true) {
                    var $tabs = $('.property-tabs');
                    $tabs.children().each(function (index, tab) {
                        if (index > 0) {
                            $(tab).addClass('ui-state-disabled');
                            $(tab).on('click', function () { return false; });
                        }
                    });
                }
            };
            MeetingsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], MeetingsDialog);
            return MeetingsDialog;
        }(Serenity.EntityDialog));
        Meeting.MeetingsDialog = MeetingsDialog;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Meeting;
    (function (Meeting) {
        var MeetingsGrid = /** @class */ (function (_super) {
            __extends(MeetingsGrid, _super);
            function MeetingsGrid(container) {
                return _super.call(this, container) || this;
            }
            MeetingsGrid.prototype.getColumnsKey = function () { return 'Meeting.Meetings'; };
            MeetingsGrid.prototype.getDialogType = function () { return Meeting.MeetingsDialog; };
            MeetingsGrid.prototype.getIsActiveProperty = function () { return Meeting.MeetingsRow.isActiveProperty; };
            MeetingsGrid.prototype.getIdProperty = function () { return Meeting.MeetingsRow.idProperty; };
            MeetingsGrid.prototype.getInsertPermission = function () { return Meeting.MeetingsRow.insertPermission; };
            MeetingsGrid.prototype.getLocalTextPrefix = function () { return Meeting.MeetingsRow.localTextPrefix; };
            MeetingsGrid.prototype.getService = function () { return Meeting.MeetingsService.baseUrl; };
            MeetingsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], MeetingsGrid);
            return MeetingsGrid;
        }(Serenity.EntityGrid));
        Meeting.MeetingsGrid = MeetingsGrid;
    })(Meeting = SmartERP.Meeting || (SmartERP.Meeting = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (window.location !== window.parent.location) {
                        Q.notifyError("To log in to SmartGarage to view the demo please <strong>click on the</strong> <h4>Remove Frame</h4> <h5>Button on Top Bar at Right Corner</h5>", '', { hideDuration: 500000, closeButton: true });
                        return;
                    }
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n     <div style=\"text-align:center\">\n        <img src=\"/Content/images/logo-login.svg\" style=\"height:100px;\"/>\n    </div>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    ".concat(Q.text("Forms.Membership.Login.SignInButton"), "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"").concat(Q.resolveUrl('~/Account/ForgotPassword'), "\"><i class=\"fa fa-angle-right\"></i>&nbsp;").concat(Q.text("Forms.Membership.Login.ForgotPassword"), "</a>               \n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n");
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = SmartERP.Membership || (SmartERP.Membership = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var BrandsDialog = /** @class */ (function (_super) {
            __extends(BrandsDialog, _super);
            function BrandsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Products.BrandsForm(_this.idPrefix);
                return _this;
            }
            BrandsDialog.prototype.getFormKey = function () { return Products.BrandsForm.formKey; };
            BrandsDialog.prototype.getIdProperty = function () { return Products.BrandsRow.idProperty; };
            BrandsDialog.prototype.getLocalTextPrefix = function () { return Products.BrandsRow.localTextPrefix; };
            BrandsDialog.prototype.getNameProperty = function () { return Products.BrandsRow.nameProperty; };
            BrandsDialog.prototype.getService = function () { return Products.BrandsService.baseUrl; };
            BrandsDialog.prototype.getDeletePermission = function () { return Products.BrandsRow.deletePermission; };
            BrandsDialog.prototype.getInsertPermission = function () { return Products.BrandsRow.insertPermission; };
            BrandsDialog.prototype.getUpdatePermission = function () { return Products.BrandsRow.updatePermission; };
            BrandsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BrandsDialog);
            return BrandsDialog;
        }(Serenity.EntityDialog));
        Products.BrandsDialog = BrandsDialog;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var BrandsGrid = /** @class */ (function (_super) {
            __extends(BrandsGrid, _super);
            function BrandsGrid(container) {
                return _super.call(this, container) || this;
            }
            BrandsGrid.prototype.getColumnsKey = function () { return 'Products.Brands'; };
            BrandsGrid.prototype.getDialogType = function () { return Products.BrandsDialog; };
            BrandsGrid.prototype.getIsActiveProperty = function () { return Products.BrandsRow.isActiveProperty; };
            BrandsGrid.prototype.getIdProperty = function () { return Products.BrandsRow.idProperty; };
            BrandsGrid.prototype.getInsertPermission = function () { return Products.BrandsRow.insertPermission; };
            BrandsGrid.prototype.getLocalTextPrefix = function () { return Products.BrandsRow.localTextPrefix; };
            BrandsGrid.prototype.getService = function () { return Products.BrandsService.baseUrl; };
            BrandsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], BrandsGrid);
            return BrandsGrid;
        }(Serenity.EntityGrid));
        Products.BrandsGrid = BrandsGrid;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesDialog = /** @class */ (function (_super) {
            __extends(CategoriesDialog, _super);
            function CategoriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Products.CategoriesForm(_this.idPrefix);
                return _this;
            }
            CategoriesDialog.prototype.getFormKey = function () { return Products.CategoriesForm.formKey; };
            CategoriesDialog.prototype.getIdProperty = function () { return Products.CategoriesRow.idProperty; };
            CategoriesDialog.prototype.getLocalTextPrefix = function () { return Products.CategoriesRow.localTextPrefix; };
            CategoriesDialog.prototype.getNameProperty = function () { return Products.CategoriesRow.nameProperty; };
            CategoriesDialog.prototype.getService = function () { return Products.CategoriesService.baseUrl; };
            CategoriesDialog.prototype.getDeletePermission = function () { return Products.CategoriesRow.deletePermission; };
            CategoriesDialog.prototype.getInsertPermission = function () { return Products.CategoriesRow.insertPermission; };
            CategoriesDialog.prototype.getUpdatePermission = function () { return Products.CategoriesRow.updatePermission; };
            CategoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesDialog);
            return CategoriesDialog;
        }(Serenity.EntityDialog));
        Products.CategoriesDialog = CategoriesDialog;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesEditor = /** @class */ (function (_super) {
            __extends(CategoriesEditor, _super);
            function CategoriesEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CategoriesEditor.prototype.getLookupKey = function () {
                return Products.CategoriesRow.lookupKey;
            };
            CategoriesEditor.prototype.getItemText = function (item, lookup) {
                var visited = {};
                var text = item.Name;
                while (item.ParentCategoryId != null && !visited[item.ParentCategoryId]) {
                    item = lookup.itemById[item.ParentCategoryId];
                    if (!item)
                        break;
                    visited[item.Id] = true;
                    text = item.Name + " >> " + text;
                }
                return text;
            };
            CategoriesEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CategoriesEditor);
            return CategoriesEditor;
        }(Serenity.LookupEditorBase));
        Products.CategoriesEditor = CategoriesEditor;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var CategoriesGrid = /** @class */ (function (_super) {
            __extends(CategoriesGrid, _super);
            function CategoriesGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    getParentId: function (x) { return x.ParentCategoryId; },
                    toggleField: "Name" /* CategoriesRow.Fields.Name */,
                    initialCollapse: function () { return false; }
                });
                return _this;
            }
            CategoriesGrid.prototype.getColumnsKey = function () { return 'Products.Categories'; };
            CategoriesGrid.prototype.getDialogType = function () { return Products.CategoriesDialog; };
            CategoriesGrid.prototype.getIsActiveProperty = function () { return Products.CategoriesRow.isActiveProperty; };
            CategoriesGrid.prototype.getIdProperty = function () { return Products.CategoriesRow.idProperty; };
            CategoriesGrid.prototype.getInsertPermission = function () { return Products.CategoriesRow.insertPermission; };
            CategoriesGrid.prototype.getLocalTextPrefix = function () { return Products.CategoriesRow.localTextPrefix; };
            CategoriesGrid.prototype.getService = function () { return Products.CategoriesService.baseUrl; };
            CategoriesGrid.prototype.subDialogDataChange = function () {
                _super.prototype.subDialogDataChange.call(this);
                Q.reloadLookup(Products.CategoriesRow.lookupKey);
            };
            CategoriesGrid.prototype.usePager = function () {
                return false;
            };
            CategoriesGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(Q.indexOf(columns, function (x) { return x.name == "Name" /* CategoriesRow.Fields.Name */; }) + 1, 0, {
                    field: 'Add Child Unit',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action add-child-unit" title="add child unit"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            CategoriesGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('add-child-unit')) {
                        var dlg = new Products.CategoriesDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            ParentCategoryId: item.Id
                        });
                    }
                }
            };
            CategoriesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CategoriesGrid);
            return CategoriesGrid;
        }(Serenity.EntityGrid));
        Products.CategoriesGrid = CategoriesGrid;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var ProductsDialog = /** @class */ (function (_super) {
            __extends(ProductsDialog, _super);
            function ProductsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Products.ProductsForm(_this.idPrefix);
                return _this;
            }
            ProductsDialog.prototype.getFormKey = function () { return Products.ProductsForm.formKey; };
            ProductsDialog.prototype.getIdProperty = function () { return Products.ProductsRow.idProperty; };
            ProductsDialog.prototype.getLocalTextPrefix = function () { return Products.ProductsRow.localTextPrefix; };
            ProductsDialog.prototype.getNameProperty = function () { return Products.ProductsRow.nameProperty; };
            ProductsDialog.prototype.getService = function () { return Products.ProductsService.baseUrl; };
            ProductsDialog.prototype.getDeletePermission = function () { return Products.ProductsRow.deletePermission; };
            ProductsDialog.prototype.getInsertPermission = function () { return Products.ProductsRow.insertPermission; };
            ProductsDialog.prototype.getUpdatePermission = function () { return Products.ProductsRow.updatePermission; };
            ProductsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ProductsDialog);
            return ProductsDialog;
        }(Serenity.EntityDialog));
        Products.ProductsDialog = ProductsDialog;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var ProductsGrid = /** @class */ (function (_super) {
            __extends(ProductsGrid, _super);
            function ProductsGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductsGrid.prototype.getColumnsKey = function () { return 'Products.Products'; };
            ProductsGrid.prototype.getDialogType = function () { return Products.ProductsDialog; };
            ProductsGrid.prototype.getIsActiveProperty = function () { return Products.ProductsRow.isActiveProperty; };
            ProductsGrid.prototype.getIdProperty = function () { return Products.ProductsRow.idProperty; };
            ProductsGrid.prototype.getInsertPermission = function () { return Products.ProductsRow.insertPermission; };
            ProductsGrid.prototype.getLocalTextPrefix = function () { return Products.ProductsRow.localTextPrefix; };
            ProductsGrid.prototype.getService = function () { return Products.ProductsService.baseUrl; };
            ProductsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductsGrid);
            return ProductsGrid;
        }(Serenity.EntityGrid));
        Products.ProductsGrid = ProductsGrid;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var UnitsDialog = /** @class */ (function (_super) {
            __extends(UnitsDialog, _super);
            function UnitsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Products.UnitsForm(_this.idPrefix);
                return _this;
            }
            UnitsDialog.prototype.getFormKey = function () { return Products.UnitsForm.formKey; };
            UnitsDialog.prototype.getIdProperty = function () { return Products.UnitsRow.idProperty; };
            UnitsDialog.prototype.getLocalTextPrefix = function () { return Products.UnitsRow.localTextPrefix; };
            UnitsDialog.prototype.getNameProperty = function () { return Products.UnitsRow.nameProperty; };
            UnitsDialog.prototype.getService = function () { return Products.UnitsService.baseUrl; };
            UnitsDialog.prototype.getDeletePermission = function () { return Products.UnitsRow.deletePermission; };
            UnitsDialog.prototype.getInsertPermission = function () { return Products.UnitsRow.insertPermission; };
            UnitsDialog.prototype.getUpdatePermission = function () { return Products.UnitsRow.updatePermission; };
            UnitsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitsDialog);
            return UnitsDialog;
        }(Serenity.EntityDialog));
        Products.UnitsDialog = UnitsDialog;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Products;
    (function (Products) {
        var UnitsGrid = /** @class */ (function (_super) {
            __extends(UnitsGrid, _super);
            function UnitsGrid(container) {
                return _super.call(this, container) || this;
            }
            UnitsGrid.prototype.getColumnsKey = function () { return 'Products.Units'; };
            UnitsGrid.prototype.getDialogType = function () { return Products.UnitsDialog; };
            UnitsGrid.prototype.getIsActiveProperty = function () { return Products.UnitsRow.isActiveProperty; };
            UnitsGrid.prototype.getIdProperty = function () { return Products.UnitsRow.idProperty; };
            UnitsGrid.prototype.getInsertPermission = function () { return Products.UnitsRow.insertPermission; };
            UnitsGrid.prototype.getLocalTextPrefix = function () { return Products.UnitsRow.localTextPrefix; };
            UnitsGrid.prototype.getService = function () { return Products.UnitsService.baseUrl; };
            UnitsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], UnitsGrid);
            return UnitsGrid;
        }(Serenity.EntityGrid));
        Products.UnitsGrid = UnitsGrid;
    })(Products = SmartERP.Products || (SmartERP.Products = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailsDialog = /** @class */ (function (_super) {
            __extends(PurchaseDetailsDialog, _super);
            function PurchaseDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchases.PurchaseDetailsForm(_this.idPrefix);
                return _this;
            }
            PurchaseDetailsDialog.prototype.getFormKey = function () { return Purchases.PurchaseDetailsForm.formKey; };
            PurchaseDetailsDialog.prototype.getIdProperty = function () { return Purchases.PurchaseDetailsRow.idProperty; };
            PurchaseDetailsDialog.prototype.getLocalTextPrefix = function () { return Purchases.PurchaseDetailsRow.localTextPrefix; };
            PurchaseDetailsDialog.prototype.getNameProperty = function () { return Purchases.PurchaseDetailsRow.nameProperty; };
            PurchaseDetailsDialog.prototype.getService = function () { return Purchases.PurchaseDetailsService.baseUrl; };
            PurchaseDetailsDialog.prototype.getDeletePermission = function () { return Purchases.PurchaseDetailsRow.deletePermission; };
            PurchaseDetailsDialog.prototype.getInsertPermission = function () { return Purchases.PurchaseDetailsRow.insertPermission; };
            PurchaseDetailsDialog.prototype.getUpdatePermission = function () { return Purchases.PurchaseDetailsRow.updatePermission; };
            PurchaseDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseDetailsDialog);
            return PurchaseDetailsDialog;
        }(Serenity.EntityDialog));
        Purchases.PurchaseDetailsDialog = PurchaseDetailsDialog;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailsGrid = /** @class */ (function (_super) {
            __extends(PurchaseDetailsGrid, _super);
            function PurchaseDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseDetailsGrid.prototype.getColumnsKey = function () { return 'Purchases.PurchaseDetails'; };
            PurchaseDetailsGrid.prototype.getDialogType = function () { return Purchases.PurchaseDetailsDialog; };
            PurchaseDetailsGrid.prototype.getIdProperty = function () { return Purchases.PurchaseDetailsRow.idProperty; };
            PurchaseDetailsGrid.prototype.getInsertPermission = function () { return Purchases.PurchaseDetailsRow.insertPermission; };
            PurchaseDetailsGrid.prototype.getLocalTextPrefix = function () { return Purchases.PurchaseDetailsRow.localTextPrefix; };
            PurchaseDetailsGrid.prototype.getService = function () { return Purchases.PurchaseDetailsService.baseUrl; };
            PurchaseDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseDetailsGrid);
            return PurchaseDetailsGrid;
        }(Serenity.EntityGrid));
        Purchases.PurchaseDetailsGrid = PurchaseDetailsGrid;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailEditDialog = /** @class */ (function (_super) {
            __extends(PurchaseDetailEditDialog, _super);
            function PurchaseDetailEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Purchases.PurchaseDetailsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        //this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].PurchasePrice;
                        _this.form.Quantity.value = 1;
                        _this.form.Discount.value = 0;
                        _this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                        //this.form.GstPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].GstPrice;
                        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                        _this.form.UnitId.value = unitId;
                    }
                });
                return _this;
            }
            PurchaseDetailEditDialog.prototype.getFormKey = function () { return Purchases.PurchaseDetailsForm.formKey; };
            PurchaseDetailEditDialog.prototype.getNameProperty = function () { return Purchases.PurchaseDetailsRow.nameProperty; };
            PurchaseDetailEditDialog.prototype.getLocalTextPrefix = function () { return Purchases.PurchaseDetailsRow.localTextPrefix; };
            PurchaseDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseDetailEditDialog);
            return PurchaseDetailEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Purchases.PurchaseDetailEditDialog = PurchaseDetailEditDialog;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchaseDetailEditor = /** @class */ (function (_super) {
            __extends(PurchaseDetailEditor, _super);
            function PurchaseDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            PurchaseDetailEditor.prototype.getColumnsKey = function () { return "Purchases.PurchaseDetails"; };
            PurchaseDetailEditor.prototype.getLocalTextPrefix = function () { return Purchases.PurchaseDetailsRow.localTextPrefix; };
            PurchaseDetailEditor.prototype.getDialogType = function () { return Purchases.PurchaseDetailEditDialog; };
            PurchaseDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            PurchaseDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = SmartERP.Products.ProductsRow.getLookup()
                    .itemById[row.ProductId].ProductName;
                row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);
                row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                    .itemById[row.UnitId].Name;
                return true;
            };
            PurchaseDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            PurchaseDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PurchaseDetailEditor);
            return PurchaseDetailEditor;
        }(SmartERP.Common.GridEditorBase));
        Purchases.PurchaseDetailEditor = PurchaseDetailEditor;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchasesDialog = /** @class */ (function (_super) {
            __extends(PurchasesDialog, _super);
            function PurchasesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Purchases.PurchasesForm(_this.idPrefix);
                _this.form = new Purchases.PurchasesForm(_this.idPrefix);
                _this.form.Date.change(function (e) {
                    //this.updateExpiryDate();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    _this.doCalculation();
                    // Q.notifySuccess(total.toString());
                });
                _this.form.Discount.change(function () {
                    _this.doCalculation();
                });
                //this.form.Vat.change(() => {
                //    this.doCalculation();
                //});
                _this.form.ShippingCost.change(function () {
                    _this.doCalculation();
                });
                _this.form.PaidAmount.change(function () {
                    _this.doCalculation();
                });
                return _this;
            }
            PurchasesDialog.prototype.getFormKey = function () { return Purchases.PurchasesForm.formKey; };
            PurchasesDialog.prototype.getIdProperty = function () { return Purchases.PurchasesRow.idProperty; };
            PurchasesDialog.prototype.getLocalTextPrefix = function () { return Purchases.PurchasesRow.localTextPrefix; };
            PurchasesDialog.prototype.getNameProperty = function () { return Purchases.PurchasesRow.nameProperty; };
            PurchasesDialog.prototype.getService = function () { return Purchases.PurchasesService.baseUrl; };
            PurchasesDialog.prototype.getDeletePermission = function () { return Purchases.PurchasesRow.deletePermission; };
            PurchasesDialog.prototype.getInsertPermission = function () { return Purchases.PurchasesRow.insertPermission; };
            PurchasesDialog.prototype.getUpdatePermission = function () { return Purchases.PurchasesRow.updatePermission; };
            PurchasesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                //this.updateExpiryDate();
            };
            PurchasesDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.doCalculation();
            };
            PurchasesDialog.prototype.doCalculation = function () {
                var total = 0;
                //var GST_Price = 0;
                //for (var k of this.form.LineItems.getItems()) {
                //    total += k.Total || 0;
                //    GST_Price += k.GstPrice || 0;
                //}
                for (var _i = 0, _a = this.form.LineItems.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    total += k.Total || 0;
                }
                this.form.GrandTotal.value = total;
                var subDiscount = 0;
                for (var _b = 0, _c = this.form.LineItems.getItems(); _b < _c.length; _b++) {
                    var k = _c[_b];
                    subDiscount += (k.Discount * k.Quantity * k.UnitPrice / 100) || 0;
                }
                this.form.TotalDiscount.value = this.form.Discount.value + subDiscount;
                //this.form.GstPrice.value = GST_Price;
                //this.form.GrandTotal.value =  this.form.GrandTotal.value;
                //var vat = 0;
                //if (SmartERP.Administration.CompaniesRow.getLookup().items.length > 0) {
                //    vat = SmartERP.Administration.CompaniesRow.getLookup().items[0].VatPercentage;
                //}
                //this.form.Vat.value = (this.form.GrandTotal.value - this.form.Discount.value) * vat / 100;
                //this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.ShippingCost.value;
                this.form.Due.value = this.form.NetTotal.value - this.form.PaidAmount.value;
                if ((this.form.PaidAmount.value - this.form.NetTotal.value) > 0) {
                    this.form.Change.value = this.form.PaidAmount.value - this.form.NetTotal.value;
                    this.form.Due.value = 0;
                }
                else {
                    this.form.Change.value = 0;
                }
            };
            PurchasesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], PurchasesDialog);
            return PurchasesDialog;
        }(Serenity.EntityDialog));
        Purchases.PurchasesDialog = PurchasesDialog;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Purchases;
    (function (Purchases) {
        var PurchasesGrid = /** @class */ (function (_super) {
            __extends(PurchasesGrid, _super);
            function PurchasesGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchasesGrid.prototype.getColumnsKey = function () { return 'Purchases.Purchases'; };
            PurchasesGrid.prototype.getDialogType = function () { return Purchases.PurchasesDialog; };
            PurchasesGrid.prototype.getIdProperty = function () { return Purchases.PurchasesRow.idProperty; };
            PurchasesGrid.prototype.getInsertPermission = function () { return Purchases.PurchasesRow.insertPermission; };
            PurchasesGrid.prototype.getLocalTextPrefix = function () { return Purchases.PurchasesRow.localTextPrefix; };
            PurchasesGrid.prototype.getService = function () { return Purchases.PurchasesService.baseUrl; };
            PurchasesGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Bill',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-bill" title="Download Quotation">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Bill',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-bill" title="View Quotation">' +
                        '<i class="fa fa-eye text-blue"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            PurchasesGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-bill')) {
                        SmartERP.Common.ReportHelper.execute({
                            reportKey: 'Purchases.PurchaseReport',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                    if (target.hasClass('view-bill')) {
                        SmartERP.Common.ReportHelper.execute({
                            reportKey: 'Purchases.PurchaseReport',
                            extension: 'html',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                }
            };
            PurchasesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], PurchasesGrid);
            return PurchasesGrid;
        }(Serenity.EntityGrid));
        Purchases.PurchasesGrid = PurchasesGrid;
    })(Purchases = SmartERP.Purchases || (SmartERP.Purchases = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationDetailsDialog = /** @class */ (function (_super) {
            __extends(QuotationDetailsDialog, _super);
            function QuotationDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Quotations.QuotationDetailsForm(_this.idPrefix);
                return _this;
            }
            QuotationDetailsDialog.prototype.getFormKey = function () { return Quotations.QuotationDetailsForm.formKey; };
            QuotationDetailsDialog.prototype.getIdProperty = function () { return Quotations.QuotationDetailsRow.idProperty; };
            QuotationDetailsDialog.prototype.getLocalTextPrefix = function () { return Quotations.QuotationDetailsRow.localTextPrefix; };
            QuotationDetailsDialog.prototype.getNameProperty = function () { return Quotations.QuotationDetailsRow.nameProperty; };
            QuotationDetailsDialog.prototype.getService = function () { return Quotations.QuotationDetailsService.baseUrl; };
            QuotationDetailsDialog.prototype.getDeletePermission = function () { return Quotations.QuotationDetailsRow.deletePermission; };
            QuotationDetailsDialog.prototype.getInsertPermission = function () { return Quotations.QuotationDetailsRow.insertPermission; };
            QuotationDetailsDialog.prototype.getUpdatePermission = function () { return Quotations.QuotationDetailsRow.updatePermission; };
            QuotationDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], QuotationDetailsDialog);
            return QuotationDetailsDialog;
        }(Serenity.EntityDialog));
        Quotations.QuotationDetailsDialog = QuotationDetailsDialog;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationDetailsGrid = /** @class */ (function (_super) {
            __extends(QuotationDetailsGrid, _super);
            function QuotationDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            QuotationDetailsGrid.prototype.getColumnsKey = function () { return 'Quotations.QuotationDetails'; };
            QuotationDetailsGrid.prototype.getDialogType = function () { return Quotations.QuotationDetailsDialog; };
            QuotationDetailsGrid.prototype.getIdProperty = function () { return Quotations.QuotationDetailsRow.idProperty; };
            QuotationDetailsGrid.prototype.getInsertPermission = function () { return Quotations.QuotationDetailsRow.insertPermission; };
            QuotationDetailsGrid.prototype.getLocalTextPrefix = function () { return Quotations.QuotationDetailsRow.localTextPrefix; };
            QuotationDetailsGrid.prototype.getService = function () { return Quotations.QuotationDetailsService.baseUrl; };
            QuotationDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], QuotationDetailsGrid);
            return QuotationDetailsGrid;
        }(Serenity.EntityGrid));
        Quotations.QuotationDetailsGrid = QuotationDetailsGrid;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationJobItemsDialog = /** @class */ (function (_super) {
            __extends(QuotationJobItemsDialog, _super);
            function QuotationJobItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Quotations.QuotationJobItemsForm(_this.idPrefix);
                return _this;
            }
            QuotationJobItemsDialog.prototype.getFormKey = function () { return Quotations.QuotationJobItemsForm.formKey; };
            QuotationJobItemsDialog.prototype.getIdProperty = function () { return Quotations.QuotationJobItemsRow.idProperty; };
            QuotationJobItemsDialog.prototype.getLocalTextPrefix = function () { return Quotations.QuotationJobItemsRow.localTextPrefix; };
            QuotationJobItemsDialog.prototype.getNameProperty = function () { return Quotations.QuotationJobItemsRow.nameProperty; };
            QuotationJobItemsDialog.prototype.getService = function () { return Quotations.QuotationJobItemsService.baseUrl; };
            QuotationJobItemsDialog.prototype.getDeletePermission = function () { return Quotations.QuotationJobItemsRow.deletePermission; };
            QuotationJobItemsDialog.prototype.getInsertPermission = function () { return Quotations.QuotationJobItemsRow.insertPermission; };
            QuotationJobItemsDialog.prototype.getUpdatePermission = function () { return Quotations.QuotationJobItemsRow.updatePermission; };
            QuotationJobItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], QuotationJobItemsDialog);
            return QuotationJobItemsDialog;
        }(Serenity.EntityDialog));
        Quotations.QuotationJobItemsDialog = QuotationJobItemsDialog;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationJobItemsGrid = /** @class */ (function (_super) {
            __extends(QuotationJobItemsGrid, _super);
            function QuotationJobItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            QuotationJobItemsGrid.prototype.getColumnsKey = function () { return 'Quotations.QuotationJobItems'; };
            QuotationJobItemsGrid.prototype.getDialogType = function () { return Quotations.QuotationJobItemsDialog; };
            QuotationJobItemsGrid.prototype.getIdProperty = function () { return Quotations.QuotationJobItemsRow.idProperty; };
            QuotationJobItemsGrid.prototype.getInsertPermission = function () { return Quotations.QuotationJobItemsRow.insertPermission; };
            QuotationJobItemsGrid.prototype.getLocalTextPrefix = function () { return Quotations.QuotationJobItemsRow.localTextPrefix; };
            QuotationJobItemsGrid.prototype.getService = function () { return Quotations.QuotationJobItemsService.baseUrl; };
            QuotationJobItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], QuotationJobItemsGrid);
            return QuotationJobItemsGrid;
        }(Serenity.EntityGrid));
        Quotations.QuotationJobItemsGrid = QuotationJobItemsGrid;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationJobItemsEditDialog = /** @class */ (function (_super) {
            __extends(QuotationJobItemsEditDialog, _super);
            function QuotationJobItemsEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Quotations.QuotationJobItemsForm(_this.idPrefix);
                _this.form.JobType.changeSelect2(function (e) {
                    var JobTypeID = Q.toId(_this.form.JobType.value);
                    if (JobTypeID != null) {
                        _this.form.UnitPrice.value = SmartERP.Masters.JobTypesRow.getLookup().itemById[JobTypeID].Rate;
                        _this.form.Discount.value = 0;
                    }
                });
                return _this;
            }
            QuotationJobItemsEditDialog.prototype.getFormKey = function () { return Quotations.QuotationJobItemsForm.formKey; };
            QuotationJobItemsEditDialog.prototype.getNameProperty = function () { return Quotations.QuotationJobItemsRow.nameProperty; };
            QuotationJobItemsEditDialog.prototype.getLocalTextPrefix = function () { return Quotations.QuotationJobItemsRow.localTextPrefix; };
            QuotationJobItemsEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], QuotationJobItemsEditDialog);
            return QuotationJobItemsEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Quotations.QuotationJobItemsEditDialog = QuotationJobItemsEditDialog;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationJobItemsEditor = /** @class */ (function (_super) {
            __extends(QuotationJobItemsEditor, _super);
            function QuotationJobItemsEditor(container) {
                return _super.call(this, container) || this;
            }
            QuotationJobItemsEditor.prototype.getColumnsKey = function () { return "Quotations.QuotationJobItems"; };
            QuotationJobItemsEditor.prototype.getLocalTextPrefix = function () { return Quotations.QuotationJobItemsRow.localTextPrefix; };
            QuotationJobItemsEditor.prototype.getDialogType = function () { return Quotations.QuotationJobItemsEditDialog; };
            QuotationJobItemsEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            QuotationJobItemsEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                if (row.JobType) {
                    row.JobTypeName = SmartERP.Masters.JobTypesRow.getLookup()
                        .itemById[row.JobType].Name;
                }
                row.Total = (row.UnitPrice) - (row.UnitPrice * row.Discount / 100);
                //row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                //    .itemById[row.UnitId].Name;
                return true;
            };
            QuotationJobItemsEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            QuotationJobItemsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], QuotationJobItemsEditor);
            return QuotationJobItemsEditor;
        }(SmartERP.Common.GridEditorBase));
        Quotations.QuotationJobItemsEditor = QuotationJobItemsEditor;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsDetailEditDialog = /** @class */ (function (_super) {
            __extends(QuotationsDetailEditDialog, _super);
            function QuotationsDetailEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Quotations.QuotationDetailsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                        _this.form.Quantity.value = 1;
                        _this.form.Discount.value = 0;
                        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                        _this.form.UnitId.value = unitId;
                    }
                });
                return _this;
            }
            QuotationsDetailEditDialog.prototype.getFormKey = function () { return Quotations.QuotationDetailsForm.formKey; };
            QuotationsDetailEditDialog.prototype.getNameProperty = function () { return Quotations.QuotationDetailsRow.nameProperty; };
            QuotationsDetailEditDialog.prototype.getLocalTextPrefix = function () { return Quotations.QuotationDetailsRow.localTextPrefix; };
            QuotationsDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], QuotationsDetailEditDialog);
            return QuotationsDetailEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Quotations.QuotationsDetailEditDialog = QuotationsDetailEditDialog;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsDetailEditor = /** @class */ (function (_super) {
            __extends(QuotationsDetailEditor, _super);
            function QuotationsDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            QuotationsDetailEditor.prototype.getColumnsKey = function () { return "Quotations.QuotationDetails"; };
            QuotationsDetailEditor.prototype.getLocalTextPrefix = function () { return Quotations.QuotationDetailsRow.localTextPrefix; };
            QuotationsDetailEditor.prototype.getDialogType = function () { return Quotations.QuotationsDetailEditDialog; };
            QuotationsDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            QuotationsDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                // alert('test');
                //if (row.Quntity!>0) {
                //    return false;
                //}
                //if (row.UnitPrice! > 0) {
                //    return false;
                //}
                row.ProductName = SmartERP.Products.ProductsRow.getLookup()
                    .itemById[row.ProductId].ProductName;
                row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);
                row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                    .itemById[row.UnitId].Name;
                //row.PurchasePrice = SmartERP.Products.ProductsRow.getLookup()
                //    .itemById[row.ProductId].PurchasePrice;
                //console.log('product');
                //console.log(XInventory.Products.ProductsRow.getLookup()
                //    .itemById[row.ProductId]);
                return true;
            };
            QuotationsDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            QuotationsDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], QuotationsDetailEditor);
            return QuotationsDetailEditor;
        }(SmartERP.Common.GridEditorBase));
        Quotations.QuotationsDetailEditor = QuotationsDetailEditor;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsDialog = /** @class */ (function (_super) {
            __extends(QuotationsDialog, _super);
            function QuotationsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Quotations.QuotationsForm(_this.idPrefix);
                _this.form = new Quotations.QuotationsForm(_this.idPrefix);
                _this.form.Date.change(function (e) {
                    _this.updateExpiryDate();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    _this.doCalculation();
                    // Q.notifySuccess(total.toString());
                });
                _this.form.Jobs.view.onRowCountChanged.subscribe(function () {
                    _this.doCalculation();
                });
                _this.form.Discount.change(function () {
                    _this.doCalculation();
                });
                _this.form.Vat.change(function () {
                    _this.doCalculation();
                });
                _this.form.ShippingCost.change(function () {
                    _this.doCalculation();
                });
                return _this;
                //this.form.Payment.change(() => {
                //    this.doCalculation();
                //});
            }
            QuotationsDialog.prototype.getFormKey = function () { return Quotations.QuotationsForm.formKey; };
            QuotationsDialog.prototype.getIdProperty = function () { return Quotations.QuotationsRow.idProperty; };
            QuotationsDialog.prototype.getLocalTextPrefix = function () { return Quotations.QuotationsRow.localTextPrefix; };
            QuotationsDialog.prototype.getNameProperty = function () { return Quotations.QuotationsRow.nameProperty; };
            QuotationsDialog.prototype.getService = function () { return Quotations.QuotationsService.baseUrl; };
            QuotationsDialog.prototype.getDeletePermission = function () { return Quotations.QuotationsRow.deletePermission; };
            QuotationsDialog.prototype.getInsertPermission = function () { return Quotations.QuotationsRow.insertPermission; };
            QuotationsDialog.prototype.getUpdatePermission = function () { return Quotations.QuotationsRow.updatePermission; };
            QuotationsDialog.prototype.updateExpiryDate = function () {
                var NoOfMonths = 1;
                var toBeDueDate = new Date(this.form.Date.value);
                this.form.ExpiryDate.value = new Date(new Date(this.form.Date.value).setMonth(toBeDueDate.getMonth() + NoOfMonths)).toDateString();
            };
            QuotationsDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.updateExpiryDate();
            };
            QuotationsDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.doCalculation();
            };
            QuotationsDialog.prototype.doCalculation = function () {
                var total = 0;
                for (var _i = 0, _a = this.form.LineItems.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    total += k.Total || 0;
                }
                for (var _b = 0, _c = this.form.Jobs.getItems(); _b < _c.length; _b++) {
                    var j = _c[_b];
                    total += j.Total || 0;
                }
                this.form.GrandTotal.value = total;
                var subDiscount = 0;
                for (var _d = 0, _e = this.form.LineItems.getItems(); _d < _e.length; _d++) {
                    var k = _e[_d];
                    subDiscount += (k.Discount * k.Quantity * k.UnitPrice / 100) || 0;
                }
                this.form.TotalDiscount.value = this.form.Discount.value + subDiscount;
                var vat = 0;
                if (SmartERP.Administration.CompaniesRow.getLookup().items.length > 0) {
                    vat = SmartERP.Administration.CompaniesRow.getLookup().items[0].VatPercentage;
                }
                this.form.Vat.value = (this.form.GrandTotal.value - this.form.Discount.value) * vat / 100;
                this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.Vat.value + this.form.ShippingCost.value;
                //this.form.Balance.value = this.form.GrandTotal.value - this.form.Payment.value;
                //if ((this.form.Payment.value - this.form.GrandTotal.value) > 0) {
                //    this.form.Change.value = this.form.Payment.value - this.form.GrandTotal.value;
                //    this.form.Balance.value = 0;
                //} else {
                //    this.form.Change.value = 0;
                //}
            };
            QuotationsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], QuotationsDialog);
            return QuotationsDialog;
        }(Serenity.EntityDialog));
        Quotations.QuotationsDialog = QuotationsDialog;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Quotations;
    (function (Quotations) {
        var QuotationsGrid = /** @class */ (function (_super) {
            __extends(QuotationsGrid, _super);
            function QuotationsGrid(container) {
                return _super.call(this, container) || this;
            }
            QuotationsGrid.prototype.getColumnsKey = function () { return 'Quotations.Quotations'; };
            QuotationsGrid.prototype.getDialogType = function () { return Quotations.QuotationsDialog; };
            QuotationsGrid.prototype.getIdProperty = function () { return Quotations.QuotationsRow.idProperty; };
            QuotationsGrid.prototype.getInsertPermission = function () { return Quotations.QuotationsRow.insertPermission; };
            QuotationsGrid.prototype.getLocalTextPrefix = function () { return Quotations.QuotationsRow.localTextPrefix; };
            QuotationsGrid.prototype.getService = function () { return Quotations.QuotationsService.baseUrl; };
            QuotationsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Quotation',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-quotation" title="Download Quotation">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Quotation',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-quotation" title="View Quotation">' +
                        '<i class="fa fa-eye text-blue"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            QuotationsGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-quotation')) {
                        SmartERP.Common.ReportHelper.execute({
                            reportKey: 'Quotations.QuotationReport',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                    if (target.hasClass('view-quotation')) {
                        SmartERP.Common.ReportHelper.execute({
                            reportKey: 'Quotations.QuotationReport',
                            extension: 'html',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                }
            };
            QuotationsGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], QuotationsGrid);
            return QuotationsGrid;
        }(Serenity.EntityGrid));
        Quotations.QuotationsGrid = QuotationsGrid;
    })(Quotations = SmartERP.Quotations || (SmartERP.Quotations = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var CustomerReceivableReportGrid = /** @class */ (function (_super) {
            __extends(CustomerReceivableReportGrid, _super);
            function CustomerReceivableReportGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerReceivableReportGrid.prototype.getColumnsKey = function () { return 'Reports.CustomerReceivableReport'; };
            CustomerReceivableReportGrid.prototype.getDialogType = function () { return SmartERP.Customers.CustomersDialog; };
            CustomerReceivableReportGrid.prototype.getIsActiveProperty = function () { return SmartERP.Customers.CustomersRow.isActiveProperty; };
            CustomerReceivableReportGrid.prototype.getIdProperty = function () { return SmartERP.Customers.CustomersRow.idProperty; };
            CustomerReceivableReportGrid.prototype.getInsertPermission = function () { return SmartERP.Customers.CustomersRow.insertPermission; };
            CustomerReceivableReportGrid.prototype.getLocalTextPrefix = function () { return SmartERP.Customers.CustomersRow.localTextPrefix; };
            CustomerReceivableReportGrid.prototype.getService = function () { return SmartERP.Customers.CustomersService.baseUrl; };
            CustomerReceivableReportGrid.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                //request.Criteria = Serenity.Criteria.and(request.Criteria,
                //    [['InStock'], '>', 0])
                //    ;
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '<', 10] (which means string 'A' is less than 10
                return true;
            };
            CustomerReceivableReportGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            CustomerReceivableReportGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerReceivableReportGrid);
            return CustomerReceivableReportGrid;
        }(Serenity.EntityGrid));
        Reports.CustomerReceivableReportGrid = CustomerReceivableReportGrid;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var DailyClosingDialog = /** @class */ (function (_super) {
            __extends(DailyClosingDialog, _super);
            function DailyClosingDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Reports.DailyClosingForm(_this.idPrefix);
                _this.form = new Reports.DailyClosingForm(_this.idPrefix);
                return _this;
            }
            DailyClosingDialog.prototype.getFormKey = function () { return Reports.DailyClosingForm.formKey; };
            DailyClosingDialog.prototype.getIdProperty = function () { return Reports.DailyClosingRow.idProperty; };
            DailyClosingDialog.prototype.getLocalTextPrefix = function () { return Reports.DailyClosingRow.localTextPrefix; };
            DailyClosingDialog.prototype.getService = function () { return Reports.DailyClosingService.baseUrl; };
            DailyClosingDialog.prototype.getDeletePermission = function () { return Reports.DailyClosingRow.deletePermission; };
            DailyClosingDialog.prototype.getInsertPermission = function () { return Reports.DailyClosingRow.insertPermission; };
            DailyClosingDialog.prototype.getUpdatePermission = function () { return Reports.DailyClosingRow.updatePermission; };
            DailyClosingDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            DailyClosingDialog.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
                //window.location.href = "/Customers/Customers";
            };
            DailyClosingDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], DailyClosingDialog);
            return DailyClosingDialog;
        }(Serenity.EntityDialog));
        Reports.DailyClosingDialog = DailyClosingDialog;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var DailyClosingGrid = /** @class */ (function (_super) {
            __extends(DailyClosingGrid, _super);
            function DailyClosingGrid(container) {
                return _super.call(this, container) || this;
            }
            DailyClosingGrid.prototype.getColumnsKey = function () { return 'Reports.DailyClosing'; };
            DailyClosingGrid.prototype.getDialogType = function () { return Reports.DailyClosingDialog; };
            DailyClosingGrid.prototype.getIdProperty = function () { return Reports.DailyClosingRow.idProperty; };
            DailyClosingGrid.prototype.getInsertPermission = function () { return Reports.DailyClosingRow.insertPermission; };
            DailyClosingGrid.prototype.getLocalTextPrefix = function () { return Reports.DailyClosingRow.localTextPrefix; };
            DailyClosingGrid.prototype.getService = function () { return Reports.DailyClosingService.baseUrl; };
            DailyClosingGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            DailyClosingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DailyClosingGrid);
            return DailyClosingGrid;
        }(Serenity.EntityGrid));
        Reports.DailyClosingGrid = DailyClosingGrid;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var StockReport = /** @class */ (function (_super) {
            __extends(StockReport, _super);
            function StockReport(container) {
                return _super.call(this, container) || this;
            }
            StockReport.prototype.getColumnsKey = function () { return 'Reports.StockReport'; };
            StockReport.prototype.getDialogType = function () { return SmartERP.Products.ProductsDialog; };
            StockReport.prototype.getIsActiveProperty = function () { return SmartERP.Products.ProductsRow.isActiveProperty; };
            StockReport.prototype.getIdProperty = function () { return SmartERP.Products.ProductsRow.idProperty; };
            StockReport.prototype.getInsertPermission = function () { return SmartERP.Products.ProductsRow.insertPermission; };
            StockReport.prototype.getLocalTextPrefix = function () { return SmartERP.Products.ProductsRow.localTextPrefix; };
            StockReport.prototype.getService = function () { return SmartERP.Products.ProductsService.baseUrl; };
            StockReport.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                //request.Criteria = Serenity.Criteria.and(request.Criteria,
                //    [['InStock'], '>', 0])
                //    ;
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '<', 10] (which means string 'A' is less than 10
                return true;
            };
            StockReport.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            StockReport = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], StockReport);
            return StockReport;
        }(Serenity.EntityGrid));
        Reports.StockReport = StockReport;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Reports;
    (function (Reports) {
        var SupplierPayableReportGrid = /** @class */ (function (_super) {
            __extends(SupplierPayableReportGrid, _super);
            function SupplierPayableReportGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierPayableReportGrid.prototype.getColumnsKey = function () { return 'Reports.SupplierPayableReport'; };
            SupplierPayableReportGrid.prototype.getDialogType = function () { return SmartERP.Suppliers.SuppliersDialog; };
            SupplierPayableReportGrid.prototype.getIsActiveProperty = function () { return SmartERP.Suppliers.SuppliersRow.isActiveProperty; };
            SupplierPayableReportGrid.prototype.getIdProperty = function () { return SmartERP.Suppliers.SuppliersRow.idProperty; };
            SupplierPayableReportGrid.prototype.getInsertPermission = function () { return SmartERP.Suppliers.SuppliersRow.insertPermission; };
            SupplierPayableReportGrid.prototype.getLocalTextPrefix = function () { return SmartERP.Suppliers.SuppliersRow.localTextPrefix; };
            SupplierPayableReportGrid.prototype.getService = function () { return SmartERP.Suppliers.SuppliersService.baseUrl; };
            SupplierPayableReportGrid.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                //request.Criteria = Serenity.Criteria.and(request.Criteria,
                //    [['InStock'], '>', 0])
                //    ;
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '<', 10] (which means string 'A' is less than 10
                return true;
            };
            SupplierPayableReportGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            SupplierPayableReportGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], SupplierPayableReportGrid);
            return SupplierPayableReportGrid;
        }(Serenity.EntityGrid));
        Reports.SupplierPayableReportGrid = SupplierPayableReportGrid;
    })(Reports = SmartERP.Reports || (SmartERP.Reports = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SaleDetailsDialog = /** @class */ (function (_super) {
            __extends(SaleDetailsDialog, _super);
            function SaleDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.SaleDetailsForm(_this.idPrefix);
                return _this;
            }
            SaleDetailsDialog.prototype.getFormKey = function () { return Sales.SaleDetailsForm.formKey; };
            SaleDetailsDialog.prototype.getIdProperty = function () { return Sales.SaleDetailsRow.idProperty; };
            SaleDetailsDialog.prototype.getLocalTextPrefix = function () { return Sales.SaleDetailsRow.localTextPrefix; };
            SaleDetailsDialog.prototype.getNameProperty = function () { return Sales.SaleDetailsRow.nameProperty; };
            SaleDetailsDialog.prototype.getService = function () { return Sales.SaleDetailsService.baseUrl; };
            SaleDetailsDialog.prototype.getDeletePermission = function () { return Sales.SaleDetailsRow.deletePermission; };
            SaleDetailsDialog.prototype.getInsertPermission = function () { return Sales.SaleDetailsRow.insertPermission; };
            SaleDetailsDialog.prototype.getUpdatePermission = function () { return Sales.SaleDetailsRow.updatePermission; };
            SaleDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleDetailsDialog);
            return SaleDetailsDialog;
        }(Serenity.EntityDialog));
        Sales.SaleDetailsDialog = SaleDetailsDialog;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SaleDetailsGrid = /** @class */ (function (_super) {
            __extends(SaleDetailsGrid, _super);
            function SaleDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            SaleDetailsGrid.prototype.getColumnsKey = function () { return 'Sales.SaleDetails'; };
            SaleDetailsGrid.prototype.getDialogType = function () { return Sales.SaleDetailsDialog; };
            SaleDetailsGrid.prototype.getIdProperty = function () { return Sales.SaleDetailsRow.idProperty; };
            SaleDetailsGrid.prototype.getInsertPermission = function () { return Sales.SaleDetailsRow.insertPermission; };
            SaleDetailsGrid.prototype.getLocalTextPrefix = function () { return Sales.SaleDetailsRow.localTextPrefix; };
            SaleDetailsGrid.prototype.getService = function () { return Sales.SaleDetailsService.baseUrl; };
            SaleDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleDetailsGrid);
            return SaleDetailsGrid;
        }(Serenity.EntityGrid));
        Sales.SaleDetailsGrid = SaleDetailsGrid;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesDetailEditDialog = /** @class */ (function (_super) {
            __extends(SalesDetailEditDialog, _super);
            function SalesDetailEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Sales.SaleDetailsForm(_this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductId.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitPrice;
                        _this.form.Quantity.value = 1;
                        _this.form.Discount.value = 0;
                        var unitId = Q.toId(SmartERP.Products.ProductsRow.getLookup().itemById[productID].UnitId);
                        _this.form.UnitId.value = unitId;
                    }
                });
                return _this;
            }
            SalesDetailEditDialog.prototype.getFormKey = function () { return Sales.SaleDetailsForm.formKey; };
            SalesDetailEditDialog.prototype.getNameProperty = function () { return Sales.SaleDetailsRow.nameProperty; };
            SalesDetailEditDialog.prototype.getLocalTextPrefix = function () { return Sales.SaleDetailsRow.localTextPrefix; };
            SalesDetailEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesDetailEditDialog);
            return SalesDetailEditDialog;
        }(SmartERP.Common.GridEditorDialog));
        Sales.SalesDetailEditDialog = SalesDetailEditDialog;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesDetailEditor = /** @class */ (function (_super) {
            __extends(SalesDetailEditor, _super);
            function SalesDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            SalesDetailEditor.prototype.getColumnsKey = function () { return "Sales.SaleDetails"; };
            SalesDetailEditor.prototype.getLocalTextPrefix = function () { return Sales.SaleDetailsRow.localTextPrefix; };
            SalesDetailEditor.prototype.getDialogType = function () { return Sales.SalesDetailEditDialog; };
            SalesDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            SalesDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = SmartERP.Products.ProductsRow.getLookup()
                    .itemById[row.ProductId].ProductName;
                row.Total = (row.Quantity * row.UnitPrice) - (row.Quantity * row.UnitPrice * row.Discount / 100);
                row.UnitName = SmartERP.Products.UnitsRow.getLookup()
                    .itemById[row.UnitId].Name;
                return true;
            };
            SalesDetailEditor.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "column-picker-button"; }), 1);
                return buttons;
            };
            SalesDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], SalesDetailEditor);
            return SalesDetailEditor;
        }(SmartERP.Common.GridEditorBase));
        Sales.SalesDetailEditor = SalesDetailEditor;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesDialog = /** @class */ (function (_super) {
            __extends(SalesDialog, _super);
            function SalesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Sales.SalesForm(_this.idPrefix);
                _this.form = new Sales.SalesForm(_this.idPrefix);
                _this.form.Date.change(function (e) {
                    //this.updateExpiryDate();
                });
                _this.form.LineItems.view.onRowCountChanged.subscribe(function () {
                    _this.doCalculation();
                    // Q.notifySuccess(total.toString());
                });
                _this.form.Discount.change(function () {
                    _this.doCalculation();
                });
                _this.form.Vat.change(function () {
                    _this.doCalculation();
                });
                _this.form.ShippingCost.change(function () {
                    _this.doCalculation();
                });
                _this.form.PaidAmount.change(function () {
                    _this.doCalculation();
                });
                return _this;
            }
            SalesDialog.prototype.getFormKey = function () { return Sales.SalesForm.formKey; };
            SalesDialog.prototype.getIdProperty = function () { return Sales.SalesRow.idProperty; };
            SalesDialog.prototype.getLocalTextPrefix = function () { return Sales.SalesRow.localTextPrefix; };
            SalesDialog.prototype.getNameProperty = function () { return Sales.SalesRow.nameProperty; };
            SalesDialog.prototype.getService = function () { return Sales.SalesService.baseUrl; };
            SalesDialog.prototype.getDeletePermission = function () { return Sales.SalesRow.deletePermission; };
            SalesDialog.prototype.getInsertPermission = function () { return Sales.SalesRow.insertPermission; };
            SalesDialog.prototype.getUpdatePermission = function () { return Sales.SalesRow.updatePermission; };
            //private updateExpiryDate() {
            //    var NoOfMonths = 1;
            //    var toBeDueDate = new Date(this.form.Date.value);
            //    this.form.ExpiryDate.value = new Date(new Date(this.form.Date.value).setMonth(toBeDueDate.getMonth() + NoOfMonths)).toDateString();
            //}
            SalesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                //this.updateExpiryDate();
            };
            SalesDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.doCalculation();
            };
            SalesDialog.prototype.doCalculation = function () {
                var total = 0;
                for (var _i = 0, _a = this.form.LineItems.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    total += k.Total || 0;
                }
                this.form.GrandTotal.value = total;
                var subDiscount = 0;
                for (var _b = 0, _c = this.form.LineItems.getItems(); _b < _c.length; _b++) {
                    var k = _c[_b];
                    subDiscount += (k.Discount * k.Quantity * k.UnitPrice / 100) || 0;
                }
                this.form.TotalDiscount.value = this.form.Discount.value + subDiscount;
                var vat = 0;
                if (SmartERP.Administration.CompaniesRow.getLookup().items.length > 0) {
                    vat = SmartERP.Administration.CompaniesRow.getLookup().items[0].VatPercentage;
                }
                this.form.Vat.value = (this.form.GrandTotal.value - this.form.Discount.value) * vat / 100;
                this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');
                this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.Vat.value + this.form.ShippingCost.value;
                this.form.Due.value = this.form.NetTotal.value - this.form.PaidAmount.value;
                if ((this.form.PaidAmount.value - this.form.NetTotal.value) > 0) {
                    this.form.Change.value = this.form.PaidAmount.value - this.form.NetTotal.value;
                    this.form.Due.value = 0;
                }
                else {
                    this.form.Change.value = 0;
                }
            };
            SalesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], SalesDialog);
            return SalesDialog;
        }(Serenity.EntityDialog));
        Sales.SalesDialog = SalesDialog;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Sales;
    (function (Sales) {
        var SalesGrid = /** @class */ (function (_super) {
            __extends(SalesGrid, _super);
            function SalesGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesGrid.prototype.getColumnsKey = function () { return 'Sales.Sales'; };
            SalesGrid.prototype.getDialogType = function () { return Sales.SalesDialog; };
            SalesGrid.prototype.getIdProperty = function () { return Sales.SalesRow.idProperty; };
            SalesGrid.prototype.getInsertPermission = function () { return Sales.SalesRow.insertPermission; };
            SalesGrid.prototype.getLocalTextPrefix = function () { return Sales.SalesRow.localTextPrefix; };
            SalesGrid.prototype.getService = function () { return Sales.SalesService.baseUrl; };
            SalesGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="Download Invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-invoice" title="View Invoice">' +
                        '<i class="fa fa-eye text-blue"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            SalesGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        SmartERP.Common.ReportHelper.execute({
                            reportKey: 'Sales.SalesReport',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                    if (target.hasClass('view-invoice')) {
                        SmartERP.Common.ReportHelper.execute({
                            reportKey: 'Sales.SalesReport',
                            extension: 'html',
                            params: {
                                OrderID: item.Id
                            }
                        });
                    }
                }
            };
            SalesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], SalesGrid);
            return SalesGrid;
        }(Serenity.EntityGrid));
        Sales.SalesGrid = SalesGrid;
    })(Sales = SmartERP.Sales || (SmartERP.Sales = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Suppliers;
    (function (Suppliers) {
        var SuppliersDialog = /** @class */ (function (_super) {
            __extends(SuppliersDialog, _super);
            function SuppliersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Suppliers.SuppliersForm(_this.idPrefix);
                return _this;
            }
            SuppliersDialog.prototype.getFormKey = function () { return Suppliers.SuppliersForm.formKey; };
            SuppliersDialog.prototype.getIdProperty = function () { return Suppliers.SuppliersRow.idProperty; };
            SuppliersDialog.prototype.getLocalTextPrefix = function () { return Suppliers.SuppliersRow.localTextPrefix; };
            SuppliersDialog.prototype.getNameProperty = function () { return Suppliers.SuppliersRow.nameProperty; };
            SuppliersDialog.prototype.getService = function () { return Suppliers.SuppliersService.baseUrl; };
            SuppliersDialog.prototype.getDeletePermission = function () { return Suppliers.SuppliersRow.deletePermission; };
            SuppliersDialog.prototype.getInsertPermission = function () { return Suppliers.SuppliersRow.insertPermission; };
            SuppliersDialog.prototype.getUpdatePermission = function () { return Suppliers.SuppliersRow.updatePermission; };
            SuppliersDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], SuppliersDialog);
            return SuppliersDialog;
        }(Serenity.EntityDialog));
        Suppliers.SuppliersDialog = SuppliersDialog;
    })(Suppliers = SmartERP.Suppliers || (SmartERP.Suppliers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Suppliers;
    (function (Suppliers) {
        var SuppliersGrid = /** @class */ (function (_super) {
            __extends(SuppliersGrid, _super);
            function SuppliersGrid(container) {
                return _super.call(this, container) || this;
            }
            SuppliersGrid.prototype.getColumnsKey = function () { return 'Suppliers.Suppliers'; };
            SuppliersGrid.prototype.getDialogType = function () { return Suppliers.SuppliersDialog; };
            SuppliersGrid.prototype.getIsActiveProperty = function () { return Suppliers.SuppliersRow.isActiveProperty; };
            SuppliersGrid.prototype.getIdProperty = function () { return Suppliers.SuppliersRow.idProperty; };
            SuppliersGrid.prototype.getInsertPermission = function () { return Suppliers.SuppliersRow.insertPermission; };
            SuppliersGrid.prototype.getLocalTextPrefix = function () { return Suppliers.SuppliersRow.localTextPrefix; };
            SuppliersGrid.prototype.getService = function () { return Suppliers.SuppliersService.baseUrl; };
            SuppliersGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], SuppliersGrid);
            return SuppliersGrid;
        }(Serenity.EntityGrid));
        Suppliers.SuppliersGrid = SuppliersGrid;
    })(Suppliers = SmartERP.Suppliers || (SmartERP.Suppliers = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Vehicles;
    (function (Vehicles) {
        var VehiclesDialog = /** @class */ (function (_super) {
            __extends(VehiclesDialog, _super);
            function VehiclesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Vehicles.VehiclesForm(_this.idPrefix);
                return _this;
            }
            VehiclesDialog.prototype.getFormKey = function () { return Vehicles.VehiclesForm.formKey; };
            VehiclesDialog.prototype.getIdProperty = function () { return Vehicles.VehiclesRow.idProperty; };
            VehiclesDialog.prototype.getLocalTextPrefix = function () { return Vehicles.VehiclesRow.localTextPrefix; };
            VehiclesDialog.prototype.getNameProperty = function () { return Vehicles.VehiclesRow.nameProperty; };
            VehiclesDialog.prototype.getService = function () { return Vehicles.VehiclesService.baseUrl; };
            VehiclesDialog.prototype.getDeletePermission = function () { return Vehicles.VehiclesRow.deletePermission; };
            VehiclesDialog.prototype.getInsertPermission = function () { return Vehicles.VehiclesRow.insertPermission; };
            VehiclesDialog.prototype.getUpdatePermission = function () { return Vehicles.VehiclesRow.updatePermission; };
            VehiclesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], VehiclesDialog);
            return VehiclesDialog;
        }(Serenity.EntityDialog));
        Vehicles.VehiclesDialog = VehiclesDialog;
    })(Vehicles = SmartERP.Vehicles || (SmartERP.Vehicles = {}));
})(SmartERP || (SmartERP = {}));
var SmartERP;
(function (SmartERP) {
    var Vehicles;
    (function (Vehicles) {
        var VehiclesGrid = /** @class */ (function (_super) {
            __extends(VehiclesGrid, _super);
            function VehiclesGrid(container) {
                return _super.call(this, container) || this;
            }
            VehiclesGrid.prototype.getColumnsKey = function () { return 'Vehicles.Vehicles'; };
            VehiclesGrid.prototype.getDialogType = function () { return Vehicles.VehiclesDialog; };
            VehiclesGrid.prototype.getIdProperty = function () { return Vehicles.VehiclesRow.idProperty; };
            VehiclesGrid.prototype.getInsertPermission = function () { return Vehicles.VehiclesRow.insertPermission; };
            VehiclesGrid.prototype.getLocalTextPrefix = function () { return Vehicles.VehiclesRow.localTextPrefix; };
            VehiclesGrid.prototype.getService = function () { return Vehicles.VehiclesService.baseUrl; };
            VehiclesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], VehiclesGrid);
            return VehiclesGrid;
        }(Serenity.EntityGrid));
        Vehicles.VehiclesGrid = VehiclesGrid;
    })(Vehicles = SmartERP.Vehicles || (SmartERP.Vehicles = {}));
})(SmartERP || (SmartERP = {}));