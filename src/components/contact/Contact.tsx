/* eslint-disable @typescript-eslint/no-unsafe-argument */
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
import { useRef, useState } from "react";
import { Loader } from "lucide-react";
import "./contact.css";
export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
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

  const handleSubmitForm: SubmitHandler<emailValidatorType> = async () => {
    try {
      setIsLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        form.current!,
        import.meta.env.VITE_PUBLICKEY
      );
      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="contact-menu">
      <form onSubmit={handleSubmit(handleSubmitForm)} ref={form}>
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
          <div className="send-container">
            {isLoading ? <Loader className="animate-spin" /> : null}
            {isLoading ? "SENDING..." : "SUBMIT"}
          </div>
        </button>
      </form>
    </div>
  );
}
