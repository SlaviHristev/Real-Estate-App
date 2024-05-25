import { useContext, useState } from 'react'
import './profileUpdate.scss'
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';
import UploadWidget from '../../components/uploadWidget/UploadWidget';


const ProfileUpdate = () => {
    const { currentUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [avatar,setAvatar] = useState(currentUser.avatar)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const { username, email, password } = Object.fromEntries(formData);
        try {
            const res = await apiRequest.put(`/users/${currentUser.id}`, { username, email, password, avatar });
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
                        <input type="text" name='username' id='username' defaultValue={currentUser.username} />
                    </div>
                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' defaultValue={currentUser.email} />
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
                <img src={avatar || '/noavatar.jpg'} alt="" className='avatar' />
                <UploadWidget uwConfig={{
                    cloudName: 'dknpnmf1m',
                    uploadPreset: "estate",
                    multiple: false,
                    maxImageFileSize: 2000000,
                    folder: "avatars"
                }} 
                setAvatar={setAvatar}
                />
            </div>
        </div>
    )
}

export default ProfileUpdate