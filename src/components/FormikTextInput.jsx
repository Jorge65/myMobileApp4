import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.error,
    marginTop: 5,
  },
  errorInput: {
    borderColor: theme.backgroundColors.error,
  },
  input: {
    borderColor: theme.colors.inputBox,
    borderRadius: 3,
    borderWidth: 2,
    padding: 15,
    marginTop: 15,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[styles.input, meta.error && styles.errorInput]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
