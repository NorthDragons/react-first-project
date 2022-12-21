import Filter from "../filter/Filter";
import SortingDropMenu from "./sorting-drop-menu/SortingDropMenu.jsx";


function ToolBar() {
    return (
        <div className="tool-bar">
            <Filter/>
            <SortingDropMenu/>
        </div>
    );
}

export default ToolBar;