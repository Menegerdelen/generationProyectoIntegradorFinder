

import { FormLogin } from "./components/FormLogin/FormLogin"



export const LoginPage = () => {
    return (
        <section className="container">
            <div className="my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <FormLogin/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
