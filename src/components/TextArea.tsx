import { forwardRef } from "react";
import { emailValidatorType } from "../validators/formValidation";
import { FieldErrors } from "react-hook-form";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    errors: FieldErrors<emailValidatorType>;
    id: "name" | "email" | "message";
    required?: boolean;
    register: any;
  };

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, errors, id, register, required, ...props }, ref) => {
    return (
      <>
        <textarea
          id={id}
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
Textarea.displayName = "Textarea";

export { Textarea };
