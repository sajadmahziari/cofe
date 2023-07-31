import { BsFillCupHotFill, BsFillCupFill } from "react-icons/bs";
import { BiCake } from "react-icons/bi";

const CateguryList = () => {
    return (
        <div className="groupCategury">
            <div className="itemCategury">
                <span><BsFillCupFill /></span>
                <span>نوشیدنی سرد</span>
            </div>
            <div className="itemCategury">
                <span><BsFillCupHotFill /></span>
                <span>نوشیدی گرم</span>
            </div>
            <div className="itemCategury">
                <span><BiCake /></span>
                <span>کیک</span>
            </div>
            <div className="itemCategury">
                <span><BiCake /></span>
                <span>بستنی</span>
            </div>
            <div className="itemCategury">
                <span><BsFillCupHotFill /></span>
                <span>ساندویچ</span>
            </div>
            <div className="itemCategury">
                <span><BsFillCupFill /></span>
                <span>پیتزا</span>
            </div>
        </div>
    );
}

export default CateguryList;