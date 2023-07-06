import { forwardRef } from "react";
import { FieldErrors } from "react-hook-form";
import { emailValidatorType } from "../validators/formValidation";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  errors: FieldErrors<emailValidatorType>;
  id: "name" | "email" | "message";
  required?: boolean;
  register: any;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, errors, register, required, ...props }, ref) => {
    return (
      <>
        <input
          id={id}
          type={type}
          className={`${className ?? ""}`}
          ref={ref}
          {...props}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          {...register(id, { required })}
        />
        {errors[id] && (
          <span className="error-message">{errors[id]?.message}</span>
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
