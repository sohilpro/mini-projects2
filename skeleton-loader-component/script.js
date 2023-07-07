function App() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("h1", null, "Ranking of the week"), /*#__PURE__*/
    React.createElement(SkeletonLoader, { number: 4 })));


}

const SkeletonLoader = ({ number }) => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "loader" },
    Array.from({ length: number }).map((_, i) => /*#__PURE__*/
    React.createElement(SkeletonComponent, { key: i }))));



};

const SkeletonComponent = () => {
  return /*#__PURE__*/React.createElement("div", { className: "skeleton loadingbloc" });
};


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));