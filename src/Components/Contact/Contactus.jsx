import React, { useState } from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import { addmessage } from "../api/auth";
import ErrorAlert from "../Alert/ErrorAlert";
import { setLoading } from "../../redux/eastern-light/reducer/reducer";

const Contactus = () => {
  const { isloading } = useSelector((state) => state.auth);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    sendmessage: "",
  });
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      addmessage(message).then((res) => {
        setMessage({
          name: "",
          email: "",
          phone: "",
          sendmessage: "",
        });
      });
      setLoading(false);
      setSuccess("Thank you for your message. It has been sent.");
    } catch (err) {
      ErrorAlert("Error: ", err);
      setSuccess("Someting went wrong. Please try again.");
    }
  };

  const { name, email, phone, sendmessage } = message;
  return (
    <section className="pt-7 bg-no-repeat" name="contact">
      <div className="contact-bg  h-auto py-7 ">
        <div className="opacity-90">
          <h2 className="text-center font-bold text-2xl mb-7 text-white">
            CONTACT US
          </h2>
          <form method="post"
            onSubmit={handleSubmit}
            className="w-60% m-auto bg-white"
            data-aos="fade-up"
          >
            <label for="name" data-aos="fade-up">
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={name}
                required
                placeholder="Name"
              />
              <span className="span-slider">Name *</span>
            </label>
            <label for="email" data-aos="fade-up">
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={email}
                placeholder="Email"
              />
              <span className="span-slider">Email</span>
            </label>
            <label for="phone" data-aos="fade-up">
              <input
                type="number"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={phone}
                required
                placeholder="Phone"
              />
              <span className="span-slider">Phone *</span>
            </label>
            <div class="form-float scheme-des" data-aos="fade-up">
              <textarea
                name="sendmessage"
                class="inputText"
                onChange={handleChange}
                maxLength={255}
                id=""
                value={sendmessage}
                cols="30"
                rows="10"
                placeholder=" "
              ></textarea>
              <label class="floating-label">Message (max 255) *</label>
            </div>
            <button
              disabled={
                name === "" || phone === "" || sendmessage === "" ? " " : ""
              }
              type="submit"
              className="bg-[#76A900] text-white rounded-lg"
              data-aos="fade-up"
            >
              {isloading ? (
                <div className="flex items-center justify-center">
                  <HashLoader color="#76A900" size={20} />
                </div>
              ) : (
                "Submit"
              )}
            </button>
            <p className="text-center text-green-500 pt-7">{success}</p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contactus;
