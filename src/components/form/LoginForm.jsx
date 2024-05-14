import React, { useState } from "react";
import {
    Card,
    CardBody,
    Input,
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Checkbox,

} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export default function CheckoutForm({ handleLogin }) {
    const [type, setType] = useState("register");


    return (
        <Card className="fixed bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-10 py-4  bg-[#faf8ff] bg-opacity-10 " color="transparent">
            <button className="flex place-content-end" onClick={() => handleLogin()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#000000"} fill={"none"}>
                    <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <CardBody>
                <Tabs value={type} className="overflow-visible">
                    <TabsHeader className="relative z-0">
                        <Tab value="register" onClick={() => setType("register")}>
                            Register
                        </Tab>
                        <Tab value="login" onClick={() => setType("login")}>
                            Login
                        </Tab>
                    </TabsHeader>
                    <TabsBody
                        className="!overflow-x-hidden mb-2"
                        animate={{
                            initial: {
                                x: type === "card" ? 400 : -400,
                            },
                            mount: {
                                x: 0,
                            },
                            unmount: {
                                x: type === "card" ? 400 : -400,
                            },
                        }}
                    >
                        <TabPanel value="register" className="p-0">
                            <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-1 flex flex-col gap-6">
                                    <Typography variant="h6" className="-mb-3 text-gray-100">
                                        Enter Your Email
                                    </Typography>
                                    <Input type="Name" label="Your Email" placeholder="JohnDoe@gmail.com" className="text-white" color="white" />

                                    <Typography variant="h6" className="-mb-3 text-gray-100">
                                        Enter Your Password
                                    </Typography>
                                    <Input type="Name" label="Password" placeholder="*********"
                                        className="text-white" color="white" />
                                </div>
                                <Checkbox
                                    label={
                                        <Typography
                                            variant="small"

                                            className="flex items-center font-normal text-white"
                                        >
                                            I agree the
                                            <a
                                                href="#"
                                                className="font-medium transition-colors hover:text-white"
                                            >
                                                &nbsp;Terms and Conditions
                                            </a>
                                        </Typography>
                                    }
                                    containerProps={{ className: "-ml-2.5" }}
                                />
                                <Button className="mt-3" fullWidth>
                                    Register
                                </Button>
                                <Typography className="mt-4 text-center font-normal text-white">
                                    Already have an account?{" "}
                                    <button type="button" className="font-medium text-black" onClick={() => setType("login")}>
                                        Sign In
                                    </button>
                                </Typography>
                            </form>
                        </TabPanel>
                        <TabPanel value="login" className="p-0">
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-1 flex flex-col gap-6">
                                    <Typography variant="h6" className="-mb-3 text-blue-gray-100">
                                        Enter Your Email
                                    </Typography>
                                    <Input type="Name" label="Your Email" placeholder="JohnDoe@gmail.com"
                                        className="text-white" color="white" />

                                    <Typography variant="h6" className="-mb-3 text-blue-gray-100">
                                        Enter Your Password
                                    </Typography>
                                    <Input type="Name" label="Password" placeholder="*********"
                                        className="text-white" color="white" />
                                </div>
                                <Button className="mt-6" fullWidth>
                                    sign up
                                </Button>

                                <Typography className="mt-4 text-center font-normal text-white">
                                    <Link to=''>Forgot Password ?</Link>
                                </Typography>

                            </form>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </CardBody>
        </Card>
    );
}