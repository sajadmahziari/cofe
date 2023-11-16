const Categury = ({ image, title, onClick }) => {
    return (
        <>
            <div className="itemCategury" onClick={onClick}>
                <img className="imageCategury" src={`http://panel.saadcoffee.ir/img/products/category/${image}`} />
                <span className="nameCategury">{title}</span>
            </div>
            {/* http://panel.saadcoffee.ir/api/discount?token= */}
        </>
    );
}

export default Categury;