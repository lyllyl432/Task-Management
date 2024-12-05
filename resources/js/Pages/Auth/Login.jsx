import React from "react";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
const Login = () => {
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route("login.store"));
    };
    return (
        <>
            <section>
                <h1>Login</h1>
                <h2>to get started</h2>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {errors.password && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </div>
                        )}
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="remember"
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                    </div>
                    <button type="submit" disabled={processing}>
                        Continue
                    </button>
                </form>
                <p>
                    New user? <Link href={route("register.index")}>Login</Link>
                </p>
            </section>
        </>
    );
};

export default Login;
