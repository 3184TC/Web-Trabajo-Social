import { Fragment } from "react";
import Counter from "./Counter";
const SectionTitle = ({
  title,
  countValue = 3400,
  subtitle1 = "",
  subtitle2 = "ESTUDIANTES",
  bg,
}) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>
        {subtitle1}{" "}
        <span className={`count-text plus ${bg}`}>
          <Counter end={countValue} />
        </span>{" "}
        {subtitle2}
      </p>
    </Fragment>
  );
};
export default SectionTitle;
