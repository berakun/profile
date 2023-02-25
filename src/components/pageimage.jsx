
import image from '../assets/carousel/carousel1.png'
import image2 from '../assets/carousel/carousel2.png'
import image3 from '../assets/carousel/carousel3.png'

function Pageimage() {

    return (
        <div class="gap-0 columns-3" >
            <img class="w-full aspect-video ..." src={image} />
            <img class="w-full aspect-square ..." src={image2} />
            <img class="w-full aspect-video ..." src={image3} />
        </div>
    );

}

export default Pageimage;