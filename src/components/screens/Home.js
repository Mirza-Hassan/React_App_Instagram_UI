import React from 'react';
const Home = ()=>{
    return(        
        <div>
            Home
            <div className="home"></div>
            <div className="card home-card">
                <h2>ramesh</h2>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing post</p>
                    <input type="text" placeholder="add a comment"></input>
                </div>
            </div>
            <div className="card home-card">
                <h2>ramesh</h2>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing post</p>
                    <input type="text" placeholder="add a comment"></input>
                </div>
            </div>

        </div>
    )
}
export default Home;