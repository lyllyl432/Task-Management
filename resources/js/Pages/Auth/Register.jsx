import React from "react";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import Input from "../components/Input";
import Button from "../components/Button";
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
            <section className="flex flex-col gap-4 pt-4 max-w-lg mx-auto md:border md:p-8 md:rounded-md shadow-md md:w-full">
                <div>
                    <h1 className="text-2xl font-bold leading-tight">
                        Sign Up
                    </h1>
                    <h2 className="text-lg font-light">to get started</h2>
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className="mt-2">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        ></Input>
                        {errors.name && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </div>
                        )}
                    </div>
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
                    <div className="mt-2">
                        <Input
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm Password"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        ></Input>
                        {errors.password_confirmation && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.password_confirmation}
                            </div>
                        )}
                    </div>
                    <div className="mt-2">
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                name="terms"
                                onChange={(e) =>
                                    setData("terms", e.target.checked)
                                }
                            />
                            <span className="text-xs">
                                Agree to terms and conditions
                            </span>
                        </div>
                        {errors.terms && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.terms}
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
                    <span className="text-gray-500">Already registered?</span>
                    <Link className="ms-1" href={route("login.index")}>
                        Login
                    </Link>
                </p>
            </section>
        </>
    );
};

export default Register;
