import { Await, Link, useLoaderData, useNavigate } from 'react-router-dom'
import Chat from '../../components/chat/Chat'
import apiRequest from '../../lib/apiRequest.js'
import List from '../../components/list/List.jsx'
import './profile.scss'
import { Suspense, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.jsx'

const Profile = () => {
    const data = useLoaderData();

    const { updateUser, currentUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
            await apiRequest.post('/auth/logout');
            updateUser(null)
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='profile'>
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <Link to='/profile/update'>
                            <button>Update Profile</button>

                        </Link>
                    </div>
                    <div className="info">
                        <span>Avatar : <img src={currentUser.avatar || '/noavatar.jpg'} alt="" /></span>
                        <span>Username: <b>{currentUser.username}</b></span>
                        <span>Email: <b>{currentUser.email}</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My list</h1>
                        <Link to='/add'>
                            <button>Create New Post</button>
                        </Link>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                            resolve={data.postResponse}
                            errorElement={<p>Error loading posts!</p>}
                        >
                            {(postResponse) => <List posts={postResponse.data.userPosts} />}
                        </Await>
                    </Suspense>
                    <div className="title">
                        <h1>Saved Lists</h1>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                            resolve={data.postResponse}
                            errorElement={<p>Error loading posts!</p>}
                        >
                            {(postResponse) => <List posts={postResponse.data.savedPosts} />}
                        </Await>
                    </Suspense>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default Profile