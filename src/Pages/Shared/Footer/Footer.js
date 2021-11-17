import React from 'react';

const Footer = () => {
    return (
        <section className="row bg-dark py-4">
            <div className="col-12 col-md-6 mx-auto">
                <div>
                    <h4 className="text-white">Antique Cars</h4>
                    <h4 className="text-white my-4">
                        <i className="fab fa-facebook-square mx-3"></i>
                        <i className="fab fa-twitter-square mx-3"></i>
                        <i className="fab fa-youtube-square mx-3"></i>
                        <i className="fab fa-instagram mx-3"></i>
                    </h4>
                    <p className="text-white">Copyright &copy; 2021 Antique Cars. All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;