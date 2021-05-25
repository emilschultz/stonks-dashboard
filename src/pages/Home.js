import Header from "../components/Header";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Section from "../components/Section";
import Slider from "../components/Slider";
import RandomStock from "../components/RandomStock";

import { useContext } from "react";

import { AuthContext } from "../config/Auth";

export default function Home() {
  const { currentUser } = useContext(AuthContext);

  return (
    <main>
      <Header
        left={
          <Avatar src="https://i.pravatar.cc/300">
            Hi {currentUser.email}
          </Avatar>
        }
        right={
          <Button variant="transparent">
            <i className="bi bi-search"></i>
          </Button>
        }
      ></Header>
      <Section title="Today's trending stonk">
        <RandomStock />
      </Section>
      <Section title="Trending stonks">
        <Slider />
      </Section>
    </main>
  );
}
