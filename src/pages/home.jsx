import {useState} from 'react'
import { connect } from 'react-redux'
import {login} from '../common/actions/auth'

import Logo from '../images/logo/theRose-black.svg'

function Home(props){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {dispatch} = props

    const handleLogin = (e)=>{
        e.preventDefault()

        dispatch(login(user, password))
            .then(()=>{
                console.log('login')
            })
            .catch(()=>{
                setError("User Password non validi")
                console.log('logout')
            })
    }
    return(
            <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white items-center rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <div className='w-full  flex justify-center'>
                    <img src={Logo} width={100} height={100} />
                </div>
                <h1 className='text-2xl font-medium text-black mt-4 mb-12 text-center'>
                    Fai il login 
                </h1>

                <form action='#'>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-black border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            value={user}
                            onChange={({target})=>setUser(target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-black border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                        />
                    </div>
                    {
                    error!==''
                        ?( 
                            <div className='flex justify-center mt-6 text-red'>
                                {error}
                            </div>
                        )
                        :(<></>)
                    }
                    <div className='flex justify-center items-center mt-6'>
                        <button onClick={handleLogin}
                            className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    const {isLoggedIn} = state.auth


    return {
        isLoggedIn
    }
}

export default connect(mapStateToProps)(Home)