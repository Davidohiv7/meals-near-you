import { Card, Text, TextInput, TextInputProps } from 'react-native-paper';
import {
  BlackStripe,
  CardNumber,
  CardNumberContainer,
  CerditCard,
  CerditCardBack,
  CreditCardView,
  CvvContainer,
  CvvText,
  SmallInputsContainer,
  ValidityDate,
  ValidityDateContainer,
  ValidityDateContent,
  ValidityDateDateContainer,
  ValidityDateTitle,
} from './styles';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { getMonth, getYear } from 'date-fns';

const DEFAULT_VALIDITY_DATE_STRING = '** / **';
const DEFAULT_CARD_NUMBER_STRING = '****-****-****-****';
const CURRENT_YEAR = getYear(new Date()).toString().slice(2, 5);
const CURRENT_MONTH = getMonth(new Date()) + 1;

const { Content } = Card;

type Props = {
  setCardInputValue: Dispatch<
    SetStateAction<{
      valid: boolean;
      data: {
        validDate: string;
        cardNumber: string;
        cvv: string;
      };
    }>
  >;
};

export const CreditCardInput: FC<Props> = ({ setCardInputValue }) => {
  const [showBack, setShowBack] = useState(false);
  const [cardNumber, setCardNumber] = useState({
    value: '',
    string: DEFAULT_CARD_NUMBER_STRING,
  });
  const [validityDate, setValidityDate] = useState({
    value: '',
    string: DEFAULT_VALIDITY_DATE_STRING,
  });
  const [cvv, setCvv] = useState('');
  useEffect(() => {
    const cardNumberValue = cardNumber.value.replaceAll('-', '');
    const validityDateValue = validityDate.value.replaceAll(' ', '');
    setCardInputValue({
      valid:
        cardNumberValue.length === 16 &&
        validityDateValue.length === 5 &&
        cvv.length === 3,
      data: {
        cardNumber: cardNumberValue,
        validDate: validityDateValue,
        cvv,
      },
    });
  }, [cardNumber.value, validityDate.value, cvv]);
  return (
    <CreditCardView>
      {showBack ? (
        <CerditCardBack style={{ width: '100%', height: '30%' }}>
          <BlackStripe />
          <CvvContainer>
            <CvvText>{cvv}</CvvText>
          </CvvContainer>
        </CerditCardBack>
      ) : (
        <CerditCard style={{ width: '100%', height: '30%' }}>
          <Content>
            <CardNumberContainer>
              <CardNumber>{cardNumber.string}</CardNumber>
            </CardNumberContainer>
            <ValidityDateContainer>
              <ValidityDate>Validity Date</ValidityDate>
              <ValidityDateDateContainer>
                <ValidityDateTitle>MONTH / YEAR</ValidityDateTitle>
                <ValidityDateContent>{validityDate.string}</ValidityDateContent>
              </ValidityDateDateContainer>
            </ValidityDateContainer>
          </Content>
        </CerditCard>
      )}

      <TextInput
        label="Card Number"
        value={cardNumber.value}
        onChangeText={(text) => {
          const fixed = text.replace(/[^0-9]/g, '');
          let value = fixed;
          const characters = [...value] || [];
          const fullCreditCardNumber = characters
            .map((character, idx) => {
              const position = idx + 1;
              if (!(position % 4) && position < characters.length) {
                return character + '-';
              }
              return character;
            })
            .join('');
          const partialString = DEFAULT_CARD_NUMBER_STRING.slice(
            0,
            fullCreditCardNumber.length
          );
          const newString = DEFAULT_CARD_NUMBER_STRING.replace(
            partialString,
            fullCreditCardNumber
          );
          setCardNumber({
            value: fullCreditCardNumber,
            string: newString,
          });
        }}
        keyboardType="numeric"
        maxLength={19}
        mode="outlined"
        style={{ marginBottom: 6, marginTop: 16 }}
        onFocus={() => setShowBack(false)}
      />
      <SmallInputsContainer>
        <TextInput
          label="Validity date"
          value={validityDate.value}
          onChangeText={(text) => {
            const fixed = text.replace(/[^0-9]/g, '');
            let value = fixed;
            console.log(value.length === 2 && parseInt(value) > 122);
            if (value.length === 2 && parseInt(value) > 12) {
              value = '12';
            }
            if (value.length > 2) {
              let firstValue = value.slice(0, 2);
              let secondValue = value.slice(2);
              if (
                value.length >= 4 &&
                parseInt(secondValue) < parseInt(CURRENT_YEAR)
              ) {
                secondValue = CURRENT_YEAR;
              }
              if (
                value.length >= 4 &&
                parseInt(secondValue) <= parseInt(CURRENT_YEAR) &&
                parseInt(firstValue) < CURRENT_MONTH
              ) {
                const month = CURRENT_MONTH.toString();
                firstValue = month.length === 1 ? `0${month}` : month;
              }
              value = `${firstValue} / ${secondValue}`;
            }

            const partialString = DEFAULT_VALIDITY_DATE_STRING.slice(
              0,
              value.length
            );
            const newString = DEFAULT_VALIDITY_DATE_STRING.replace(
              partialString,
              value
            );
            setValidityDate({
              value,
              string: newString,
            });
          }}
          keyboardType="numeric"
          maxLength={7}
          mode="outlined"
          style={{ flexGrow: 1, maxWidth: '48%' }}
          onFocus={() => setShowBack(false)}
        />
        <TextInput
          label="CVV"
          value={cvv}
          onChangeText={(text) => setCvv(text)}
          keyboardType="numeric"
          maxLength={3}
          mode="outlined"
          style={{ flexGrow: 1, maxWidth: '48%' }}
          onFocus={() => setShowBack(true)}
        />
      </SmallInputsContainer>
    </CreditCardView>
  );
};
