import Resume from "./Resume";
import Greeting from "./Greeting";
import Contact from "./Contact";
import PdfDoc from "./pdf/PdfDoc";

export default function App() {
  return (
    <main className="app">
      <PdfDoc />
      <Greeting />
      <Contact />
      <Resume />
    </main>
  );
}