import coldDirink from './../../assets/icon/iconCategury/coldDirink.png'
import hotDirink from './../../assets/icon/iconCategury/hotDirink.jpg'
import coldSandwitch from './../../assets/icon/iconCategury/coldSandwitch.png'
import hotSandwitch from './../../assets/icon/iconCategury/hotSandwitch.jpg'
import pizza from './../../assets/icon/iconCategury/pizza.png'
import Salad from './../../assets/icon/iconCategury/salad.png'
import fried from './../../assets/icon/iconCategury/fried.png'
const CateguryList = () => {
    return (
        <div className="groupCategury">
            <div className="itemCategury">
                <img className='imgCategury' src={coldDirink} />
                <span className='nameCategury'>نوشیدنی سرد</span>
            </div>
            <div className="itemCategury">
                <img className='imgCategury' src={hotDirink} />
                <span className='nameCategury'>نوشیدی گرم</span>
            </div>
            <div className="itemCategury">
                <img className='imgCategury' src={coldSandwitch} />
                <span className='nameCategury'>ساندویچ سرد</span>
            </div>
            <div className="itemCategury">
                <img className='imgCategury' src={hotSandwitch} />
                <span className='nameCategury'>ساندویچ گرم</span>
            </div>
            <div className="itemCategury">
                <img className='imgCategury' src={pizza} />
                <span className='nameCategury'>پیتزا</span>
            </div>
            <div className="itemCategury">
                <img className='imgCategury' src={Salad} />
                <span className='nameCategury'>سالاد</span>
            </div>
            <div className="itemCategury">
                <img className='imgCategury' src={fried} />
                <span className='nameCategury'>سوخاری</span>
            </div>
        </div>
    );
}

export default CateguryList;