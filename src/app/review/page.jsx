
"use client";
import Button from "@/Components/ReusableComponents/Button";
import { LocationOn, Mail, Phone } from "@mui/icons-material";
import "./review.css"


const Review = () => {
  return (
    <div className="contact-main-container p-6 border-b border-b-[var(--black)]">
      <div className="contact-header mb-10">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or need help? Get in touch with our team.
        </p>
      </div>
      <div className="contact-container grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="contact-information space-y-6">
          <h3 className="text-xl font-semibold">Contact Information</h3>

          <div className="flex gap-4 items-start">
            <Phone className="text-[var(--primary-blue)]" />
            <div>
              <p className="font-medium">Phone</p>
              <p>+91 9513839000</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Mail className="text-[var(--primary-blue)]" />
            <div>
              <p className="font-medium">Email</p>
              <p>info@localblueforce.com</p>
              <p>support@localblueforce.com</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <LocationOn className="text-[var(--primary-blue)]" />
            <div>
              <p className="font-medium">Office</p>
              <p>
                2nd floor, VD towers - 48/2 , 5 East of NGEF Layout ,
                Krishnarajapuram Bangalore- 560016, Karnataka
              </p>
            </div>
          </div>
        </div>

        <div className="contact-message-container">
          <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input type="email" className="w-full border p-2 rounded" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block font-medium mb-1">Subject</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea className="w-full border p-2 rounded h-32"></textarea>
            </div>

            <Button buttonName="Send Message" className="primary" handleClick={() => {}} />
          </form>
        </div>
      </div>

      <div className="contact-find-us mt-10">
        <h3 className="text-xl font-semibold mb-2">Find Us</h3>
        <div className="w-full h-96">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Second%20floor,%20V.D%20Tower,%2048/2,%204th%20Cross%20Rd,%20Govindpura,%20Dooravani%20Nagar,%20Bengaluru,%20Karnataka%20560016+(Loacle%20Blue%20Force)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Review;
