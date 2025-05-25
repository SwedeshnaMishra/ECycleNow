import { useState } from "react"
import Layout from "../../components/layout/Layout"

const CompanyLogin = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        // TODO: Submit form
    }

    return (
        <Layout>
            <div className='mx-auto w-full md:w-3/4 lg:w-1/2 p-16'>
                {/* <h1 className='mb-10 text-3xl font-bold'>Create account</h1> */}
                <form onSubmit={handleSubmit} className="border-4 border-green-600 p-10 rounded-xl">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">

                                <div className="col-span-full">
                                    <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                        Company Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                            required
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md w-full bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-center mt-2 text-gray-600">Doesn&apos;t have an account ? <a href="/register/company" className="text-green-600 font-semibold underline">Register</a></p>
            </div>
        </Layout>
    )
}

export default CompanyLogin
