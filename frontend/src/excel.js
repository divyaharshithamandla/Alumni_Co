<<<<<<< HEAD

=======
>>>>>>> abfbd9ac73732d982b32e9613df3e936f1608a81
import { useState } from "react";
import * as XLSX from "xlsx";
import axios from 'axios';
function Excel() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);

<<<<<<< HEAD
      const res=axios.post("http://localhost:8000/insertData/"+parsedData)
=======
    //   const res=axios.post("http://localhost:8000/insertData/"+parsedData)
>>>>>>> abfbd9ac73732d982b32e9613df3e936f1608a81
    };
  }

  return (
    <div className="App">

      <input 
        type="file" 
        accept=".xlsx, .xls" 
        onChange={handleFileUpload} 
      />

      {data.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  
                  <td key={index}>{value}</td>

                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br /><br />
<<<<<<< HEAD
=======
    
>>>>>>> abfbd9ac73732d982b32e9613df3e936f1608a81
    </div>
  );
}

<<<<<<< HEAD
export default Excel;
=======
export default Excel;
>>>>>>> abfbd9ac73732d982b32e9613df3e936f1608a81
