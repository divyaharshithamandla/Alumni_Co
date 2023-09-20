// import React from "react";
// import { FaInstagramSquare } from "react-icons/fa";
// import { BsFacebook} from "react-icons/bs";
// // import { BsFacebook} from "react-icons/bs";

// import {
// Box,
// Container,
// Row,
// Column,
// FooterLink,
// Heading,
// } from "./footerstyles";

// const Footer = () => {
// return (
// 	<Box>
// 	<h1 style={{ color: "darkgray",
// 				textAlign: "center",
// 				marginTop: "-0px" }}>
// 		Communication&connection between alumni,management&students
// 	</h1>
// 	<Container>
// 		<Row>
// 		<Column>
// 			<Heading>About Us</Heading>
// 			<FooterLink href="#">Aim</FooterLink>
// 			<FooterLink href="#">Vision</FooterLink>
// 			<FooterLink href="#">Testimonials</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Services</Heading>
// 			<FooterLink href="#">Writing</FooterLink>
// 			<FooterLink href="#">Internships</FooterLink>
// 			<FooterLink href="#">Coding</FooterLink>
// 			<FooterLink href="#">Teaching</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Contact Us</Heading>
// 			<FooterLink href="#">Uttar Pradesh</FooterLink>
// 			<FooterLink href="#">Ahemdabad</FooterLink>
// 			<FooterLink href="#">Indore</FooterLink>
// 			<FooterLink href="#">Mumbai</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Social Media</Heading>
// 			<FooterLink href="#">
			
// 				<span style={{ marginLeft: "10px" }}>
// 				<BsFacebook/>
// 				</span>
			
// 			</FooterLink>
// 			<FooterLink href="#">
			
// 				<span style={{ marginLeft: "10px" }}>
// 				<FaInstagramSquare/>
// 				</span>
			
// 			</FooterLink>
// 			<FooterLink href="#">
			
// 				<span style={{ marginLeft: "10px" }}>
// 				Twitter
// 				</span>
			
// 			</FooterLink>
// 			<FooterLink href="#">
			
// 				<span style={{ marginLeft: "10px" }}>
// 				Youtube
// 				</span>
			
// 			</FooterLink>
// 		</Column>
// 		</Row>
// 	</Container>
// 	</Box>
// );
// };
// export default Footer;
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerstyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahmedabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <div>
              <FooterLink href="#">
                <BsFacebook />
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </FooterLink>
            </div>
            <div>
              <FooterLink href="#">
                <FaInstagramSquare />
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </FooterLink>
            </div>
            <div>
              <FooterLink href="#">Twitter</FooterLink>
            </div>
            <div>
              <FooterLink href="#">Youtube</FooterLink>
            </div>
          </Column>
        </Row>
      </Container>
      <h1
        style={{
          color: "darkgray",
          textAlign: "center",
          marginTop: "20px", // Adjust the top margin for spacing
        }}
      >
        Communication & connection between alumni, management & students
      </h1>
    </Box>
  );
};

export default Footer;

