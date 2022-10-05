import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";
import { Footer as FooterWrapper } from "./style";
import { FaAngleUp } from "react-icons/fa";
import lais_mascote from "../../public/static/img/mascote/lais_mascote.gif";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <Container>
        <Button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          aria-label="Voltar para o topo do site"
          type="circle"
        >
          <FaAngleUp />
        </Button>
        <Text
          type="body1"
          color="grey5"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={lais_mascote}
            style={{ borderRadius: "30px", width: "80px", marginRight: "10px" }}
          />{" "}
          Obrigada por acessar!
        </Text>
      </Container>
    </FooterWrapper>
  );
};
