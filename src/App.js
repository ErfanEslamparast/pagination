import React, { useState,useEffect } from "react";
import usePagintion from "./usePagiation";
import Card from './components/card'
import Pagination from "./components/pagination";
function App() {
  const url= 'https://react-mini-projects-api.classbon.com/Programmer/programmers'
  const [loading,data] = usePagintion(url,3)
  const [page, setPage] = useState(0);
  const [programmers,setProgrammers] = useState([])
  useEffect(() => {
    if (loading) return;
     setProgrammers(data[page])

  }, [loading,page]);

  return (
    <div className="App container mx-auto ">
    {
      loading && (
        <div className="d-flex justify-content-center mt-3">
      <div className="spinner-grow bg-info"></div>
    </div>
    )
    }
    {
      !loading && (
     <div className="row container mt-5">

      {programmers.map(({id,...programmer})=>{
        return (

        <div className="col-4" key={id}>
          <Card {...programmer} />
        </div>
        )
      })}
      <div className="row d-flex justify-content-center mt-5">
      <Pagination setPage={setPage} pages={data.length} activePage={page} />
      </div>
     </div>
      )
    }
    </div>
  );
}

export default App;
