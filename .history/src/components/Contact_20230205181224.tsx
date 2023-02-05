import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

const Contact = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  return (
    <>
      {/* 1st div container */}
      <div className="lg:relative h-screen  w-full">
        {/* Form div */}
        <div className="lg:absolute place-items-center justify  flex-cols-2 top-40 right-20 m-0 min-h-[50%] w-[50%] border-2 bg-gray-100">
          <form
            className="flex flex-col sm:p-5 lg:py-20 lg:px-40"
            onSubmit={onSubmit}
          >
            <label>First Name</label>
            <input className="" {...register("firstName")} />
            <label>Last Name</label>
            <input {...register("lastName")} />
            <label htmlFor="message">Message</label>
            <textarea
              cols={20}
              rows={10}
              id="message"
              {...register("lastName")}
            />
            <button
              type="button"
              onClick={() => {
                setValue("lastName", "luo"); // ✅
                // ❌: property bill does not exist
              }}
            >
              SetValue
            </button>
          </form>
        </div>
        {/* Grid div */}
        <div className="lg:left-10 lg:absolute  top-40 m-0  grid min-h-[40%] w-[40%] grid-cols-2 gap-3 border-0 border-2  ">
          {/* 4 divs  */}

          <div className=" bg-white">
            Notre Bureau principal
            {/* 3 divs flex */}
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" bg-white">
            Numéro de téléphone
            {/* 3 divs flex */}
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" bg-white">
            {/* 3 divs flex */}
            Fax
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className=" bg-white">
            {/* 3 divs flex */}
            Email
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
