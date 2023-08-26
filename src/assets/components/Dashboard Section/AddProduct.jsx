import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const imageBB_key = import.meta.env.VITE_IMAGEBB_API_KEY;

    const onSubmit = data => {

        let formData = new FormData();
        formData.append('image', data.image[0]);

        const imageBB_url = `https://api.imgbb.com/1/upload?key=${imageBB_key}`;
        fetch(imageBB_url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(getImage => {
                if (getImage.success) {
                    const imgUrl = getImage.data.display_url;
                    let preData = data;
                    preData.image = imgUrl;

                    // Product add api// 
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.success) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'New Product Added Successfuly',
                                    showConfirmButton: true,
                                    timer: 3500
                                })
                            }
                        })
                }
            })

        reset();
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-dark">
                    <div className="p-1 p-lx-5 p-lg-5 p-md-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="text-center mb-5">Add New Product</h3>
                            <hr />
                            <div className="form-outline mb-4 mt-5">
                                <input type="text" className="form-control" {...register("name", { required: true })}
                                    placeholder='Product Name' />
                            </div>

                            <div className="form-outline mb-4">
                                <input type="number" className="form-control" {...register("price", { required: true })}
                                    placeholder='Product Price' />
                            </div>

                            <div className="form-outline mb-4">
                                <input type="text" className="form-control" {...register("category", { required: true })}
                                    placeholder='Product Category' />
                            </div>

                            <div className="form-outline mb-4">
                                <input type="file" className="form-control" {...register("image", { required: true })}
                                    placeholder='Product Image' />
                            </div>

                            <div className="form-floating mb-4">
                                <textarea className='form-control' id='floatingTextarea' {...register("description")}></textarea>
                                <label for="floatingTextarea">Product Description</label>
                            </div>

                            <div className="pt-1 mb-4">
                                <button className="btn btn-dark btn-lg rounded-0 w-100" type="submit">Sumbit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;