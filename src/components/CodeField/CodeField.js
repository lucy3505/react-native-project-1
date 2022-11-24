import {
  CodeField as CField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  // root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});

const CELL_COUNT = 6;

export const CodeField = fatherProps => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onChangeText = v => {
    setValue(v);
    if (v.length === 6) {
      fatherProps.onVcodeSubmitEditing(v);
    }
  };
  return (
    <SafeAreaView style={styles.root}>
      {/* <Text style={styles.title}>Verification</Text> */}
      <CField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={onChangeText}
        caretHidden={true}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        autoFocus={true}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        // caretHidden={false}
        selection={{
          start: value.length,
          end: value.length,
        }}
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};
