const Categury = ({ image, title, onClick ,id}) => {
    return (
        <>
            <div className="itemCategury" id={id} onClick={onClick}>
                <img className="imageCategury" src={`http://panel.saadcoffee.ir/img/products/category/${image}`} />
                <span className="nameCategury">{title}</span>
            </div>
         </>
    );
}

export default Categury;