import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwith from "./ColorModeSwith";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover"></Image>
      </Link>
      <SearchInput />
      <ColorModeSwith />
    </HStack>
  );
};

export default NavBar;
