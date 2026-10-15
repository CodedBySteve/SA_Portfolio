import "./Filter_opt.css";

function Filter_opt({category, selected, onSelect}) {


    return (
        <button onClick={onSelect} className={`box_style ${selected ? "active" : ""}`}>{category}</button>
    );
}

export default Filter_opt;