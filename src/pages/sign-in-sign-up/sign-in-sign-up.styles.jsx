import styled from "styled-components";

export const SignInSignUpContainer = styled.div`
	width: 950px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		width: unset !important;
		align-items: center;
		> *:first-child {
			margin-bottom: 50px;
		}
	}
`;
