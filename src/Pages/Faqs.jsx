import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

function Faqs() {
    return (
        <>
            <Navbar />
            <div className="container py-5 my-5">
                <h3 className='text-center mb-3'>FAQS</h3>
                <div className="row">
                    <div className="col-12">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Can I use HomeStyler to sell home products like furniture and décor?</Accordion.Header>
                                <Accordion.Body>
                                    HomeStyler does not function as a direct e-commerce platform, but you can use it to create virtual showrooms. This allows you to showcase furniture, décor, and other home products in a 3D environment. The platform supports real brand models, so you can visualize how your products would look in real-life settings.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How can I display my home-related products in HomeStyler?</Accordion.Header>
                                <Accordion.Body>
                                    You can upload and import 3D models of your products to HomeStyler’s library. Once added, these models can be used to create room designs, giving potential customers a clear view of how items will look in various home settings.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What types of products can be visualized using HomeStyler?</Accordion.Header>
                                <Accordion.Body>
                                    HomeStyler allows for a wide variety of home-related products to be visualized, including:
                                    <ul>
                                        <li>Furniture (beds, sofas, chairs, tables)</li>
                                        <li>Home décor (lamps, rugs, paintings)</li>
                                        <li>Home appliances (fridges, ovens)</li>
                                        <li>Interior finishes like tiles, wall colors, and floor designs.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Is there any cost associated with creating virtual showrooms on HomeStyler?</Accordion.Header>
                                <Accordion.Body>
                                    HomeStyler offers a free plan that allows you to create basic floor plans and 3D models. However, if you want more advanced features like high-quality rendering and larger libraries, you can opt for one of the paid subscription plans.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How can HomeStyler help in marketing my home products?</Accordion.Header>
                                <Accordion.Body>
                                    With features like photo-realistic rendering and virtual tours, HomeStyler enables you to create visually appealing presentations of your products. You can use these renderings for marketing purposes, share them on your website or social media, and attract customers with immersive visual experiences.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Can I integrate my HomeStyler designs with an online shop?</Accordion.Header>
                                <Accordion.Body>
                                    While HomeStyler does not offer direct e-commerce integration, you can share your 3D designs, floor plans, and product visuals via links or export them to other platforms. This can help you enhance your online shop with better product displays.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Does HomeStyler offer any support for product retailers?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, HomeStyler provides tools for brands and retailers to better showcase their merchandise in virtual environments. This can help reduce the need for physical product displays, allowing you to reach a broader audience without the overhead of physical showroom costs.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Can HomeStyler support bulk uploads for product catalogs?</Accordion.Header>
                                <Accordion.Body>
                                    HomeStyler allows for uploading multiple models into the system, which is particularly useful for brands and retailers with large product catalogs. You can also organize your models into collections for easy access.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>How does HomeStyler ensure the accuracy of product dimensions and materials?</Accordion.Header>
                                <Accordion.Body>
                                    HomeStyler allows you to customize product dimensions and materials to match real-world measurements. You can also adjust colors and finishes in the Material Editor to give a more accurate representation of your products.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header>Can I use HomeStyler for interior design services and sell home items?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, HomeStyler is commonly used by interior designers to showcase home items and designs to clients. If you provide interior design services, you can use the platform to visualize how items will fit into specific spaces, making it easier for customers to purchase home products.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faqs;
