import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => (
  <div style={{ marginBottom: "10px" }}>
    <label>
      {label}
      <input {...props} />
    </label>
  </div>
);

export default Input;
