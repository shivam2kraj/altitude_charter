import React, { useState } from "react";

function OneTrip() {

    const [formData, setFormData] = useState({
        FirstName: "",
        CompanyName: "",
        Email: "",
        PhoneNumber: "",
        Departure: "",
        Arrival: "",
        DepartureDate: "",
        Time: "",
        Passengers: "",
        PlaneType: ""
    })

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const [firstNameValid, setFirstNameValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [submit, setSubmit] = useState(false)

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (formData.FirstName === '') {
            setFirstNameValid(false)
        } else {
            setFirstNameValid(true)
        }
        if (formData.Email === '') {
            setEmailValid(false)
        } else {
            setEmailValid(true)
        }
        if (formData.FirstName !== '' && formData.Email !== '') {
            setSubmit(true)
        }
    }

    return (
        <section>

            <form className="w-[550px] shadow-[0px_0px_10px_#ffffff] transition-all duration-300 hover:shadow-[0px_0px_30px_#ffffff] flex flex-col gap-[15px] bg-black px-[25px] py-[24px] rounded-[13px]" action="">
                <div className="flex gap-[20px]">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className={firstNameValid ? "text-white font-Jura" : "text-[red] font-Jura"}>Full Name </label>
                            {firstNameValid === false && <span className="text-[red] font-Jura">required*</span>}
                        </div>
                        <input
                            name="FirstName"
                            type="text"
                            onChange={HandleChange}
                            placeholder="Enter Your Full Name"
                            className={firstNameValid ? "border-[1px] w-[230px] font-Jura mt-[6px] border-black pl-[12px] py-[7px] rounded-[7px]" : "border-[1px] w-[230px] mt-[6px] border-[red] font-Jura placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"} />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className={emailValid ? "text-white font-Jura" : "text-[red] font-Jura"}>Email ID </label>
                            {emailValid === false && <span className="text-[red] font-Jura">required*</span>}
                        </div>
                        <input
                            name="Email"
                            type="text"
                            onChange={HandleChange}
                            placeholder="Enter Your Email Id"
                            className={emailValid ? "border-[1px] w-[230px] mt-[6px] border-black pl-[12px] py-[7px] font-Jura rounded-[7px]" : "border-[1px] w-[230px] mt-[6px] border-[red] font-Jura placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"} />
                    </div>

                </div>

                <div className="flex gap-[20px]">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className="text-white font-Jura">Company Name </label>
                        </div>
                        <input
                            name="CompanyName"
                            type="text"
                            onChange={HandleChange}
                            placeholder="Enter Your Company Name"
                            className="border-[1px] mt-[6px] w-[230px] font-Jura border-black pl-[12px] py-[7px] rounded-[7px]" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className="text-white font-Jura">Phone Number </label>
                        </div>
                        <input
                            name="PhoneNumber"
                            type="number"
                            onChange={HandleChange}
                            placeholder="Enter Your Phone Number"
                            className="border-[1px] mt-[6px] w-[230px] font-Jura border-black pl-[12px] py-[7px] rounded-[7px]" />
                    </div>

                </div>

                <div className="flex gap-[20px]">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className="text-white font-Jura">Departure Airpot </label>
                        </div>
                        <input
                            name="Departure"
                            type="text"
                            onChange={HandleChange}
                            placeholder="Enter Your Departure Airpot"
                            className="border-[1px] mt-[6px] w-[230px] font-Jura border-black pl-[12px] py-[7px] rounded-[7px]" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className="text-white font-Jura">Arrival Airpot</label>
                        </div>
                        <input
                            name="Arrival"
                            type="text"
                            onChange={HandleChange}
                            placeholder="Enter Your Arrival"
                            className="border-[1px] mt-[6px] w-[230px] font-Jura border-black pl-[12px] py-[7px] rounded-[7px]" />
                    </div>

                </div>

                <div className="flex gap-[20px]">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className="text-white font-Jura">Departure Date </label>
                        </div>
                        <input
                            name="DepartureDate"
                            type="date"
                            onChange={HandleChange}
                            placeholder="Enter Your Departure Date"
                            className="border-[1px] mt-[6px] w-[230px] border-black pl-[12px] py-[7px] rounded-[7px]" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className="text-white font-Jura">Time </label>
                        </div>
                        <input
                            name="Time"
                            type="time"
                            onChange={HandleChange}
                            placeholder="Enter Your Time"
                            className="border-[1px] mt-[6px] w-[230px] border-black pl-[12px] py-[7px] rounded-[7px]" />
                    </div>

                </div>

                <div className="flex gap-[20px]">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className="text-white font-Jura">Passengers </label>
                        </div>
                        <input
                            name="Passengers"
                            type="number"
                            onChange={HandleChange}
                            placeholder="Enter Your Passengers"
                            className="border-[1px] mt-[6px] w-[230px] font-Jura border-black pl-[12px] py-[7px] rounded-[7px]" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className="text-white font-Jura">Plane Type </label>
                        </div>
                        <input
                            name="PlaneType"
                            type="text"
                            onChange={HandleChange}
                            placeholder="Enter Your Plane Type"
                            className="border-[1px] mt-[6px] w-[230px] font-Jura border-black pl-[12px] py-[7px] rounded-[7px]" />
                    </div>

                </div>

                <button
                    onClick={HandleSubmit}
                    className="border-white border-[1px] w-[480px] hover:bg-[gold] font-Jura hover:text-white transition-all duration-300 py-[12px] px-[35px] text-white rounded-[5px]">Book Your Flight
                </button>

            </form>
        </section>
    )
}

export default OneTrip

