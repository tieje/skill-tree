import { Field, Form } from "react-final-form"
import { useLocation } from "react-router-dom"
import { useReduxDispatch } from "../../redux/hooks"
import { useFocusInput } from "../../utils/utils"

const Registration = () => {
    const location = useLocation()
    // The problem below is with .from?, it seems there are not types for it yet
    // @ts-ignore
    let from = location.state?.from?.pathname || '/'
    const dispatch = useReduxDispatch()
    const onSubmit = async () => {
        return (null)
    }
    const inputRef = useFocusInput()

    return (
        <section className="grid place-content-center h-screen w-screen bg-white">
            <div className='border border-solid'>
                <Form
                    onSubmit={(values: 1) => onSubmit()}
                >
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
        </section>
    )
}
export {
    Registration
}
