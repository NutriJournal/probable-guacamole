export default function FormInput({
  name,
  label = null,
  placeHolder = "",
  type = "text",
  required = false,
  setInput,
  data,
}) {
  const handleChange = (e) => {
    setInput({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col my-4">
      <div className="-mb-3 z-0 pl-2">
        {label && (
          <label className="text-xs bg-white p-1">
            {label}
            {required && (
              <abbr
                className="text-red-500 px-2"
                title="required"
                aria-label="required"
              >
                *
              </abbr>
            )}
          </label>
        )}
      </div>
      <input
        className="w-full border border-gray-400 rounded pl-2 py-3"
        placeholder={placeHolder}
        name={name}
        type={type}
        onChange={handleChange}
      />
    </div>
  );
}
