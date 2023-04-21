import "./App.css";
import Form from "./form/components/Form";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import jsoninitData from "./jsoneditor/data/data.json";
import { useCallback, useState } from "react";

function App() {
  const initialData = jsoninitData;
  const [jsonData, setJsonData] = useState(initialData);
  const [prevJsonData, setPrevJsonData] = useState({});

  const handleDataChange = useCallback((data) => {
    setJsonData(data.jsObject);
  }, []);

  const handlePrevJsonDataChange = useCallback((data) => {
    setPrevJsonData(data);
  }, []);

  return (
    <div className="App">
      <div className="form_app">
        <Form
          onSetPrevjsonData={handlePrevJsonDataChange}
          initJsonData={prevJsonData}
          initialJson={jsonData}
        />
      </div>
      <div className="json_editor">
        <JSONInput
          id="unique_json_input_id"
          placeholder={jsonData}
          locale={locale}
          height="100vh"
          width="100%"
          onBlur={handleDataChange}
        />
      </div>
    </div>
  );
}

export default App;
