import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Form {
  cpf: string;
  birthDate: string;
  password: string;
}

interface Step {
  quantity: number;
  activeStep: number;
}

interface InitialStateProps {
  form: Form;
  step: Step;
}

const initialState: InitialStateProps = {
  form: {} as Form,
  step: {
    activeStep: 1,
    quantity: 3
  }
};

interface populateForm {
  key: keyof typeof initialState.form;
  value: string;
  formStep: number;
}

const sliceForm = createSlice({
  initialState,
  name: 'form',
  reducers: {
    handleForm(state: InitialStateProps, action: PayloadAction<populateForm>) {
      const { value, key, formStep } = action.payload;

      state.form[key] = value;

      state.step.activeStep = formStep;
    },
    handleStep(state: InitialStateProps, action: PayloadAction<number>) {
      state.step.activeStep = action.payload;
      console.log(action.payload);
    }
  }
});

export default sliceForm.reducer;
export const { handleForm, handleStep } = sliceForm.actions;
