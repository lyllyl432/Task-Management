import React from "react";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import Input from "../components/Input";
import Button from "../components/Button";
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
            {/* <section>
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
            </section> */}
            <section className="flex flex-col gap-4 pt-4 max-w-lg mx-auto md:border md:p-8 md:rounded-md shadow-md md:w-full">
                <div>
                    <h1 className="text-2xl font-bold leading-tight">Login</h1>
                    <h2 className="text-lg font-light">to get started</h2>
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className="mt-2">
                        <Input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            autoComplete="email"
                        ></Input>
                        {errors.email && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className="mt-2">
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            autoComplete="new-password"
                        ></Input>
                        {errors.password && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </div>
                        )}
                    </div>
                    <Button
                        classes="w-full mt-4 disabled:opacity-50"
                        type="submit"
                        disabled={processing}
                    >
                        Continue
                    </Button>
                </form>
                <p className="text-center text-xs">
                    <span className="text-gray-500">New user?</span>
                    <Link className="ms-1" href={route("register.index")}>
                        Register
                    </Link>
                </p>
            </section>
        </>
    );
};

export default Login;
