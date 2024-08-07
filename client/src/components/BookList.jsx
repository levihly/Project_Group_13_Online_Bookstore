import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';

function BookList({ books }) {

	return (
    <div className="book-list">
			<Grid container spacing={3}>
	  			{books.map((book) => (
	          <Grid item md={3}>
							<Link className="book-link" to={`/details/${book._id}`}>
		            <img
									className="book-cover-grid"
									src={book.image}
									alt={book.title}
								/>
		      			<p><i>{book.title}</i></p>
		            <p>by {book.author}</p>
		      			<p>{book.rating}</p>
							</Link>
	          </Grid>
	  			))}
	    </Grid>
    </div>
	);
}

export default BookList;
