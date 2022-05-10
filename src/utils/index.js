import swal from 'sweetalert';

export const jerpConfirm = async (callback) =>
    swal({
        title: 'Are you sure?',
        text: 'You want to proceed this order?',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            callback();
        }
    });

export const jerpAlert = (title, text, icon = 'warning') => {
    swal({ title, text, icon });
};
