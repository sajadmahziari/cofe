import cofe from './../../assets/images/about/cofe.jpg';

import { Link } from 'react-router-dom';
import aparat from './../../assets/images/social/aparat-b.png';
import instagram from './../../assets/images/social/instagram-b.png';
import jabe from './../../assets/images/social/jabe-b.png';
import namasha from './../../assets/images/social/namasha-b.png';
import whatsapp from './../../assets/images/social/whatsapp.png';
import youtube from './../../assets/images/social/youtube-b.png';


const About = () => {
    return (
        <>
            <p className='text-center f-bold m-0 mb-1'>درباره ما</p>
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <img className='aboutImg' src={cofe} />
            </div>
            <p className='textAbout'>
                با منظره ای رویایی در بالاترین نقطه منطقه ، چشم اندازی زیبا و هوایی دلپذیر از تراس کافه غروب زیبای خورشید که با رنگهای بنفش و نارنجی رنگ آمیزی شده است تا شما را به میهمانی ستاره ها ببریم.
            </p>
            <div className='w-100  d-flex justify-content-center align-items-center'>
                <iframe width="95%" height="200" src="https://map.ir/lat/35.732560/lng/51.422552/z/17/p/ما اینجاییم"></iframe>
            </div>

            <div className='media'>
                <Link to="#">
                    <img src={instagram} alt="instagram" />
                </Link>
                <Link to="#">
                    <img src={namasha} alt="namasha" />
                </Link>
                <Link to="#">
                    <img src={aparat} alt="aparat" />
                </Link>
                <Link to="#">
                    <img src={youtube} alt="youtube" />
                </Link>
                <Link to="#">
                    <img src={jabe} alt="jabe" />
                </Link>
            </div>
            <div className='phonesbox'>
                <Link className='btnCallUs'>
                    021-12345678
                </Link>
                <Link className='btnCallUs'>
                    021-12345678
                </Link>

            </div>
        </>
    );
}

export default About;