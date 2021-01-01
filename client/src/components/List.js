import React from "react";


// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function List({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function ListItem({
  title,
  author,
}) {
  return (
    <li className="list-group-item">
      <div className="container">
        <div className="row">
          <div size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>By: {author}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
