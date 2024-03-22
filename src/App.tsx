/*import { useEffect } from "react";
import { useDispatch } from "react-redux";*/
import Table from "./components/Table"
import SearchForm from "./components/Searchform";
import data from './data.json';
import './style/main.sass'


const App: React.FC = () => {
  return (
    <>
      <SearchForm/>
      <Table products={data}/>
    </>
  );
};

export default App;