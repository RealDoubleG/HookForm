import { MaskedTextInput } from 'react-native-mask-text';
import styles from './styles';
import type { FC } from 'react';
import type { Noop } from 'react-hook-form';
import type React from 'react';

interface TextInput {
  valueWithMask: boolean;
  placeHolder?: string;
  value?: string;
  onBlur: Noop;
  onChangeText: (rawText: string) => void;
  mask?: string;
}

const TextInputAtom: FC<TextInput> = ({
  placeHolder,
  valueWithMask,
  onBlur,
  mask,
  value,
  onChangeText
}: TextInput) => (
  <MaskedTextInput
    mask={mask}
    onBlur={onBlur}
    onChangeText={
      valueWithMask
        ? (text, rawText): void => onChangeText(text)
        : (text, rawText): void => onChangeText(rawText)
    }
    placeholder={placeHolder}
    style={styles.input}
    value={value}
  />
);

export default TextInputAtom;
