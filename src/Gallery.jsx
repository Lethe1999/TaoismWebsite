import { useId } from "react";
import "./css/gallery.css";
import { galleryList } from "./data/galleryList";

function Gallery({ theme }) {
    const id = useId();

    return (
        <div className={`gallery ${theme}`}>
            <div className="carousel">
                {
                    galleryList.map((item, index) => {
                        return (
                            <input type="radio" name="slides" id={item.label_id} key={id + index} />
                        );
                    })
                }
                <ul className={`carousel__slides ${theme}`}>
                    {
                        galleryList.map((item, index) => {
                            return (
                                <li className="carousel__slide" key={id + index}>
                                    <div>
                                        <img src={item.image_src} alt={item.image_alt} aria-label="gallery" />
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
                <ul className="carousel__thumbnails">
                    {
                        galleryList.map((item, index) => {
                            return (
                                <li className={`${theme}`} key={id + index}>
                                    <label htmlFor={item.label_id}><img src={item.image_src} alt={item.image_alt} /></label>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Gallery;