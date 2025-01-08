import Button from "./components/Button.tsx";


function App() {

  return (
    <div>
        <Button color="danger" onClick={() => console.log('bla')}>My Button</Button>
    </div>
  )
}

export default App;
