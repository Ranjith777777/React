

const Chennai = () => {
    return (
        <>
    <Navbar/>
    <Itcompanys/>
    

        </>
    )
}
export default Chennai

export const Navbar = () => {
    return (
        <>
        </>
    )
}
export const Itcompanys = () => {
    return (
        <> <h1 className="chennai"> Chennai</h1>
        <hr />
            <h2 className="it">
                It companys in chennai
            </h2>
            <hr />
            <p className="company">Chennai is one of India’s biggest IT hubs, home to many leading technology companies and startups.
                 Major global IT firms like TCS, Infosys, Wipro, Cognizant, HCL, Accenture, and Capgemini have large campuses along the OMR IT corridor 
                 and in areas like Sholinganallur, Siruseri, and Ambattur. The city is also known for 
                 strong product-based companies such as Zoho, Kissflow, and Freshworks, which have helped Chennai grow as a major SaaS (Software as a Service) centre. With modern IT parks like TIDEL Park and DLF Cybercity, Chennai continues to attract skilled professionals and offers excellent opportunities in software development, cloud computing, data analytics, and digital transformation. This makes Chennai a preferred destination for both freshers and experienced IT professionals.</p>
           <div className="images">
            <div>
            <img src="public/zoho.jpg" alt="" />
            <h3>It company</h3>
            </div>
            <div>
            <img src="public/2.jpg" alt="" />
            <h3>Robotics</h3>
            </div>
           </div>
           <hr />
        </>
    )
}

