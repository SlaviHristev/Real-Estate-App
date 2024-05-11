import Chat from '../../components/chat/Chat'
import List from '../list/List'
import './profile.scss'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>Avatar : <img src="/logo.png" alt="" /></span>
                    <span>Username: <b>Slavi</b></span>
                    <span>Email: <b>Slavihristev97@gmail.com</b></span>
                </div>
                <div className="title">
                    <h1>My list</h1>
                    <button>Create New Post</button>
                </div>
                <List/>
                <div className="title">
                    <h1>Saved Lists</h1>
                </div>
                <List/>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat/>
            </div>
        </div>
    </div>
  )
}

export default Profile