import './profileUpdate.scss'

const ProfileUpdate = () => {
  return (
    <div className='profileUpdate'>
        <div className="formContainer">
            <form>
                <h1>Update Profile</h1>
                <div className="item">
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' id='username' />
                </div>
                <div className="item">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' />
                </div>
                <div className="item">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <button>Update</button>
            </form>
        </div>
        <div className="sideContainer">
            <img src="" alt="" className='avatar' />
        </div>
    </div>
  )
}

export default ProfileUpdate