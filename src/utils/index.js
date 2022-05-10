import swal from 'sweetalert';

export const jerpConfirm = async (message, callback) =>
    swal({
        title: 'Are you sure?',
        text: message,
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            callback();
        }
    });

export const jerpMessage = (message) => swal(message);
