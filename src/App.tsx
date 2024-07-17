import { Button, Container } from '@mui/material';

function App() {
  const handleClick = () => { 
    console.log('handleClick====');
  }

  return (
    <Container className='w-100 h-96'>
      Vomo
      <Button onClick={handleClick} variant="contained" color="primary">
        Click me
      </Button>
    </Container>
  )
}

export default App
