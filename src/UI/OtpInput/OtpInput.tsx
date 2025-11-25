import React, { type FC, useState, useRef, useEffect } from "react";
import { Input, type InputRef } from "antd";
import styles from "./styles.module.scss";

interface OtpInputProps {
    length?: number;
    onChange?: (value: string) => void;
}

const OtpInput: FC<OtpInputProps> = ({ length = 6, onChange }) => {
    const [values, setValues] = useState<string[]>(Array(length).fill(''));
    const inputsRef = useRef<Array<InputRef | null>>([]);
  
    const handleChange = (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return; // только цифры
  
      const newValues = [...values];
      newValues[index] = value.slice(-1); // только последняя цифра
      setValues(newValues);
  
      if (value && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
  
      onChange?.(newValues.join(''));
    };
  
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !values[index] && index > 0) {
        const newValues = [...values];
        newValues[index - 1] = '';
        setValues(newValues);
        inputsRef.current[index - 1]?.focus();
        onChange?.(newValues.join(''));
      }
    };
  
    useEffect(() => {
      inputsRef.current[0]?.focus();
    }, []);
  
    return (
      <div className={styles.otpContainer}>
        {values.map((val, i) => (
          <Input
            key={i}
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            maxLength={1}
            ref={(el) => {
              inputsRef.current[i] = el ?? null; // важно возвращать void
            }}
            className={styles.otpInput}
          />
        ))}
      </div>
    );
  };
  

export default OtpInput;
