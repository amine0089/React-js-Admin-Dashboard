import React, { useState } from 'react'
import './new.scss'
import SidBar from '../../components/sidbar/SidBar'
import Nav from '../../components/navbar/Nav'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
function New() {
  const [file, setFile] = useState('')
  return (
    <div className='new'>
        <SidBar />

        <div className='newContainer'>
            <Nav />
            <div className='top'>
                <h1>Add New User</h1>
            </div>

            <div className='bottom'>
                <div className='left'>
                    <img src= {file ? URL.createObjectURL(file) : 'https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725120-stock-illustration-image-available-icon-flat-vector.jpg'}  alt='waitting for dowloding'/>
                </div>
                <div className='right'>
                    <form>
                    <div className='formInput'>
                            <label htmlFor='filee'>Image: <DriveFolderUploadOutlinedIcon className='icon'/></label>
                            <input type= 'file' onChange={e => setFile(e.target.files[0])} id='filee'style={{display:'none'}}/>
                        </div>
                        <div className='formInput'>
                            <label>Username</label>
                            <input type= 'text' placeholder='Mohammed' />
                        </div>
                        
                        <div className='formInput'>
                            <label>Name and surname</label>
                            <input type= 'text' placeholder='Mohammed' />
                        </div>
                        <div className='formInput'>
                            <label>Email</label>
                            <input type= 'email' placeholder='Mohammed@gmail.com' />
                        </div>
                        <div className='formInput'>
                            <label>Phone</label>
                            <input type= 'text' placeholder='0796236896' />
                        </div>
                        <div className='formInput'>
                            <label>Password</label>
                            <input type= 'password'/>
                        </div>
                        <div className='formInput'>
                            <label>Address</label>
                            <input type= 'text' placeholder='Meslak St, 16 Mascara' />
                        </div>
                        <div className='formInput'>
                            <label>Country</label>
                            <input type= 'text' placeholder='Algeria' />
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default New