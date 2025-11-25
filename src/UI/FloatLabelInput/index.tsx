import { type FC, useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface FloatingLabelInputProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email';
  name?: string;
  className?: string;
  disabled?: boolean;
}

export const FloatingLabelInput: FC<FloatingLabelInputProps> = ({
  label,
  value = '',
  onChange,
  type = 'text',
  name,
  className,
  disabled,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const isActive = isFocused || !!value;

  return (
    <div className={classNames(styles.wrapper, className)}>
      <input
        type={isPassword && !showPassword ? 'password' : 'text'}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={classNames(styles.input, { [styles.active]: isActive })}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <label className={classNames(styles.label, { [styles.active]: isActive })}>
        {label}
      </label>

      {isPassword && (
        <span
          className={styles.toggle}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </span>
      )}
    </div>
  );
};
