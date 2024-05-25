import { useContext, useState } from 'react'
import './profileUpdate.scss'
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';


const ProfileUpdate = () => {
    const [error, setError] = useState('');
    const {currentUser, updateUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);

        const {username, email, password} = Object.fromEntries(formData);
        try {
            const res = await apiRequest.put(`/users/${currentUser.id}`,{username,email,password});
            updateUser(res.data);
            navigate('/profile')
        } catch (err) {
            console.log(err);
            setError(err.response.data.message)
        }
    }
  return (
    <div className='profileUpdate'>
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1>Update Profile</h1>
                <div className="item">
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' id='username' defaultValue={currentUser.username}/>
                </div>
                <div className="item">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' defaultValue={currentUser.email}/>
                </div>
                <div className="item">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <button>Update</button>
                {error && <span>{error}</span>}
            </form>
        </div>
        <div className="sideContainer">
            <img src={currentUser.avatar || '/noavatar.jpg'} alt="" className='avatar' />
        </div>
    </div>
  )
}

export default ProfileUpdate