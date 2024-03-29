import swal from 'sweetalert';
import moment from 'moment';

export const jerpConfirm = async (message, callbackSuccess, callbackError) =>
    swal({
        title: 'Are you sure?',
        text: message,
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    }).then((action) => {
        if (action) {
            callbackSuccess();
        } else if (callbackError !== undefined) {
            callbackError();
        }
    });

export const jerpSuccess = (message) => swal({ title: message, icon: 'success' });
export const jerpInfo = (message) => swal({ title: message, icon: 'info' });
export const jerpWarning = (message) => swal({ title: message, icon: 'warning' });
export const jerpError = (message) => swal({ title: message, icon: 'error', dangerMode: true });

export const dateFormat = (date) => {
    if (date) {
        return moment(date).format('DD MMM YYYY, h:mm:ss a');
    }
    return '';
};
