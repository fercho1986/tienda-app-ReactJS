import React, { Fragment } from "react";
import { Header } from "./componentes/Header"
import 'boxicons';
import { BrowserRouter } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./componentes/Carrito";


function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Carrito />
          <Paginas />

        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;

