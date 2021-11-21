import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <section className="container mx-auto">
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <div id="faq" className="pt-3 pb-5">
                        <h2 className="my-5">Frequently Asked Questions</h2>
                        <Accordion className="mb-4">
                            <Accordion.Item eventKey="0" className="faq-body">
                                <Accordion.Header>Do you restore your cars?</Accordion.Header>
                                <Accordion.Body>
                                    A good adage to remember when considering restoring a classic car is to "think of a number and then double it, maybe even treble it!" It's always better to buy classic cars as restored as possible so therefore we do not prospect for tired rusty old cars to then sell to our clients. We try to find extraordinary solid rust and accident free cars with the majority of our cars being sourced right here from long time owners in southern California, famous for its sunny and dry climate and which is renown worldwide as being probably the finest source anywhere for quality classic cars.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How do I know I will get the car I expect? </Accordion.Header>
                                <Accordion.Body>
                                    We strive to advertise our classic cars as honestly as possible and we disclose any necessary issues related to the car that we are aware of and unlike many others we always attempt to post as large a variety of pictures as possible of our all our cars, in both artificial light in our showroom as well as outside in daylight and without touch-ups or editing and which will include a multitude of angles of both the interior and exterior, the engine, the trunk and not least, the undercarriage. Before you buy any classic car sight unseen it is very prudent to ask as many questions as possible either by email or over the phone to make sure you are getting what you expect in an imperfect classic car.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How can I secure a car from Antique Cars?</Accordion.Header>
                                <Accordion.Body>
                                    There are two ways to place any classic car with us on hold as a pending sale; either with a deposit or a down payment.
                                    A deposit is refundable and puts a hold on a car for up to ten days while you get your financing in order or do your due diligence before buying the car at a mutually agreed upon price and terms. Please note that the car will stay on the market however, but It does give the buyer first right of refusal to match any subsequent offer or terms if another buyer emerges who wants to buy the car for either the same or a higher price but only during that 10 days time frame.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Are your prices negotiable?</Accordion.Header>
                                <Accordion.Body>
                                    Although we only sell extraordinary cars our prices are known to be very competitive and we sell a lot of cars because of this fact. Nevertheless you are welcome to make us any serious offer and we will take it into equally serious consideration. There is no harm in asking the question and you never know until you ask.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Where do you get your cars?</Accordion.Header>
                                <Accordion.Body>
                                    We have a network of close and long time associates from which we source our classic cars. As a result, our classic cars are typically hand picked and purchased directly from the home garages of owners who cherished and took great pride in their cars and usually not from impersonal auctions or third parties, where the car's history is generally a mystery.

                                    Therefore, in most cases and unless otherwise stated, you can expect to buy from us, not only a rare and original southern California rust free antique or classic car, but also receive the comfort, to say nothing of the obviously greatly enhanced value, of buying a vehicle with knowledge of the full history, including any available service records and original documentation, from the car's previous owners.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>How can I get comfortable with sight unseen buying?</Accordion.Header>
                                <Accordion.Body>
                                    Close to 90% of our classic cars are sold sight unseen. That is a testament to the huge number of people who feel comfortable enough with our company to do so, either through our stellar feedback and reputation or by previous association. Nevertheless, we always encourage anyone to either have their prospective car independently inspected or if at all possible, to make the trip and come see any car in person. Also please note that you can be secure in the knowledge that you are buying directly from a long time California licensed and bonded classic car dealership, well known and respected in the southern California classic car community for many years, as well as internationally, with an extensive and long established web presence and profile for references.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>How do I know the car is authentic?</Accordion.Header>
                                <Accordion.Body>
                                    Our company does not intentionally misrepresent anything on any of our cars period! We do our best to authenticate the cars based on previous owners records and statements. We are not perfect, nor do we claim to have any perfect cars, but as our feedback indicates, we have an extremely large community of extraordinarily happy clients. If you are a perfectionist and are very specific regarding the condition and the authenticity of the cars you buy, it is encouraged that you ask us many detailed questions regarding the car before your purchase or else please get on a plane and authenticate the car personally in our showroom.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Are the cars as good as they look on in your photographs?</Accordion.Header>
                                <Accordion.Body>
                                    Although our classic cars will most likely look amazing in pictures, they should also look amazing in person too since we take pride in our providing our clients with honest, untouched photographs generally taken in broad daylight from many angles with no attempts made to hide any flaws or to professionally enhance the shots.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>Do your antique cars leak?</Accordion.Header>
                                <Accordion.Body>
                                    All classic cars leak sooner or later. We do our best to seal gaskets and fix anything that leaks, like rear main seals, brake leaks, radiator and fuel and other things that can be sealed in order for there to be no noticeable leaks when sold. Unfortunately, the fact is that just like with older humans, all older cars will sooner or later leak somewhere, whether its oil, transmission fluid or any other kind of fluid. We have trays under all of our classic cars because old cars leak. If there are any obviously noticeable or significant leaks that have not been attended to we will disclose that.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;