import React from "react";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
const Register = () => {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
    });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route("register.store"));
    };
    return (
        <>
            <section>
                <h1>Sign Up</h1>
                <h2>to get started</h2>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </div>
                        )}
                    </div>
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
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm Password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                        {errors.password_confirmation && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.password_confirmation}
                            </div>
                        )}
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="terms"
                            onChange={(e) => setData("terms", e.target.checked)}
                        />
                        {errors.terms && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.terms}
                            </div>
                        )}
                    </div>
                    <button type="submit" disabled={processing}>
                        Continue
                    </button>
                </form>
                <p>
                    Already registered?{" "}
                    <Link href={route("login.index")}>Login</Link>
                </p>
            </section>
        </>
    );
};

export default Register;
