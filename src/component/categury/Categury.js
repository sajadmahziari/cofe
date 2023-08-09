const Categury = ({img,name ,onClick}) => {
    return (
        <>
                <div className="itemCategury" onClick={onClick}>
                    <img className="imgCategury" src={img} />
                    <span className="nameCategury">{name}</span>
                </div>
        </>
    );
}

export default Categury;