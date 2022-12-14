import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Testimonials from "./Testimonials";
import { baseUrl } from "../../Shared/baseUrl";
import { config } from "../../Shared/config";
import ControlledCarousel from "./ControlledCarousel";

const Reviews = (props) => {
    const [testimonials, setTestimonials] = useState([]);
    const [hasReviews, setHasReviews] = useState(false)

    useEffect(() => {
        axios
            .get(
                `${baseUrl}/landmark/review/get-reviews/${props.review.landmarkId}`,
                config
            )
            .then((r) => setTestimonials(r.data));
    }, []);

    // const showTestimonials = testimonials.map((t, i) => {
    //     return <Testimonials rev={t} key={i} />;
    // });

    console.log("%ctestimonials","color:orange",testimonials);

    const containsReviews = () => {
        if (testimonials.length > 0) {
            setHasReviews(true)
        } else {
            setHasReviews(false)
        }
    }

    return (
        <div className="section-padding">
            <div className={() => containsReviews && "container"}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <div className="review-title">Reviews</div>
                            <div className="section-borders">
                                <span></span>
                                <span className="black-border"></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="owl-carousel client-testimonial-carousel landmark-review">
                            <ControlledCarousel review={testimonials} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
