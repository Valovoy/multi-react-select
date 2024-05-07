import React from "react";
import Select, { ActionMeta } from "react-select";
import cn from "classnames";
import { DropIcon } from "./ui/svg";
import styles from "./App.module.scss";

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: "item1", label: "Элемент 1" },
  { value: "item2", label: "Элемент 2" },
  { value: "item3", label: "Элемент 3" },
  { value: "item4", label: "Элемент 4" },
  { value: "item5", label: "Элемент 5" },
  { value: "item6", label: "Элемент 6" },
  { value: "item7", label: "Элемент 7" },
  { value: "item8", label: "Элемент 8" },
];

function App() {
  const [selectedOptions, setSelectedOptions] = React.useState<
    readonly OptionType[]
  >([]);

  const handleChange = (
    option: readonly OptionType[],
    actionMeta: ActionMeta<OptionType>
  ) => {
    setSelectedOptions(option);
  };

  const formatOptionLabel = ({ label, value }: OptionType) => (
    <>
      <input
        type="checkbox"
        checked={selectedOptions.some((opt) => opt.value === value)}
        className={styles.checkbox}
        onChange={() => {}}
      />
      <span className={styles.label}>{label}</span>
    </>
  );

  return (
    <div className={styles.container}>
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        formatOptionLabel={formatOptionLabel}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        isClearable={false}
        components={{
          IndicatorSeparator: () => null, // hide separator line near dropdown btn
          DropdownIndicator: () => <DropIcon className={styles.icon} />, // change icon dropdown btn
          MultiValueRemove: () => null, // hide X btn for each selected element
        }}
        className={styles.select}
        classNames={{
          // added own classNames
          control: () => styles.control,
          placeholder: () => styles.placeholder,
          dropdownIndicator: () => styles.dropdownIndicator,
          option: (state) =>
            cn(styles.option, state.isSelected && styles.isSelected),
          multiValue: () => styles.multiValue,
        }}
        placeholder="Choose"
      />
    </div>
  );
}

export default App;
