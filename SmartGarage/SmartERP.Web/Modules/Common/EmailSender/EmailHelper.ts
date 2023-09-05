namespace SmartERP.Common {

    export interface EmailExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: { [key: string]: any }
        target?: string;
    }

    export interface EmailButtonOptions extends EmailExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }

    export namespace EmailHelper {

        export function createEmailToolButton(options: EmailButtonOptions): Serenity.ToolButton {
            return {
                title: Q.coalesce(options.title, 'Mail'),
                cssClass: Q.coalesce(options.cssClass, 'Send-mail-bt'),
                icon: options.icon,
                onClick: () => {
                    EmailHelper.execute(options);
                }
            };
        }
        export function execute(options: EmailExecuteOptions) {
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
    }
}