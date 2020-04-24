
import React from 'react'

class Meal extends React.Component {

  render () {
    return (
      <article className="meal">
        <div>
          <img src={this.props.mealData.image} alt=""></img>
        </div>
        <div className="divide">
          <div>
            <h1>{this.props.mealData.title}</h1>
            <li>{this.props.mealData.instructions}</li>
          </div>
          <ul className ="controlls">
            <li onClick={() => {
              this.props.handleView('editMeal',this.props.mealData);
            }}>Add Instructions</li>
            <li onClick={() => {
              this.props.handleDelete(this.props.mealData.id)
            }}>delete meal</li>
          </ul>
          </div>
      </article>
    )
  }
}

export default Meal
