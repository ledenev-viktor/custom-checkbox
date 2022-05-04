import { render } from "react-dom";
import "./main.scss";
const App = () => {
  return (
    <div>
      <label className="b-check">
        <input type="checkbox" />
        <span className="check__box" style={{backgroundColor: "red"}}></span>
        первый
      </label>
      <label className="b-check">
        <input type="checkbox" checked />
        <span className="check__box"></span>
        второй
      </label>
      <label className="b-check">
        <input type="checkbox" checked disabled />
        <span className="check__box"></span>
        третий
      </label>
      <label className="b-check">
        <input type="checkbox" disabled />
        <span className="check__box"></span>
        четвертый
      </label>
    </div>
  );
};

render(<App />, document.getElementById("root"));
