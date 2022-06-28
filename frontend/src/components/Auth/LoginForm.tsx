import { Field, Form } from "react-final-form"
import { useLocation, useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../redux/api"
import {
    useReduxDispatch,
    //useReduxSelector,
} from "../../redux/hooks"
import {
    //LocationPathData,
    LoginRequest
} from "../../types/Types"
import { useFocusInput } from "../../utils/utils"
import { setCredentials } from "./AuthSlice"


const LoginForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    // The problem below is with .from?, it seems there are not types for it yet
    // @ts-ignore
    let from = location.state?.from?.pathname || '/'
    const dispatch = useReduxDispatch()
    const [Login] = useLoginMutation()
    const onSubmit = async (values: LoginRequest) => {
        const payload = await Login(values).unwrap()
        dispatch(setCredentials(payload))
        navigate(from, { replace: true })
    }
    const inputRef = useFocusInput()
    return (
        <section className="grid place-content-center h-screen w-screen bg-white">
            <p className='whitespace-pre-wrap'>Please use the following username and password:</p>
            <p>testuser3</p>
            <p>I0W47G2NO9W#h8!QyD</p>
            <div className='border border-solid'>
                <Form onSubmit={(values: LoginRequest) => onSubmit(values)}>
                    {props => (
                        <form className="grid grid-cols-1 gap-4 m-5 w-96" onSubmit={props.handleSubmit}>
                            <div>
                                <label className="px-2">
                                    Username
                                </label>
                            </div>
                            <div className="px-2">
                                <Field
                                    ref={inputRef}
                                    className='w-full'
                                    name='username'
                                    component='input'
                                    type='text'
                                    placeholder='username'
                                />
                                <hr></hr>
                            </div>
                            <div>
                                <label className="px-2">
                                    Password
                                </label>
                            </div>
                            <div className="px-2">
                                <Field
                                    className='w-full'
                                    name='password'
                                    component='input'
                                    type='text'
                                    placeholder='password'
                                />
                                <hr></hr>
                            </div>
                            <div className="grid place-content-center">
                                <button
                                    className="border border-solid text-lg px-4 py-1 bg-green rounded-full text-white shadow-lg hover:bg-dark-green disabled:bg-gray-green"
                                    type='submit'
                                    disabled={props.submitting || props.pristine}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </Form>
            </div>
            <p className='pre-whitespace'>I appreciate you coming this far, however,</p>
            <p>I've decided to stop working on this project for a variety of <a className='text-blue underline underline-offset-4' href='https://github.com/tieje/skill-tree/blob/main/README.md'>reasons</a>.</p>
            <p>Feel free to play around with the app.</p>
            <p>For inquiries, you can contact me at toj320</p>
            <p>@gmail.com</p>
        </section>
    )
}
export default LoginForm
