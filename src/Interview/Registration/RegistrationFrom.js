import React, { useState }from 'react'


let Registration = () =>
{
    let [user, setUser] = useState({
        userName: "",
        email: '',
        number:'',
        profileImage: "",
    })


    let updateHandler = (event) =>
    {
        setUser({...user, [event.target.name]:event.target.value})
    }

    let imageHandler = (event) =>
    {
    let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener("load", () =>
        {
            
            if((event.target.files[0].size < 307200) && (reader.result))  {
                
                event.target.value = "";
                setUser({
                    ...user,
                    profileImage:reader.result,
                  });
            }

            else {
                alert("File is too big!");
                setUser({
                    ...user,
                    profileImage:null,
                  });

            }

        });
    };
    
  

    return <>
        <nav className='navbar navbar-dark bg-dark'>
            <h2 className='text-white'>Upload File</h2>
        </nav>

        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <form className='bg-dark text-white p-5 rounded'>
                        <h2 className='mb-5'>Details</h2>
                        <div className='form-group'>
                            <input className='from-control' type='text' name='userName' placeholder='User Name'
                            onChange={updateHandler}
                            />
                        </div>
                        <div className='form-group'>
                            <input className='from-control' type='email' name='email' placeholder='Email'
                            onChange={updateHandler}
                            />
                        </div>
                        <div className='form-group'>
                            <input className='from-control' type='number' name='number' placeholder=' Mobile Number'
                            onChange={updateHandler}
                            />
                        </div>
                        <div className='form-group'>
                            <input className='from-control' type='file' name='profileImage'
                                onChange={imageHandler}
                                accept="image/*"
                            />
                        </div>
                    </form>
                </div>

                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3>Preview</h3>
                        </div>
                        <div className='card-body'>
                            <ul>
                                <li>{user.userName}</li>
                                <li>{user.email}</li>
                                <li>{user.number}</li>
                            </ul>
                            
                            
                            

                            <img src={user.profileImage} alt='NAN' height='100%' width='100%'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        </>
}

export default Registration;