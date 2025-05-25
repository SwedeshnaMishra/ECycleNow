import { FaBuilding, FaUser } from "react-icons/fa"
import Layout from "../../components/layout/Layout"

const Login = () => {
    return (
        <Layout>
            <div className="custom-padding flex flex-col flex-wrap justify-center items-center space-y-8 mx-auto my-24">
                <h2 className="text-3xl font-bold text-green-800">Login as ?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    <a href="/login/user">
                        <div className="px-20 py-10 bg-green-100 hover:bg-green-200 text-green-800 transition-all duration-300 ease-in-out p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] cursor-default flex flex-col justify-center items-center">
                            <FaUser size={50} />
                            <h6 className="text-green-800 text-xl font-semibold mt-3">Individual</h6>
                        </div>
                    </a>
                    <a href="/login/company">
                        <div className="px-20 py-10 bg-green-100 hover:bg-green-200 text-green-800 transition-all duration-300 ease-in-out p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] cursor-default flex flex-col justify-center items-center">
                            <FaBuilding size={50} />
                            <h6 className="text-green-800 text-xl font-semibold mt-3">Company</h6>
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    )
}

export default Login
