/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailValidator,
  emailValidatorType,
} from "../../validators/formValidation";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Input } from "../Input";
import { Textarea } from "../TextArea";
import { useState } from "react";
import { Loader } from "lucide-react";
import "./contact.css";
export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    formState: { errors },
    reset,
    register,
    handleSubmit,
  } = useForm<emailValidatorType>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },

    resolver: zodResolver(emailValidator) /* eslint-disable-line */,
  });

  const handleSubmitForm: SubmitHandler<emailValidatorType> = async (data) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await emailjs.sendForm(
        import.meta.env.REACT_APP_SERVICEID,
        import.meta.env.REACT_APP_TEMPLATEID,
        data as any,
        import.meta.env.REACT_APP_PUBLICKEY
      );
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
    }
  };
  return (
    <div className="contact-menu">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <Input
            id="name"
            errors={errors}
            register={register}
            required
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Input
            id="email"
            errors={errors}
            register={register}
            required
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <Textarea
            id="message"
            errors={errors}
            register={register}
            required
            placeholder="Message"
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? <Loader className="animate-spin" /> : null}
          {isLoading ? "SENDING..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}
