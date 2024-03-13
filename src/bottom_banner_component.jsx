import "/node_modules/bootstrap/dist/css/bootstrap.css"
//This is the banner displayed in the bottom
function Bottombanner() {
    return (
        <div style={{ height: "120px", width: "100%", backgroundColor: "rgb(33,37,36)" }}>
            <div style={{ textAlign: "center", paddingTop: "50px" }}>
                <p style={{ color: "white" }}>Copyright © Your Website 2023</p>
            </div>
        </div>
    )
}
export default Bottombanner;