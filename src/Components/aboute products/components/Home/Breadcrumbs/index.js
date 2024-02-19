import "./index.css";

const Breadcrumbs =({list, className=''})=> {
    return (
        <nav className='d-flex align-items-center'>
            {list?.map((item, index)=><>
                {index > 0 ? <span className="breadcrumb-arrow">&gt;</span> : ''}
                <div
                    className={`breadcrumb-not-active ${className}`}
                >
                    {item}
                </div>
            </>)}
        </nav>
    );
}

export default Breadcrumbs;
