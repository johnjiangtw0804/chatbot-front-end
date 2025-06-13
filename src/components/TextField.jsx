// const TextField = ({
//     classes,         // 外層容器或 input 額外的 className
//     helperText,      // 顯示在 input 底下的小提示字（如錯誤訊息）
//     label,           // 上方 label 名稱
//     name,            // input 的 name（送出表單時會用到）
//     placeHolder,     // 顯示在 input 裡的預設提示文字
//     fieldClasses,    // input 本身的 class
//     ...rest          // 其他你可能會傳給 <input> 的屬性
//   }) => {
const TextField = ({
  classes = "",
  helperText,
  label,
  name,
  placeHolder,
  fieldClasses,
  ...rest
}) => {
  return (
    // In React, you must use **htmlFor** instead of **for** because:
    // // for is a reserved keyword in JavaScript (used in for loops)
    <div className={`text-field-wrapper ${classes}`}>
      <label htmlFor={name} className="label-text">
        {label}
      </label>

      <input
        className={`text-field ${fieldClasses}`}
        name={name}
        id={name}
        placeholder={placeHolder}
        {...rest}
      ></input>
      {helperText && <p className="helperText"> {helperText}</p>}
    </div>
  );
};

export default TextField;
