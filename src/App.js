import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  
  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleEqualNumbers = () => {

    if (!firstNumber !== '0' && operation !== '' && currentNumber !== '0') {

      switch (operation) {
        case '+':
          const sum = Number(firstNumber) + Number(currentNumber);
          setCurrentNumber(String(sum));
          setOperation('');
          break;
        case '-':
          const sub = Number(firstNumber) - Number(currentNumber);
          setCurrentNumber(String(sub));
          setOperation('');
          break;
        case '*':
          const mult = Number(firstNumber) * Number(currentNumber);
          setCurrentNumber(String(mult));
          setOperation('');
          break;
        case '/':
          const div = Number(firstNumber) / Number(currentNumber);
          setCurrentNumber(String(div));
          setOperation('');
          break;
        default:
          break;
      }

    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={7} onClick={() => handleAddNumber('7')} />
          <Button label={8} onClick={() => handleAddNumber('8')} />
          <Button label={9} onClick={() => handleAddNumber('9')} />
          <Button label='/' onClick={handleDivNumbers} />
        </Row>
        <Row>
          <Button label={4} onClick={() => handleAddNumber('4')} />
          <Button label={5} onClick={() => handleAddNumber('5')} />
          <Button label={6} onClick={() => handleAddNumber('6')} />
          <Button label='*' onClick={handleMultNumbers} />
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber('1')} />
          <Button label={2} onClick={() => handleAddNumber('2')} />
          <Button label={3} onClick={() => handleAddNumber('3')} />
          <Button label='-' onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label='=' onClick={handleEqualNumbers} />
          <Button label='0' onClick={() => handleAddNumber('0')} />
          <Button label='.' onClick={() => handleAddNumber('.')} />
          <Button label='+' onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label='C' onClick={handleClear} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
