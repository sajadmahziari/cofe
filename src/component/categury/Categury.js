const Categury = ({ image, category, onClick }) => {
    return (
        <>
            <div className="itemCategury" onClick={onClick}>
                <img className="imageCategury" src={image} />
                <span className="nameCategury">{category}</span>
            </div>
        </>
    );
}

export default Categury;