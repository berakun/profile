
import image from '../../assets/carousel/carousel1.png'
import image2 from '../../assets/carousel/carousel2.png'
import image3 from '../../assets/carousel/carousel3.png'

function Pageimage() {

    return (
        <div className="bg-neutral-900 gap-0 columns-3" >
            <img className="w-full aspect-video ..." src={image} />
            <img className="w-full aspect-square ..." src={image2} />
            <img className="w-full aspect-video ..." src={image3} />
        </div>
    );

}

export default Pageimage;