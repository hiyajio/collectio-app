import React, { Component } from "react";

// Needed for styled-components styling
import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText,
} from "./error-boundary.styles";

// HOC: Give it component to return same component w "attachments"/"enhancements"
class ErrorBoundary extends Component {
	constructor() {
		super();

		// First set it to false to initialize
		this.state = {
			hasErrored: false,
		};
	}

	// If triggered, tells all components ErrorBoundary is wrapping that error just occurred
	static getDerivedStateFromError(error) {
		// Process the error
		return { hasErrored: true };
	}

	// Required function for Error Boundary handling (info can be component that threw error)
	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					{/* Image from 404 Illustrations (https://www.kapwing.com/404-illustrations?ref=producthunt) */}
					<ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
					{/* Simple component to show user in a visually nice manner that async page loading went wrong */}
					<ErrorImageText>
						OHH NO! This page is lost in spaaace!!
					</ErrorImageText>
				</ErrorImageOverlay>
			);
		}

		// If no error, do not do anything with wrapped components (simply return them as is negating HOC)
		return this.props.children;
	}
}

export default ErrorBoundary;
