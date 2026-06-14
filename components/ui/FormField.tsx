import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "file";
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  options?: readonly string[];
  rows?: number;
  className?: string;
  accept?: string;
}

export function FormField({
  label,
  name,
  type = "text",
  required,
  optional,
  placeholder,
  options,
  rows = 5,
  className,
  accept,
}: FormFieldProps) {
  const inputId = `field-${name}`;
  const baseInputStyles = cn(
    "w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground",
    "placeholder:text-sage-light transition-colors duration-200",
    "focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
  );

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={inputId} className="text-sm font-medium text-foreground">
        {label}
        {optional && (
          <span className="ml-1 font-normal text-sage">(optional)</span>
        )}
        {required && <span className="text-accent-dark"> *</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={inputId}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={cn(baseInputStyles, "resize-y min-h-[120px]")}
        />
      ) : type === "select" && options ? (
        <select
          id={inputId}
          name={name}
          required={required}
          className={cn(baseInputStyles, "cursor-pointer")}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <input
          id={inputId}
          name={name}
          type="file"
          accept={accept}
          className={cn(
            baseInputStyles,
            "file:mr-4 file:rounded-md file:border-0 file:bg-accent-light file:px-4 file:py-2 file:text-sm file:font-medium file:text-foreground hover:file:bg-accent/30"
          )}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseInputStyles}
        />
      )}
    </div>
  );
}
