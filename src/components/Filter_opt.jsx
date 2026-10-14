import "./Filter_opt.css";

function Filter_opt({category}) {


    return (
        <button 
            onClick=
            "this.style.backgroundColor='rgba(0, 229, 255, 0.1)' ; this.style.color: 'var(--text-cyan)'; this.style.border:1px solid var(--btn-light)"
        
            className="box_style">{category}
        </button>
    );
}

export default Filter_opt;