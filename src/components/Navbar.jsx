import { Link } from "react-router-dom";


export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			
			<div className="col container-fluid m-1 align-items-center">
				<Link to="/" className="link-underline-light">
					<span className="navbar-brand d-flex justify-content-between">
						
						<h2 className="m-2">My contacts</h2>
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/new_contact">
						<button className="btn btn-success">Add new contact</button>
					</Link>
				</div>
			</div>
			
		</nav>
	);
};
 