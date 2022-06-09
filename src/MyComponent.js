import PropTypes from "prop-types";

const MyComponent = ({ name, fav_num, children }) => {
  return (
  <div className="react">
    제 이름은 {name}입니다.<br/>
    children 값은 {children}입니다.<br/>
    fav_num은 {fav_num}입니다.
  </div>
  )
};

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  fav_num: PropTypes.number.isRequired
};

export default MyComponent;
