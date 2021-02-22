import { connect } from "react-redux";

import { selectDirectorySections } from "../vendors/redux/directory/directory.selector";

import MenuItem from "./menu-item.component";

const Directory = ({ sections }) => {
	// console.log("sections", sections)
	return (
		<div className="directory-menu">
			{
				sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id}  {...otherSectionProps} />
				))
			}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		sections: selectDirectorySections(state)
	}
}

export default connect(mapStateToProps)(Directory)