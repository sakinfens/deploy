import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <div>

      	<div className="instructions">
      		<div>
      			<h2>Easy Meals<br /> With Forgetable Instructions</h2>
      			<p>Instructions <br /> Welcome to one of many games I have created. The purpose of the brain games is to get people thinking in ways they don't normally think. In this particular game you will have foods that are super simple but the objective is to give the most elaborate instructions on how to make this food. You can either add on to a meal or you can start your own. Let's get started!</p>
      		</div>
      		<div>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-cheese-horizontal-jpg-1522266016.jpg"></img>
      		</div>
      	</div>
        <nav>
          <h1>Steve Akinfenwa <br />Brain Game</h1>
          <section>
            <h1>NAVIGATE</h1>
            <div>
              <p onClick={() => {
                this.props.handleView('home')
              }}>home</p>
              <p onClick={() => {
                this.props.handleView('addMeal')
              }}>add meal</p>
            </div>
          </section>
        </nav>

      </div>
    )
  }
}

export default Header
