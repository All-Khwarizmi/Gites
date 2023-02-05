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
      <div className="h-screen w-full  relative">
        {/* Form div */}
        <div className="min-h-[50%] w-[50%] bg-gray-200 absolute border-2 top-40  right-10">
          <form 
          className="flex flex-col"
          onSubmit={onSubmit}>
            <label>First Name</label>
            <input
            className="" {...register("firstName")} />
            <label>Last Name</label>
            <input {...register("lastName")} />
            <label htmlFor="message">Message</label>
            <textarea 
            cols={20}
            rows={10}
            id="message"
             {...register("lastName")} />
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
        <div className="">
          {/* 4 divs  */}

          <div>
            Notre Bureau principal
            {/* 3 divs flex */}
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            Numéro de téléphone
            {/* 3 divs flex */}
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            {/* 3 divs flex */}
            Fax
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
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
