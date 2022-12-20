import Filter from "../filter/Filter";
import DropMenu from "../drop-menu/DropMenu";


function ToolBar() {
    return (
        <div className="tool-bar">
            <Filter/>
            <DropMenu/>
        </div>
    );
}

export default ToolBar;