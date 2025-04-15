import { useState } from "react";

export function useForm<T extends object>(initialState: T) {
  const [form, setForm] = useState<T>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setForm(initialState);

  return { form, handleChange, resetForm };
}
