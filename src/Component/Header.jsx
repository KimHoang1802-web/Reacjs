import { Fragment } from "react"
// Fragment: taitọ ra ra1 thẻ rỗng, không render 
// Khởi tạo component
const Header = () => {
    return (
        <Fragment>
            <div>Header Component</div>
            <div>Header Component</div>
        </Fragment>
    );

};
export default Header