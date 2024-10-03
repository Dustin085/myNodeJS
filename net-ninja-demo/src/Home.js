function Home() {

    const colorChangeBtnClickHandle = (ev) => {
        console.dir(ev.target.backgroundColor);
    };

    return (
        <div className="home-wrap">
            <h2 className="page-title">HomePage</h2>
            <button type="button" className="color-change-btn" onClick={colorChangeBtnClickHandle}>Click Me!!</button>
        </div>
    );
}

export default Home;