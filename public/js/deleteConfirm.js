

function deleteProduct(producto) {
    console.log(producto.id)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        //Conectarnos con nuestro server
        if (result.isConfirmed) {
            // Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            // )
            //Conexion con el server
            // fetch(`http://localhost:3000/admin/dashboard/products/delete/${producto.id}`, {
            //     method: "POST"
            // })
            //     .then((respuesta) => {
            //         console.log(respuesta)
            //         Swal.fire(
            //             'Deleted!',
            //             'Your file has been deleted.',
            //             'success'
            //         )
            //         location.reload()
            //     })
            const instance = axios.create({
                baseURL: "http://localhost:3000"
            })
            console.log({ instance })
            instance.post(`/admin/dashboard/products/delete/${producto.id}`)
                .then((respuesta) => {
                    console.log(respuesta)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    location.reload()
                })
        }
    })
}