export default function FormDropdown({ data, name, setValue, obj }) {
  const handleChange = (e) => {
    const parseValue = (value) => value.split("&&");
    const [id, uri, label] = parseValue(e.target.value);
    setValue({
      ...obj,
      info: { quantity: 1, foodId: id, measureURI: uri },
      label: label,
    });
  };

  const options = data.measures.map((option) => {
    const label = option.label;
    const id = data.food.foodId;
    const measure = option.measureURI;
    const otherMeasure = option.uri;

    return (
      <option
        key={measure ? measure : option.uri}
        value={`${id}&&${measure ? measure : otherMeasure}&&${label}`}
      >
        {label}
      </option>
    );
  });

  return (
    <select
      className="py-2 mt-1 mb-1 bg-white w-1/6 self-center"
      name={name}
      onChange={handleChange}
      required=""
    >
      <option className="text-gray-100" disabled="" defaultValue>
        {name}
      </option>
      {options}
    </select>
  );
}
