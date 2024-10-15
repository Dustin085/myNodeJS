import { useState, useEffect } from "react";
import Card from "./Card";

function Home() {

    useEffect(() => {
        console.log("effect ran");
    }, []);

    const [cardData, setCardData] = useState({
        name: "Dustin",
        age: 30
    });

    const colorChangeBtnClickHandle = (ev) => {
        // 取用原色與要改變成的顏色，從css root裡面取用
        let originColor = getComputedStyle(document.body).getPropertyValue("--primary1");
        let altColor = getComputedStyle(document.body).getPropertyValue("--alt1");
        // 偵測現在的顏色
        let currentBgColor = getComputedStyle(ev.target).backgroundColor;
        // 在兩個顏色之間做切換
        currentBgColor === originColor ? setBgColor(altColor) : setBgColor(originColor);

        // 改變自身的背景顏色
        function setBgColor(targetColor) {
            ev.target.style.backgroundColor = targetColor;
        };
    };

    const cardInfoChangeHandle = () => {

        let rachelInfo = {
            name: "Rachel",
            age: 25
        };
        let dustinInfo = {
            name: "Dustin",
            age: 30
        };

        setCardData((prevState) => {
            if (prevState.name === "Dustin") {
                return rachelInfo;
            } else if (prevState.name === "Rachel") {
                return dustinInfo;
            }
        });
    };

    const [cardList, setCardList] = useState([
        { id: 1, title: "Card One", content: "This is Card One." },
        { id: 2, title: "Card Two", content: "This is Card Two." },
        { id: 3, title: "Card Three", content: "This is Card Three." },
    ]);

    const deleteCardHandler = (id) => {
        setCardList((prevState) => {
            return prevState.filter(card => card.id !== id);
        })
    };

    return (
        <div className="home-wrap">
            <h2 className="page-title">HomePage</h2>
            <button type="button" className="pri-btn color-change-btn" onClick={colorChangeBtnClickHandle}>Click Me!!</button>
            <div className="card">
                <h3 className="title">Hello my name is <span className="strong">{cardData.name}</span>.</h3>
                <p className="para">I'm {cardData.age} years old.</p>
                <button type="button" className="pri-btn card-info-change-btn" onClick={cardInfoChangeHandle}>Change Card Info</button>
            </div>
            <div className="card-list">
                {
                    cardList.map((card) => {
                        return <Card data={card} deleteCardHandler={deleteCardHandler} key={card.id} />
                    })
                }
            </div>
        </div>
    );
}

export default Home;