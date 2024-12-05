import { Button } from "./components";

function App() {
  return (
    <div className="">
      <h1 className="text-purple-800">Test</h1>
      <section className="my-2">
        <h1>Full width:</h1>
        <Button variant="filled" fullWidth>
          Full width
        </Button>
      </section>
      <section className="flex items-center gap-4 my-2">
        <h1>Variants:</h1>
        <Button variant="filled">Filled</Button>
        <Button variant="outlined">Outlined</Button>
      </section>
    </div>
  );
}

export default App;
