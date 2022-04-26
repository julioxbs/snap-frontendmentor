export default function Hero() {
    return (
        <div className="container">
            <div className="hero row gap-5 flex-lg-row-reverse align-items-center justify-content-center">
                <picture className="col-12 col-sm-8 col-lg-4">
                    <source className="img-fluid" media="(min-width: 700px)" srcSet="/images/image-hero-desktop.png" />
                    <img className="img-fluid" src="/images/image-hero-mobile.png" alt="hero" />
                </picture>

                <div className="col-lg-6">
                    <div className="text-hero d-flex flex-column gap-3 align-items-md-start align-items-center mb-5">
                        <h1 style={{ fontSize: "calc(45px + 1vw)" }} className="title fw-bold d-none d-md-block">Make <br /> remote work</h1>
                        <h1 style={{ fontSize: "40px" }} className="title fw-bold d-block d-md-none">Make remote work</h1>
                        <p className="text-muted text-center text-md-start">
                            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                        </p>
                        <a href="#" className="btn btn-dark">Learn more</a>
                    </div>

                    <ul className="clients list-unstyled d-flex gap-4 flex-wrap m-0 p-0 justify-content-center justify-content-md-start">
                        <li><img src="/images/client-databiz.svg" alt="databiz" /></li>
                        <li><img src="/images/client-audiophile.svg" alt="audio" /></li>
                        <li><img src="/images/client-meet.svg" alt="meet" /></li>
                        <li><img src="/images/client-maker.svg" alt="maker" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}