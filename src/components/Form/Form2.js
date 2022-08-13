import React from 'react';
import {
  FormColumn,
  FormSection,
  FormRow,
  FormTitle,
  FormButton2,
} from './FormStyles';
import { Container } from '../../globalStyles';

const Form2 = () => {
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle>Silakan Pilih Program</FormTitle>
            <FormButton2
              onClick={() =>
                window.open(
                  'https://ganeshaoperation.com/bimbel/produk/',
                  '_blank'
                )
              }
            >
              Program Semester Ganjil TP 22/23
            </FormButton2>
            {/* <FormButton2 onClick={()=> window.open("http://ganeshaoperation.com//bimbel/produkgenap", "_blank")}>Program Semester Genap TP 21/22</FormButton2> */}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form2;
