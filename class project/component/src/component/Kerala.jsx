const Kerala = () => {
    return (
        <>
            <Festivals />
            <Tourism />
        </>
    )
}
export default Kerala

export const Festivals = () => {
    return (
        <>
            <div className="kerala">
                <h1 className="kera">Kerala</h1>
                <hr />
                <h2>Festivals</h2>
                <hr />
            </div>
            <div className="para">
                <p>Kerala is known for its rich culture and colorful festivals, which reflect the state’s traditions, religion, and harmony. The most famous festival is Onam, celebrated with flower decorations, traditional dances, boat races, and a grand feast called Onam Sadhya. Vishu marks the Malayalam New Year and is celebrated with Vishu Kani, fireworks, and special meals. Thrissur Pooram is another major festival, known for its decorated elephants, traditional music, and grand fireworks. Theyam festivals in North Kerala feature vibrant costumes and ritual performances. Festivals like Eid, Christmas, and Attukal Pongala are also celebrated with great enthusiasm, showing Kerala’s unity and cultural diversity. These festivals make
                    Kerala a vibrant and joyful place throughout the year.</p>
            </div>
            <div className="img1">
                <div >
                    <img src="public/festival.jpg" alt="" />
                    <h2>kathakali</h2>
                </div>
                <div>
                    <img src="public/f2.jpg" alt="" />
                    <h2>onam</h2>
                </div>
            </div>
        </>
    )
}
export const Tourism = () => {
    return (
        <> <hr />
            <div className="tour">
                <h2>Tourism</h2>
                <hr />
                <p>Kerala, often called “God’s Own Country,”
                    is one of India’s most popular tourist destinations,
                    known for its natural beauty, calm backwaters, and rich culture.
                    Tourists from around the world visit Kerala to enjoy its peaceful beaches
                    like Kovalam, scenic hill stations such as Munnar, and unique backwater experiences in
                    Alappuzha and Kumarakom. The state is also famous for wildlife sanctuaries, Ayurvedic wellness therapies, houseboat rides, and traditional
                    art forms like Kathakali and Theyyam. With its clean environment, friendly people, and delicious cuisine,
                    Kerala offers a perfect blend of relaxation, adventure, and cultural experiences, making it a must-visit place for travelers.</p>
                <center>
                    <li>Munnar</li>
                    <li>Alappuzha</li>
                    <li>Kumarakom</li>
                </center>
            </div>
            <div className="varkala">
                <div className="l">
                    <img src="public/f5.jpg" alt="" />
                    <h2>varkala</h2>
                </div>
                <div className="l1">
                    <img src="public/t2.jpg" alt="" />
                    <h2>Munnar</h2>
                </div>
            </div>
            <div className="munnar">
                <div className="l">
                    <img src="public/t3.jpg" alt="" />
                    <h2>Alappuzha</h2>
                </div>
                <div className="l1">
                    <img src="public/t4.jpg" alt="" />
                    <h2>Wanayanad</h2>
                </div>
            </div>
            <hr />
      
      
        </>

    )
}