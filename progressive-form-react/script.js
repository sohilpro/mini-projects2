const { useState } = React;

function App() {

  const [values, setValues] = useState({
    type: "",
    level: "",
    file: undefined,
    folio: "" });


  const register = e => {
    e.preventDefault();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("form", { onSubmit: register }, /*#__PURE__*/

    React.createElement("div", { className: "field" }, /*#__PURE__*/
    React.createElement("label", null, "What kind of developer are you ?"), /*#__PURE__*/
    React.createElement("select", {
      id: "schoolType",
      name: "type",
      value: values.type,
      onChange: handleChange }, /*#__PURE__*/

    React.createElement("option", { value: "" }, "----- Select here -----"), /*#__PURE__*/
    React.createElement("option", { value: "Web developer" }, "Web developer"), /*#__PURE__*/
    React.createElement("option", { value: "Mobile developer" }, "Mobile developer"), /*#__PURE__*/
    React.createElement("option", { value: "Software developer" }, "Software developer"))),



    values.type && /*#__PURE__*/
    React.createElement("div", { className: "field" }, /*#__PURE__*/
    React.createElement("label", null, "Select your level :"), /*#__PURE__*/
    React.createElement("select", {
      id: "school",
      name: "school",
      value: values.school,
      onChange: handleChange }, /*#__PURE__*/

    React.createElement("option", { value: "" }, "----- Select here -----"), /*#__PURE__*/
    React.createElement("option", { value: "Beginner" }, "Beginner"), /*#__PURE__*/
    React.createElement("option", { value: "Intermediate" }, "Intermediate"), /*#__PURE__*/
    React.createElement("option", { value: "Advanced" }, "Advanced"))),




    values.type && values.school && /*#__PURE__*/
    React.createElement("div", { className: "field" }, /*#__PURE__*/
    React.createElement("label", null, "Submit your CV :"), /*#__PURE__*/
    React.createElement("label", { htmlFor: "file", className: "custom-file-upload" },
    values.file ? values.file.name : "Upload file"), /*#__PURE__*/


    React.createElement("input", {
      id: "file",
      type: "file",
      name: "file",
      onChange: (e) =>
      setValues({ ...values, file: e.target.files[0] }) })),





    values.type && values.school && values.file && /*#__PURE__*/React.createElement("button", { className: "l-but", type: "submit" }, "Submit \u2192"))));









}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));