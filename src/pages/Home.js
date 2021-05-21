import Header from "../components/Header";
import Avatar from "../components/Avatar";
import Button from "../components/Button";

export default function Home() {
  return (
    <section>
      <Header
        left={<Avatar src="https://i.pravatar.cc/300">Hi Fradde</Avatar>}
        right={
          <Button variant="transparent">
            <i className="bi bi-search"></i>
          </Button>
        }
      ></Header>
    </section>
  );
}
